const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const addLogin = function (allLogins, login) {
  isLoginValid(allLogins, login);
};

const isLoginValid = function (allLogins, login) {
  if (login.length >= 4 && login.length <= 16) {
    isLoginUnique(allLogins, login);
  } else {
    return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  }
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {
    console.log("Такой логин уже используется!");
  } else {
    logins.push(login);
    console.log("Логин успешно добавлен!");
  }
};

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов
