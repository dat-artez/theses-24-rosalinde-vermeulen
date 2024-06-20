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



document.addEventListener('DOMContentLoaded', () => {
    const stickyText = document.querySelector('.sticky-text');
    const chapters = document.querySelectorAll('.chapter');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stickyText.textContent = entry.target.querySelector('.stickyText').textContent;
                stickyText.style.display = 'block';
            } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
                stickyText.style.display = 'none';
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    chapters.forEach(chapter => {
        observer.observe(chapter);
    });
});