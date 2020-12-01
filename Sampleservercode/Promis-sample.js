function add(num1,num2,callback){
    let err=false
    if(num1==0){
        err=true
    }
    callback(num1+num2,err)
}
function muliplay(num1,num2,callback)
{
    callback(num1*num2)
}
function division(num1,num2,callback)
{
    callback(num1/num2)
}
add(2,30,(sum,err)=>{
    if(err)
    {
    console.log("First number is zero")
    }
    else
{    
console.log(sum)
muliplay(sum,sum,(product)=>{
    console.log(product)
    division(product,2,(finalresult)=>
    {
        console.log(finalresult)
    })
})
}
})
