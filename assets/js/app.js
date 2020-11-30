console.log("tabs");
console.log("modal");




$(function(){
    $(".header__search").click(function(){
        $(".header-search").slideToggle(1000);
    });
});





$(function(){
    $(".burger__ico").click(function(){
        $(".header__menu--burger").slideToggle(1000);
    });
});

function myFunction(x) {
  x.classList.toggle("change");
}