function bat(string)
{
    let a = string.split("");
    let aux = [];

    for(let i of a)
    {
        if(i == 'm'){i = 0; aux.push(i)}

        else if(i == 'u'){i = 1; aux.push(i)}

        else if(i == 'r'){i = 2; aux.push(i)}

        else if(i == 'c'){i = 3; aux.push(i)}

        else if(i == 'i'){i = 4; aux.push(i)}

        else if(i == 'e'){i = 5; aux.push(i)}

        else if(i == 'l'){i = 6; aux.push(i)}

        else if(i == 'a'){i = 7; aux.push(i)}

        else if(i == 'g'){i = 8; aux.push(i)}

        else if(i == 'o'){i = 9; aux.push(i)}

        else{aux.push(i)}
    }

    console.log(aux.join(""));
}