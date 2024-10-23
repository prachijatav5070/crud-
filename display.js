document.getElementById("btndis").addEventListener("click", displayData);
document.getElementById("btndis2").addEventListener("click", displayData2);

async function displayData() {
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
                background-color: orange;
                color: white;
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
        Table += `
            <tr>
                <td>${key.accountId}</td>
                <td>${key.customerId}</td>
                <td>${key.accountType}</td>
                <td>${key.balance}</td>
                <td>${key.status}</td>
                <td>${key.creationDate}</td>
            </tr>`;
    });
    Table += "</table>";
    document.getElementById("demo").innerHTML = Table;
}

async function displayData2() {
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
                <th>CustomerId</th>
                <th>FullName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
            </tr>`;

    let api = "http://localhost:3000/customers";
    let myobj = await fetch(api);
    let myData = await myobj.json();

    myData.map((key) => {
        Table += `
            <tr>
                <td>${key.customerId}</td>
                <td>${key.fullName}</td>
                <td>${key.email}</td>
                <td>${key.phone}</td>
                <td>${key.address}</td>
            </tr>`;
    });
    Table += "</table>";
    document.getElementById("demo2").innerHTML = Table;
}
