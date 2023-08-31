// 1. Задание

// function sortirovka(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let attempt = arr[j];

//         arr[j] = arr[j + 1];

//         arr[j + 1] = attempt;
//       }
//     }
//   }

//   return arr;
// }
// console.log(sortirovka(arr));

// 2. Задание

// let age = prompt("Введите ваш возраст");
// if (age == 18) {
//   alert("Вам 18 лет!");
// } else if (age < 18) {
//   alert("Вам меньше 18!");
// } else if (age > 18) {
//   alert("Вам больше 18!");
// }
//  3. Задание

// const button = document.querySelector(".sword");
// function new_box() {
//   const Sablya = document.createElement("div");
//   Sablya.classList.add("box");
//   Sablya.id = "modal";
//   Sablya.innerHTML =
//     "Купите эту прекрасную саблю по скидке прямо сейчас! <strong><button>Buy now</button></strong>";
//   return Sablya;
// }
// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   let swordner = document.querySelector("#swordner");
//   if (!swordner) {
//     let greatSword = new_box();
//     const container = document.querySelector(".container");
//     container.append(greatSword);
//   }
// });
