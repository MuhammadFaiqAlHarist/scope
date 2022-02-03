// //? Identifier

// var a
// a = "Name"

// //? Statement

// let name = "Hello World" // Ini statement
// // console.log(name)

// //? Expression

// let first = 4
// let second = 2
// let result = first + second
// if (first == 4){
//     // console.log(result)
// }

// //? Scope

// var a = "Ini global scope" 
// function kendaraan() {
//     let b = "Ini local scope"
//     if (true) {
//         let c = "Ini block scope"
//     }
// }

// //? Closure

// function greet(person) {
//     let text = "Greetings, " + person
//     return function() {
//         // console.log(text)
//     }
// }
// const take = greet("Fahri")

// take("Fahri")

// //! --- --- Quest

// function bio(student, classes, age, NISN) {
//     let studentText = "Nama : " + student
//     let classesText = "Kelas : " + classes
//     let ageText = "Usia : " + age
//     let NISNText = "NISN : " + NISN
    
//     return function(){
//         console.log(studentText + "\n" + classesText + "\n" + ageText + "\n" + NISNText)
//     }
// }
// const take1 = bio("Faiq", "X RPL A", "16", "0055924867")
// take1()

// //? Data Type
// //? 7 Kinds = null, undefined, boolean, number, bigInteger, string, symbol
// //? The Complex = object

// let x = ''
// let y = null
// let z
// console.log(typeof x, typeof y, typeof z)

// let b = null
// b = 'faiq'
// console.log(typeof a)

// /**
//  * number 
//  * Rentang nilai yang bisa ditampung oleh tipe data number yakni antara (2^53   1)
//  * dan 2^53 1 atau 39298994894829428498482982949 sampai 3294928948923489898492894829 jika sebuah number
//  * memiliki nilai nilai lebih dari rentang ini, makan sebaiknya menggunakan tipe data BigIn
//  */

// /**
//  * NUN atau Non a Number
//  */

// console.log('hello'/2)

// let v = 17
// if(v >= 17){
//     v = 'anda belum cukup umur'
//     console.log(a/2)
// }else{
//     v = 'sudah cukup'
//     console.log(a)
// }

// /**
//  * String 
//  * String merupakan tipe data yang menampung katrakter symbolnya '',"",``
//  */
// let d = 'faiq baik'
// console.log(d.length)

// let kata = 'helloworld'
// for(let i = 0; i < kata.length; i++){
//     console.log(kata[i])
// }
// /**
//  * Object
//  * object merupakan tipe data komplek yang berisi prop{properti}
//  */
// let object = {}
// console.log(typeof object)

// //object di dalam object di sebut nested



// //* cara memanggil object

// let identitas = {
//     firstName : 'Muhammad faiq',
//     lastName : 'Al Harits',
//     email : 'alharistfaiq10@gmail.com',
//     address : {
//         city : 'Bekasi'
//     }
// }

// console.log('nama saya :' + identitas.firstName)
// console.log('saya tinggal di' + identitas.address.city)
// console.table(identitas)

// let l = {
// kendaraan : {
//     kendaraan : 'pegeut',
//     motor : 'v-slim',
//     sepeda : 'united',
// },
// jalan : 'Jalan Berkah',
// kota : 'Bekasi',
// platNomor : 'Jabodatabek',
// kereta : {
//     namaKA : 'Agro Bromo Anggrek',
//     tujuan : 'Senen - Pasar Turi'
// },


// }
// console.table(l)

// const mobil = 'pegeut'
// const motor = 'ninja'
// console.log(`saya punya mobil ${mobil} dan motor ${motor}`)

// // const a = 1, b =2, c = 3
// let [a,b,c] = [true,4,5] 

// /**
//  * Function
//  * merupakan sebuah blok kode untuk membungkus sebuah proses penulisan kode agar tidak diulang kembali
//  */

//* Ini function biasa
// function name(param){
//     console.log('saya belajar javascript')
// }
// name()

// //* anonymous function
// const anon = function (params) {
//     console.log(params)
// }
// anon('saya belajar kotlin')

// //* Arrow Function

// let third = () =>{
//     console.log('ini adalah arrow function')
// }
// third()

// const dua = function(num1, num2) {
//     return(num1*num2)
// }
// console.log(dua(15, 15))

/**
 * Night order function
 * fungsi yang menerima argumen berapa fungsi lain serta return bisa berupa fungsi juga
 */

//* Normal Function

// function genap(number) {
//     return number % 2 == 0
// }
// function print(number) {
//     let isTrue = genap(number)
//     if(isTrue){
//         //template literal
//         console.log(`${number} adalah bilangan genap`)
//     }else{
//         console.log(`${number} adalah bilangan ganjil`)
//     }
// }
// print(10)

//* High order function
// function genap(params) {
//     return nomor % 2 == 0
// }
// function print(nomor, callback) {
//     var isTrue = callback(nomor)
//     if(isTrue) {
//         console.log(`${nomor} adalah bilangan genap`)
//     }else{
//         console.log(`${nomor} adalah bilangan ganjil`)
//     }
// }
// print(10, genap)

// function kecepatan(params) {
//     return mobil >= 100
// }

// function warna(params) {
//     return mobil == 'merah'
// }

// function kendaraan(params) {
//     let a = callback(mobil)
//     if(a){
//         console.log(`mobil dengan ${mobil} adalah mobil saya`)
//     }else{
//         console.log(`mobil dengan ${mobil} bukan mobil saya`)
//     }
// }

// kendaraan('merah', sport)

/**
 * Terdapat 2 function
 * tahun <= 2001 Gaperlu bayar pajak
 * 
 * cc >= dari 150 harus bayar pajak
 */

 function year(car) {
        return car <= 2001
    }
    
    function cc(car) {
        return car >= 150
    }
    
    function vehicle(callback, car) {
        let b = callback(car)
        if(b){
            console.log(`jika ${car} gaperlu bayar pajak`)
        }else{
            console.log(`dari ${car} bayar pajak`)
        }
    }
    vehicle(year , 130)