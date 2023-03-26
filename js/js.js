
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// down to top : scroll
const scrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: "smooth",

    })
};

// document.querySelector("").onclick = scrollToTop;
// end scroll smooth"




// var remove = document.getElementById('javascripta');
// var add = document.getElementById('javascript');

// remove.addEventListener('click', () => {
//     add.classList.toggle('remove');
//     remove.classList.toggle('remove');
// })
// remove.addEventListener('click', () => {
//     add.classList.add('remove');
// })


function openNav() {
    var element = document.getElementById("javascript");
    element.classList.remove("remove");
}
function closeNav() {
    var elementa = document.getElementById("javascript");
    elementa.classList.add("remove");
}

// $(document).ready(function () {
//     $(".openbar").click(function () {
//         $(".navemobile").removeclass("remove");
//     })
// })

