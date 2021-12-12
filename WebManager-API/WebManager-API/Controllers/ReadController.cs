using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebManager_API.DTO;
using WebManager_API.Services;

namespace WebManager_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReadController : ControllerBase
    {
        private readonly ICommandService _iComandService;
        public ReadController(ICommandService iComandService)
        {
            _iComandService = iComandService;
        }

        [HttpPost]
        public IActionResult GetCommand([FromBody] CommandDTO command)
        {
            var result = _iComandService.Read(command.Path1);
            return Ok(result);
        }
    }
}
