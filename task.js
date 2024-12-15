// 1. create a counter in javascript(count down from 30 to 0)
// function printnum(num){
//     console.log(num)
// }
// for(let i = 30; i>=0; i--){
// setTimeout(()=>printnum(i), (30-i)* 1000)
// console.log(i)
// }

// 2.calculate the time it take btween the settimeout call and the inner function actually runniing


const delay = 1000; // 1 second

// Record the time when `setTimeout` is called
const startTime = Date.now();

setTimeout(() => {
    // Record the time when the callback is executed
    const endTime = Date.now();

    // Calculate the time difference
    const timeTaken = endTime - startTime;

    console.log(`Expected delay: ${delay} ms`);
    console.log(`Actual delay: ${timeTaken} ms`);
}, delay);


