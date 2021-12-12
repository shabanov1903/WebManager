import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Filedir } from './Filedir';
import { DataString } from './DataString';
import { FiledirList } from './FiledirList';
import { FindFiles } from './FindFiles';

@Injectable()
export class HttpService{
    
    resourceUrl = "http://localhost:5000/";
    constructor(private http: HttpClient, private list: FiledirList){ }

    getData(command: string, path1: string, path2: string){
        this.list.content = false;
        this.list.find = false;
        this.list.findresults = false;
        return this.http
                    .post<Filedir[]>(
                        this.resourceUrl + command + "/",
                        {
                            Command: command,
                            Path1: path1,
                            Path2:path2
                        }
                    )
    }

    getText(command: string, path1: string, path2: string){
        this.list.content = true;
        this.list.find = false;
        this.list.findresults = false;
        return this.http
                    .post<DataString>(
                        this.resourceUrl + command + "/",
                        {
                            Command: command,
                            Path1: path1,
                            Path2:path2
                        }
                    )
    }

    getFiles(command: string, path1: string, path2: string){
        this.list.content = false;
        return this.http
                    .post<FindFiles>(
                        this.resourceUrl + command + "/",
                        {
                            Command: command,
                            Path1: path1,
                            Path2:path2
                        }
                    )
    }

    setAttribute(command: string, path1: string, path2: string, attribute: number){
        this.list.content = false;
        this.list.find = false;
        this.list.findresults = false;
        return this.http
                    .post<Filedir[]>(
                        this.resourceUrl + command + "/",
                        {
                            Command: command,
                            Path1: path1,
                            Path2:path2
                        },
                        {
                            params: new HttpParams().set('attribute', attribute.toString())
                        }
                    )
    }
}
