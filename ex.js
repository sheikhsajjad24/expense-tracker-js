const subExp   = document.getElementById("exp-sub");

const uForm = document.getElementById("userForm"); 

const tbod = document.getElementById("tableBody");

const userInp= document.getElementById("uinp");
const uDate  = document.getElementById("udat");
const uAmount = document.getElementById("uamo");


// expensive;;

//const expenli = document.getElementsByClassName("expensive");


subExp.addEventListener("click",function(e){
    e.preventDefault();

const uInpp = userInp.value;
const uDa  = uDate.value;
const uAm = uAmount.value


if(uInpp == "" && uDa == "" && uAm == ""){
  return  alert("Pleases fill all input fields first");
}
   // alert(uInpp);
 // alert("hello");

const trow = document.createElement("tr");


const tbody1 =  document.createElement("td");
tbody1.textContent = uInpp;

const tbody2 = document.createElement("td");
tbody2.textContent = uDa;

const tbody3 = document.createElement("td");
tbody3.textContent = uAm;

const tbody4 = document.createElement("td");
//tbody4.textContent = uAm;

const butn = document.createElement("button");
butn.textContent = "X"
 butn.className = "deleBt"

// delete button
butn.addEventListener("click",function(){
   trow.remove();
  //  alert("sajjas")



});
tbody4.appendChild(butn)

tbod.appendChild(trow);
trow.appendChild(tbody1);
trow.appendChild(tbody2)
trow.appendChild(tbody3)
trow.appendChild(tbody4)


//trow.appendChild(butn)

userInp.value = "";
uDate.value = "";
uAmount.value = "";




//tbody1.innerHTML = uInpp;

})
  


