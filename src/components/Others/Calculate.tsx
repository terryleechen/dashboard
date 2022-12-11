type Stock = {
  id: number;
  symbol: string;
  name: string;
  amount: number;
  price: number;
  value: number;
};

function Calculate(port: Stock[]) {
  var numberOfShares = 0;
  var totalValue = 0;
  var portItems = 0;
  var top3: Stock[] = new Array<Stock>(3);

  let num1 = Number.NEGATIVE_INFINITY;
  let num2 = Number.NEGATIVE_INFINITY;
  let num3 = Number.NEGATIVE_INFINITY;

  //number of stocks in portfolio
  portItems = port.length;

  // calculate top 3
  for (let i = 0; i < port.length; i++) {
    if (port[i].value > num1) {
      let temp1 = num1;
      let temp2 = num2;
      num1 = port[i].value;
      num2 = temp1;
      num3 = temp2;
    } else if (port[i].value > num2) {
      let temp2 = num2;
      num2 = port[i].value;
      num3 = temp2;
    } else if (port[i].value > num3) {
      num3 = port[i].value;
    }
  }

  //total value of portfolio
  Object.keys(port).map(function (index) {
    let i: number = +index;
    let value = port[i].value;
    let amount = port[i].amount;
    totalValue += value;
    numberOfShares += amount;

    // set top 3
    if (port[i].value === num1) {
      top3[0] = port[i];
    } else if (port[i].value === num2) {
      top3[1] = port[i];
    } else if (port[i].value === num3) {
      top3[2] = port[i];
    }
  });

  return { numberOfShares, totalValue, portItems, top3 };
}
export default Calculate;
