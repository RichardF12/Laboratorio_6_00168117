function saveObj(name, lastName, birth, phone, email)
{
    var list = [];
    var user = {
        name: name,
        lastName: lastName,
        bDay: birth,
        tele: phone,
        email: email,
    };
    list.push(user);   
    console.log(list); 
}
