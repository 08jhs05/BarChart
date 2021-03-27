export class MessageTxt{
  constructor(htmlElement){
    this.txt = 'Please enter data in JS object format.' //default value
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