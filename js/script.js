

1
2
3
4
5
6
7
8
9
10
11
$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
	$('#accordeon .programm__acc-head').on('click', f_acc);
});
 
function f_acc(){
//скрываем все кроме того, что должны открыть
  $('#accordeon .programm__acc-text').not($(this).next()).slideUp(500);
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(500);
}

$(".programm__acc-link").on("click", function (e) {
    e.preventDefault();
    // $(".programm__acc-link").removeClass("programm__acc-link--active");
    // $(".programm__acc-text").slideUp();
    // $(this).toggleClass("programm__acc-link--active");
    // $(this).children(".programm__acc-text").slideDown();
    if ($(this).hasClass("programm__acc-link--active")) {
      $(this).removeClass("programm__acc-link--active");
    //   $(this).children(".programm__acc-text").slideUp();
    } else {
      $(".programm__acc-link").removeClass("programm__acc-link--active");
    //   $(".programm__acc-text").slideUp();
      $(this).addClass("programm__acc-link--active");
    //   $(this).children(".programm__acc-text").slideDown();
    }
  });










$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
	$('#accordeon .faq__acc-head').on('click', f_acc);
});
 
function f_acc(){
//скрываем все кроме того, что должны открыть
  $('#accordeon .faq__acc-text').not($(this).next()).slideUp(500);
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(500);
}

$(".faq__acc-link").on("click", function (e) {
    e.preventDefault();
    // $(".programm__acc-link").removeClass("programm__acc-link--active");
    // $(".programm__acc-text").slideUp();
    // $(this).toggleClass("programm__acc-link--active");
    // $(this).children(".programm__acc-text").slideDown();
    if ($(this).hasClass("faq__acc-link--active")) {
      $(this).removeClass("faq__acc-link--active");
    //   $(this).children(".programm__acc-text").slideUp();
    } else {
      $(".faq__acc-link").removeClass("faq__acc-link--active");
    //   $(".programm__acc-text").slideUp();
      $(this).addClass("faq__acc-link--active");
    //   $(this).children(".programm__acc-text").slideDown();
    }
  });