import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataString } from 'src/services/DataString';
import { Filedir } from 'src/services/Filedir';
import { FiledirList } from 'src/services/FiledirList';
import { HttpService } from 'src/services/HttpService';

@Component({
  selector: 'element-component',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
  providers: [HttpService]
})

export class ElementComponent {
  activefiledirlist : any;
  // Переменные для хранения ссылок на изображения
  readonly img_link_folder : string = "https://cdn-icons-png.flaticon.com/512/716/716784.png";
  readonly img_link_file : string = "https://cdn-icons-png.flaticon.com/512/2965/2965335.png";
  img_link : string = "";

  // Переменная для загрузки необходимого элемента
  static iCount : number = 0;

  readeractivator : boolean = false;

  component_type : string = "";
  component_name : string = "";
  component_datecreate : string = "";
  component_datechange : string = "";
  component_size : string = "";

  constructor(private filedirlist: FiledirList, private httpservice : HttpService, private router: Router){
    this.activefiledirlist = filedirlist;
    if (filedirlist.objectsArray[ElementComponent.iCount].type == "file")
    {
      this.img_link = this.img_link_file;
      this.readeractivator = true;
    }
    if (filedirlist.objectsArray[ElementComponent.iCount].type == "folder")
    {
      this.img_link = this.img_link_folder;
    }
    this.component_type = filedirlist.objectsArray[ElementComponent.iCount].type;
    this.component_name = filedirlist.objectsArray[ElementComponent.iCount].name;
    this.component_datecreate = filedirlist.objectsArray[ElementComponent.iCount].datecreate;
    this.component_datechange = filedirlist.objectsArray[ElementComponent.iCount].datechange;
    this.component_size = filedirlist.objectsArray[ElementComponent.iCount].size;
    ElementComponent.iCount++;
  }

  GetFunction(command: string, path1: string, path2: string){
    ElementComponent.iCount = 0;
    this.httpservice.getData(command, path1, path2).subscribe((data:Array<Filedir>) => this.activefiledirlist.objectsArray = data);
  }
  GetTextFunction(command: string, path1: string, path2: string){
    ElementComponent.iCount = 0;
    this.httpservice.getText(command, path1, path2).subscribe((data:DataString) => this.activefiledirlist.activeContent = data);
  }

  public Open()
  {
    // Текущий путь изменяется на следующий в иерархии
    if (this.activefiledirlist.activePath.slice(-1) == "\\")
    {
      this.activefiledirlist.activePath += this.component_name;
    }
    else
    {
      this.activefiledirlist.activePath += "\\" + this.component_name;
    }

    // Отправление команды open активного объекта
    this.GetFunction("open", this.activefiledirlist.activePath, "");
  }
  public Delete()
  {
    // Отправление команды del активного объекта
    this.GetFunction("delete", this.activefiledirlist.activePath + "\\" + this.component_name, "");
  }
  public Move()
  {
    // Заносим в буфер активный путь
    this.activefiledirlist.bufferPath = this.activefiledirlist.activePath + "\\" + this.component_name;
    // Активизируем команду перемещения
    this.activefiledirlist.activeCommand = "move";
    alert("Объект " + this.activefiledirlist.activePath + " будет перемещён. Перейдите в необходимую директорию и нажмите \"Вставить\"");
  }
  public Copy()
  {
    // Заносим в буфер активный путь
    this.activefiledirlist.bufferPath = this.activefiledirlist.activePath + "\\" + this.component_name;
    // Активизируем команду копирования
    this.activefiledirlist.activeCommand = "copy";
    alert("Объект " + this.activefiledirlist.activePath + " будет скопирован. Перейдите в необходимую директорию и нажмите \"Вставить\"");
  }
  public Read()
  {
    // Запоминаем имя для вывода контента
    this.activefiledirlist.activeFile = this.component_name;
    // Отправление команды read активного объекта
    this.GetTextFunction("read", this.activefiledirlist.activePath + "\\" + this.component_name, "");
  }
  public Rename()
  {
    // Определяем путь для переименования
    this.activefiledirlist.activePath;
    this.router.navigate(['/rename'], { queryParams: {'type': this.component_type,
                                                      'name': this.component_name}});
  }
  public Attribute()
  {
    this.router.navigate(['/attribute'], { queryParams: {'name': this.component_name}});
  }
}
