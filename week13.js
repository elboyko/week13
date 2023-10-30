//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date(2023, 10, 18);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date(2023, 11, 10);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
const timeDiff = Math.abs(currentDate.getTime() - futureDate.getTime());
const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
console.log(days);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date(2023, 09, 26);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
const daysDiff = Math.abs(currentDate.getTime() - pastDate.getTime());
const days1 = Math.ceil(daysDiff / (1000 * 3600 * 24));
console.log(days1);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date(2023, 10, 1);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
const nextDays = nextWeek.getDay();
console.log(nextDays);

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const nowYear = new Date();
const currentYear1 = nowYear.getFullYear();
const futureYear = currentYear1 + 5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(2024, 10, 18);
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
const diffYear = Math.abs(futureYear - currentYear1);
console.log(diffYear);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const date1 = new Date(Date.parse(strDate));
console.log(date1);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const timeStamp = Date.parse(strDate);
console.log(timeStamp);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = '2023h13h15';
const date2 = Date.parse(date);
console.log(date2);
if (date2 !== NaN) {
   console.log('Неправильный формат даты');
} else {
   console.log('Правильный формат даты')
};

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0) {
   console.log(`переменная number является положительным числом `);
} else {
   console.log(`переменная number является отрицательным числом `);
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 == 0) {
   console.log(`переменная number является четным числом `);
} else {
   console.log(`переменная number является нечетным числом `);
}

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 == 0) {
   console.log(`переменная number является кратной 3 `);
} else {
   console.log(`переменная number не является кратной 3`);
}

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number >= 0 && number < 10) {
   console.log(`переменная number является однозначным числом `);
} else {
   console.log(`переменная number не является однозначным числом`);
}

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number >= 10 && number < 100) {
   console.log(`переменная number является двузначным числом `);
} else {
   console.log(`переменная number не является двузначным числом`);
}

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number >= 0) {
   console.log(`переменная number является положительным числом `);
} else {
   console.log(`переменная number является отрицательным числом `);
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 == 0) {
   console.log(`переменная number является кратной 5 `);
} else if (number % 7 == 0) {
   console.log(`переменная number является кратной 7`);
} else {
   console.log(`переменная number не является кратной 5 или 7`);
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number < 0) {
   console.log(`переменная number является отрицательным числом `);
} else if (number == 0) {
   console.log(`переменная number является нулем `);
} else {
   console.log(`переменная number не является нулем и не является отрицательным числом `);
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number >= 100 && number < 1000) {
   console.log(`переменная number является трехзначным числом `);
} else {
   console.log(`переменная number не является трехзначным числом`);
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).

const numberDay = "5";
switch (numberDay) {
   case "1":
      console.log("понедельник");
      break;
   case "2":
      console.log("вторник");
      break;
   case "3":
      console.log("среда");
      break;
   case "4":
      console.log("четверг");
      break;
   case "5":
      console.log("пятница");
      break;
   case "6":
      console.log("суббота");
      break;
   case "7":
      console.log("воскресенье");
      break;
}

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
const direction = "S";
let fullName;

switch (direction) {
   case "N":
      console.log('N - "Север"');
      break;
   case "S":
      console.log('S - "Юг"');
      break;
   case "E":
      console.log('E - "Восток"');
      break;
   case "W":
      console.log('W - "Запад"');
      break;
}
