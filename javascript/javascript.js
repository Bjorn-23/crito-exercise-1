function myFunction() {
    var x = document.getElementById("menu-Bars");
    if (x.className === "menu-bars") {
      x.className += " responsive";
    } else {
      x.className = "menu-bars";
    }
}

