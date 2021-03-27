import { TextArea } from './uiObjects/textArea.js';
import { MessageTxt } from './uiObjects/messageTxt.js';
import { Button } from './uiObjects/button.js';
import { Title } from './uiObjects/title.js';

import { Chart } from './chartObjects/chart.js';
import { Data } from './data.js';
import { ChartCanvas } from './chartCanvas.js';

const BLUE = "#2C599D";
const WHITE = "#FFFFFF";
const ORANGE = "#FFA500";
const GREEN = "#008000";
const RED = "#FF0000";

//button, texts, form elements
const myMessageTxt = new MessageTxt(document.getElementById("message"));
const myTextArea = new TextArea(document.getElementById("textarea"));
const getChartButton = new Button(document.getElementById("getChartBtn"));
const myTitle = new Title(document.getElementsByTagName("h1")[0]);
const resetButton = new Button(document.getElementById("resetBtn"));
resetButton.changeTxt("RESET");

//data, canvas elements
const myData = new Data();
const myChart = new Chart();
const canvas = new ChartCanvas(document.getElementById("myCanvas"));

//selector html elements
//I've been creating a new object to match a html element, 
//but realized it's just unecessary so just made it simpler
let barColourSelector = document.getElementById("barColour");
let labelColourSelector = document.getElementById("labelColour");
let axesColourSelector = document.getElementById("axesColour");

//boolean value prevents input form from being hidden when reset button is clicked
let isDataReceived = false;

//add listener to getchartbutton, chart will show up when button is clicked
getChartButton.dom.addEventListener("click", function(){
  isDataReceived = true;
  draw();
  toggleHide();
});

//add listener to reset button which resets chart and shows data input form again
resetButton.dom.addEventListener("click", function(){
  reset();
  if(isDataReceived){
    toggleHide();
    isDataReceived = false;
  }
});

barColourSelector.addEventListener("change", function(){
  switch(barColourSelector.value){
    case "White":
      canvas.barColor = WHITE;
      break;
    case "Orange":
      canvas.barColor = ORANGE;
      break;
    case "Green":
      canvas.barColor = GREEN;
      break;
    case "Red":
      canvas.barColor = RED;
      break;
  }
  if(isDataReceived){
    reset();
    draw();
  }
})

labelColourSelector.addEventListener("change", function(){
  switch(labelColourSelector.value){
    case "White":
      canvas.labelColor = WHITE;
      break;
    case "Orange":
      canvas.labelColor = ORANGE;
      break;
    case "Green":
      canvas.labelColor = GREEN;
      break;
    case "Red":
      canvas.labelColor = RED;
      break;
  }
  if(isDataReceived){
    reset();
    draw();
  }
})

axesColourSelector.addEventListener("change", function(){
  switch(axesColourSelector.value){
    case "White":
      canvas.axesColor = WHITE;
      break;
    case "Orange":
      canvas.axesColor = ORANGE;
      break;
    case "Green":
      canvas.axesColor = GREEN;
      break;
    case "Red":
      canvas.axesColor = RED;
      break;
  }
  if(isDataReceived){
    reset();
    draw();
  }
})

function draw(){
  try{
    myData.readData(JSON.parse(myTextArea.dom.value));
    myChart.putData(myData.dataInArray);
    canvas.putChartData(myChart, myData.maxValue);
    canvas.draw();
  }catch (err){myMessageTxt.dom.textContent = "Invalid data format!"}
}

function toggleHide(){
  myMessageTxt.toggleHide();
  myTextArea.toggleHide();
  getChartButton.toggleHide();
  document.getElementById("message2").display = "none";

  if(document.getElementById("message2").style.display !== "none") document.getElementById("message2").style.display = "none";
    else document.getElementById("message2").style.display = "initial";
}

function reset(){
  myData.clear();
  myChart.clear();
  canvas.clear();
}