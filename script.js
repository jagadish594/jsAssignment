// Write a custom method to replace the string "The quick brown fox jumps
// over the lazy dog" with the string "The1 quick2 brown3 fox4 jumps5
// over6 the7 lazy8 dog9"

//Problem 1:
let str1 = "The quick brown fox jumps over the lazy dog"
let str2 = "The1 quick2 brown3 fox4 jumps5 over6 the7 lazy8 dog9"

const replaceString = (inputStr) =>{
    if(typeof inputStr === 'string'){
        return inputStr.split(' ').map((word, i) => {
            i++
            return word+i
        }).join(' ')
    }
    else return "Invalid string"
}

console.log(replaceString(str1))

//Problem 2:
var dwarves = "bashful doc dopey grumpy happy sleepy sneezy"

console.log(
    dwarves.split(/\b/g).reverse().join('')
)

//Problem 3:
//Write a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

const getMonthFromNum = (num) =>{
    if(Number.isInteger(num) === true && num >= 1 && num <= 12){
        const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']
        return months[num-1]
    }
    else return "Please enter a number between 1 to 12"
}

console.log("Input a integer from 1 to 12, get the month: ", getMonthFromNum(12))

//Problem 4:
//Write a regular expression that matches any string containing at least one digit.

let reg = /\d/g
console.log("Reg expression-string with atleast one digit: ", reg.test('22212112313213aaaaadsfasdfasdf'))

//Problem 5:
//Write a function that returns true if two arrays are identical, and false otherwise

const isArrayIdentical = (arr1, arr2) =>{
    if(Array.isArray(arr1) && Array.isArray(arr2)){
        let arr1Length = arr1.length
        let arr2Length = arr2.length
        if(arr1Length === arr2Length){
            for(let i=0; i<arr1Length; i++){
                if(arr1[i] !== arr2[i])
                    return false
            }
            return true
        }
        else{
            return false
        }
    }
    else {
        return 'Not valid array(s)'
    }

}

console.log("Is array identical:", isArrayIdentical(["b, c"], ['b, c']))
//========================================================

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