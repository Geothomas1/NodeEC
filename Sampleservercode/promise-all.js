const promise=require('promise')
function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Geo Thomas")
        },3000)
    })
}

function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("6238908844")
        },3000)
    })
}

Promise.all([getName(),getMobile()]).then((result)=>{
   console.log(result)
})
//above promise all inseted of asych and wait

async function getUser(){
    let name=await getName()
    console.log(name)
    let mobile= await getMobile()
    console.log(mobile)
}
getUser()