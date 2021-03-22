import { TextArea } from './uiObjects/textArea.js';
import { MessageTxt } from './uiObjects/messageTxt.js';
import { Button } from './uiObjects/button.js';
import { Title } from './uiObjects/title.js';

import { Chart } from './chartObjects/chart.js';
import { Data } from './data.js';
import { ChartCanvas } from './chartCanvas.js';

const myMessageTxt = new MessageTxt(document.getElementById("message"));
const myTextArea = new TextArea(document.getElementById("textarea"));
const getChartButton = new Button(document.getElementById("getChartBtn"));
const myTitle = new Title(document.getElementsByTagName("h1")[0]);
const resetButton = new Button(document.getElementById("resetBtn"));
resetButton.changeTxt("RESET");

const myData = new Data();
const myChart = new Chart();
const canvas = new ChartCanvas(document.getElementById("myCanvas"));

getChartButton.dom.addEventListener("click", function() {
  try{
    myData.readData(JSON.parse(myTextArea.dom.value));
    myChart.putData(myData.dataInArray);
    canvas.putChartData(myChart, myData.maxValue);
    canvas.draw();
    toggleHide();
  }catch (err){myMessageTxt.dom.textContent = "Invalid data format!"}
});

resetButton.dom.addEventListener("click", reset);

function toggleHide(){
  myMessageTxt.toggleHide();
  myTextArea.toggleHide();
  getChartButton.toggleHide();
}

function reset(){
  myData.clear();
  myChart.clear();
  canvas.clear();
  toggleHide();
}