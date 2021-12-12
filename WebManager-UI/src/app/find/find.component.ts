import { Component } from '@angular/core';
import { Filedir } from 'src/services/Filedir';
import { FiledirList } from 'src/services/FiledirList';
import { FindFiles } from 'src/services/FindFiles';
import { HttpService } from 'src/services/HttpService';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'find-component',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
  providers: [HttpService]
})

export class FindComponent {
  activefiledirlist : any;
  files: FindFiles = new FindFiles();
  constructor(private filedirlist: FiledirList, private httpservice: HttpService)
  {
    this.activefiledirlist = filedirlist;
  }

  public Find(form: any)
  {
    this.activefiledirlist.findresults = true;
    ElementComponent.iCount = 0;
    this.httpservice.getFiles("find", this.activefiledirlist.activePath, form.value).subscribe((data:FindFiles) => this.files.files = data.files);
  }
}
