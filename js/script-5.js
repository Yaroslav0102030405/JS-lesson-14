// - Обьекты, создание через литерал
// - Свойства и методы обьекта
// - this в методах обьекта при обращении к свойствам
// - Перебор обьектов: for...in и методы Object.keys|values|entries

// обьект это сложный тип
// обьект это еще один тип данных



// const playlist = {
//     // свойство состоит из ключа и значения
//     name: [1, 2, 3],
//     b: 5,
//     c: 10,
//     c: 20,
//     // два одинаковых свтойства быть не может по этому значение будет с = 20 то которое ниже. Имена ключей уникальные
// }

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }

// console.log(playlist);

// Оюьект - это возможность сгриупировать характеристики какой-то одной сущности.
// Например, библиотека, пользователь, корзина товаров, плей лист, квартира, машина.

// Мы используем массивы чтобы хранить коллекцию чего-то
// А обьекты используем чтобы групировать характеристики одной сущности

// Консоль меняет местами строчки потому что в массиве они индексированы 0 1 2 3 в четком порядке
// а в оюбьекте они в таком поряжке как брайзеру захочеться (порядок не важен)

// Как отличить обьект от области видимости? Литерал обьекта может существовать только справа от равно = {}
// Три случая где скобки являются литералом обьекта
// 1 когда в переменную записывается (в операции присваивания)
// const x = {}
// // Дальше при передаще функции (когда вы передаете аргумент в функцию)
// console.log({})

// const fn = function (myOject) {
//     console.log(myOject);
// };

// fn({ a: 1, b: 2 });
// // тут происходит присвоение

// // Третий случай - это когда вы что-то возвращаете из функции. Возврат - это тоже самое присвоение
// // когда вы возвращаете из функции куда-то там присваивается
// const rar = function () {
//     return {}
// }

// // 1 это когда вы создаете переменуб и заи=писываете ее туда
// // 2 когда вы передаете аргумент в функцию
// // 3 и когда вы возвращаете из функции сам литерал обьекта

// // Обьект это тоже самое значение и не чем не отличается
// fn(5, {}, [], 'qwe', true);

// Доступ к свойству обьекта
// - obj.key (обращение через точку)
// - obj['key]
// - отсутствующие свойства

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }

// console.log(playlist.name);
// console.log(playlist.rating);
// // 99% эта запись

// const propertyName = 'tracks'

// console.log(playlist[propertyName])
// эта запись 1% случаев но об этом тоже нужно знать
// 99% случаев но бывают такие случаи когда имя свойства хранится в переменной
// Ключ и свойста это всегда строка.

// Бывают случаи когда необходимо создать обьект в котором ключ динамический
// получить что-то из формы и создать обьект такого формата
// const username = 'Mango';
// const email = 'Mango@mail.com';

// const signupDate = {
//     username: username,
//     email: email,
// };

// console.log(signupDate);

// Короткая запись бсвойств
// const username = 'Mango';
// const email = 'Mango@mail.com';

// const signupDate = {
//     username,
//     email,
// };

// console.log(signupDate);
// применяеться когда имя ключа и имя переменной одинаковое

// Вячисляемые свойства
// Если вам необходимо чтобы имя ключа это было значение какой-то переменной
// вы слева от двоиточия ставити открывающие и закрывающие квадратные скобки и туда кидаете имя переменной и ее згначение станет ключом
// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName]: inputValue,
// };

// console.log(colorPickerData);

// В обьекты после их создания можно добавлять элементы (свойства)
// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }

// playlist.qwe = 100;
// playlist.rating = 14;
// console.log(playlist);
// Если нового свойства нет то оно будет добавленно а если оно есть то будет перезаписанно новое значение

// Дальше. Сложные типы. Почему два массива не равны друг другу?
// Они два массива но у них разный ссылочный адрес потому что два разных места в памяти занимают
// Массив сравнивается по ссылке адрессу и у них разные адресса то все досвидание.
// Тоже самое происходит и с обьектами это тоже сложный тип. Тоже самое что в массивах один в один
// Пример. При присваение по ссылке в переменную b пишется указатель на то место в памяти где лежит обьект
// по этому в консоле результат будет true
// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);
// Оьюект самый важный тип данных в JS

// Массивы и функции это обьекты
// const a = [1, 2, 3];

// a.hello = 'smile';

// console.log(a.hello);

// const fn = function () {
//     console.log('hello');
// };

//     fn.hello = 'smile'

// console.dir(fn.hello)

// const a = [1, 2, 3];

// a.push(4);

// console.log(a);
// в обьекте если свойства нет то будет андефайн
// push () - это ключ в которой лежит функция которая что-то делает с обьектом? Да
// Пуш это просто имя метода который лждет в библиотеке и который реализован в языке JS

// Методы обьекта и this при обращении к свойствам в методах

// - changeName
// - addTrack
// - updateRating
// - getTrackCount

// Метод - это самая обычная функция но которая работает именно со свойствами какого-то обьекта

// Например я хочу сделать метод этого плейлиста

// А как мне что-то в обьекте изменить?
// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     // getName: function (a) {
//     //     // это древний синтаксис
//     // console.log('Ага это getName', a);
//     // },
//     getName(a) {
//         console.log('Ага это getName', a);
//         // это современный синтаксис называется метод обьекта (это скоращение а под капотом будет лежат функция)
//         // () - это вывоз функции
//     }
// };

// playlist.getName(5);
// Методы обьекта используються для того чтобы работать со свойствами
// обьект хранит в себе набор характеристик и набор методов для работы с этими характеристиками
// Методы работают со свойствами обьекта
// тут методы могут получать аргументы

// Сделаем несколько методов
// Один из методоов это изменение имени. Он должен изменять имя в переменной  name: 'Мой супер плейлист' на Новое имя
// В методах обьекта вы никогда не должны использовать имя самого обьекта
// this - используеться только внутри метода не свойства. this - есть только у функции
// Добавим еще новый трек
const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
    changeName(newName) {
        console.log(this);

        this.name = newName;
        // тут мы просто перезаписываем новое значение
    },
    addTrack(track) {
        this.tracks.push(track);
        // массив мы пушем 
    },
    updateRating(newRating) {
        this.rating = newRating;
    },
    getTrackCount() {
        return this.tracks.length;
        // тут сделал метод который возвращает длину массива
        // мы используем массив для подсчета длины количество треков это динамическое значение
    },
};

playlist.changeName('Новое имя');

playlist.addTrack('Новый трек');

playlist.updateRating(4);

console.log(playlist);
// И теперь в плей листе будет Новое имя заместь Мой супер плейлист

// Перебор обьекта через for...in и Object.keys|value|entries
// for...in не использовать вообще

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};

let totalFeedback = 0;

// const keys = Object.keys(feedback);
// // тут мы говорим получи ключи из обьекта фитбек

// console.log(keys);

// и теперь мы этот массив перебираем через for...of
// for (const key of keys) {
//     console.log(key);
//     // а как получить значение
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// };

// console.log('totalFeedback:', totalFeedback);

// У конструктора Oject есть такой метод Oject.keys(тут вы передаете обьект feedback )

// Oject.value - возвращает массив значений
const values = Object.values(feedback);

console.log(values);

for (const value of values) {
    console.log(value);

    totalFeedback += value;
};

console.log(totalFeedback);

// Разобрались как перебирать обьект? Получили или ключи или значение и пошли с ним работать и пербирать через for...of
// уже стучаться к элементам

// Может быть обьек в обьекте. То есть обьект может быть значениесвойства другого обьекта.

// Обьект в середине массива - это называется коллекция.

// Работа с коллекцией (массивом обьектов)
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// friends[0].newprop = 123;
// friends[1].newprop = 321;
// friends[2].newprop = 456;
// friends[3].newprop = 654;
// // добавили всем разное значение свойства

// console.table(friends)
// Практически все во вронденде - это массив обьектов
// Сначала мы перебирем массив
// for (const friend of friends) {
//     console.table(friend.name);

//     friend.newprop = 555
    // массив сложных обьектов в for...of вы получаете ссылку на этот обьект
    // можете изментять удалять обновить какое-то свойства 

// console.table(friends)
// тут мы полцили доступ к каждому обьекту

// Задача 1 Сейчас будем искать друга по имени
// Нам нужно перебрать это массив в цикле через for...of
// Получаем доступ к каждому элементу
// const findFrinedByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         // console.log(friend);
//         // console.log(friend.name);
//         // тут получили доступ к каждому свойству name
//         if (friend.name === friendName) {
//             return 'НАШЛИ!!!';
//         }
//     }

//     return 'НЕ НАШЛИ!!!';
// };
 

// console.log(findFrinedByName(friends, 'Poly'));
// console.log(findFrinedByName(friends, 'Chelsy'));
// стандартная работа с массивом обьекта это перебрать через for...of получить доступ к каждому элементу и дальше уже делать что вам необходимо

// Задача 2 Получить имена всех друзей
// Перебрать через for...of
// теперь нужно из этой функции вернуть массив
// нужно боьявить пустой массив запушить в него каждый раз а потом верну
// дд фора создаем в форе пушем и потом возвращаем
// const findFrinedByName = function (allFriends, friendName) { };

// const getAllNames = function (allFriends) {
//     const names = [];
//     // в этот пустой массив будем добавлять именна

//     for (const friend of allFriends) {
//         console.log(friend.name);
        
//         names.push(friend.name);
//         // добавляет именна в наш пустой массив
//     }
    
//     return names;
//     // возвращает новый массив
// };

// console.log(getAllNames(friends));
// обьект вельюс вы используете когда у вас еть один обьект и вам что-о нудно сделать со всеми значениями

// В ИТ самые высокие зарплаты на старте по этому вы должны соответствовать тут все по честному

// Задача 3 Получаем имена только друзей которые онлайн
// тут нужно плучить не имена а целые обьекты этих друзей

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// friends[0].newprop = 123;
// friends[1].newprop = 321;
// friends[2].newprop = 456;
// friends[3].newprop = 654;
// // добавили всем разное значение свойства

// console.table(friends)

// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];
//     // в этот массив мы будем добавлять всех друзей которые онлайн


//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);

//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }

//     return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// сравнить значение онлайн и если он онлайн то добавить в новый массив

// Задача 4 Получить всех друзей которые офлайн

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
];

friends[0].newprop = 123;
friends[1].newprop = 321;
friends[2].newprop = 456;
friends[3].newprop = 654;
// добавили всем разное значение свойства

console.table(friends)

const getOfflineFriends = function (allFriends) {
    const offlineFriends = [];
    // в этот массив мы будем добавлять всех друзей которые онлайн


    for (const friend of allFriends) {
        console.log(friend.online);

        if (!friend.online) {
            offlineFriends.push(friend);
        }
    }

    return offlineFriends;
};

console.log(getOfflineFriends(friends));

// Задача 5 Нужно получить друзей по статусу онлайн
// Функция должна вернуть и онлай и офлайн друзей
const getFriendsByStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

    
    for (const friend of allFriends) {
        if (friend.online) {
            friendsByStatus.online.push(friend);
            continue;
            // тут мы говорим циклу иди на следующую итерацию 
        }

        friendsByStatus.offline.push(friend);
    }

    return friendsByStatus;
};

console.log(getFriendsByStatus(friends));

// Задача 6 Как мне узнать количества свойств в этом обьекте?
const objectProperties = {
    propertyOne: 1,
    propertyTwo: 2,
    propertyThree: 50,
    propertyFour: 100,
};

console.log(Object.keys(objectProperties).length);

// Все что вы видите в интерфейсе это данные
// Ваша корзина товаров эта возможно какой-то массив обьектов
// Ваша сетка из товаров карточек - это массив обьектов из которых составляется динамически эта разметочка
// В первую очередь есть подкапотная логика и на базе этой логики работает интерфейс

// Когда ты будешь создавать интренте магазин ты возьмешь и сделаешь его за 1 день
// Опенкарт хорош для магазинов
// воркпрес хорошо для блоков
// OpenCart CMS ну это не ваш стек вы учитесь не этому и не этим заниматся

// В результате вы учитесь писать приложения довольно большие и слодные с кучей логики с 0
// вы не веб-девелоперы вы фронтенд розработчики и JS это ваш основной стек и 90% вашего времени это JS
// вы люди которые пишите логику и хороша шарить в JS

// Большинство компаний в Украине это Аутсорс то есть они берут заказы где-то за бугром и у себя делают
// Воркпресс - это не програмирование там такой красивый интерфейс как для менджера и ты выбираешь добавить шапачку сайта
// добавить эти элементы добавить футер. Это как конструктор сайтов.
// Фронт настолько глубокий и большой что это учиться не за пол года
// моя задача научивать вас хорошей базы знаний по JS