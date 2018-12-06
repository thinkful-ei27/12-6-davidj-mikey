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
    //console.log(jObject);
    jObject.hasClass("shopping-item__checked") ? jObject.removeClass("shopping-item__checked") : jObject.addClass("shopping-item__checked");
    //Used tenerary operator in place of toggleClass, becuase toggleClass was not functioning.
  })
}

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
  $('.shopping-list').on('click', '.shopping-item-delete', function(){
     $(this).closest('li').remove();
  })
}

function main() {
  isCheckButtonClicked();
  getTextFromForm();
  deletebutton();
}

$(main);

