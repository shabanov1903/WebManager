using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebManager_API.DTO
{
    public class FiledirDTO
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public string DateCreate { get; set; }
        public string DateChange { get; set; }
        public string Size { get; set; }
    }
}
