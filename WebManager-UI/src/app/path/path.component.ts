import { Component } from '@angular/core';
import { Filedir } from 'src/services/Filedir';
import { FiledirList } from 'src/services/FiledirList';
import { HttpService } from 'src/services/HttpService';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'path-component',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css'],
  providers: [HttpService]
})

export class PathComponent {
  activefiledirlist : any;
  constructor(private filedirlist: FiledirList, private httpservice : HttpService){
    this.activefiledirlist = filedirlist;
  }

  public Follow(form: any)
  {
    ElementComponent.iCount = 0;
    if (form.value == '') return;
    this.activefiledirlist.activePath = form.value;
    form.value='';
    this.httpservice.getData("open", this.activefiledirlist.activePath, "").subscribe((data:Array<Filedir>) => this.activefiledirlist.objectsArray = data);
  }

  public Back()
  {
    ElementComponent.iCount = 0;
    // Убираем всё до символа обратной косой черты
    const regex = new RegExp('\\\\(?!.*\\\\)(?<=\\\\(?!.*\\\\)).*$');
    this.activefiledirlist.activePath = this.activefiledirlist.activePath.replace(regex, "");
    // Проверка признака каталога
    if (this.activefiledirlist.activePath.slice(-1) == ":")
    {
      this.activefiledirlist.activePath = this.activefiledirlist.activePath + "\\";
    }
    // Отправление команды open активного объекта
    this.httpservice.getData("open", this.activefiledirlist.activePath, "").subscribe((data:Array<Filedir>) => this.activefiledirlist.objectsArray = data);
  }
}
