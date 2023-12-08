





//Question 5
var x =2;
var y =7;
while (x<y) {
    x +=3;
}
console.log(x)

//Question 7

var colors =["red", "green","blue"]
var i = colors.length -1;
while (i>0) {
    console.log(colors[i])
    i--
    
}

var a = {name: "product1", price:20}
var b = {name: "product2", price:30}
var c = {name: "product3", price:10}
a = b;
c=b;
console.log(a.price + b.price+ c.price)