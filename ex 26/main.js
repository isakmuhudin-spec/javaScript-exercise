
function cadeBloking(){
    alert("fetching user data...")
    return "Blocking delay completed!"
}

console.log("Start blocking delay...")
console.log(cadeBloking())
console.log("This message is blocked until the delay is complete.")

function cadeNonBloking(callback){
    setTimeout(()=> {
        callback("wuxuu soo dhahay 2s")
    }, 2000)
}

console.log("Start non-blocking delay")
cadeNonBloking((message) => {
    console.log(message)
})


console.log("This message is not blocked and runs immediately")