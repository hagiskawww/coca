export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="swticher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const starterPriceYo = document.querySelector('[data-price="starteryo"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const popularPriceYo = document.querySelector('[data-price="popularyo"]');
  const enterPrice = document.querySelector('[data-price="enterprise"]');
  const enterPriceYo = document.querySelector('[data-price="enterpriseyo"]');
  const priceList = {
    starter: {
      default: `$` + 120,
      witchSale: `$` + 100,
    },
    popular: {
      default: `$` + 1680,
      witchSale: `$` + 1400,
    },
    enterprice: {
      default: `$` + 2520,
      witchSale: `$` + 2100,
    },
  };
  const priceListYo = {
    starterYo: {
      default: `$` + 1440,
      witchSale: `$` + 1200,
    },
    popularYo: {
      default: `$` + 20160,
      witchSale: `$` + 16800,
    },
    enterpriseYo: {
      default: `$` + 30240,
      witchSale: `$` + 25200,
    },
  };

  const setPriceWitchSale = () => {
    starterPrice.textContent = priceList.starter.witchSale;
    starterPriceYo.textContent = priceListYo.starterYo.witchSale;
    popularPrice.textContent = priceList.popular.witchSale;
    popularPriceYo.textContent = priceListYo.popularYo.witchSale;
    enterPrice.textContent = priceList.enterprice.witchSale;
    enterPriceYo.textContent = priceListYo.enterpriseYo.witchSale;
  };

  const setPrice = () => {
    starterPrice.textContent = priceList.starter.default;
    starterPriceYo.textContent = priceListYo.starterYo.default;
    popularPrice.textContent = priceList.popular.default;
    popularPriceYo.textContent = priceListYo.popularYo.default;
    enterPrice.textContent = priceList.enterprice.default;
    enterPriceYo.textContent = priceListYo.enterpriseYo.default;
  };

  switcher.checked = true;

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPriceWitchSale();
    } else {
      setPrice();
    }
  });
};
