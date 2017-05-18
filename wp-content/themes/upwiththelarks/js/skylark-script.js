jQuery( document ).ready(function() {
  // matchHeightWithWidthOfPost()
  cloneEvent()
  buildPages()
  getInstagramImage()

  jQuery(window).on("resize", function(event){
    jQuery('#new-main').remove();
    buildPages()

  });

})

// function matchHeightWithWidthOfPost(){
//   var cw = jQuery('.post').width();
//   jQuery('.post').css({'height':cw+'px'});
// }
function getInstagramImage(){
  setTimeout(function(){  var instaImage = jQuery('div.post-wrapper').eq(1).find('img')
  // console.log("bang", instaImage[0])
  var instagramClone = jQuery('.instagram-clone')
  instaImage.removeAttr("height width").css({"display" : "block", "height" : "100%", "width" : "100%"}).clone().appendTo(instagramClone) }, 2000);

}

function cloneEvent(){
var openingHoursContent = jQuery('div.hidden-opening-hours').find(".simcal-event-details").first()
var clonedOpeningHours= jQuery('.cloned-opening-hours')
openingHoursContent.clone().appendTo(clonedOpeningHours)
var eventContent = jQuery( "div.hidden-events").find(".simcal-event-details").first()
// console.log("clone", eventContent[0])
var clonedEvent = jQuery('.cloned-event')
eventContent.clone().appendTo(clonedEvent)

}

function buildPages(){


  var newPosts = jQuery('.page-builder').eq(0)
  jQuery("#main").clone().removeAttr('id').attr('id', "new-main").appendTo(newPosts)

  var cw = jQuery('.post').width();
  jQuery('.post').css({'height':cw+'px'});

  // for (var i=0; i < 8; i++){
  //   var posts = jQuery('.page-builder').eq(i)
  //   console.log("posts", newPosts)
  //   jQuery(".post-wrapper").clone().appendTo(posts)
  // }
  //create same number of pages as there are "page-builder" divs
  // clone content of "page-builder" divs into each new page inside the "page-wrapper" div inside "viewport" div. 

}