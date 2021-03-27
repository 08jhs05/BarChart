# BAR CHART

![Screen Shot 2021-03-27 at 2 32 51 PM](https://user-images.githubusercontent.com/54612573/112730742-9d366f00-8f09-11eb-9501-7d17cd7e59a5.png)

Lighthouse Lab Compass stretch project - A sexy bar chart with adjustable colours

## How to run

Running index.html locally on your browser will give errors - It must run on localhost.
http-server (https://www.npmjs.com/package/http-server) was used for this demo.

Install http-server via npm on terminal:

    npm install --global http-server

Navigate to where this project folder is located and run this command:

    http-server

Then open http://localhost:8080/ on your browser. 

## Usage

![2222](https://user-images.githubusercontent.com/54612573/112731281-a7a63800-8f0c-11eb-963c-53cc32aea5b4.jpg)

Simply enter data into the textarea and click "Get Chart!" button to show the bar chart.
Data must be in JS object format:

    {string: number, string:number, ..... }
   
![reset](https://user-images.githubusercontent.com/54612573/112731179-1df66a80-8f0c-11eb-8ada-18a958e7c165.jpg)

Press RESET button to reset the chart and enter new data.

![Screen Shot 2021-03-27 at 2 51 41 PM](https://user-images.githubusercontent.com/54612573/112731156-05865000-8f0c-11eb-8b88-a450bf8a336a.png)

Bar colour, label colour, and axes colour are adjustable via selection box below.

## Examples

![ex1](https://user-images.githubusercontent.com/54612573/112732418-3799b100-8f10-11eb-99c4-f7d48a48bcf8.jpg)

![ex2](https://user-images.githubusercontent.com/54612573/112732500-ae36ae80-8f10-11eb-982b-ee8efbb604d3.jpg)

![ex3](https://user-images.githubusercontent.com/54612573/112732572-24d3ac00-8f11-11eb-95c3-28521a0e231f.jpg)

## Bugs/Issues

Ticks get messy when the data received has large values(>100):

![issue](https://user-images.githubusercontent.com/54612573/112732357-d8d43780-8f0f-11eb-918d-082d5fd15260.jpg)

This is inevitable since the tick size is set to a fixed pixel value. Labels representing values also look odd because they have fixed pixel positions.

## External Resources, libraries(?) Used

JS Canvas object used to draw charts

Tutorials:

- W3schools
- Mozila
- Lighthouse Compass
