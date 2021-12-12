export class DataString {
    text : Array<string>;
    numbwords : string;
    numblines : string;
    numbcharswithscapes : string;
    numbcharswithoutscapes : string;

    constructor() {
        this.text = new Array<string>();
        this.numbwords = "";
        this.numblines = "";
        this.numbcharswithscapes = "";
        this.numbcharswithoutscapes = "";
    }
}