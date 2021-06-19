//o check whether an `input` is an array or not
function if_array(x){
    return Array.isArray(x);
}
//to clone an array
function cloneit(x){
    var p=x;
    return p;
}
//to get the first element of an array
function first_element(x,n=1){
let a;
    if(n<0)
    {
        a=x.length;
    }
    else a=0;
    return x.slice(a,n);
}
//to join all elements of the following array into a string
function mergeit(x){
    return x.join(',');
}
//to find the most frequent item of an array
function mostFrequency(x){
    let count=0;
    let Frequency=0;
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
        if(Frequency<count)
        {
            Frequency=count;
            val=i;
        }
    }
    return `${val} (${Frequency} times)`;
}
