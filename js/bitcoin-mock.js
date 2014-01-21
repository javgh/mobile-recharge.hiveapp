var bitcoin = {
  BTC_IN_SATOSHI: 100000000,
  sendMoney: function(address, amount, callback) {
    if(address == "" || address[0] != "1") throw "Not a bitcoin address";
    if(amount.toFixed(0) != amount) throw "Wrong amount "+amount+" "+amount.toFixed(0);
    callback(true, "123");
  },
  getTransaction: function(id, callback) {
    if(id == "123") callback({id: "123"});
  }
}