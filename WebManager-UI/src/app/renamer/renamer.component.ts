import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FiledirList } from 'src/services/FiledirList';
import { HttpService } from 'src/services/HttpService';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'renamer-component',
  templateUrl: './renamer.component.html',
  styleUrls: ['./renamer.component.css'],
  providers: [HttpService]
})

export class RenamerComponent {
  activefiledirlist : any;
  private type: any;
  private name: any;
  private startpath: string;
  private querySubscription: Subscription;
  constructor(private filedirlist: FiledirList, private httpservice : HttpService, private route: ActivatedRoute){
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.type = queryParam['type'];
        this.name = queryParam['name'];
    })
    this.activefiledirlist = filedirlist;
    this.startpath = this.activefiledirlist.activePath;
  }

  public RenameFile(fileform: any)
  {
    const regex = new RegExp('\\.(?!.*\\.)(?<=\\.(?!.*\\.)).*$');
    ElementComponent.iCount = 0;
    if (this.type == "file")
    {
      this.httpservice.getData("rename", this.activefiledirlist.activePath + "\\" + this.name, this.activefiledirlist.activePath + "\\" + fileform.value + this.name.match(regex)).subscribe();
    }
    if (this.type == "folder")
    {
      this.httpservice.getData("rename", this.activefiledirlist.activePath + "\\" + this.name, this.activefiledirlist.activePath + "\\" + fileform.value).subscribe();
    }
    this.activefiledirlist.activePath = this.startpath;
  }
}
