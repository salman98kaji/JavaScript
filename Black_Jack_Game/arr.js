//JSON JavaScript object Notataion

// let airBnb = {
//     hotelName : "OYO",
//     location : "Pune",
//     price : 50,
//     available : true,
//     type : ["one","two","three"],
//     img : ["img/room1.png","img/room2"]
// }
// console.log(airBnb.hotelName)
// console.log(airBnb.available)

// let person = {
//     name : "Md Salman Kaji",
//     age : 25,
//     country : "India"
// }
// function logData(){
//     console.log(person.name+" is "+person.age+" years old and lives in "+person.country)
// }
// logData()

let country = ["USA","China","Russia","Canada","Brazil"]
console.log("THe 5 largest countries in the world are :")
for(let i=0;i<country.length;i++){
    console.log(country[i])
}

country.push("India") //add,remove at the end of the array
country.unshift("Peru") //add,remove at the begining of the array
console.log(country)