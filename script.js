/*const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // для `postgres`


let tg = window.Telegram.WebApp;
tg.expand(); //расширяем на все окно
tg.MainButton.show() // показать кнопку
tg.MainButton.enable()
tg.MainButton.text = "СОХРАНИТЬ И ЗАКРЫТЬ"; //изменяем текст кнопки
tg.MainButton.textColor = "#fff0f5"; //изменяем цвет текста кнопки
tg.MainButton.color = "#8942d6"; //изменяем цвет бэкграунда кнопки
/*tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметр
*/

function switch_card(card_name) {
    let tg = window.Telegram.WebApp;
    const xhr = new XMLHttpRequest()
    xhr.open(
        "GET",
        "http://localhost:5000/cards/" + card_name.toString() + "/" + tg.initDataUnsafe.user.id.toString()
    )
    xhr.send()
}


//const data_to_tg = {}; // Object to store slider states
//
//    // JavaScript code for toggle sliders
//const toggleSliders = document.querySelectorAll('.toggle-slider');
//toggleSliders.forEach(slider => {
//  slider.addEventListener('click', function(event) {
//    const input = event.target.previousElementSibling; // The hidden input field
//    const sliderName = input.name;
//    const sliderStatus = input.checked; // Get the checked status
//
//    // Update slider states object
//    data_to_tg[sliderName] = sliderStatus;
//
//
//    // Output slider states object to the console
//    const jsondata_to_tg = JSON.stringify(data_to_tg)
//    console.log('Состояния слайдеров:', jsondata_to_tg);
//  });
//});
//
//
//const inputFields = document.querySelectorAll('.input-field');
//inputFields.forEach(inputField => {
//  inputField.addEventListener('input', function(event) {
//    const inputValue = parseInt(event.target.value); // Парсим введенное значение как целое число
//    const inputName = event.target.name;
//    if (!isNaN(inputValue)) {
//      data_to_tg[inputName] = inputValue;
//    }
//  });
//});
///*
//Telegram.WebApp.onEvent('mainButtonClicked', function() {
//  const jsondata_to_tg = JSON.stringify(data_to_tg); // Преобразование объекта в строку JSON
//  tg.sendData(jsondata_to_tg); // Отправка данных в виде строки JSON
//});*/
