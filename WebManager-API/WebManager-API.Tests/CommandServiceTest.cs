using System;
using Xunit;
using Moq;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using NLog;
using WebManager_API.Services;
using WebManager_API.Services.ServiceDTO;

namespace WebManager_API.Tests
{
    public class CommandServiceTest
    {
        [Fact]
        public void Open()
        {
            var mockLogger = new Mock<ILogger>();
            var commandService = new CommandService(mockLogger.Object);

            Assert.IsAssignableFrom<List<FiledirDTO>>(commandService.Open("path1"));
        }
        [Fact]
        public void Read()
        {
            var mockLogger = new Mock<ILogger>();
            var commandService = new CommandService(mockLogger.Object);

            Assert.IsAssignableFrom<DataDTO>(commandService.Read("path1"));
        }
        [Fact]
        public void Delete()
        {
            var mockLogger = new Mock<ILogger>();
            var commandService = new CommandService(mockLogger.Object);

            Assert.IsAssignableFrom<List<FiledirDTO>>(commandService.Delete("path1"));
        }
        [Fact]
        public void Move()
        {
            var mockLogger = new Mock<ILogger>();
            var commandService = new CommandService(mockLogger.Object);

            Assert.IsAssignableFrom<List<FiledirDTO>>(commandService.Move("path1", "path2"));
        }
        [Fact]
        public void Copy()
        {
            var mockLogger = new Mock<ILogger>();
            var commandService = new CommandService(mockLogger.Object);

            Assert.IsAssignableFrom<List<FiledirDTO>>(commandService.Copy("path1", "path2"));
        }
        [Fact]
        public void CreateFolder()
        {
            var mockLogger = new Mock<ILogger>();
            var commandService = new CommandService(mockLogger.Object);

            Assert.IsAssignableFrom<List<FiledirDTO>>(commandService.CreateFolder("path1"));
        }
        [Fact]
        public void CreateFile()
        {
            var mockLogger = new Mock<ILogger>();
            var commandService = new CommandService(mockLogger.Object);

            Assert.IsAssignableFrom<List<FiledirDTO>>(commandService.CreateFile("path1"));
        }
        [Fact]
        public void Rename()
        {
            var mockLogger = new Mock<ILogger>();
            var commandService = new CommandService(mockLogger.Object);

            Assert.IsAssignableFrom<List<FiledirDTO>>(commandService.Rename("path1", "path2"));
        }
        [Fact]
        public void Find()
        {
            var mockLogger = new Mock<ILogger>();
            var commandService = new CommandService(mockLogger.Object);

            Assert.IsAssignableFrom<FindDTO>(commandService.Find("path1", "path2"));
        }
        [Fact]
        public void Attribute()
        {
            var mockLogger = new Mock<ILogger>();
            var commandService = new CommandService(mockLogger.Object);

            Assert.IsAssignableFrom<List<FiledirDTO>>(commandService.Attribute("path1", 0));
        }
    }
}
