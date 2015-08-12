Object.prototype.extendJson=function(options){
  for(var key in options){
    this.key=options[key];
  }
  return this;
}
function myMedia(options){
  var options=new Object();
  options={
    
  }
}
    navigator.getMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);
    console.log(navigator.webkitGetUserMedia);
    var contrainsObj={
      "video": true,
    };
    var audio,audioType;
    var video = document.getElementById('video');
    var successFn= function(localMediaStream) {
      
      console.log(video)
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
      console.log(localMediaStream);
      audio = new Audio();  
      audioType = getAudioType(audio);  
      if (audioType) {  
        audio.src = 'polaroid.' + audioType;  
        audio.play();  
      }  
      video.onloadedmetadata = function(e) {
         // Do something with the video here.
      };
    };
    //获取音频格式  
    function getAudioType(element) {  
      if (element.canPlayType) {  
        if (element.canPlayType('audio/mp4; codecs="mp4a.40.5"') !== '') {  
          return ('aac');  
        } else if (element.canPlayType('audio/ogg; codecs="vorbis"') !== '') {  
          return ("ogg");  
        }  
      }  
      return false;  
    }  
    var errFn=function(err) {
      console.log("The following error occured: " + err);
    };
    window.addEventListener("DOMContentLoaded",navigator.webkitGetUserMedia(contrainsObj,successFn,errFn),false);
    var photoBtn=document.getElementById("photoBtn");
    var photo2video=document.getElementById("photo2video");
    var canvas=document.getElementById("photo");

    var context=canvas.getContext("2d");
    photoBtn.addEventListener("click", function(){
      context.drawImage(video, 0, 0, 500, 480);
    })
    function drawVideo(){
      setInterval(function(){
        context.drawImage(video, 0, 0, 500, 480);
      }, 60);
    }
    photo2video.addEventListener("click", drawVideo);
    