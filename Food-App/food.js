function myFunction(){
    let searchbar  = document.getElementById("input").value.toUpperCase();
    let one = document.getElementsById("one");
    let two = one.getElementsById("two");
    for(var i = 0; i < two.length; i++){
        let three = two[i].getElementsById("three")[0];
        if(three){
            let textvalue = three.textContent || three.innerHTML;
            if(textvalue.toLocaleUpperCase().indexOf(searchbar) > -1){
                two[i].style.display="";
                front.style.display="none"
            }else{
                two[i].style.display="none"
            }
        }
    }
    if(searchbar == ""){
        front.style.display="flex"
    }
    console.log(searchbar)
}
function login(){
   let login = document.querySelector(".login");
    login.style.display="block";
}
function nav(){
    let nav = document.querySelector(".nav-bar");
     nav.style.display="block";
 }