import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Filedir } from 'src/services/Filedir';
import { FiledirList } from 'src/services/FiledirList';
import { HttpService } from 'src/services/HttpService';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'creator-component',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
  providers: [HttpService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreatorComponent {
  activefiledirlist : any;
  constructor(private filedirlist: FiledirList, private httpservice : HttpService, private router: Router, private ref: ChangeDetectorRef){
    this.activefiledirlist = filedirlist;
  }

  public CreateFolder(inputform: any)
  {
    ElementComponent.iCount = 0;
    this.httpservice.getData("createfolder", this.activefiledirlist.activePath + "\\" + inputform.value, "").subscribe();
  }
  public CreateFile(fileform: any)
  {
    ElementComponent.iCount = 0;
    this.httpservice.getData("createfile", this.activefiledirlist.activePath + "\\" + fileform.value + ".txt", "").subscribe();
  }
}
