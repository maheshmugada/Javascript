setInterval(myFunc,1000)

function myFunc(){
    let date = new Date();
    let timer = date.toLocaleTimeString();
    document.getElementById("time").innerHTML = timer;
}