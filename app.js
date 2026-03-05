var allContacts = [];
var sortOrder = {};

function initialize() {
    let status = "* Offline *";
    if (navigator.onLine) {
        status = "* Online *";
        retrieveContacts();
    } else {
        const localStorage = window.localStorage;
        if (localStorage) {
            const contacts = localStorage.getItem("contacts");
            if (contacts) {
                displayContacts(JSON.parse(contacts));
            }
        }
    }

    document.getElementById("status").innerHTML = status;

    document.body.addEventListener(
            "online",
            function () {
                document.getElementById("status").innerHTML = "Online";
            },
            false
            );
    document.body.addEventListener(
            "offline",
            function () {
                document.getElementById("status").innerHTML = "Offline";
            },
            false
            );
}

function retrieveContacts() {
    const xhr = new XMLHttpRequest();
    const url = "contacts.json";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var contacts = JSON.parse(xhr.response).contacts;
            allContacts = contacts;
            displayContacts(contacts);

            // Store contact data to localstorage
            const localStorage = window.localStorage;
            if (localStorage) {
                localStorage.setItem("contacts", JSON.stringify(contacts));
            }
        }
    };

    xhr.open("get", url);
    xhr.send();
}

function displayContacts(contacts) {
    allContacts = contacts;
    var tcontent = document.getElementById("tcontent");
    tcontent.innerHTML = "";
    contacts.forEach(addRow);
}

function addRow(contact) {
    var tcontent = document.getElementById("tcontent");
    var row = tcontent.insertRow();
    var nameCell = row.insertCell();
    nameCell.setAttribute('data-label', "Name");
    nameCell.innerHTML = contact.name + " (" + contact.gender + ")";
    var emailCell = row.insertCell();
    emailCell.setAttribute('data-label', "Email");
    emailCell.innerHTML = contact.email;
    var addressCell = row.insertCell();
    addressCell.setAttribute('data-label', "Address");
    addressCell.innerHTML = contact.address;
    var mobileCell = row.insertCell();
    mobileCell.setAttribute('data-label', "Mobile");
    mobileCell.innerHTML = contact.phone.mobile;
}

function sortTable(field) {
    if (!sortOrder[field]) {
        sortOrder[field] = 'asc';
    } else {
        sortOrder[field] = sortOrder[field] === 'asc' ? 'desc' : 'asc';
    }

    var sortedContacts = [...allContacts];
    
    sortedContacts.sort(function(a, b) {
        var valueA, valueB;
        
        if (field === 'name') {
            valueA = a.name.toLowerCase();
            valueB = b.name.toLowerCase();
        } else if (field === 'email') {
            valueA = a.email.toLowerCase();
            valueB = b.email.toLowerCase();
        } else if (field === 'mobile') {
            valueA = a.phone.mobile;
            valueB = b.phone.mobile;
        }
        
        if (sortOrder[field] === 'asc') {
            return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
        } else {
            return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
        }
    });
    
    displayContacts(sortedContacts);
}