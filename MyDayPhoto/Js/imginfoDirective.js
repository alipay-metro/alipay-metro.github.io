app.directive('imgitem',function(){
	return{
		restrict:'EA',
		templateUrl: '../partials/imginfo.directive.html',
		scope:{
			time:"@",
			img:"@",
			word:"@"
		}
	}
})