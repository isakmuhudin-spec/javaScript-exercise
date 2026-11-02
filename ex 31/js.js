
async function fetchData(){
    try{
    console.log("The frist time of The Api")
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
   
    const data = await  response.json();

    console.log("User data", data)
    
    if(!response.ok){
        throw new Error(`HTTPS ERROR , ${response.status}`);
      
    } 
    
 } catch(error){
        console.log("The error is : " , error)
    }
}
fetchData();