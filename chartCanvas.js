export class ChartCanvas{
  constructor(htmlElement){
    this.dom = htmlElement;
    this.chart = undefined;
    this.maxValue = undefined;
    this.barColor = "#F98125";
    this.labelColor = "#FFFFFF";
    this.fontSize = "10px";
    this.fontColor = "Arial"
  }

  putChartData(chart, maxValue){
    this.chart = chart;
    this.maxValue = maxValue;
  }

  draw(){

    let context = this.dom.getContext("2d");

    let w = this.dom.width;
    let h = this.dom.height;  
    let barXoffset = w/10;
    let barYoffset = h/10;
    let barWidth = (w-barXoffset)/(this.chart.bars.length*2);

    context.clearRect(0, 0, w, h);
    context.fillStyle = "#2C599D";           //draw backgrounds
    context.fillRect(0, 0, w, h);

    //draw bars
    for(let i = 0; i<this.chart.bars.length; i++){
      context.fillStyle = this.barColor;
      context.fillRect(barWidth*i*2 + barXoffset, h-barYoffset, barWidth, -(h-barYoffset)*this.chart.bars[i].dataValue/this.maxValue);
      context.fillStyle = this.labelColor;
      context.font = this.fontSize + this.fontColor;
      //draw labels
      context.fillText(this.chart.bars[i].dataLabel, barWidth*i*2 + barXoffset, h-barYoffset/4);
      //and values
      context.fillText(this.chart.bars[i].dataValue, barWidth*i*2 + barXoffset + barWidth/2, h-barYoffset*2);
    }

    //draw axes
    context.fillStyle = this.labelColor;
    context.fillRect(barXoffset, h-barYoffset, w-barXoffset, 2);
    context.fillRect(barXoffset, h-barYoffset+2, -4, -h);

    //draw ticks in y axis
    for(let j = 0; j<this.maxValue; j++){
      let tickwidth = 10;
      let tickheight = 2;
      context.fillStyle = this.labelColor;
      context.fillRect(barXoffset - tickwidth - 5, (h-barYoffset)*j/this.maxValue, tickwidth, tickheight);
    }
  }

  clear(){
    let context = this.dom.getContext("2d");
    context.clearRect(0, 0, this.dom.width, this.dom.height);
    this.chart = undefined;
    this.maxValue = undefined;
  }
}