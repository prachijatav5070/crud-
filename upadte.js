function editRow(id) {
    document.getElementById(`acid-${id}`).removeAttribute("readonly");
    document.getElementById(`cuid-${id}`).removeAttribute("readonly");
    document.getElementById(`actp-${id}`).removeAttribute("readonly");
    document.getElementById(`stus-${id}`).removeAttribute("readonly");
    document.getElementById(`blnc-${id}`).removeAttribute("readonly");
    document.getElementById(`creasn-${id}`).removeAttribute("readonly");
  
    document.getElementById(`edit-${id}`).style.display = "none";
    document.getElementById(`save-${id}`).style.display = "inline";
  }
  
  function saveRow(id) {


    let acuntid=document.getElementById(`acid-${id}`).value ;
    let custid=document.getElementById(`cuid-${id}`).value ;
    let type=document.getElementById(`actp-${id}`).value ;
    let status=document.getElementById(`stus-${id}`).value ;
    let balnce=document.getElementById(`blnc-${id}`).value ;
    let credate=document.getElementById(`creasn-${id}`).value ;
  
    let url = `http://localhost:3000/accounts/${id}`;
  
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        "accountId" : acuntid,
        "customerId" :custid,
        "accountType" :type,
        "balance" : status,
        "status":balnce,
        "creationDate": credate
      }),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          alert("Data updated");
          dataShow();
        } else {
          throw new Error("Data not updated");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error occured while updating");
      });
  }
  
  function myrecRemove(id) {
    let url = `http://localhost:3000/accounts/${id}`;
  
    fetch(url, {
      method: "DELETE",
    }).then((myData) => {
      alert("Record Deleted");
    });
  }
  
  async function dataShow() {
    let myTable =`<table width=90% border="2" bgcolor="skyblue" >
            <tr bgcolor="orange">
            <th> AccountId </th>
            <th> CustomerId </th>
            <th> AccountType</th>
            <th>Balance </th>
            <th>Status </th>
            <th>CreationDate</th>
            </tr>`;
  
    let url = "http://localhost:3000/accounts";
    let myobj = await fetch(url);
    console.log(myobj);
    let myData = await myobj.json();
  
    console.log(myData);
  
    myData.forEach((key) => {
      myTable += `
       <tr>
       <td><input type="text" id="acid-${key.id}" value="${key.accountId}" readonly></td>
       <td><input type="text" id="cuid-${key.id}" value="${key.customerId}" readonly></td>
       <td><input type="text" id="actp-${key.id}" value="${key.accountType}" readonly></td>
       <td><input type="text" id="stus-${key.id}" value="${key.balance}" readonly></td>
       <td><input type="text" id="blnc-${key.id}" value="${key.status}" readonly></td>
       <td><input type="text" id="creasn-${key.id}" value="${key.creationDate}" readonly></td>
       <td>
       <a href="#" onclick="myrecRemove('${key.id}')" class="button button-delete">Delete</a>
       <a href="#" onclick="editRow('${key.id}')" id="edit-${key.id}" class="button button-edit">Edit</a>
       <a href="#" onclick="saveRow('${key.id}')" id="save-${key.id}" class="button button-save" style="display:none">Save</a>
       </td>
       </tr>
       `;
    });
    myTable += `</table>`;
    document.getElementById("demo").innerHTML = myTable;
  }
  
  dataShow();
  