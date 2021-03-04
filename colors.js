var links = {
    setcolor:function(color){
      // var alist = document.querySelectorAll('a');
      // var i = 0
      // while(i < alist.length){
      // alist[i].style.color = color;
      // i = i+1;
      // }
      $('a').css('color',color);
    }
  }
  var body ={
    setcolor:function(color){
      // document.querySelector('body').style.color = color;
      $('body').css('color',color);
    },
    setbackgroundcolor:function(color){
      // document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor',color);
    }
  }
  function nightdayhandler(self){
     var target = document.querySelector('body')
    if(self.value ==='night'){
      body.setbackgroundcolor('black');
      body.setcolor("white");
      self.value = 'day';

      links.setcolor('yellow');
    }else { 
      body.setbackgroundcolor('white');
      body.setcolor('black');
      self.value = 'night';
      links.setcolor('blue');
    }
  }