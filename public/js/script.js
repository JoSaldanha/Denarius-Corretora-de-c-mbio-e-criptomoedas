const urlCoin = 'https://economia.awesomeapi.com.br/last/';
const tableCoins = document.querySelector('#table-coins');

const coinsListTable = ['BTC-BRL', 'ETH-BRL', 'XRP-BRL', 'USD-BRLT', 'EUR-BRL', 'GBP-BRL'];

const createElement = (tag, className)=>{
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const createCoinCard = (coins)=>{
  const cardDiv = createElement('div', 'col text-center my-3');
  const coinCode = createElement('h5','col');
  const coinCodeIn = createElement('h5','col');

  tableCoins.appendChild(cardDiv);
  cardDiv.appendChild(coinCode);
  cardDiv.appendChild(coinCodeIn);

  fetch(urlCoin+coins).then(res => res.json()).then((data)=>{
    const key = Object.keys(data)[0];
    // console.log(data[key]);
    coinCode.innerHTML = data[key].code;
    coinCodeIn.innerHTML = `R$ ${data[key].ask}`;
  }).catch((e)=>{
      throw new Error(e);
  })
}

coinsListTable.forEach((element) => {
    createCoinCard(element);
});
