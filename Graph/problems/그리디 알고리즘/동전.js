
let coins = [1, 5, 10,  50,  100,  500,  1000,  5000,  10000,  50000];
let price = 4200;
let a = 0;
let numberOfCoins = 0;

while(coins.length > 0) {
  let v = a + coins[coins.length-1];
  if(v <= price) {
    a = v;
    numberOfCoins++;
    if(a >= price) {
      break;
    }
  } else {
    coins.pop();
  }
}
console.log(`a=${a}, numberOfCoins=${numberOfCoins}`);



