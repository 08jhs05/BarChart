# BAR CHART

![Screen Shot 2021-03-27 at 2 32 51 PM](https://user-images.githubusercontent.com/54612573/112730742-9d366f00-8f09-11eb-9501-7d17cd7e59a5.png)

Lighthouse Lab Compass stretch project - A sexy bar chart with adjustable colours

## How to run

Running index.html locally on your browser will give errors, it must run on localhost.

http-server (https://www.npmjs.com/package/http-server) was used on this demo.

Install http-server via npm on terminal:

    npm install --global http-server

Then navigate to where this project folder is located and run this command:

    http-server

Open http://localhost:8080/ on your browser. 

## Usage

![1111](https://user-images.githubusercontent.com/54612573/112731098-b0e2d500-8f0b-11eb-8303-25893b1d04ed.jpg)

Simply enter data into the textarea, and click "Get Chart!" button to show the bar chart.
Data must be in a JS object format:

    {string: number, string:number, ..... }

Press RESET button to reset the chart and enter new data.


Bar colour, label colour, and axes colour are adjustable via selection box below.
