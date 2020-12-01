//This is by simple callback process but it is difficult to understand after trace back the code this can solved by promise
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

//Callback using Promise

const Promise=require('promise')
function add(num1,num2){
    return new Promise((resolve,reject)=>{
        //just show sample reject flow if num1=0 consider as error case 
        if(num1==0)
        {
            reject("ERROR")
        }
        resolve(num1+num2)
    })

}
function muliplay(num1,num2){
    return new Promise((resolve,reject)=>{
        resolve(num1*num2)
    })

}
function division(num1,num2){
    return new Promise((resolve,reject)=>{
        resolve(num1/num2)
    })

}
add(10,20).then((sum)=>{
    console.log(sum)
    return muliplay(sum,sum)
}).then((product)=>{
    console.log(product)
    return division(product,10)
}).then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})

//this is called chaining process by promise