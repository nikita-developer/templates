$(document).ready(function () {
    var $arryDay = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    var $arryMont = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var $arryMontRU = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    /* проставляем дату в коммитах */
    dataComments('js-commits__date', $arryDay, $arryMont);

    /* проставляем дату */
    dataFull('data', $arryDay, $arryMont);

    /* проставляем текущий год */
    dataYear('year');

    /* форма отправки коммита */
    sendMessage('send-message', 'commits__add-btn', 'commits__field-name', 'commits__field-message', 'commits__sucses');

    /* 
    массив месяцев ----------------------------------
    массив дней ---------------------------          |
    класс коммитов -------------          |          |
                                |         |          |*/
    function dataComments(className, $arryDay, $arryMont) {
        var className = $('.' + className);
        for (var i = className.length - 1; i >= 0; i--) {
            var d = new Date();
            d.setDate(d.getDate() - randomInteger(i, i + 1));
            className.eq(className.length - i - 1).text($arryDay[d.getDate() - 1] + '.' + $arryMont[d.getMonth()] + '.' + d.getFullYear());
        }
    }

    /* рандомное число */
    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    /* полная дата */
    function dataFull(className, $arryDay, $arryMont) {
        var d = new Date(),
            myClass = $('.' + className);
        myClass.text($arryDay[d.getDate() - 1] + '.' + $arryMont[d.getMonth()] + '.' + d.getFullYear());
    }

    /* год */
    function dataYear(className) {
        var myClass = $('.' + className);
        myClass.text(new Date().getFullYear());
    }

    /* 
    класс блока в котором будет сообщение об успешно отправленом коммите -----
    класс поля с сообщением -------------------------------------             |
    класс поля с именем -----------------------------            |            |
    класс кнопки отправки -------------              |           |            |
    класс с формой ---------           |             |           |            |
                            |          |             |           |            |*/
    function sendMessage(classForm, classButton, classInput, classTextarea, $sucses) {
        classInput = $('.' + classInput);
        classTextarea = $('.' + classTextarea);
        sucses = $('.' + $sucses);
        $('.' + $sucses).hide();

        $('.' + classButton).click(function () {
            if (classInput.length) {
                if (classInput.val() == '') {
                    classInput.css('outline', '1px solid red');
                    if (classTextarea.length) {
                        if (classTextarea.val() == '') {
                            classTextarea.css('outline', '1px solid red');
                        } else {
                            classTextarea.css('outline', '1px solid green');
                        }
                    }
                } else {
                    classInput.css('outline', '1px solid green');
                    if (classTextarea.length) {
                        if (classTextarea.val() == '') {
                            classTextarea.css('outline', '1px solid red');
                        } else {
                            classTextarea.css('outline', '1px solid green');
                            $('.' + classForm).hide();
                            $('.' + $sucses).fadeIn();
                        }
                    } else {
                        $('.' + classForm).hide();
                        $('.' + $sucses).fadeIn();
                    }
                }
            }
        })
    }
});