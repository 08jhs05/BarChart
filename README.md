# BAR CHART

![Screen Shot 2021-03-27 at 2 32 51 PM](https://user-images.githubusercontent.com/54612573/112730742-9d366f00-8f09-11eb-9501-7d17cd7e59a5.png)

Lighthouse Lab Compass stretch project - A sexy bar chart with adjustable colours

## How to run

Running index.html locally on your browser will give errors - It must run on localhost.
http-server (https://www.npmjs.com/package/http-server) was used on this demo.

Install http-server via npm on terminal:

    npm install --global http-server

Navigate to where this project folder is located and run this command:

    http-server

Then open http://localhost:8080/ on your browser. 

## Usage

![1111](https://user-images.githubusercontent.com/54612573/112731098-b0e2d500-8f0b-11eb-8303-25893b1d04ed.jpg)

Simply enter data into the textarea and click "Get Chart!" button to show the bar chart.
Data must be in a JS object format:

    {string: number, string:number, ..... }
   
![reset](https://user-images.githubusercontent.com/54612573/112731179-1df66a80-8f0c-11eb-8ada-18a958e7c165.jpg)

Press RESET button to reset the chart and enter new data.

![Screen Shot 2021-03-27 at 2 51 41 PM](https://user-images.githubusercontent.com/54612573/112731156-05865000-8f0c-11eb-8b88-a450bf8a336a.png)

Bar colour, label colour, and axes colour are adjustable via selection box below.

## Examples
