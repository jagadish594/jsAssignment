/*
In the object defined below, set each property to its described value using the sample
response payload provided on the next page:
oSiteCatalyst.products = {
"prod": "", // Extract them item's productId from
"itemPageUrl" (the substring beginning with "prod2246...")
"quantity": "", // The value of "qty", converted to a
string
"shipdays": "", // The value of "minDeliveryDate",
converted from an epoch date to a whole number
"shipvalue": "", // If the item is
"shippingDiscountEligible", set to "free-plus"
"subtotal": "", // The product of "qty" and
"listPriceInCents", converted to a readable dollar amount
"uprice": "" // The value of "listPriceInCents",
converted to a readable dollar amount
};

*/

var response = {
    "cartItems": [
        {
        "id": "ci186012014536",
        "qty": 3,
        "itemInfo": {
            "model": "UN55NU6950FXZA",
            "itemNo": "980142010",
            "minDeliveryDate": 1561938400000,
            "name": "UN55NU6950FXZA - SAMSUNG 55\" Class 4K(2160p) Ultra HD Smart LED TV",
            "skuId": "sku23018986",
            "itemPageUrl": "/sams/samsung-55in-4k-2160p-uhdsmart-led-tv-6000-series/prod22464496.ip"
        },
        "inventoryInfo": {
            "minQtyLimit": -1,
            "lowStockLevel": 5,
            "maxQtyLimit": -1,
            "itemLowInStockFlag": false,
            "stockLevel": "inStock"
        },
        "priceInfo": {
            "mapPriceInCents": 0,
            "listPriceInCents": 44900,
            "shippingAmountInCents": 0,
            "shippingAmount": 0,
            "originalPrice": 0,
            "itemTotalInCents": 44900,
            "totalMapPrice": 0,
            "originalPriceInCents": 0,
            "salesTax": 3500
        },
        "props": {
            "selectedChannel": "ONLINE",
            "shippingChargeIncluded": false,
            "shippingDiscountEligible": true,
            "freeShipEligible": false,
            "specialItem": false,
            "weightedItem": false,
            "onlineChannelMinLimitQty": -1,
        }
    }]
    };

//Problem 6:
let oSiteCatalyst = {}
oSiteCatalyst.products = {
    "prod": "", // Extract them item's productId from "itemPageUrl" the substring beginning with "prod2246..."
    "quantity": "", // The value of "qty", converted to a string
    "shipdays": "", // The value of "minDeliveryDate", converted from an epoch date to a whole number
    "shipvalue": "", // If the item is "shippingDiscountEligible", set to "free-plus"
    "subtotal": "", // The product of "qty" and converted to a readable dollar amount
    "uprice": "" // The value of "listPriceInCents", converted to a readable dollar amount
    };
//A: 
const getIdFromUrl = function(url){
    return url.split('/').find(item => (/^prod\d+/i).test(item) === true).split('.')[0]
}

let prodId  = response['cartItems'].map(item =>{
    let url = item.itemInfo.itemPageUrl
    return getIdFromUrl(url)
})
oSiteCatalyst.products.prod = prodId[0]

//B:
oSiteCatalyst.products.quantity = response['cartItems'][0].qty.toString()

//C:
oSiteCatalyst.products.shipdays = new Date(response['cartItems'][0].itemInfo.minDeliveryDate)

//D:
if(response['cartItems'][0].props.shippingDiscountEligible){
    oSiteCatalyst.products.shipvalue = "free-plus"
}

//E:
let listPriceInCents = response['cartItems'][0].priceInfo.listPriceInCents
let qty = response['cartItems'][0].qty
oSiteCatalyst.products.subtotal = `$${(listPriceInCents*qty/100).toFixed(2)}`

//F:
oSiteCatalyst.products.uprice = `$${(listPriceInCents/100).toFixed(2)}`


console.log(oSiteCatalyst)