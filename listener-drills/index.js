

$(function(){

  $('.thumbnail > img').click(function(event) {
  let thisVar = $('.hero').children('img').replaceWith(event.currentTarget);
  $(event.CurrentTarget).parent('.thumbnail').add(thisVar)
  
    console.log(this);
    event.currentTarget
  
  
  });
});