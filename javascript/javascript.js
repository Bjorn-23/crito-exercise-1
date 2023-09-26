function myFunction() {
    var x = document.getElementById("menu-Bars");
    if (x.className === "menu-bars") {
      x.className += " responsive";
    } else {
      x.className = "menu-bars";
    }
}


// for mobile menu to slide in

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

