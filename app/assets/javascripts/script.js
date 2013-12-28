jQuery(document).ready(function () {
  // Superfish Menu
  $('#navigation').superfish({
    animation:     {opacity:'show',height:'show'},   
    animationOut:  {opacity:'hide'},   
    speed:         'normal',
    speedOut:      'normal',
    delay:         0, 
    autoArrows:    false          
  }); 
 
  // Load Vegas Plugin
  $.vegas('slideshow', {
    backgrounds:[
      { src:'/assets/backgrounds/nytimes.jpg', fade:2000},
      { src:'/assets/backgrounds/background-2.jpg', fade:2000},
      { src:'/assets/backgrounds/brookbridge.jpg', fade:2000},
      { src:'/assets/backgrounds/nycstreets.jpg', fade:2000},
      { src:'/assets/backgrounds/nyccityline.jpg', fade:2000},
      { src:'/assets/Home/background-1.jpg', fade:2000}
    ]
  })('overlay', {
    src:'assets/img/overlay.png'
  }); 
 
});