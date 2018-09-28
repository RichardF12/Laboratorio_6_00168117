function suP(a)
{   
    let acum = 0;
    for(let i=0; i<=a.length-1 ; i++)
    {
       // let acum = a[i]+a[i+1];
       acum = acum + a[i];
    }prom = acum/a.length;
    return `La suma es: ${acum} ; el promedio es: ${prom}`;
}