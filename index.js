document.getElementById("btnl").addEventListener("click",datalog)

function datalog(event){
 event.preventDefault();

 let username=document.getElementById('uname').value ;
 let password =document.getElementById('upass').value ;



 if (username == "prachi" || password == "1234")
 {
  window.location.href="account.html";
  return
 }
else {
    alert("incorrect password");
}

}