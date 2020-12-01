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
        },2000)
    })
}

Promise.all([getName(),getMobile()]).then((result)=>{
    console.log(result)
})