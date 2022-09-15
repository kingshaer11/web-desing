function changbg() {
    document.body.style.backgroundColor = "#1C2833";
}
function isshowtime() {
    document.getElementById('demo').innerHTML = Date();
}

var fruits = ["Banana","Orange","Apple","Mango"]
document.getElementById ("demo1").innerHTML = fruits.join(" - ");