function showMobMenu() {
    var x = document.getElementById("mob-menu-list");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}