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

