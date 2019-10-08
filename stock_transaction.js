/*global console*/
/*jshint esversion:6*/

(function () {
    'use strict';

    // Variables and Constants
    let sharesPurchased = 2000;
    let purchasePrice = 40.00;
    let comissionRate = 0.03;
    let sharesSold = 2000;
    let salesPrice = 42.75;

    // Calculate the numbers
    let amountPaid = sharesPurchased * purchasePrice;
    let comissionPaidOnPurchase = amountPaid * comissionRate;
    let saleAmount = sharesSold * salesPrice;
    let comissionPaidOnSale = saleAmount * comissionRate;
    let profit = (saleAmount - amountPaid) - (comissionPaidOnPurchase + comissionPaidOnSale);

    // Display Results
    console.log(`Amount Paid: \$${amountPaid.toFixed(2)}`);
    console.log(`Comission Paid on Purchase: \$${comissionPaidOnPurchase.toFixed(2)}`);
    console.log(`Sale Amount: : \$${saleAmount.toFixed(2)}`);
    console.log(`Comission Paid on Sale: \$${comissionPaidOnSale.toFixed(2)}`);
    console.log(`Profit: \$${profit.toFixed(2)}`);

    if (profit > 0.00) {
        console.log("Tara Made a Profit!!");
    } else if (profit === 0.00) {
        console.log("Tara broke even.");
    } else {
        console.log("Tara Lost Money...");
    }
})();
