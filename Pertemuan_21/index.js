//Array

let nilai = [90, 80, 75, 95, 85];

for (let i=0; i<nilai.length; i++) {
    console.log ("Nilai = ", nilai[i] + 5);
}

console.log (nilai);

// nilai[2]=90;
// console.log[nilai(nilai.length - 1]);

let john = ["John", "Doe", 33, true];
console.log (john[john.length-1]);
console.log(john);

//iosString()
console.log (john.toString());
//join()
console.log (john.join(" - "));

//pop()
// john.pop();
// conaole.log (john.join (" - "));

//push()
john.push (true);
john.push("Hello");
console.log (john.join(" - "));

//shift
john.shift ();
console.log (john.join(" - "));

//unshift()
john.unshift("John");
john.unshift('Prof');
console.log (john.join(" -"));

//Shift()
john.shift();
console.log(john);

//splice()
// let kamar = ["Kasur", "Bantal", "Lemari", "Kursi"];
// kamar.splice(3, 0, "Meja", "Piano");
// console.log(kamar);

//concat()
// let buah = ["Apel", "Mangga", "Anggur"];
// let sayur = ["Kangkung", "Kentang", "Wortel"];
// let biji = ["Kedelai", "Kacang Tanah", "Kacang Panjang"];
// let makanan = buah.concat(sayur, biji);
// console.log(makanan);

//slice()
// let kamarTidur = kamar.slice(3);
// console.log(kamarTidur);
// let kamarTidur = kamar.slice(0, 3);
// console.log(kamarTidur);

//sort()
// buah.sort();
// console.log(buah);
// kamar.sort()
// console.log(kamar);
// nilai.sort()
// console.log(nilai);
// let nama = ["Irene", "Seulgi", "Wendy", "Joy", "Yeri"];
// nama.sort();
// console.log(nama);
// let tahunLahir = [1991, 1994, 1994, 1996, 1999];
// tahunLahir.sort();
// console.log(tahunLahir);

//reverse()
// let nama = ["Irene", "Seulgi", "Wendy", "Joy", "Yeri"];
// nama.reverse();
// console.log(nama);
// nama.sort().reverse();
// console.log(nama);
