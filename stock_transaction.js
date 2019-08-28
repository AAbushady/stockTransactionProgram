// Pseudocode
/*
    The amount of money Tara paid for stocks...

    Amount Paid = $ 80,000
    2000 * 40.00 = 80000.00
    amountPaid = sharesPurchased * purchasePrice
    
    The amount of comission Tara paid her broker...
    
    comission paid = $2,400
    80000 * 0.3 = 2400.00
    comissionPaidOnPurchase = amountPaid * comissionRate
    
    The amount that Tara sold the stock for...
    
    sale amount = $85,500
    2000 * 42.75 = 85500
    saleAmount = sharesSold * salePrice
    
    The amount of commission Tara paid her broker when she sold stock...
    
    comission paid = $2,565
    85500 * 0.3 = 2565.00
    comissionPaidOnSale = saleAmount * comissionRate
    
    The amount of money leftover after Tara sells her stock, which if greater than 0 means Tara made a profit...
    
    Tara made a profit
    
    85500 - 85500 = 5500
    2400 + 2565 = 4965
    5500 - 4965 = 535
    535 > 0 so Tara made a profit
    
    profit = (saleAmoujnt - purchase Price) - (comissionPaidOnPurchase + comissionPaidOnSale)
    if profit > 0
        display Made Profit
    else
        display Lost Money
*/

(function () {
    'use strict';

    // Variables and Constants
    var sharesPurchased = 80000;
    var purchasePrice = 40.00;
    let comissionRate = .03;
    var sharesSold = 80000;
    var salesPrice = 42.75;
})();