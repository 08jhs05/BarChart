export class Data{
  constructor(){
    this.json = {};
    this.dataInArray = [];
  }
  
  readData(jsonData){
    let arr = [];
    for(let property in jsonData){
      arr.push([property, jsonData[property]]);
    }
    this.dataInArray = arr;
  }
}