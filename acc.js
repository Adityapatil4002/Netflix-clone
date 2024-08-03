
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function GetStartedClicked() {
  let GetStartedButton = document.getElementById('GetStartedButton');
  let EmailText = document.getElementById('EmailText');
  alert(EmailText.value);
  GetStartedButton.style.background = '#12ad12';
}

window.onload = function() {

}
