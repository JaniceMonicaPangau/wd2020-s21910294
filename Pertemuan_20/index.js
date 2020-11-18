console.log(" Basic JavaScript");

//Conditional JavaScript

let firtName="John";
let isMarried =true;

if (isMarried)
{
    console.log (firstName + " is Married");
} else {
    console.log (firstName + " is not Married");
}

/* 
jika umur <13 tahun maka tampilkan kat ank"
jika umur 13 - 16 tahun maka tampilkan kat remaja
jika umur 17 - 25 tahun maka tampilkan kat anak muda
jika umur 26 - 50 tahun maka tampilkan kat orang dewara 
*/

// ley firstName ="John";
// ;et job = "teacher";

// switch (job) {
//   case "teacher" :
//       console.log (firstName + " is a teacher");
//        break;
//    case "driver":
//        console.log (firstName + " is a driver");
//        break;
//    case "instructor":
//        console.log (firstName + " is a instructor");
//        break;
//      default:
//      console.log (firstName + "does something else" );
//  }


let umur = 25;

if ( umur < 13){
    console.log ("Kategori Anak anak");
} else if (umur >=13 && umur <17) {
    console.log ("Kategori Remaja");
} else if (umur >=17 && umur < 26) {
    console.log ("Kategori Anak Muda");
} else if (umur >=25 && umur <50) {
    console.log("Kategori Orang Dewasa");
}

// JavaScript Function

// function helloWorld () {
//     console.log ("Hello World function declaration ");
// }

let helloWorld = function (nama) {
    let age = 18;
console.log ("Hello, nama saya " + nama + ". Umur saya adalah" + age + " tahun");
};

helloWorld ("Janice Monica");

