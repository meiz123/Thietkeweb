const numbers=[10,5,8,12,15,7]
for(let i=0;i<numbers.length;i++)
{ 
    let max=numbers[i]
    for (let z=i+1;z<numbers.length;z++)
    {
        if (numbers[z]>max)
        {
            max=numbers[z]
            numbers[z]=numbers[i]
            numbers[i]=max
        }
    }
}
console.log(numbers)