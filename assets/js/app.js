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


var lastResFind=""; // последний удачный результат
var copy_page=""; // копия страницы в ихсодном виде
function TrimStr(s) {
     s = s.replace( /^-_=\s+/g, '');
  return s.replace( /-_=\s+$/g, '');
}
function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода
  var obj = window.document.getElementById(inputId);
  var textToFind;

  if (obj) {
    textToFind = TrimStr(obj.value);//обрезаем пробелы
  } else {
    alert("Введенная фраза не найдена");
    return;
  }
  if (textToFind === "") {
    alert("Вы ничего не ввели");
    return;
  }

  if(document.body.innerHTML.indexOf(textToFind)=="-1")
  alert("Ничего не найдено, проверьте правильность ввода!");

  if(copy_page.length>0)
        document.body.innerHTML=copy_page;
  else copy_page=document.body.innerHTML;


  document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");//стираем предыдущие якори для скрола
  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:#f19818'>"+textToFind+"</a>"); //Заменяем найденный текст ссылками с якорем;
  lastResFind=textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
  window.location = '#'+textToFind;//перемещаем скрол к последнему найденному совпадению
  //$(this).parents("films__item");
 }