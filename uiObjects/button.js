export class Button{
  constructor(htmlElement){
    this.txt = 'Get Chart!' //default value
    this.dom = htmlElement;
    this.dom.textContent = this.txt;
  }
  
}