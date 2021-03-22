export class MessageTxt{
  constructor(htmlElement){
    this.txt = 'Please enter data in JS object format. Example: {"apple":4, "grape":7, "orange":5}' //default value
    this.dom = htmlElement;
    this.dom.textContent = this.txt;
  }

  changeText(str){
    this.txt = str;
    this.dom.textContent = this.txt;
  }

}