using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebManager_API.DTO;
using WebManager_API.Services;
using WebManager_API.Filters;

namespace WebManager_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OpenController : ControllerBase
    {
        private readonly ICommandService _iComandService;
        public OpenController(ICommandService iComandService)
        {
            _iComandService = iComandService;
        }

        [HttpPost]
        public IActionResult GetCommand([FromBody] CommandDTO command)
        {
            var result = _iComandService.Open(command.Path1);
            return Ok(result);
        }
    }
}
