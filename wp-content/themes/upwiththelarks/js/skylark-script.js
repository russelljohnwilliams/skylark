  var screenWidth = jQuery(window).width()
  var currentPosition = 0

  jQuery( document ).ready(function() {
   addContactDetails()
   cloneEvent()
   buildPages()
   getInstagramImage()
   colours()
 })


// resize function that deletes and redraws the size of the post tiles

jQuery(function(){
  jQuery(window).on("resize", function(event){
    jQuery('#new-main').remove();
    buildPages();
    colours()
  });
})


// function to scroll the viewport back to the first page (the post tiles)

jQuery(function(){
  jQuery('.site-title').bind('click', function(event){
    jQuery('#viewport').stop().animate({
      scrollLeft: (0)
    }, 1000);
    currentPosition = 0
    event.preventDefault();
  });
});

  // function that creates an animated scroll left or right through the pages inside the 'viewport' after a link is clicked in the header menu

  jQuery(function() {
    jQuery('ul>li>a').bind('click',function(event){
      var viewportPosition = jQuery('#viewport').offset().left;
      var anchor = jQuery(this);
      var targetAnchor = jQuery(anchor.attr('href')).offset().left
      var targetAnchorSum = targetAnchor - viewportPosition - 4

      if(targetAnchor != viewportPosition + 4){
        var moveTo = targetAnchorSum + currentPosition
        jQuery('#viewport')
        .stop()
        .animate({
          scrollLeft: (moveTo)
        }, 1000);
        currentPosition = moveTo
      }
      event.preventDefault();
    });
  });

// takes the (hidden with css) tagline, generated within wordpress, splits at an asterix and separates onto new lines to create a multiple line tagline

function addContactDetails(){
  var split = jQuery('.site-description')[0].innerHTML.split('*')
  jQuery("<div></div>")
  .addClass('split-tagline')
  .appendTo('.site-branding');

  for (var i = 0; i < split.length; i++){
    jQuery('<p>').html(split[i]).appendTo('.split-tagline')
    console.log("bang bang")
  }
};

// a plugin is used to pull the most recent image from instagram, this strips away all the irrelevant html and presents just the image without

function getInstagramImage(){

  setTimeout(function(){
    var instagramClone = jQuery('.instagram-clone')
    var instaImage = jQuery('div.post-wrapper')
    .eq(1)
    .find('img')

    instaImage.removeAttr("height width")
    .css({"display" : "block", "height" : "100%", "width" : "100%"})
    .clone()
    .appendTo(instagramClone) }, 2000);
}



function cloneEvent(){

  var openingHoursContent = jQuery('div.hidden-opening-hours')
  .find(".simcal-event-details")
  .first()
  var eventContent = jQuery( "div.hidden-events")
  .find(".simcal-event-details")
  .first()

  var clonedOpeningHours= jQuery('.cloned-opening-hours')
  var clonedEvent = jQuery('.cloned-event')

  openingHoursContent.clone()
  .appendTo(clonedOpeningHours)

  eventContent.clone()
  .appendTo(clonedEvent)
}


function buildPages(){

  var newPosts = jQuery('.page-builder').eq(0)
  var viewportWidth = jQuery('#viewport').width()
  var cw = jQuery('.post-wrapper')
  .css("width", (viewportWidth - 10) / 3 )
  .width();


  jQuery("#main")
  .clone()
  .removeAttr('id')
  .attr('id', "new-main")
  .appendTo(newPosts)

  jQuery('#viewport').height(viewportWidth)
  var viewportHeight = jQuery('#viewport').height()

  jQuery('.post-wrapper').css({'height':cw+'px'});
  jQuery('.page-builder').css('width', (viewportWidth) +'px')
  jQuery('.page-wrapper').css('height', (viewportHeight) +'px')
  jQuery('.page-builder').css('height', (viewportHeight) +'px')
}

// sets background colours of the tiles (make it randomly selected?)

function colours(){
  var colour = ['pink', 'grey', 'orange', 'yellow', 'white', 'turquoise', 'green', 'purple', 'grey']

  for (var i = 0; i < 9; i++){
      // var x = Math.floor((Math.random() * 9) + 1);
      jQuery('.entry-content').eq(9+i).css('background', colour[i])
    }
  }




  // function colours(){

  //   for (var i = 0; i < 9; i++){

  //     var a = Math.floor((Math.random() * (9 - 1)) + 1);
  //     var b = Math.floor((Math.random() * (9 - 1)) + 1);
  //     var c = Math.floor((Math.random() * (9 - 1)) + 1);
  //     var d = Math.floor((Math.random() * (9 - 1)) + 1);
  //     var e = Math.floor((Math.random() * (9 - 1)) + 1);
  //     var f = Math.floor((Math.random() * (9 - 1)) + 1);
  //     jQuery('.entry-content').eq(8+i).css('background', "#"+a+b+c+d+e+f)
  //   }
  // }