let numbers = [];
let total = 0;

while (true) {
  let input = prompt(`Введите число`);

  if (input === null) {
    break;
  }
  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  const value = Number(input);
  numbers.push(value);
  console.log(numbers);

};

for (const number of numbers) {
  console.log(number);
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
