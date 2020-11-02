var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "+256 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "+256 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName){
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++){
        if (contacts[i].lastName === lastName){
            printPerson(contacts[i]);
        }
    }
}

function add(firstName, lastName, email, phoneNumber){
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        email: email, 
        phoneNumber: phoneNumber, 
    };
}

add("cwylie", "zero", "cwylie0@address.js", "(555) 444-8098");
list();