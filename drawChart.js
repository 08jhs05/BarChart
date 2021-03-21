//let container = document.getElementById("container");
let button = document.getElementById("btn");
let text = document.getElementById("text");
let form = document.getElementById("dataForm");
let dataInput = document.getElementById("dataInput");
let canvas = document.getElementById("chart");

let data;

button.addEventListener("click", function() {
  try{
    data = JSON.parse(dataInput.value);
    hideElements();
    drawChart(data, "");
  }catch (err){text.textContent = "Invalid format!"}
});

function hideElements(){            //hide button, textarea, messages when button is clicked
  button.style.display = "none"
  text.style.display = "none"
  form.style.display = "none"
}

function drawChart(data, options){
  let ctx = canvas.getContext("2d");
  let w = canvas.width;
  let h = canvas.height;

  ctx.transform(1, 0, 0, -1, 0, h);   //reverse y direction so y starts from bottom
  ctx.fillStyle = "#2C599D";          //draw backgrounds
  ctx.fillRect(0, 0, w, h);

  let barXoffset = w/10;
  let barYoffset = h/10;

  let dataAsArray = convertObjectToArray(data);
  let maximumValue = getMaximumValueFromDataArray(dataAsArray);
  let barwidth = (w-barXoffset)/(dataAsArray.length*2);

  for(let i = 0; i<dataAsArray.length; i++){
    ctx.fillStyle = "#F98125";
    ctx.fillRect(barwidth*i*2 + barXoffset, barYoffset, barwidth, (h-barYoffset)*dataAsArray[i][1]/maximumValue);
  }
  
  //Local functions to make code look cleaner

  function convertObjectToArray(data){  //read recieved Json data into array format
    let arr = [];
    for(let property in data){
      arr.push([property, data[property]]);
    }
    return arr;
  }

  function getMaximumValueFromDataArray(data){
    let max = 0;
    data.forEach((value) => {
      if(value[1] > max) max = value[1];
    });
    return max
  }

  //local functions end
}