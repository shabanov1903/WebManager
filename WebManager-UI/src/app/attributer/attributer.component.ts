import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Filedir } from 'src/services/Filedir';
import { FiledirList } from 'src/services/FiledirList';
import { HttpService } from 'src/services/HttpService';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'attributer-component',
  templateUrl: './attributer.component.html',
  styleUrls: ['./attributer.component.css'],
  providers: [HttpService]
})

export class AttributerComponent {
  activefiledirlist: any;
  fictivefiledirlist: FiledirList = new FiledirList();
  private startpath: string;
  private name: any;
  private querySubscription: Subscription;
  constructor(private filedirlist: FiledirList, private httpservice : HttpService, private route: ActivatedRoute){
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.name = queryParam['name'];
    })
    this.activefiledirlist = filedirlist;
    this.startpath = this.activefiledirlist.activePath;
  }

  SetFunction(command: string, path1: string, path2: string, attribute: number){
    ElementComponent.iCount = 0;
    this.httpservice.setAttribute(command, path1, path2, attribute).subscribe((data:Array<Filedir>) => this.fictivefiledirlist.objectsArray = data);
  }

  public SetAttributeFile(attribute: number)
  {
    this.SetFunction("attribute", this.activefiledirlist.activePath + "\\" + this.name, "", attribute);
    this.activefiledirlist.activePath = this.startpath;
  }
}
