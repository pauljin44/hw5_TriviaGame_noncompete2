$(document).ready(function(){
  $("#start-button").click(function(){

    var number = 20;
    alert("Game Begins!");
    $("#start-button").on("click", start);  
    $("#submit").on("click", finish);  
    $("#restart").on("click", restart);  

    function start(){
        counter = setInterval(timer, 2000);
        showMe(".question");
        showMe(".answers");
        showMe("#submit");
        hideMe("#start-button");
        hideMe(".Instruction");
        hideMe("#restart");
        hideMe("#results");
    }
    function timer(){
      number-- // decrements the timer by 1
      $("#show-number").html("<h2>" + number + "</h2>" );
      if (number === 0){
        alert("Times Up!")
        stop(); // calls the stop function
      }
    }
    function stop(){
        clearInterval(counter); // stops the timer
        $("#results").show();
        $("#restart").show();
        $(".question").hide();
        $(".answers").hide();
        $("#submit").hide();
    }
    function finish(){
        number = 1; // if number is equal to 0 number will show -1 so 1 has to be selected
        clearInterval(counter); // stops the timer
        timer();
    }

    function restart(){
        number = 20;
        start();
    }

    function hideMe(e) {
        $(e).hide();
    }
    function showMe(e) {
        $(e).show();
    }

    start(); // calls the start function
  });
});
