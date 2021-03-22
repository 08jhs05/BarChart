import { TextArea } from './uiObjects/textArea.js';
import { MessageTxt } from './uiObjects/messageTxt.js';
import { Button } from './uiObjects/button.js';
import { Title } from './uiObjects/title.js';

//import { Chart } from './chartObjects/chart.js';
import { Data } from './data.js';

const myTextArea = new TextArea(document.getElementById("textarea"));
const myMessageTxt = new MessageTxt(document.getElementById("message"));
const myButton = new Button(document.getElementById("btn"));
const myTitle = new Title(document.getElementsByTagName("h1")[0]);

let canvas = document.getElementById("myCanvas");
const myData = new Data();

myButton.dom.addEventListener("click", function() {
  try{
    myData.readData(JSON.parse(myTextArea.dom.value));
  }catch (err){myMessageTxt.dom.textContent = "Invalid format!"}
});


//myMessageTxt.changeText("aqwdwda");
//let myChart = new Chart();
//myChart.readDataIntoBars();
//myChart.draw();

function draw(){

}
// //let container = document.getElementById("container");
// let lsbutton = document.getElementById("btn");
// let text = document.getElementById("text");
// let form = document.getElementById("dataForm");
// let dataInput = document.getElementById("dataInput");
// let canvas = document.getElementById("myCanvas");

// let data;

// function hideElements(){            //hide button, textarea, messages when button is clicked
//   button.style.display = "none"
//   text.style.display = "none"
//   form.style.display = "none"
// }

// function drawChart(data, options){
//   let ctx = canvas.getContext("2d");
//   let w = canvas.width;
//   let h = canvas.height;

//   ctx.transform(1, 0, 0, -1, 0, h);   //reverse y direction so y starts from bottom
//   ctx.fillStyle = "#2C599D";          //draw backgrounds
//   ctx.fillRect(0, 0, w, h);

//   let barXoffset = w/10;
//   let barYoffset = h/10;

//   let dataAsArray = convertObjectToArray(data);
//   let maximumValue = getMaximumValueFromDataArray(dataAsArray);
//   let barwidth = (w-barXoffset)/(dataAsArray.length*2);

//   for(let i = 0; i<dataAsArray.length; i++){
//     ctx.fillStyle = "#F98125";
//     ctx.fillRect(barwidth*i*2 + barXoffset, barYoffset, barwidth, (h-barYoffset)*dataAsArray[i][1]/maximumValue);
//   }
  
//   //Local functions to make code look cleaner

//   function convertObjectToArray(data){  //read recieved Json data into array format

//   }

//   function getMaximumValueFromDataArray(data){
//     let max = 0;
//     data.forEach((value) => {
//       if(value[1] > max) max = value[1];
//     });
//     return max
//   }

//   //local functions end
// }