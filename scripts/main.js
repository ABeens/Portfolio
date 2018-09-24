$(document).ready(function () {

})

function openNav() {
    var navMenu = document.getElementById("myNav");
    if (navMenu.style.display == "none") {
        navMenu.style.display = "block";
    }
    else
    {
        navMenu.style.display = "none";
    }

}

function closeNav() {

    document.getElementById("myNav").style.width = "0";
}


