$(document).ready(function(){

$('#schmitterling').click(function(){
  location.reload();
});
  
var score=0;

});

$( "#pugMiddleBack" ).click(function() {
  $("#pugMiddleBack").hide()
  alert("Game Over");
  location.reload();
  // game over
  //goes to game over page
  
  
}); 

function loop() {
 $("#sheepBackLeft").css({left:4});
  $("#sheepBackLeft").animate ({
  top: "-=20"
  }, 5000, "linear", function() {
    loop();
  });
}


function looprundown() {
 $("#babyBrowHillSheep").css({left:4});
  $("#babyBrowHillSheep").animate ({
  top: "-=170"
  }, 2500, "linear", function() {
    looprunup();
    
  });
}

function looprunup() {
 var x = Math.floor((Math.random() * 10000) + 1)
  $("#babyBrowHillSheep").css({left:4});
  $("#babyBrowHillSheep").animate ({
  top: "+=170"
  }, 2500, "linear", function() {
    looprundown();
  }).delay(x);
}


looprunup();

function loopdownup1() {
  var x = Math.floor((Math.random() * 10000) + 1)
  $("#sheepBackLeft").css({left:4});
  $("#sheepBackLeft").animate ({
  top: "-=75"
  }, 1000, "linear", function() {
    loopupdown1();
  }).delay(x);
}

function loopupdown1() {
  $("#sheepBackLeft").css({left:4});
  $("#sheepBackLeft").animate ({
  top: "+=75"
  }, 500, "linear", function() {
    loopdownup1();
  });
}


loopupdown1();


function loopdownup2() {
  var x = Math.floor((Math.random() * 10000) + 1)
  $("#babySheepBackLeft").css({left:4});
  $("#babySheepBackLeft").animate ({
  top: "-=75"
  }, 1000, "linear", function() {
    loopupdown2();
  }).delay(x);
}

function loopupdown2() {
 
  $("#babySheepBackLeft").css({left:4});
  $("#babySheepBackLeft").animate ({
  top: "+=75"
  }, 500, "linear", function() {
    loopdownup2();
  });
}


loopupdown2();






function loopdownup5() {
  var x = Math.floor((Math.random() * 10000) + 1)
  $("#sheepBackRight").css({left:4});
  $("#sheepBackRight").animate ({
  top: "-=75"
  }, 1000, "linear", function() {
    loopupdown5();
  }).delay(x);
}

function loopupdown5() {
  var x = Math.floor((Math.random() * 10000) + 1)
 $("#sheepBackRight").css({left:4});
  $("#sheepBackRight").animate ({
  top: "+=75"
  }, 500, "linear", function() {
    loopdownup5();
  });
}


loopupdown5();


  function moveRight() {
  $("#sheepMiddleFront").animate({left: "+=100"}, 750, moveLeft);
}
var x = Math.floor((Math.random() * 10000) + 1)
function moveLeft() {
  $("#sheepMiddleFront").animate({left: "-=100"}, 1250, moveRight).delay(x);
}
  
moveRight();

  function loopupdown6() {
 $("#sheepTreeRight").css({left:4});
  $("#sheepTreeRight").animate ({
  top: "-=75"
  }, 500, "linear", function() {
    loopdownup6();
  });
}

function loopdownup6() {
  var x = Math.floor((Math.random() * 10000) + 1)
 $("#sheepTreeRight").css({left:4});
  $("#sheepTreeRight").animate ({
  top: "+=75"
  }, 1000, "linear", function() {
    loopupdown6();
  }).delay(x);
}


loopupdown6();

function loopupdown7() {
  
  $("#").css({left:4});
  $("#").animate ({
  top: "-=75"
  }, 500, "linear", function() {
    loopdownup7();
  });
}

function loopdownup7() {
    var x = Math.floor((Math.random() * 10000) + 1)
  $("#").css({left:4});
  $("#").animate ({
  top: "+=75"
  }, 1000, "linear", function() {
    loopupdown7();
  }).delay(x);
  }


loopdownup7();



function loopupdown8() {
 $("#sheepBackMiddle").css({left:0});
  $("#sheepBackMiddle").animate ({
  top: "-=75"
  }, 500, "linear", function() {
    loopdownup8();
  });
}

function loopdownup8() {
  var x = Math.floor((Math.random() * 10000) + 1)
 $("#sheepBackMiddle").css({left:0});
  $("#sheepBackMiddle").animate ({
  top: "+=75"
  }, 1000, "linear", function() {
    loopupdown8();
  }).delay(x);
}


loopupdown8();








//score variable is below
var score=0;

//click functions for sheep are below

  $("#sheepBackLeft").click(function() {
  $("#sheepBackLeft").hide();
  score=score+1; });
  
  $("#sheepMiddleFront").click(function() {
  $("#sheepMiddleFront").hide();
  score=score+1; });
    
  $("#babySheepMiddleFront").click(function() {
  $("#babySheepMiddleFront").hide();
  score=score+1; });
    
  $("#babySheepBackLeft").click(function() {
  $("#babySheepBackLeft").hide();
  score=score+1; });
    
  $("#sheepBackMiddle").click(function() {
  $("#sheepBackMiddle").hide();
  score=score+1; });
    
  $("#sheepBackRight").click(function() {
  $("#sheepBackRight").hide();
  score=score+1; });
    
  $("#sheepTreeRight" ).click(function() {
  $("#sheepTreeRight").hide();
  score=score+1; });
    
  $("#babyBrowHillSheep").click(function() {
  $("#babyBrowHillSheep").hide();
  score=score+1; });
      
 


//timer starts below
var timer; 
var timeLeft = 35; // seconds

// What to do when the timer runs out
function gameOver() {
  // This cancels the setInterval, so the updateTimer stops getting called
  cancelInterval(timer);
  
  // re-show the button, so they can start it again
  $('#playAgainButton').show();
}

function updateTimer() {
  timeLeft = timeLeft - 1;
  if(timeLeft < 100 && timeLeft >= -1)
    $('#timer').html(timeLeft);
  
  else {
    gameEnd();
  
    
    
  }
}

// The button has an on-click event handler that calls this
function start() {
  // setInterval is a built-in function that will call the given function
  // every N milliseconds (1 second = 1000 ms)
  timer = setInterval(updateTimer, 1000);
  
  // It will be a whole second before the time changes, so we'll call the update
  // once ourselves
  updateTimer();
  
  // We don't want the to be able to restart the timer while it is running,
  // so hide the button.
   $('#playAgainButton').hide();
}

function gameEnd(){
  
   if(timeLeft <= 0 ){
    alert("You ran out of time!");
    location.reload();
    
  }
 
}