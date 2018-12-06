/*(document).ready(function(){

  // get text entered into field via button or return
// when check button is clicked,  change class of list item to strikethrough
// when delete button is clicked, remove item permanently

$('.js-shopping-list-form').submit( function(event) {
  console.log(event);
  const outputVar = $('.js-shopping-list-form').val
  console.log(outputVar);
  event.preventDefault();
})
// .submit() //when form is returned and pass in function (event handler)
// .preventDefault( ) default action not triggered ( for form submission)
// .toggleClass() add or remove 1+ classes from each element in set of matched elements
// depending on either class presence or value  (name) or (name, state) (({check off list button)))
// .closest(selector) for each element in set get first element that matches the selector by testing
//  the element itself and traversing up through ancestors in dom tree.



});*/


function getTextFromForm() {
  console.log('register listener')
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const outputVar = $('.js-shopping-list-entry');
    const output = outputVar.val();
  const HTML = entryToString(output);
  $('.shopping-list').append(HTML);
  })
};
function isCheckButtonClicked() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(){
    const jObject = $(this).closest('li').find('.shopping-item') //.remove for delete
    jObject.toggleClass('.shopping-item__checked');

  })
}

// function changeClassOfList(jObject) {
//   jObject.toggleClass('.shopping-item__checked');
  
// }

function entryToString(newListItem){
  return ` <li>
  <span class="shopping-item">${newListItem}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li> `
}

function deletebutton() {

}
function main() {

isCheckButtonClicked();

getTextFromForm();

}
$(main);

