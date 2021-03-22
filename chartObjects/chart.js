import { Bar } from './bar.js';

export class Chart{
  constructor(){
    this.bars = [];
  }

  putData(data){
    for(let i=0; i<data.length ;i++){
      let newBar = new Bar(data[i]);
      this.bars.push(newBar);
    }
  }

  clear(){
    this.bars = [];
  }
}