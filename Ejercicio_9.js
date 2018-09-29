function random()
{
  let a = new Array(20);
  for(let i =0; i<20; i++)
  {
    a[i] = Math.floor(Math.random()*21);
  } 
  x = prompt('Dame un numero');
  cont=0;
  for(let i of a)
  {
    if(a[i] == x)
    {
      console.log("Enhorabuena, haz ganado!!");
      return
    }cont++;
  }
  if(cont ==20)
  {
    console.log("GAME OVER");
  }
}

/*for (var a=[],i=0;i<20;++i) a[i]=i;

function shuffle(array) {
    var aux, now, top = array.length;
    if(top) while(--top) {
      now = Math.floor(Math.random() * (top + 1));
      aux = array[now];
      array[now] = array[top];
      array[top] = aux;
    }
    return array;
  }

a = shuffle(a);*/

