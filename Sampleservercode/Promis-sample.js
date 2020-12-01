function add(num1,num2,callback){
    let err=false
    if(num1==0){
        err=true
    }
    callback(num1+num2,err)
}
add(10,30,(sum,err)=>{
    console.log(sum)
})
