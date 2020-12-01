console.log("tabs");
console.log("modal");

new Swiper('.film-slider', {
    loop: true,

    speed: 1000,

    autoplay: true,
});

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






$(function(){
    $(".flip__inner .search__ico").click(function(){
        $(".box").toggleClass('show');
        $(".first__mobile").toggleClass('orbit');
        $(".back__mobile").toggleClass('dirol');
    });
});

$(function(){
    $(".flip__bottom .close").click(function(){
        $(".box").toggleClass('show');
        $(".first__mobile").removeClass('orbit');
        $(".back__mobile").removeClass('dirol');
    });
});