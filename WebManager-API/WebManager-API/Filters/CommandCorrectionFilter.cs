using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebManager_API.DTO;

namespace WebManager_API.Filters
{
    public class CommandCorrectionFilter : Attribute, IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        { }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            var body = context.ActionArguments["command"] as CommandDTO;
            StringBuilder path1 = new();
            char last1 = '0';
            foreach (char symbol in body.Path1)
            {
                if (last1 == '\\' && symbol == '\\') continue;
                else
                {
                    last1 = symbol;
                    path1.Append(symbol);
                }
            }
            body.Path1 = path1.ToString();
            
            StringBuilder path2 = new();
            char last2 = '0';
            foreach (char symbol in body.Path2)
            {
                if (last2 == '\\' && symbol == '\\') continue;
                else
                {
                    last2 = symbol;
                    path2.Append(symbol);
                }
            }
            body.Path2 = path2.ToString();
        }
    }
}
