﻿using Microsoft.AspNetCore.Mvc;
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
    public class CopyController : ControllerBase
    {
        private readonly ICommandService _iComandService;
        public CopyController(ICommandService iComandService)
        {
            _iComandService = iComandService;
        }

        [HttpPost]
        public IActionResult GetCommand([FromBody] CommandDTO command)
        {
            var result = _iComandService.Copy(command.Path1, command.Path2);
            return Ok(result);
        }
    }
}
