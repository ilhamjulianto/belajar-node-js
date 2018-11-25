function processOrder(idOrder, timeOut) {
    console.log("Id ke " + idOrder);
    processOrder2(idOrder,timeOut);
}

function processOrder2(idOrder, timeOut) {
    setTimeout(function() {
        console.log("Id ke " + idOrder + " Processed");
    }, timeOut);
}

processOrder(50,5000);
processOrder(60, 2000);
processOrder(70, 1000);