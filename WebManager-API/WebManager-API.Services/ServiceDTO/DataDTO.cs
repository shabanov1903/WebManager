using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebManager_API.Services.ServiceDTO
{
    public class DataDTO
    {
        public string[] Text { get; set; }
        public string Numbwords { get; set; }
        public string Numblines { get; set; }
        public string Numbcharswithscapes { get; set; }
        public string Numbcharswithoutscapes { get; set; }
    }
}
