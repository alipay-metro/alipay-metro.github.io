app.directive('photograph',function(){
	return{
		restrict:'EA',
    // replace:true,
		templateUrl: '../partials/photograph.directive.html',
		link:function(scope,element,attrs){
			if(localStorage.praghtime==getDate()){
				scope.over=true;
				var keyWord="photoList@alipay-metro"+(localStorage.length-1);
    		var info=localStorage.getItem(keyWord);
    		console.log(keyWord)
    		console.log(info)
    		info=info.split(",");
    		element.find('img').attr('src',info[2]+","+info[3]);
    		angular.element(element.find('p')[4]).html(info[1]);
				scope.$apply();
			}
			var getMedia;
			var photograph=angular.element(element.find('button')[0]);
			var startBtn=angular.element(element.find('button')[1]);
			var saveBtn=angular.element(element.find('button')[2]);
			startBtn.on('click', function(event) {
				event.preventDefault();
				console.log(this)
				navigator.getMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);
				navigator.getMedia(contrainsObj,successFn,errFn)
			});
    var contrainsObj={
      "video": true,
    };
    var audio,audioType;
    var video = document.getElementById('video');
    var successFn= function(localMediaStream) {
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
      scope.graph=false;
      scope.$apply();
      console.log(scope);
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
    // window.addEventListener("DOMContentLoaded",,false);
    var photoBtn=document.getElementById("graph");
    // var photo2video=document.getElementById("photo2video");
    var canvas=document.getElementById("person-photo");

    var context=canvas.getContext("2d");
    photoBtn.addEventListener("click", function(){
      context.drawImage(video, 0, 0, 500, 480);
    })
    // function drawVideo(){
    //   setInterval(function(){
    //     context.drawImage(video, 0, 0, 500, 480);
    //   }, 60);
    // }
    console.log(photograph)


    
    photograph.on('click', function(event) {
    	event.preventDefault();
    	/* Act on the event */
    	context.drawImage(video, 0, 0, 500, 480);
    	scope.rightWord=true;
    	scope.photoandword=true;
    	scope.$apply();
    	
    	// console.log(img)
    });
    function getDate(){
    	var y=new Date().getFullYear()+"";
    	var m=new Date().getMonth()+1+"";
    	var d=new Date().getDate()+"";
    	return y+m+d+"";
    }
    saveBtn.on('click',function(event) {
    	event.preventDefault();
    	var img=canvas.toDataURL("image/png");
    	var todayWord=angular.element(element.find('textarea')[0]).val();
    	var time=new Date().getTime();
    	var info=new Array();
    	info.push(time);
    	info.push(todayWord);
    	info.push(img);
    	element.find('img').attr('src',img);
    	angular.element(element.find('p')[4]).html(todayWord);
    	scope.over=true;
    	scope.$apply();
    	localStorage.praghtime=getDate();
     	var keyWord="photoList@alipay-metro"+localStorage.length;
    	localStorage.setItem(keyWord,info);
    	// console.log(localStorage.getItem(keyWord));
    });
	}

}
})