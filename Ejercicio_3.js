function hat(a)
{
    let num = 0;
    let boolean = 0;
    let string = 0;
    let obj = 0;

    for(let i of a)
    {
        if(typeof i == 'number')
        {
            console.log(i+" es de tipo number");
            num++;
        }

        if(typeof i == 'boolean'){
            console.log(i+" es de tipo boolean");
            boolean++;
        } 

        if(typeof i == 'string'){
            console.log(i+" es de tipo string");
            string++;
        }

        if(typeof i == 'object'){ 
            console.log(i+" es de tipo object");
            obj++;
        }
    }

    console.log("Hay un total de: "+num+" del tipo number");
    console.log("Hay un total de: "+boolean+" del tipo boolean");
    console.log("Hay un total de: "+string+" del tipo string");
    console.log("Hay un total de: "+obj+" del tipo object");
}