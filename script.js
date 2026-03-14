function report(){

let bus=document.getElementById("busNumber").value
let reason=document.getElementById("reason").value

let data=JSON.parse(localStorage.getItem("delayData"))||{}

data[bus]=reason

localStorage.setItem("delayData",JSON.stringify(data))

document.getElementById("msg").innerText="Delay Reported Successfully"

}

function checkBus(){

let bus=document.getElementById("bus").value

let data=JSON.parse(localStorage.getItem("delayData"))||{}

if(data[bus]){
document.getElementById("result").innerText="Bus delayed due to "+data[bus]
}
else{
document.getElementById("result").innerText="No delay reported"
}

}

function showData(){

let data=JSON.parse(localStorage.getItem("delayData"))||{}

let list=document.getElementById("list")

list.innerHTML=""

for(let bus in data){

let li=document.createElement("li")

li.innerText="Bus "+bus+" delayed due to "+data[bus]

list.appendChild(li)

}

}