const parseCode = (str) => {
    // Split the encoded string by '0' and remove empty elements
    let parts = str.split('0').filter(part => part !== '');

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
