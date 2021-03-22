import { Bar } from './bar.js';

export class Chart{
  constructor(name){
    this.myBar = new Bar(name);
  }

  test(){
    this.myBar.printName();
  }

  readDataIntoBars(){

  }

  draw(){
    
  }

  drawAxes(){
    
  }

  drawBars(){

  }
}