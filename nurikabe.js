var time = 0;
var time1 = 0;
var time2 = 0;

// will tell when board 1 is started and ended
var gameOver = false;
var start = false;

// will tell when board 2 is started and ended
var gameOver1 = false;
var start1 = false ;

// will tell when board 3 is started and ended
var gameOver2 = false;
var start2 = false;

// function to color the box blck
function colorBoxBlack(click){
     
    if (click.innerHTML == "" && document.getElementById("timer").innerHTML !== "00:00:00" && document.getElementById("start").style.visibility !== "visible" ){
    click.style.backgroundColor = "black"; } }
 
// function to clear the box
function blankBox(click){
    
    if (click.innerHTML == ""&& document.getElementById("timer").innerHTML !== "00:00:00" && document.getElementById("start").style.visibility !== "visible" ){
    click.style.backgroundColor = "white"; }   
} 

// function to set the timer
function setTimer(){

// timer for first board
    if (!start){
        time = 0
    }
    if(!gameOver && start ){
        time++;
        var mins = Math.floor(time/10/60);
        var secs = Math.floor(time/10%60);
        var hours = Math.floor(time/10/60/60);
        if(mins < 10){
            mins = "0" + mins;

        }
        if (secs < 10){
            secs = "0" + secs;
        }

        document.getElementById("timer").innerHTML = hours + ":" + mins + ":" + secs ;
        var t = setTimeout (setTimer, 100) ;
         }

// timer for second board
    if (!start1){
            time1 = 0
        }
        if(!gameOver1 && start1){
            time1++;
            var mins1 = Math.floor(time1/10/60);
            var secs1 = Math.floor(time1/10%60);
            var hours1 = Math.floor(time1/10/60/60);
            if(mins1 < 10){
                mins1 = "0" + mins1;
    
            }
            if (secs1 < 10){
                secs1 = "0" + secs1;
            }
    
            document.getElementById("timer").innerHTML = hours1 + ":" + mins1 + ":" + secs1 ;
            var t = setTimeout (setTimer, 100) ;
             }

//timer for third board
    if(!start2){
                 time2 = 0
             }
        if(!gameOver2 && start2){
                time2++;
                var mins2 = Math.floor(time2/10/60);
                var secs2 = Math.floor(time2/10%60);
                var hours2 = Math.floor(time2/10/60/60);
                if(mins2 < 10){
                    mins2 = "0" + mins2;
        
                }
                if (secs2 < 10){
                    secs2 = "0" + secs2;
                }
        
                document.getElementById("timer").innerHTML = hours2 + ":" + mins2 + ":" + secs2 ;
                var t = setTimeout (setTimer, 100) ;
                 }
        }
      
// function to check the win
 function checkWin(){

// check for win on first board
    if(document.getElementById("cell4").innerHTML == 2 && document.getElementById("timer").innerHTML !== "00:00:00") {
        
                if(document.getElementById("cell0").style.backgroundColor == "black" &&
                document.getElementById("cell1").style.backgroundColor == "black" &&
                document.getElementById("cell2").style.backgroundColor == "black" &&
                document.getElementById("cell3").style.backgroundColor !== "black" &&
                document.getElementById("cell5").style.backgroundColor == "black" &&
                document.getElementById("cell6").style.backgroundColor == "black" &&
                document.getElementById("cell7").style.backgroundColor == "black" &&
                document.getElementById("cell8").style.backgroundColor !== "black" &&
                document.getElementById("cell9").style.backgroundColor == "black" &&
                document.getElementById("cell10").style.backgroundColor == "black" &&
                document.getElementById("cell11").style.backgroundColor == "black" &&
                document.getElementById("cell13").style.backgroundColor == "black" &&
                document.getElementById("cell14").style.backgroundColor == "black" &&
                document.getElementById("cell15").style.backgroundColor !== "black" &&
                document.getElementById("cell16").style.backgroundColor !== "black" &&
                document.getElementById("cell17").style.backgroundColor !== "black" &&
                document.getElementById("cell18").style.backgroundColor == "black" &&
                document.getElementById("cell19").style.backgroundColor !== "black" &&
                document.getElementById("cell20").style.backgroundColor == "black" &&
                document.getElementById("cell21").style.backgroundColor == "black" &&
                document.getElementById("cell22").style.backgroundColor !== "black" &&
                document.getElementById("cell23").style.backgroundColor == "black" &&
                document.getElementById("cell24").style.backgroundColor == "black" &&
                document.getElementById("cell25").style.backgroundColor == "black" &&
                document.getElementById("cell26").style.backgroundColor == "black" &&
                document.getElementById("cell27").style.backgroundColor == "black" &&
                document.getElementById("cell28").style.backgroundColor == "black" &&
                document.getElementById("cell30").style.backgroundColor == "black" &&
                document.getElementById("cell31").style.backgroundColor !== "black" &&
                document.getElementById("cell32").style.backgroundColor !== "black" &&
                document.getElementById("cell33").style.backgroundColor !== "black" &&
                document.getElementById("cell35").style.backgroundColor == "black" &&
                document.getElementById("cell36").style.backgroundColor == "black" &&
                document.getElementById("cell38").style.backgroundColor == "black" &&
                document.getElementById("cell39").style.backgroundColor == "black" &&
                document.getElementById("cell40").style.backgroundColor == "black" &&
                document.getElementById("cell41").style.backgroundColor == "black" &&
                document.getElementById("cell42").style.backgroundColor !== "black" &&
                document.getElementById("cell43").style.backgroundColor == "black" &&
                document.getElementById("cell44").style.backgroundColor !== "black" &&
                document.getElementById("cell45").style.backgroundColor == "black" &&
                document.getElementById("cell47").style.backgroundColor == "black" &&
                document.getElementById("cell49").style.backgroundColor !== "black" &&
                document.getElementById("cell50").style.backgroundColor == "black" &&
                document.getElementById("cell51").style.backgroundColor == "black" &&
                document.getElementById("cell52").style.backgroundColor == "black" &&
                document.getElementById("cell53").style.backgroundColor !== "black" &&
                document.getElementById("cell54").style.backgroundColor == "black" &&
                document.getElementById("cell55").style.backgroundColor !== "black" &&
                document.getElementById("cell56").style.backgroundColor !== "black" &&
                document.getElementById("cell58").style.backgroundColor !== "black" &&
                document.getElementById("cell59").style.backgroundColor !== "black" &&
                document.getElementById("cell60").style.backgroundColor == "black" &&
                document.getElementById("cell61").style.backgroundColor == "black" &&
                document.getElementById("cell62").style.backgroundColor == "black" &&
                document.getElementById("cell63").style.backgroundColor == "black" &&
                document.getElementById("cell64").style.backgroundColor == "black" &&
                document.getElementById("cell65").style.backgroundColor == "black" &&
                document.getElementById("cell66").style.backgroundColor !== "black" &&
                document.getElementById("cell67").style.backgroundColor !== "black" &&
                document.getElementById("cell68").style.backgroundColor !== "black" &&
                document.getElementById("cell69").style.backgroundColor == "black" &&
                document.getElementById("cell71").style.backgroundColor !== "black" &&
                document.getElementById("cell72").style.backgroundColor == "black" &&
                document.getElementById("cell73").style.backgroundColor == "black" &&
                document.getElementById("cell74").style.backgroundColor == "black" &&
                document.getElementById("cell75").style.backgroundColor == "black" &&
                document.getElementById("cell76").style.backgroundColor == "black"  )
              {
             alert("You Win");
             gameOver = true;
             start = false;
            start1 = false;
            gameOver1 = false;
            start2 = false;
            gameOver2 = false;
            document.getElementById("start").style.visibility = "visible"
            }
              else {
                    time = time + 150; 
                     alert ("Board not completed or incorrect, so 15 seconds is added") }
}

//check for win on second board
if(document.getElementById("cell8").innerHTML == 2 && document.getElementById("timer").innerHTML !== "00:00:00"){

    if(document.getElementById("cell0").style.backgroundColor == "black" &&
    document.getElementById("cell1").style.backgroundColor == "black" &&
    document.getElementById("cell2").style.backgroundColor == "black" &&
    document.getElementById("cell3").style.backgroundColor == "black" &&
    document.getElementById("cell4").style.backgroundColor == "black" &&
    document.getElementById("cell5").style.backgroundColor == "black" &&
    document.getElementById("cell6").style.backgroundColor == "black" &&
    document.getElementById("cell7").style.backgroundColor == "black" &&
    document.getElementById("cell9").style.backgroundColor == "black" &&
    document.getElementById("cell11").style.backgroundColor == "black" &&
    document.getElementById("cell13").style.backgroundColor == "black" &&
    document.getElementById("cell14").style.backgroundColor == "black" &&
    document.getElementById("cell15").style.backgroundColor !== "black" &&
    document.getElementById("cell16").style.backgroundColor == "black" &&
    document.getElementById("cell17").style.backgroundColor !== "black" &&
    document.getElementById("cell18").style.backgroundColor == "black" &&
    document.getElementById("cell19").style.backgroundColor !== "black" &&
    document.getElementById("cell20").style.backgroundColor == "black" &&
    document.getElementById("cell21").style.backgroundColor == "black" &&
    document.getElementById("cell22").style.backgroundColor == "black" &&
    document.getElementById("cell23").style.backgroundColor == "black" &&
    document.getElementById("cell24").style.backgroundColor == "black" &&
    document.getElementById("cell25").style.backgroundColor == "black" &&
    document.getElementById("cell26").style.backgroundColor == "black" &&
    document.getElementById("cell27").style.backgroundColor !== "black" &&
    document.getElementById("cell28").style.backgroundColor == "black" &&
    document.getElementById("cell30").style.backgroundColor !== "black" &&
    document.getElementById("cell31").style.backgroundColor == "black" &&
    document.getElementById("cell32").style.backgroundColor !== "black" &&
    document.getElementById("cell33").style.backgroundColor == "black" &&
    document.getElementById("cell35").style.backgroundColor == "black" &&
    document.getElementById("cell36").style.backgroundColor == "black" &&
    document.getElementById("cell37").style.backgroundColor == "black" &&
    document.getElementById("cell38").style.backgroundColor == "black" &&
    document.getElementById("cell39").style.backgroundColor !== "black" &&
    document.getElementById("cell40").style.backgroundColor !== "black" &&
    document.getElementById("cell41").style.backgroundColor == "black" &&
    document.getElementById("cell42").style.backgroundColor !== "black" &&
    document.getElementById("cell44").style.backgroundColor == "black" &&
    document.getElementById("cell46").style.backgroundColor == "black" &&
    document.getElementById("cell48").style.backgroundColor == "black" &&
    document.getElementById("cell49").style.backgroundColor == "black" &&
    document.getElementById("cell50").style.backgroundColor == "black" &&
    document.getElementById("cell51").style.backgroundColor == "black" &&
    document.getElementById("cell52").style.backgroundColor !== "black" &&
    document.getElementById("cell53").style.backgroundColor == "black" &&
    document.getElementById("cell54").style.backgroundColor == "black" &&
    document.getElementById("cell55").style.backgroundColor == "black" &&
    document.getElementById("cell56").style.backgroundColor == "black" &&
    document.getElementById("cell57").style.backgroundColor !== "black" &&
    document.getElementById("cell59").style.backgroundColor == "black" &&
    document.getElementById("cell60").style.backgroundColor !== "black" &&
    document.getElementById("cell62").style.backgroundColor == "black" &&
    document.getElementById("cell63").style.backgroundColor == "black" &&
    document.getElementById("cell64").style.backgroundColor !== "black" &&
    document.getElementById("cell65").style.backgroundColor == "black" &&
    document.getElementById("cell66").style.backgroundColor == "black" &&
    document.getElementById("cell67").style.backgroundColor == "black" &&
    document.getElementById("cell68").style.backgroundColor == "black" &&
    document.getElementById("cell69").style.backgroundColor == "black" &&
    document.getElementById("cell70").style.backgroundColor == "black" &&
    document.getElementById("cell71").style.backgroundColor == "black" &&
    document.getElementById("cell72").style.backgroundColor == "black" &&
    document.getElementById("cell73").style.backgroundColor !== "black" &&
    document.getElementById("cell74").style.backgroundColor !== "black" &&
    document.getElementById("cell75").style.backgroundColor !== "black" 
     )
  {
 alert("You Win");
  gameOver1 = true;
  start1 = false;
  start = false;
  gameOver = false;
  start2 = false;
  gameOver2 = false;
  document.getElementById("start").style.visibility = "visible"
    } else {
       
        time1 = time1 + 150;
        alert ("Board not completed or incorrect, so 15 seconds is added") }
 }

 // check for win on third board
 if(document.getElementById("cell11").innerHTML == 6 && document.getElementById("timer").innerHTML !== "00:00:00"){

    if(document.getElementById("cell0").style.backgroundColor == "black" &&
    document.getElementById("cell1").style.backgroundColor == "black" &&
    document.getElementById("cell2").style.backgroundColor == "black" &&
    document.getElementById("cell3").style.backgroundColor == "black" &&
    document.getElementById("cell4").style.backgroundColor == "black" &&
    document.getElementById("cell5").style.backgroundColor == "black" &&
    document.getElementById("cell6").style.backgroundColor == "black" &&
    document.getElementById("cell7").style.backgroundColor == "black" &&
    document.getElementById("cell8").style.backgroundColor !== "black" &&
    document.getElementById("cell9").style.backgroundColor == "black" &&
    document.getElementById("cell10").style.backgroundColor !== "black" &&
    document.getElementById("cell12").style.backgroundColor !== "black" &&
    document.getElementById("cell13").style.backgroundColor == "black" &&
    document.getElementById("cell14").style.backgroundColor == "black" &&
    document.getElementById("cell16").style.backgroundColor == "black" &&
    document.getElementById("cell17").style.backgroundColor !== "black" &&
    document.getElementById("cell18").style.backgroundColor == "black" &&
    document.getElementById("cell19").style.backgroundColor == "black" &&
    document.getElementById("cell20").style.backgroundColor == "black" &&
    document.getElementById("cell22").style.backgroundColor == "black" &&
    document.getElementById("cell23").style.backgroundColor !== "black" &&
    document.getElementById("cell24").style.backgroundColor !== "black" &&
    document.getElementById("cell25").style.backgroundColor == "black" &&
    document.getElementById("cell26").style.backgroundColor !== "black" &&
    document.getElementById("cell27").style.backgroundColor == "black" &&
    document.getElementById("cell28").style.backgroundColor !== "black" &&
    document.getElementById("cell29").style.backgroundColor == "black" &&
    document.getElementById("cell30").style.backgroundColor == "black" &&
    document.getElementById("cell31").style.backgroundColor == "black" &&
    document.getElementById("cell32").style.backgroundColor == "black" &&
    document.getElementById("cell34").style.backgroundColor == "black" &&
    document.getElementById("cell35").style.backgroundColor == "black" &&
    document.getElementById("cell37").style.backgroundColor == "black" &&
    document.getElementById("cell39").style.backgroundColor == "black" &&
    document.getElementById("cell40").style.backgroundColor == "black" &&
    document.getElementById("cell41").style.backgroundColor == "black" &&
    document.getElementById("cell42").style.backgroundColor == "black" &&
    document.getElementById("cell43").style.backgroundColor !== "black" &&
    document.getElementById("cell44").style.backgroundColor == "black" &&
    document.getElementById("cell45").style.backgroundColor !== "black" &&
    document.getElementById("cell46").style.backgroundColor == "black" &&
    document.getElementById("cell47").style.backgroundColor !== "black" &&
    document.getElementById("cell48").style.backgroundColor == "black" &&
    document.getElementById("cell49").style.backgroundColor == "black" &&
    document.getElementById("cell50").style.backgroundColor == "black" &&
    document.getElementById("cell51").style.backgroundColor == "black" &&
    document.getElementById("cell52").style.backgroundColor == "black" &&
    document.getElementById("cell53").style.backgroundColor == "black" &&
    document.getElementById("cell55").style.backgroundColor == "black" &&
    document.getElementById("cell56").style.backgroundColor !== "black" &&
    document.getElementById("cell57").style.backgroundColor == "black" &&
    document.getElementById("cell59").style.backgroundColor == "black" &&
    document.getElementById("cell60").style.backgroundColor !== "black" &&
    document.getElementById("cell61").style.backgroundColor == "black" &&
    document.getElementById("cell62").style.backgroundColor == "black" &&
    document.getElementById("cell64").style.backgroundColor == "black" &&
    document.getElementById("cell65").style.backgroundColor !== "black" &&
    document.getElementById("cell66").style.backgroundColor == "black" &&
    document.getElementById("cell68").style.backgroundColor !== "black" &&
    document.getElementById("cell69").style.backgroundColor == "black" &&
    document.getElementById("cell70").style.backgroundColor == "black" &&
    document.getElementById("cell71").style.backgroundColor == "black" &&
    document.getElementById("cell72").style.backgroundColor == "black" &&
    document.getElementById("cell73").style.backgroundColor == "black" &&
    document.getElementById("cell74").style.backgroundColor == "black" &&
    document.getElementById("cell75").style.backgroundColor == "black" &&
    document.getElementById("cell76").style.backgroundColor == "black"
     ) {
 alert("You Win");
  
  
    gameOver2 = true ;
    start2 = false;
    start = false;
    gameOver = false;
    start1 = false;
    gameOver1 = false;
    document.getElementById("start").style.visibility = "visible" }

     else {
         time2 = time2 + 150;
        alert ("Board not completed or incorrect, so 15 seconds is added")
        } } }

// function to reset the board
 function resetBoard(){
     
    for( var i=0; i < 77; ++i){
        if(document.getElementById("cell"+ i).style.backgroundColor = "black"){
            document.getElementById("cell"+ i).style.backgroundColor = "white";
        }
    } 

} 

// function to set up board 2
function newGame1(){
for (var c = 0; c < 77 ; ++c){
    document.getElementById("cell"+c).innerHTML = ""
}
    
    document.getElementById("cell8").innerHTML = 2;
    document.getElementById("cell10").innerHTML = 2;
    document.getElementById("cell12").innerHTML = 2;
    document.getElementById("cell29").innerHTML = 2 ;
    document.getElementById("cell34").innerHTML = 2;
    document.getElementById("cell43").innerHTML = 2;
    document.getElementById("cell45").innerHTML = 2;
    document.getElementById("cell47").innerHTML = 4;
    document.getElementById("cell58").innerHTML = 3;
    document.getElementById("cell61").innerHTML = 2;
    document.getElementById("cell76").innerHTML = 4;
    for( var j=0; j < 77 ; ++j){
        if(document.getElementById("cell"+ j).style.backgroundColor = "black"){
            document.getElementById("cell"+ j).style.backgroundColor = "white" ;
        }
    }  start1 = true;
    gameOver1 = false;
    start = false;
    gameOver = false;
    start2= false;
    gameOver2= false;
    document.getElementById("timer").innerHTML = "00:00:00"
    if(start1){
        document.getElementById("new1").style.visibility = "hidden";
    } if(!start){
        document.getElementById("new").style.visibility = "visible";
    } if(!start2){
        document.getElementById("new2").style.visibility = "visible";
    }
    
}
      

// function to set up board 1
 function newGame(){
        
       for (var a = 0; a < 77 ; ++a){
           document.getElementById("cell"+a).innerHTML = ""
       }
   
   document.getElementById("cell4").innerHTML = 2;
   document.getElementById("cell12").innerHTML = 2;
   document.getElementById("cell29").innerHTML = 6;
   document.getElementById("cell34").innerHTML = 4 ;
   document.getElementById("cell37").innerHTML = 2;
   document.getElementById("cell46").innerHTML = 2;
   document.getElementById("cell48").innerHTML = 2;
   document.getElementById("cell57").innerHTML = 9;
   document.getElementById("cell70").innerHTML = 2;
   
   for( var j=0; j < 77 ; ++j){
       if(document.getElementById("cell"+ j).style.backgroundColor = "black"){
           document.getElementById("cell"+ j).style.backgroundColor = "white" ; }
       } start = true;
       gameOver = false;
       start1 = false;
       gameOver1 = false;
       start2= false;
       gameOver2 = false;
       document.getElementById("timer").innerHTML = "00:00:00"
       if(!start1){
        document.getElementById("new1").style.visibility = "visible";
    } if(start){
        document.getElementById("new").style.visibility = "hidden";
    } if(!start2){
        document.getElementById("new2").style.visibility = "visible";
    }
     }

// function to set up board 3
function newGame2(){
        
         
            for (var b = 0; b < 77 ; ++b){
                document.getElementById("cell"+b).innerHTML = ""}
            
        
        document.getElementById("cell11").innerHTML = 6;
        document.getElementById("cell15").innerHTML = 2;
        document.getElementById("cell33").innerHTML = 2;
        document.getElementById("cell36").innerHTML = 2 ;
        document.getElementById("cell54").innerHTML = 2;
        document.getElementById("cell58").innerHTML = 2;
        document.getElementById("cell63").innerHTML = 2;
        document.getElementById("cell67").innerHTML = 3;
        document.getElementById("cell21").innerHTML = 2;
        document.getElementById("cell38").innerHTML = 2;
        for( var j=0; j < 77 ; ++j){
            if(document.getElementById("cell"+ j).style.backgroundColor = "black"){
                document.getElementById("cell"+ j).style.backgroundColor = "white" ;
            }
        } start2 = true;
        gameOver2 = false;
        start = false;
        gameOver = false;
        start1 = false;
        gameOver1 = false;
        document.getElementById("timer").innerHTML = "00:00:00"
        if(start2){
            document.getElementById("new2").style.visibility = "hidden";
        } if(!start){
            document.getElementById("new").style.visibility = "visible";
        } if(!start1){
            document.getElementById("new1").style.visibility = "visible";
        }
     }

// function to make the start button dissappear after the game has started and will also call setTimer function
function setTimer1(){
   
if((start || start1 || start2) && document.getElementById("timer").innerHTML == "00:00:00"){
setTimer()
    document.getElementById("start").style.visibility = "hidden";
    
} else{
    setTimer();
    document.getElementById("start").style.visibility = "visible"
}
} 