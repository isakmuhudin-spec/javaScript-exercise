
async function fetchData(){
    console.log("The frist time of The Api")
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
   
    const data = await  response.json();

    console.log("User data", data)
    console.log("Discription.......!")


}
fetchData();