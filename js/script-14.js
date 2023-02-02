/*
 * На занятии 13 мы научились:
 * - Создавать элементы
 * - Находить элементы
 * - Изменять свойство элементов
 * - Читать свойства элементов
 */

/*
 * События - это реакция браузера на какое-то действие пользователя. Сегодня мы научимся реагировать на действия пользователя
 * Действие пользователя может быть - нажатие клавиши скрол мышки
 * Пользователь кликнул а браузер сгенерил событиу создал это событие и отправил нам
 * Мы как разработчики можем поймать это событие и как-то на него отреагировать (выполнить какой-то код)
 */

/*
 * События
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 * - handle*: handleSubjectEvent
 * - Handler: subjectEventHandler
 * - on*: onSubjectEvent
 * - ссылочная идентичность колбеков
 * - Обьяект события
 */

// Получили ссылку на элемент (кнопку)
const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

// Добавить слушателя событий
// В скобкам первым аргументом вы передаете тип события который вы хотите реагировать прослушивать
// На копку вы вешаете наверное только слик какой-то Событие передается ввиде строки
// Вторым аргументом вы пердаете колбек функцию которая будет выполнена в момент наступления этого события
addListenerBtn.addEventListener("click", () => {
  // Если не нужно отписываться то вы просто кидаете анонимную функцию
  console.log("Вешаю слушателя события на целевую кнопку");

  targetBtn.addEventListener("click", onTargetButtonClick);
});

removeListenerBtn.addEventListener("click", () => {
  console.log("Снимаю слушателя события с целевой кнопки");

    targetBtn.removeEventListener("click", onTargetButtonClick);
    // тут в скобках указываем от чего нужно отписаться от события клика и сняли функцию чтобы она не реагировала
});

function onTargetButtonClick() {
  console.log("Клик по целевой кнопке");
}

// function logMessage() {
//     console.log('Клик по ыелевой кнопке')
// }

// Нюанс как именовать колбек
// function handleTargetButtonClick() {
//     console.log('Клик')
// }

// function TargetButtonClickHandler() {
//   console.log("Клик");
// }

/*
* Виды событий. какие они бывают
*/

/*
* Событие submit
* - Действие браузера по умолчанию
* - Свойство elements
* - Класс FornData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
*/
