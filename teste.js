const arr = ['a', 'b', 'c', 'd', 'e']
for(let i=0; i<arr.length; i++)
{
	setTimeout(()=>{ 
        console.log(i, arr[i])
    }, 0)
}