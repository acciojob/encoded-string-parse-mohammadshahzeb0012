const parseCode = (str) => {
  // your code here
	    let parts = str.split('0');

    // Extract first name, last name, and id
    let firstName = parts[0];
    let lastName = parts[1];
    let id = parts[2];

    // Return an object with extracted properties
    return {
        firstName: firstName,
        lastName: lastName,
        id: id
    };
	
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
