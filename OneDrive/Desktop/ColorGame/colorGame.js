

var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colDisplay.textContent = pickedColor;
    h1.style.backgroundColor="#232323";
    for(var i =0;i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSquares = 6 ;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colDisplay.textContent = pickedColor;
    h1.style.backgroundColor="#232323";
    for(var i =0;i<squares.length;i++)
    {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click",function(){    
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colDisplay.textContent =  pickedColor;
    for(var i =0;  i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];   
    }

    h1.style.backgroundColor="steelblue";
})

colDisplay.textContent = pickedColor;

for (var i = 0; i <squares.length; i++){
    //add initial colors to square
    squares[i].style.backgroundColor = colors[i];

    //add event listener for squares
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor)
        {
            msgDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again";
        }
        else{
          this.style.backgroundColor ="#232323";
          msgDisplay.textContent = "Try Again";
        }
    })
}

function changeColors(color){
    for(var i =0; i<colors.length;i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random =  Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i =0; i<num; i++)
    {
        arr.push(randomColor())
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    
    var g = Math.floor(Math.random() * 256);
    
    var b = Math.floor(Math.random() * 256);

    return "rgb("+r+", "+g+", "+b+")";
}