// time for some code

function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    var changeText = document.getElementById("changeText");
    if (changeText.innerHTML === "🌑") {
        changeText.innerHTML = "☀️";
      } else {
        changeText.innerHTML = "🌑";
      }
}

function scrollToElement(scrollTo){
  document.getElementById(scrollTo).scrollIntoView({behavior: 'smooth'});
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 



$('#sticky-text').stickySectionHeaders({
  stickyClass     : 'sticky',
  headlineSelector: 'strong'
});