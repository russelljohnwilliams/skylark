  var screenWidth = jQuery(window).width()
  var currentPosition = 0


  jQuery( document ).ready(function() {
    cloneEvent()
    buildPages()
    getInstagramImage()
  // setViewportWidth()
  jQuery(window).on("resize", function(event){
    jQuery('#new-main').remove();
    buildPages();
  });
})

  jQuery(function(){
    jQuery('.site-title').bind('click', function(event){

        jQuery('#viewport').stop().animate({
          scrollLeft: (0)
        }, 1000);
        currentPosition = 0
        console.log("currentPosition", currentPosition)
      
      event.preventDefault();

    });
  });

  jQuery(function() {

    jQuery('ul>li>a').bind('click',function(event){

      var viewportPosition = jQuery('#viewport').offset().left;
      var anchor = jQuery(this);
      var targetAnchor = jQuery(anchor.attr('href')).offset().left
      var targetAnchorSum = targetAnchor - viewportPosition - 4

      console.log("targetAnchor", targetAnchorSum)
      if(targetAnchor != viewportPosition + 4){
        var moveTo = targetAnchorSum + currentPosition
        jQuery('#viewport').stop().animate({
          scrollLeft: (moveTo)
        }, 1000);
        currentPosition = moveTo
        console.log("currentPosition", currentPosition)
      }
      event.preventDefault();
    });
  });


  function getInstagramImage(){
    setTimeout(function(){  var instaImage = jQuery('div.post-wrapper').eq(1).find('img')
      var instagramClone = jQuery('.instagram-clone')
      instaImage.removeAttr("height width").css({"display" : "block", "height" : "100%", "width" : "100%"}).clone().appendTo(instagramClone) }, 2000);
  }

  function cloneEvent(){
    var openingHoursContent = jQuery('div.hidden-opening-hours').find(".simcal-event-details").first()
    var clonedOpeningHours= jQuery('.cloned-opening-hours')
    openingHoursContent.clone().appendTo(clonedOpeningHours)
    var eventContent = jQuery( "div.hidden-events").find(".simcal-event-details").first()
    var clonedEvent = jQuery('.cloned-event')
    eventContent.clone().appendTo(clonedEvent)
  }


  function buildPages(){
    var newPosts = jQuery('.page-builder').eq(0)
    jQuery("#main").clone().removeAttr('id').attr('id', "new-main").appendTo(newPosts)
    var width = jQuery('#viewport').width();
    jQuery('#viewport').height(width)
    jQuery('.post-wrapper').css("width", (width - 10) / 3 )
    var cw = jQuery('.post-wrapper').width();
    jQuery('.post-wrapper').css({'height':cw+'px'});

    var viewportWidth = jQuery('#viewport').width()
    jQuery('.page-builder').css('width', (viewportWidth) +'px')

    var viewportHeight = jQuery('#viewport').height()

    jQuery('.page-wrapper').css('height', (viewportHeight) +'px')
    jQuery('.page-builder').css('height', (viewportHeight) +'px')
  }


// page wrapper width = .eq() of last page x width of page builder














// jQuery(function() {
//   jQuery('ul>li>a').bind('click',function(event){

// var the_id = jQuery(this).attr("href");

//     jQuery('#page-wrapper').animate({
//         scrollLeft:jQuery(the_id).offset().left
//     }, 'slow');

// return false;});
// })









// function setViewportWidth(){
//   console.log("screenWidth", screenWidth)
//   console.log("viewportWidth", viewportWidth)
//   console.log("gutter", gutter  )
//   jQuery('#viewport').css({"margin-left": gutter, "width" : viewportWidth})
//   buildPages()
// }



// for (var i=0; i < 8; i++){
//   var posts = jQuery('.page-builder').eq(i)
//   console.log("posts", newPosts)
//   jQuery(".post-wrapper").clone().appendTo(posts)
// }
//create same number of pages as there are "page-builder" divs
// clone content of "page-builder" divs into each new page inside the "page-wrapper" div inside "viewport" div. 










//     // if( jQuery('.home-page').offset().left == viewportPosition + 4 && targetAnchor != viewportPosition + 4 ){

//     //   // if(targetAnchor != viewportPosition + 4){
//     //     jQuery('#viewport').stop().animate({
//     //       scrollLeft: (targetAnchorSum)
//     //     }, 1000);
//     //     currentPosition += targetAnchorSum
//     //     console.log("currentPosition", currentPosition)
//       // }
//     // }else{
//         if(targetAnchor != viewportPosition + 4){
//           var moveTo = targetAnchorSum + currentPosition
//           jQuery('#viewport').stop().animate({
//             scrollLeft: (moveTo)
//           }, 1000);
//           currentPosition = moveTo
//           console.log("currentPosition", currentPosition)
//         }
//       // }

//     event.preventDefault();
//   });
// });