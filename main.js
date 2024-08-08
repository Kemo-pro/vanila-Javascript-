// Function To Brake the Link
function brakeChain() {

// The Normal Link
let chain = document.getElementById("chain");
chain.innerHTML = "&#xf0c1;";

// Brake The Link
setTimeout(() => {
chain.innerHTML = "&#xf127;";
}, 1000);

}

// Call Function
brakeChain();

// Animate After 2 Seconds
setInterval(brakeChain, 2000);


// Function Animate The Charge Buttery
function chargeBattery(){

// Base Of Battery
let battery = document.getElementById('battery')
battery.innerHTML = "&#xf244;";

// 25% Charged Of Battery
setTimeout(() => {
battery.innerHTML = "&#xf243;";
}, 1000)

// 50% Battery Charge
setTimeout(() => {
battery.innerHTML = "&#xf242;";
}, 2000)

// 75% Battery charge
setTimeout(() => {
battery.innerHTML = "&#xf241;";
}, 3000)

// 100% Battery Charge
setTimeout(() => {
battery.innerHTML = "&#xf240;";
}, 4000)
}

// Run Function 
chargeBattery()

// Animited after 1 second
setInterval(chargeBattery,5000)


// Function Animate Hourglass
function hourglassTip(){

// Glass
let hourglass = document.getElementById('hourglass');
hourglass.innerHTML = '&#xf251'

// half sand down
setTimeout(()=>{
hourglass.innerHTML = '&#xf252';
},1000)

// Full Sand Down
setTimeout(()=>{
hourglass.innerHTML = '&#xf253';
},2000)
}

// Run Function
hourglassTip()

// Animate After 3 seconds
setInterval(hourglassTip,3000)