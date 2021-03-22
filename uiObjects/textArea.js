export class TextArea{
  constructor(htmlElement){
    this.txt = '{"apple":4, "grape":7, "orange":5}' //default value
    this.dom = htmlElement;
    this.dom.textContent = this.txt;
  }

  changeText(str){
    this.txt = str;
    this.dom.textContent = this.txt;
  }

}