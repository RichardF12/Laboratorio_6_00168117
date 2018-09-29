function newObj(name, lastName, birth, phone, email) 
{
    var user = {
        name: name,
        lastName: lastName,
        bDay: birth,
        tele: phone,
        email: email,
    };

    console.log("Name: "+user.name);
    console.log("Last Name: "+user.lastName);
    console.log("Date of Birth: "+user.bDay);
    console.log("Phone Number: "+user.tele);
    console.log("Email: "+user.email);
}