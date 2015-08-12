/**
 * Created by metrokobe on 15/7/28. ----- alipay
 */
app.directive('hello',function(){
  return{
    restrict:'E',
    template:'<div>hello</div>',
    replace:false
  }
})
app.directive('accordion',function(){
  return{
    restrict:'EA',
    replace:true,
    transclude:true,
    template:'<div ng-transclude></div>',
    controller:function(){
      var expanders=[];
      this.gotOpend=function(expander){
        angular.forEach(expanders,function(item){
          if(item != expander){
            item.showMe=false;
          }
        })
      }
      this.addExpander=function(item){
        expanders.push(item);
      }
      this.firstOpen=function(){
        expanders[0].showMe=true;
      }
      this.print=function(){
        console.log(expanders)
      }
    }
  }
})
app.directive('expander',function(){
  return{
    restrict:'EA',
    replace:true,
    transclude:true,
    require:'^?accordion',
    scope:{title:'@title'},
    templateUrl:'../partials/me-expander.html',
    link:function(scope,element,attrs,accordionController){
      scope.showMe=false;
      scope.toggle=function(){
        scope.showMe=!scope.showMe;
        accordionController.gotOpend(scope);
      }
      accordionController.addExpander(scope);
      accordionController.firstOpen();
      accordionController.print();

    }
  }
})
app.directive('meblur',function(){
  return{
    //restrict:'EA',
    link:function(scope,element,attrs,accordionController){
        angular.element(element).bind('blur',function(e){
          scope.$apply(attrs.meblur);
        })
    }
  }

})
app.directive('rewrite',function(){

  return{
    restrict:'EA',
    compile:function(element,attrs,accordionController){
      console.log(attrs.rewrite);
      console.log(angular.element(element).parent())
      console.log(typeof attrs.rewrite);

      //debugger;
      //var length=attrs.rewrite;
      //
      for(var i=0;i<attrs.rewrite;i++){
        angular.element(element).parent().after(angular.element(element).clone());
      }
      return function(scope,element,attrs,accordionController){
        //debugger;
        angular.element(element).on('mouseover',function(){
          alert(0);
          console.log(typeof scope.$eval(attrs.rewrite));
        })
        //console.log(typeof scope.$eval(attrs.rewrite));
      }
    }
  }


})
app.directive('medialog',function(){

  return{
    restrict:'E',
    transclude:true,
    scope:{
      close:'&'
    },
    templateUrl:'../partials/test.dialog.html'
  }

})
app.directive('drag',function($document){
  return function(scope,element,attrs){
      element.addClass('drag');
      var startX = 0, startY = 0, x = 0, y = 0;
      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.screenX - x;
        startY = event.screenY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.screenY - startY;
        x = event.screenX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.unbind('mousemove', mousemove);
        $document.unbind('mouseup', mouseup);
      }
    }

})