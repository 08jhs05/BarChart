export class Data{
  constructor(){
    this.json = {};
    this.dataInArray = [];
    this.maxValue = 0;
  }
  
  readData(jsonData){
    let arr = [];
    for(let property in jsonData){
      arr.push([property, jsonData[property]]);
    }
    this.dataInArray = arr;

    // let max = ['',0];

    // for(let i=0; i<this.dataInArray.length; i++){
    //   if(this.dataInArray[i][1] > max[0]) max = this.dataInArray[i];
    // }

    let max = 0;
    this.dataInArray.forEach(data =>{
      if(data[1]>max) max = data[1];
    })
    this.maxValue = max;
  }

  clear(){
    this.json = {};
    this.dataInArray = [];
    this.maxValue = 0;
  }
}