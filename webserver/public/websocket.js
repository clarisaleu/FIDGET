// global WebSocket pointer
var webSocket;

// decides what do when message arrives
function wsOnMessage(event) {
  console.log(event.data);
  var key = event.data.substring(0, event.data.indexOf(":"));
  var value = event.data.substr(event.data.indexOf(":") + 1);

  switch(key) {
  case "joyX":
    // do something with -> value
    if (value == 1) {
      updateFidget(true);
    } else if (value == -1) {
      updateFidget(false);
    }
    break;
  case "joyY":
    break;
  case "joyBtn":
    break;
  case "tempPot":
    break;
  case "tempReal":
      break;
  case "fidget":
      console.log("fidget: " + value);
      break;
  case "closet":
      break;
  case "camera":
      var a = "images/camera" + value + ".png";
      // console.log(a);
      d_camera.src = a;
      break;
  // case "":
  //     break;
  // case "":
  //     break;
  // case "":
  //     break;
  // case "":
  //     break;
  // case "":
  //     break;
  // case "":
  //     break;
  default:
	  warn("WebSocket", "No case for data: %0", event.data);
  }
}
