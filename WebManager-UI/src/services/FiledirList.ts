import { Injectable } from "@angular/core";
import { DataString } from "./DataString";
import { Filedir } from "./Filedir";

@Injectable()
export class FiledirList{
    activeFile = "";
    activeContent : DataString = new DataString();
    content : boolean = false;
    find : boolean = false;
    findresults : boolean = false;
    activePath : string = "";
    activeCommand : string ="";
    bufferPath : string = "";
    objectsArray : Array<Filedir> = new Array<Filedir>();
}
