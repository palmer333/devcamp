var fruits = ["apple", "banana", "mango"]

const addFruits = (fruit, callback) => {
    setTimeout(() => {
        fruits.push(fruit);
        console.log(`add ${fruit} Success`)
        callback()
    }, 500)
}


// const getFruits() {
//     setTimeout(function () {
//         console.log(fruits)
//     }, 200)
// }
 
// Use Arrow Function
// const getFruits = () => {
//     setTimeout(() => {
//         console.log(fruits)
//     }, 200)
// }

// addFruits("pineapple", getFruits)

// Anonymous Function

addFruits("pineapple", () => {
    setTimeout(() => {
        console.log(fruits)
    }, 200)
})

