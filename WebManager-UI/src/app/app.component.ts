import { Component, OnInit } from '@angular/core';
import { FiledirList } from 'src/services/FiledirList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{
  constructor(private filedirlist: FiledirList){ }

  ngOnInit(): void {
    this.filedirlist.activePath = "C:\\";
  }
}
