using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebManager_API.Services.ServiceDTO;

namespace WebManager_API.Services
{
    public interface ICommandService
    {
        public List<FiledirDTO> Open(string path1);
        public DataDTO Read(string path1);
        public List<FiledirDTO> Delete(string path1);
        public List<FiledirDTO> Move(string path1, string path2);
        public List<FiledirDTO> Copy(string path1, string path2);
        public List<FiledirDTO> CreateFolder(string path1);
        public List<FiledirDTO> CreateFile(string path1);
        public List<FiledirDTO> Rename(string path1, string path2);
        public FindDTO Find(string path1, string path2);
        public List<FiledirDTO> Attribute(string path1, int attribute);
    }
}
