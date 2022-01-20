//* identifier
/**
 * Indentifier adalah penamaan variable, Fungsi ataupun parameter
 * Karakter pertamanya hanya bisa huruf a-z dan simbol undescore atau dollar
 * tidak bisa menggunakan angka di depan
 * tidak boleh menggunakan bahasa yang sudah ada default di js
 */

//* Statement
/**
 * Statement = suatu pertanyaan js yang paling dasar dan memiliki tugas tertentu
 */

// let name = "hello world" // statemen dasar dan biasa
// console.log(name);

//* Expression
/**
 * expression merupakan ekspresi js yang berfungsi untuk menghasilkan nilai tertentu
 */

// let first = 1
// let second = 2
// let result = first + second

// if(result>1){
//     console.log(result)
// }

//* Scope
/**
 * cakupan kode agar bisa mengakses atau membatasi
 */

//* Global scope
/**
 * Global Scope merupakan cakupan di seluruh file
 */

// var a = 'Hello rekan kerja'

// function first(){
//     console.log(a)
// }
// function second(){
//     a = 'nilainya sudah diubah'
//     console.log(a)
// }
// first()
// second()

// const a = 'mobil'
// function kendaraan(){
//     // console.log(a)
//     // if(true){
//     //     const b = 'motor'
//         // console.log(b)
//     a = 'sepeda'
//     console.log(a)
//     if(true){
//         c = 'bus'
//     }
//     console.log(c)
//     }
// // }
// kendaraan()

//* Tugas

var x = 'yoi bro'   // ini adalah global scope
function makan() {  
    console.log(x)
    const c = 'baju' //ini adalah local scope
    if (true){      // ini adalah block scope
       let b = 'celana'
       console.log(b)
    }
    console.log(c)
}
makan()


