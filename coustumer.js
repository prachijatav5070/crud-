document.getElementById("btnsave").addEventListener("click", accountsave);

 async function accountsave(){
    let custid=document.getElementById("cuid").value ;
    let Fullname=document.getElementById("fname").value ;
    let Email=document.getElementById("em").value ;
    let Phone=document.getElementById("ph").value ;
    let Address=document.getElementById("ad").value ;

    let api ="http://localhost:3000/customers";

    const response= await fetch(api, {
        method: "POST",
      
         headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ 
            
              "customerId" :custid,
              "fullName" :Fullname,
              "email" : Email,
              "phone":Phone,
              "address": Address
           })
    });

    console.log(response);
    alert("data save !!!");
}

