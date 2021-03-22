export class Title{
  constructor(htmlElement){
    this.txt = 'BAR CHART!!!' //default value
    this.dom = htmlElement;
    this.dom.textContent = this.txt;
  }

  changeTitle(str){
    this.dom.textContent = str;
  }
}