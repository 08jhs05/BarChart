export class TextArea{
  constructor(htmlElement){
    this.txt = '{"apple":4, "grape":7, "orange":9, "banana":5}' //default value
    this.dom = htmlElement;
    this.dom.textContent = this.txt;
  }

  changeText(str){
    this.txt = str;
    this.dom.textContent = this.txt;
  }
  
  toggleHide(){
    if(this.dom.style.display !== "none") this.dom.style.display = "none";
    else this.dom.style.display = "initial";
  }
}