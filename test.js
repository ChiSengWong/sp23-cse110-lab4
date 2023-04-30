function sumValues(n1, n2, add){
    if (add){
        const res = 0;
        res = n1 + n2;
        console.log('values added: ', res);
    }else return;
    console.log('final result: ', res);
}

function discountPrices(prices, discount){
    const discounted = [];
    let finalPrice = 0;

    for (let i = 0; i < prices.length; i++){
        let discountedPrice = prices[i] * (1 - discount);
        //console.log(discountedPrice)
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }
    //console.log(i);
    //console.log(discountedPrice);
    //console.log(finalPrice);
    return discounted;
}

discountPrices([100, 200, 300], 0.5)

function printNums(){
    console.log(1);
    setTimeout(function(){console.log(2);}, 1000);
    setTimeout(function(){console.log(3);}, 0);
    console.log(4);
}

printNums();