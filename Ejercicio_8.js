function AddMatrix(Am,Bm)
{
    let flag = false;
    let Cm = [];//Nueva Matriz
    
    if(Am.length != Bm.length) console.log("La suma no es posible");
    
    else
    {
        flag = true;
    }

    Cm = new Array(Am.length);
    for(let i=0; i<Cm.length; i++)
    {
        Cm[i] = new Array(Am[i].length);
        for(let j=0; j<Cm[i].length; j++)
        {
            Cm[i][j] = Am[i][j] + Bm[i][j];
        }
    }return Cm;
}

var items = [
    [1,2],
    [3,4]
]

var items2 = [
    [5,6],
    [7,8]
]

AddMatrix(items, items2);
