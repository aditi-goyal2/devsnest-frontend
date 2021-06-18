function if_array(x){
    return Array.isArray(x);
}

function cloneit(x){
    var p=x;
    return p;
}
function first_element(x,n=1){
let a;
    if(n<0)
    {
        a=x.length;
    }
    else a=0;
    return x.slice(a,n);
}
function mergeit(x){
    return x.join(',');
}
function mostFreq(x){
    let count=0;
    let freq=0;
    let val;
    for(let i of x)
    {
        count=0;
        for(let j of x)
        {
            if(i==j)
            {
                count++;
            }
        }
        if(freq<count)
        {
            freq=count;
            val=i;
        }
    }
    return `${val} (${freq} times)`;
}
