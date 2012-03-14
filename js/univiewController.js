var ws;
$(document).ready(function(){
  //Prevent movement with ios touches
  $("body").bind('touchmove', 
    function(e){ e.preventDefault(); 
  });

  //Open websocket

  ws = new WebSocket("ws://192.168.10.121:8183");
  
  ws.onopen= function(){
    run_commands("planets_inner_slow");
  };

  ws.onerror= function(){
    console.log("something went wrong");
  };

  $(".button").click(function(){
    console.log("doing button", $(this).attr("id"));
    $(".button").removeClass("selected");
    $(this).addClass("selected");
    run_commands($(this).attr("id"));
  });

  $("#start_server").click(function(event){
    event.preventDefault();
    ws.send("server start");
  });
});

function run_commands(command){
  current_commands = commands[command];
  for(i in current_commands){
    ws.send(current_commands[i]);
  }
}