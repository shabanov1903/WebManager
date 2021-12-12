using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebManager_API.Services.ServiceDTO;
using System.IO;
using System.Text.RegularExpressions;
using Microsoft.VisualBasic;
using NLog;

namespace WebManager_API.Services
{
    public class CommandService : ICommandService
    {
        private ILogger _logger;
        public CommandService(ILogger logger)
        {
            _logger = logger;
        }
        public List<FiledirDTO> Copy(string path1, string path2)
        {
            string pattern = "\\\\(?!.*\\\\)(?<=\\\\(?!.*\\\\)).*$";
            if (File.Exists(path1))
            {
                // Обработка файла
                try
                {
                    StringBuilder fullPath = new StringBuilder();
                    var fileInfo = new FileInfo(path1);
                    fullPath.Append(path2);
                    fullPath.Append("/");
                    fullPath.Append(fileInfo.Name);
                    File.Copy(path1, fullPath.ToString());
                    return Open(path2);
                }
                catch (Exception e)
                {
                    _logger.Error(e.Message);
                }
            }
            else if (Directory.Exists(path1))
            {
                // Обработка директории
                try
                {
                    path2 = path2 + Regex.Match(path1, pattern);
                    DirectoryCopy(path1, path2);
                    return Open(Regex.Replace(path2, pattern, String.Empty));
                }
                catch (Exception e)
                {
                    _logger.Error(e.Message);
                }
            }
            return new List<FiledirDTO>();
        }

        public List<FiledirDTO> CreateFile(string path1)
        {
            string pattern = "\\\\(?!.*\\\\)(?<=\\\\(?!.*\\\\)).*$";
            var file = File.Create(path1);
            file.Close();
            return Open(Regex.Replace(path1, pattern, String.Empty));
        }

        public List<FiledirDTO> CreateFolder(string path1)
        {
            string pattern = "\\\\(?!.*\\\\)(?<=\\\\(?!.*\\\\)).*$";
            Directory.CreateDirectory(path1);
            return Open(Regex.Replace(path1, pattern, String.Empty));
        }

        public List<FiledirDTO> Delete(string path1)
        {
            string pattern = "\\\\(?!.*\\\\)(?<=\\\\(?!.*\\\\)).*$";
            if (File.Exists(path1))
            {
                // Обработка файла
                try
                {
                    File.Delete(path1);
                }
                catch (Exception e)
                {
                    _logger.Error(e.Message);
                }
            }
            else if (Directory.Exists(path1))
            {
                // Обработка директории
                try
                {
                    Directory.Delete(path1, true);
                }
                catch (Exception e)
                {
                    _logger.Error(e.Message);
                }
            }
            return Open(Regex.Replace(path1, pattern, String.Empty));
        }

        public List<FiledirDTO> Move(string path1, string path2)
        {
            string pattern = "\\\\(?!.*\\\\)(?<=\\\\(?!.*\\\\)).*$";
            if (File.Exists(path1))
            {
                // Обработка файла
                try
                {
                    StringBuilder fullPath = new StringBuilder();
                    var fileInfo = new FileInfo(path1);
                    fullPath.Append(path2);
                    fullPath.Append("/");
                    fullPath.Append(fileInfo.Name);
                    File.Move(path1, fullPath.ToString());
                    return Open(path2);
                }
                catch (Exception e)
                {
                    _logger.Error(e.Message);
                }
            }
            else if (Directory.Exists(path1))
            {
                // Обработка директории
                try
                {
                    path2 = path2 + Regex.Match(path1, pattern);
                    DirectoryMove(path1, path2);
                    return Open(Regex.Replace(path2, pattern, String.Empty));
                }
                catch (Exception e)
                {
                    _logger.Error(e.Message);
                }
            }
            return new List<FiledirDTO>();
        }

        public List<FiledirDTO> Open(string path1)
        {
            // Объект корневой директории
            var root = new DirectoryInfo(path1);
            // Массив выходных объектов
            List<FiledirDTO> filedirmass = new List<FiledirDTO>();
            // Массив дочерних директорий
            DirectoryInfo[] subDirs = null;
            // Массив дочерних файлов
            FileInfo[] files = null;

            // Получение всех файлов и дочерних директорий
            try
            {
                subDirs = root.GetDirectories();
                files = root.GetFiles();
                foreach (DirectoryInfo subDir in subDirs)
                {
                    filedirmass.Add(new FiledirDTO
                    {
                        Type = "folder",
                        Name = subDir.Name.ToString(),
                        Datecreate = subDir.CreationTime.ToString(),
                        Datechange = subDir.LastWriteTime.ToString(),
                        Size = "-"
                    });
                }
                foreach (FileInfo file in files)
                {
                    filedirmass.Add(new FiledirDTO
                    {
                        Type = "file",
                        Name = file.Name.ToString(),
                        Datecreate = file.CreationTime.ToString(),
                        Datechange = file.LastWriteTime.ToString(),
                        Size = (file.Length / 1024).ToString()
                    });
                }
            }
            catch (Exception e)
            {
                _logger.Error(e.Message);
            }
            return filedirmass;
        }

        public List<FiledirDTO> Rename(string path1, string path2)
        {
            string pattern = "\\\\(?!.*\\\\)(?<=\\\\(?!.*\\\\)).*$";
            if (File.Exists(path1))
            {
                // Обработка файла
                try
                {
                    File.Move(path1, path2);
                }
                catch (Exception e)
                {
                    _logger.Error(e.Message);
                }
            }
            else if (Directory.Exists(path1))
            {
                // Обработка директории
                try
                {
                    Directory.Move(path1, path2);
                }
                catch (Exception e)
                {
                    _logger.Error(e.Message);
                }
            }
            return Open(Regex.Replace(path2, pattern, String.Empty));
        }

        public DataDTO Read(string path1)
        {
            try
            {
                var dataDTO = new DataDTO();
                dataDTO.Text = File.ReadAllLines(path1);
                dataDTO.Numbwords = File.ReadAllText(path1).Split(" ").Length.ToString();
                dataDTO.Numblines = dataDTO.Text.Length.ToString();
                dataDTO.Numbcharswithscapes = File.ReadAllText(path1).Length.ToString();
                dataDTO.Numbcharswithoutscapes = (File.ReadAllText(path1).Length - File.ReadAllText(path1).Split(" ").Length).ToString();
                return dataDTO;
            }
            catch (Exception e)
            {
                _logger.Error(e.Message);
            }
            return new DataDTO();
        }

        public FindDTO Find(string path1, string path2)
        {
            var findDTO = new FindDTO();
            findDTO.Files = new List<string>();
            DirectoryFind(path1, path2, findDTO.Files);
            return findDTO;
        }

        public List<FiledirDTO> Attribute(string path1, int attribute)
        {
            string pattern = "\\\\(?!.*\\\\)(?<=\\\\(?!.*\\\\)).*$";
            if (File.Exists(path1))
            {
                // Удаление старых аттрибутов
                FileAttributes attributes = File.GetAttributes(path1);
                attributes = attributes & ~(FileAttributes.Hidden | FileAttributes.System | FileAttributes.ReadOnly | FileAttributes.Normal);
                File.SetAttributes(path1, attributes);
                // Обработка файла
                try
                {
                    switch (attribute)
                    {
                        case 1: File.SetAttributes(path1, FileAttributes.Hidden); break;
                        case 2: File.SetAttributes(path1, FileAttributes.System); break;
                        case 3: File.SetAttributes(path1, FileAttributes.ReadOnly); break;
                        case 4: File.SetAttributes(path1, FileAttributes.Normal); break;
                        default: return Open(Regex.Replace(path1, pattern, String.Empty));
                    }
                }
                catch (Exception e)
                {
                    _logger.Error(e.Message);
                }
            }
            return Open(Regex.Replace(path1, pattern, String.Empty));
        }

        // Функция копирования каталога
        private void DirectoryCopy(string sourceDirName, string destDirName)
        {
            // Получение списка дочерних директорий
            DirectoryInfo dir = new DirectoryInfo(sourceDirName);
            DirectoryInfo[] dirs = dir.GetDirectories();

            // Создание новой директории
            Directory.CreateDirectory(destDirName);

            // Получение списка файлов
            FileInfo[] files = dir.GetFiles();
            foreach (FileInfo file in files)
            {
                string tempPath = Path.Combine(destDirName, file.Name);
                file.CopyTo(tempPath, false);
            }

            // Рекурсия для копирования всех файлов
            foreach (DirectoryInfo subdir in dirs)
            {
                string tempPath = Path.Combine(destDirName, subdir.Name);
                DirectoryCopy(subdir.FullName, tempPath);
            }
        }

        // Функция перемещения каталога
        private void DirectoryMove(string sourceDirName, string destDirName)
        {
            // Получение списка дочерних директорий
            DirectoryInfo dir = new DirectoryInfo(sourceDirName);
            DirectoryInfo[] dirs = dir.GetDirectories();

            // Создание новой директории
            Directory.CreateDirectory(destDirName);

            // Получение списка файлов
            FileInfo[] files = dir.GetFiles();
            foreach (FileInfo file in files)
            {
                string tempPath = Path.Combine(destDirName, file.Name);
                file.MoveTo(tempPath, false);
            }

            // Рекурсия для копирования всех файлов
            foreach (DirectoryInfo subdir in dirs)
            {
                string tempPath = Path.Combine(destDirName, subdir.Name);
                DirectoryMove(subdir.FullName, tempPath);
            }
            Directory.Delete(sourceDirName);
        }

        // Функция поиска файлов
        private void DirectoryFind(string sourceDirName, string name, List<string> list)
        {
            string pattern = "(?<=\\\\(?!.*\\\\))[^.]*";
            DirectoryInfo dir = null;
            DirectoryInfo[] dirs = null;
            string[] files = null;
            try
            {
                // Получение списка дочерних директорий
                dir = new DirectoryInfo(sourceDirName);
                dirs = dir.GetDirectories();
                files = Directory.GetFiles(sourceDirName);
                foreach (string file in files)
                {
                    if (Regex.Match(Regex.Match(file, pattern).ToString(), name) != Match.Empty)
                    {
                        list.Add(file);
                    }
                }
                // Рекурсия
                foreach (DirectoryInfo subdir in dirs)
                {
                    DirectoryFind(subdir.FullName, name, list);
                }
            }
            catch (Exception e)
            {
                _logger.Error(e.Message);
            }
        }
    }
}
