const calculateEngravingPrice = function (message, pricePerWord) {
  let allMessage = 0;

  for (let i = 0; i < message.length; i += 1 ) {
    if (message[i] === ` `) {
      allMessage += 1;
    }
  }
  return (allMessage + 1)*pricePerWord;
}

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);
console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);