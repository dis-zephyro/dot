
// menu --------

$(document).ready(function() {
// Указываем переменные
    var accordion_head = $('.lesson-theme-list li > a'),
        accordion_body = $('.lesson-theme-list li > .sub-nav');

// Функция клика
    accordion_head.on('click', function(event) {
// Скрывает открытый раздел по повторному клику
        event.preventDefault();
        if ($(this).attr('class') == 'active'){
            accordion_body.slideUp('normal')
            $(this).removeClass('active');
            return false;
        }
// Открывает следующий, скрывая открытый
        if ($(this).attr('class') != 'active'){
            accordion_body.slideUp('normal');
            $(this).next().stop(true,true).slideToggle('normal');
            accordion_head.removeClass('active');
            $(this).addClass('active');
        }
    });
});


/* Поле отправки файла */

function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }
    var filename = str.slice(i);
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}



$(".teacher-link, .support-link").fancybox({
    "padding" : 0,
    "closeBtn" : false
});

$(".enter").fancybox({
    "padding" : 0,
    "closeBtn" : false
});

$('.btn-close').click(function(){
    $.fancybox.close();
});

// Сообщения JGrowl -- http://plugindetector.com/ru/jgrowl
// Плагин можно привязать к какому либо действию, например к ajax обработчику формы

$('.test-button').click(function(event){
    event.preventDefault();
    $.jGrowl('Ваш комментарий будет размещен<br/>после модерации.', {
        life:6000,
        position: 'bottom-right'
    });
});