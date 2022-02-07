import { Component } from '@angular/core';
import { FiledirList } from 'src/services/FiledirList';

@Component({
  selector: 'content-component',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {
  activefiledirlist : any;
  constructor(private filedirlist: FiledirList)
  {
    this.activefiledirlist = filedirlist;
  }
}
