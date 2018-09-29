function promIn(...measures)
{
    //for(let i=0; i<measures.length; i++) console.log(measures);
    let sum = 0;
    let sqr = 0;
    for(let i=0; i<measures.length; i++)
    {
        sum = sum + measures[i];
    }
    
    let prom = (sum)/measures.length;

    for(let i=0; i<measures.length; i++)
    {
        sqr = sqr + Math.pow((measures[i]-prom), 2);
    }

    let uncer = Math.sqrt(sqr/(measures.length-1));
    console.log("X = "+prom+" ± "+uncer);
}