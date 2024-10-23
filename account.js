document.getElementById("btnsave").addEventListener("click", accountsave);

 async function accountsave(){
    let acuntid=document.getElementById("acid").value ;
    let custid=document.getElementById("cuid").value ;
    let type=document.getElementById("actp").value ;
    let status=document.getElementById("stus").value ;
    let balnce=document.getElementById("blnc").value ;
    let credate=document.getElementById("creasn").value ;

    let api ="http://localhost:3000/accounts";

    const response= await fetch(api, {
        method: "POST",
      
         headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ 
            "accountId" : acuntid,
              "customerId" :custid,
              "accountType" :type,
              "balance" : status,
              "status":balnce,
              "creationDate": credate
           })
    });

    console.log(response);
    alert("data save !!!");
}


