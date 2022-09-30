fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    var price = document.getElementById("price");
    price.append(data.transactionamount);
    var date = document.getElementById("date");
    date.append(data.transactiondate);

    var sender = document.getElementById("sender");
    sender.append(data.senderDetails.sender);
    var bank = document.getElementById("bank");
    bank.append(data.senderDetails.bank);
    var ifsc = document.getElementById("ifsc");
    ifsc.append(data.senderDetails.IFSC);
    var accountno = document.getElementById("accountno");
    accountno.append(data.senderDetails.accountno);
    var transactionDate = document.getElementById("transactionDate");
    transactionDate.append(data.senderDetails.transactiondate);

    var reciever = document.getElementById("reciever");
    reciever.append(data.recieverDetails.reciever);
    var wallet = document.getElementById("wallet");
    wallet.append(data.recieverDetails.wallet);
    var referenceno = document.getElementById("referenceno");
    referenceno.append(data.recieverDetails.referenceno);
    var transactiondate = document.getElementById("transactiondate");
    transactiondate.append(data.recieverDetails.transactiondate);

    var paymentmethod = document.getElementById("paymentmethod");
    paymentmethod.append(data.paymentmethod);
    var transactionId = document.getElementById("transactionId");
    transactionId.append(data.transactionId);
  });
