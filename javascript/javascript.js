// .js to open and close mobile menu
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// for back-button on form-results to redirect to last page
var element = document.getElementById('back-link');

element.setAttribute('href', document.referrer);

element.onclick = function() {
  history.back();
  return false;
}