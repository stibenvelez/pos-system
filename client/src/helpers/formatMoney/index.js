var formatMoney = new Intl.NumberFormat("en-US",  { maximumSignificantDigits: 3 },{
    style: "currency",
    currency: "USD",
});

export default formatMoney;