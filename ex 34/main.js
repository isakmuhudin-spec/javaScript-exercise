

function AddItem(){
    const isak = document.querySelector("#lists")
    const cade = document.querySelector("li")
    newItem.textContent = "Item 3"
}

function RemoveItem(){
   const remove = document.querySelector("li")
   if(remove.children){
    remove.removeChild(remove.lastChild)
    
   }
}