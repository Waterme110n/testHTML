function toggleDropdown(button) {
    var dropdown = button.nextElementSibling;
    if (dropdown.style.display === "flex") {
        dropdown.style.display = "none";
        button.classList.remove('pressed');
    } else {
        closeAllDropdowns();    
        dropdown.style.display = "flex";
        button.classList.add('pressed');
    }
}

function closeAllDropdowns() {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    var buttons = document.querySelectorAll('.ButtProduct');
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = "none";
        buttons[i].classList.remove('pressed'); 
    }
}
