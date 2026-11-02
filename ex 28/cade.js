
 function cadePromise(){
     return new Promise((resolve, rejected) => {
            setTimeout(()=> {
               const succes = true;
             if (succes){
                 resolve({id:1, name:"Isak" ,number:123456})
                 }else{
                rejected("Failed to fetch user data")
            }
         }, 2000)
     }) 

     }

//   cadePromise()
//   .then(data => console.log("User data" , data))  
//   .catch(err => console.log("Propleme", err))

async function isakPromise(){
    try{
        const user = await cadePromise();
     console.log(user)
    }catch(err){
        console.log(err)
    }
    
}
isakPromise()