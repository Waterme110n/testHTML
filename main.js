function toggleDropdown(button) {
  var dropdown = button.nextElementSibling;

  if (dropdown.classList.contains('dropdown-content-off')) {
    dropdown.classList.remove('dropdown-content-off');
    dropdown.classList.add('dropdown-content');
    button.classList.add('pressed');
  } else {
    dropdown.classList.add('dropdown-content-off');
    dropdown.classList.remove('dropdown-content');
    button.classList.remove('pressed');
  }
}

var dropdownContents = document.querySelectorAll('.dropdown-content');
dropdownContents.forEach(function (dropdown) {
  dropdown.classList.remove('dropdown-content');
  dropdown.classList.add('dropdown-content-off');
});


var buttons = document.querySelectorAll('.ButtProduct');
buttons.forEach(function (button) {
  button.classList.remove('pressed');
});
