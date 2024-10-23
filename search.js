document.getElementById("btnsrch").addEventListener("click", searchDisplay);

async function searchDisplay() {
    let Aname = document.getElementById("Aname").value;
    let Table = `
        <style>
            table {
                width: 90%;
                border-collapse: collapse;
                margin: 20px 0;
            }
            th, td {
                border: 2px solid black;
                padding: 10px;
                text-align: center;
            }
            th {
                background-color: yellow;
                color: black;
            }
            tr:nth-child(even) {
                background-color: lightgray;
            }
            tr:hover {
                background-color: #f0f0f0;
            }
        </style>
        <table>
            <tr>
                <th>AccountId</th>
                <th>CustomerId</th>
                <th>AccountType</th>
                <th>Balance</th>
                <th>Status</th>
                <th>CreationDate</th>
            </tr>`;

    let api = "http://localhost:3000/accounts";
    let myobj = await fetch(api);
    let myData = await myobj.json();

    myData.map((key) => {
        let str = key.accountId.toString();
        if (str.includes(Aname)) {
            Table += `
                <tr>
                    <td>${key.accountId}</td>
                    <td>${key.customerId}</td>
                    <td>${key.accountType}</td>
                    <td>${key.balance}</td>
                    <td>${key.status}</td>
                    <td>${key.creationDate}</td>
                </tr>`;
        }
    });

    Table += "</table>";
    document.getElementById("demo").innerHTML = Table;
}
