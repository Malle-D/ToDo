var elForm = document.querySelector(".form")
var elInput = document.querySelector(".input")
var elList = document.querySelector(".list")

var elArr = []

elForm.addEventListener("submit", function (evt){
   evt.preventDefault()
   
   let InputVal = elInput.value
   
   if ( InputVal.trim() == "" ) {
      alert("You didn't enter a note")
      return elInput.value = "";
   }
   
   
   var element = {
      id: elArr.length,
      title: InputVal
   }
   
   elArr.push(element)
   
   elList.innerHTML = null
   
   
   for( let item of elArr ){
      
      let newItem = document.createElement("li")
      
      newItem.textContent = item.id+1 + ". " + item.title
      
      elList.appendChild(newItem)
      
      elInput.value = ""
      
   }
   
   
})

