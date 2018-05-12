var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [{
  name: "Telus",
  province: "BC",
  sales: [100, 200, 400]
}, {
  name: "Bombardier",
  province: "AB",
  sales: [80, 20, 10, 100, 90, 500]
}, {
  name: "Telus",
  province: "SK",
  sales: [500, 100]
}];

function calculateSalesTax(salesData, taxRates) {

  var companyTaxesAndSalesObject = {};

  for (var i = 0; i < salesData.length; i++) {

    var companyObject = {};
    var nameOfObject = salesData[i].name;
    var province = salesData[i].province;
    var taxRate = taxRates[province];
    var totalSales = addSales(salesData[i].sales);
    var taxes = totalSales * taxRate;

    if (!companyTaxesAndSalesObject[nameOfObject]) {
      companyTaxesAndSalesObject[nameOfObject] = {
        totalSales: totalSales,
        totalTaxes: taxes
      }
    } else {
      companyTaxesAndSalesObject[nameOfObject].totalSales += totalSales;
      companyTaxesAndSalesObject[nameOfObject].totalTaxes += taxes;
    }
  }

  return companyTaxesAndSalesObject;
}



function arrayContains(name, arrayToCheck) {
  return (arrayToCheck.indexOf(name) > -1);
}

function addSales(salesArray) {
  //console.log('Input:', salesArray)
  var total = 0;
  for (var i = 0; i < salesArray.length; i++) {

    total += salesArray[i];
  }

  return total;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log('Results are', results);


//console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/