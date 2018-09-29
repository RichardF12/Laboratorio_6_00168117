function Gauss(a)
{
    if(a.length%2 == 0) //si es una cantidad de numeros pares
    {
        while(a.length != 0)
        {
            sum = a[0] + a[a.length - 1];
            a = a.slice(0,0).concat(a.slice(1)); //quita el primer termino
            a = a.slice(0, a.length - 1).concat(a.slice(a.length)); //quita el ultimo termino
        }
    }
    else //impares
    {
        while(a.length != 1)
        {
            sum = a[0] + a[a.length - 1]
            console.log(sum);
            a = a.slice(0,0).concat(a.slice(1)); //quita primero
            a = a.slice(0, a.length - 1).concat(a.slice(a.length)); //quita ultimo
        }
        console.log(a[0]*2);
    }
}