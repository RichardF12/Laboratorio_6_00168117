function types(a, type)
{
    let num = [];
    let boolean = [];
    let string = [];
    let obj = [];

    for(let i of a)
    {
        if(typeof i == 'number') num.push(i);

        if(typeof i == 'boolean') boolean.push(i);

        if(typeof i == 'string') string.push(i);

        if(typeof i == 'object') obj.push(i);
    }

    if(type == 'number') console.log(num);

    if(type == 'boolean') console.log(boolean);

    if(type == 'string') console.log(string);

    if(type == 'object') console.log(obj);
}