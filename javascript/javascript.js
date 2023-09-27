// For (.absolute-mb) mobile menu - not currently used

// function myFunction() {
//     var x = document.getElementById("menu-Bars");
//     if (x.className === "menu-bars") {
//       x.className += " responsive";
//     } else {
//       x.className = "menu-bars";
//     }
// }


// for mobile menu (#myNav) to slide in

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



var element = document.getElementById('back-link');

element.setAttribute('href', document.referrer);

element.onclick = function() {
  history.back();
  return false;
}