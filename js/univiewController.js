var ws;
$(document).ready(function(){
  //Prevent movement with ios touches
  enabled = true;

  $("body").bind('touchmove', 
    function(e){ e.preventDefault(); 
  });

  //Open websocket
  ws = new WebSocket("ws://192.168.50.81:8183");
  
  ws.onopen= function(){
    
    run_commands(commands["planets_inner_slow"]);
  };

  ws.onmessage= function(data){
    console.log(data);
  };

  ws.onerror= function(){
    console.log("something went wrong");
  };

  ws.onclose= function(){
     ws = new WebSocket("ws://192.168.50.81:8183");
  };

  $(".button").on("touchstart", function(event){
    event.preventDefault();
    if(enabled){
      $(".button").animate( {"opacity":0.4} , 400);
      $(".button").removeClass("selected");
      $(this).addClass("selected");
      run_commands(commands[$(this).attr("id")]);
      enabled = false
      setTimeout( function(){
        $(".button").animate( {"opacity":1} , 400);
        enabled=true;
      },40);
    }
  });

  $("#start_server").click(function(event){
    event.preventDefault();
    ws.send("server start");
  });
});

function run_commands(command){
  if(typeof command == "object"){
    command = command.join(";") 
  }
  ws.send(command);
}