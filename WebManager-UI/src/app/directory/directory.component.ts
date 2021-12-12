import { Component } from '@angular/core';
import { Filedir } from 'src/services/Filedir';
import { FiledirList } from 'src/services/FiledirList';
import { HttpService } from 'src/services/HttpService';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'directory-component',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [HttpService]
})

export class DirectoryComponent {
  activefiledirlist : any;
  constructor(private filedirlist: FiledirList, private httpservice : HttpService)
  {
    this.activefiledirlist = filedirlist;
    setTimeout(()=>{
      this.GetFunction("open", this.activefiledirlist.activePath, "");
    }, 500);
  }

  GetFunction(command: string, path1: string, path2: string){
    ElementComponent.iCount = 0;
    this.httpservice.getData(command, path1, path2).subscribe((data:Array<Filedir>) => this.activefiledirlist.objectsArray = data);
  }

  public Paste()
  {
    // Отправление команды paste активного объекта
    this.GetFunction(this.activefiledirlist.activeCommand, this.activefiledirlist.bufferPath, this.activefiledirlist.activePath);
  }

  public Find()
  {
    this.activefiledirlist.content = false;
    // Вывести панель поиска на экран
    this.activefiledirlist.find = true;
  }
}
