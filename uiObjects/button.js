export class Button{
  constructor(htmlElement){
    this.txt = 'Get Chart!' //default value
    this.dom = htmlElement;
    this.dom.textContent = this.txt;
  }
  
  toggleHide(){
    if(this.dom.style.display !== "none") this.dom.style.display = "none";
    else this.dom.style.display = "initial";
  }

  changeTxt(str){
    this.dom.textContent = str;
  }
}