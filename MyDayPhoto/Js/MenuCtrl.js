app.controller('MenuCtrl', function($scope){
	// console.log(navItem);
	var navBottom=angular.element(document.getElementById("nav-bottom"));
	var navItem=angular.element(document.getElementsByClassName("nav-item"));
	console.log(navItem)
	navItem.on('mouseenter', function(event) {
		// event.preventDefault();
		/* Act on the event */
		var oldLeft=navBottom[0].style.left;
		console.log(oldLeft)
		var left=this.offsetLeft;
		console.log(navBottom)
		console.log(navBottom[0].style.left);
		navBottom[0].style.left=(left-50)+'px';
		var clickOver=false;
		angular.element(this).on('mouseout', function(event) {
			// event.preventDefault();
			/* Act on the event */
			// alert(1)
			if(!clickOver){
				navBottom[0].style.left=oldLeft;
				clickOver=false;
			}
			
		});
		angular.element(this).on('click', function(event) {
			// event.preventDefault();
			/* Act on the event */
			clickOver=true;
			var left=this.offsetLeft;
			console.log(navBottom)
			console.log(navBottom[0].style.left);
			navBottom[0].style.left=(left-50)+'px';
		});
	});
	navItem.on('click', function(event) {
		// event.preventDefault();
		/* Act on the event */
		var left=this.offsetLeft;
		console.log(navBottom)
		console.log(navBottom[0].style.left);
		navBottom[0].style.left=(left-50)+'px';
	});
	
})