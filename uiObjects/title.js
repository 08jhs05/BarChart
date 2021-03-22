export class Title{
  constructor(htmlElement){
    this.txt = 'VERY VERY SPECIAL AND UNIQUE BAR CHART' //default value
    this.dom = htmlElement;
    this.dom.textContent = this.txt;
  }

}