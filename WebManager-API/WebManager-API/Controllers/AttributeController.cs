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
    public class AttributeController : ControllerBase
    {
        private readonly ICommandService _iComandService;
        public AttributeController(ICommandService iComandService)
        {
            _iComandService = iComandService;
        }

        [HttpPost]
        public IActionResult GetCommand([FromBody] CommandDTO command, [FromQuery] int attribute)
        {
            var result = _iComandService.Attribute(command.Path1, attribute);
            return Ok(result);
        }
    }
}
