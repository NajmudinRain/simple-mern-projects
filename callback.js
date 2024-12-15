function arithmeticoperation(a, b, func){
     return func(a,b)
}

function sum(a, b){
    return a +b 
}



// const result = arithmeticoperation(5,8, sum)

// console.log(result)







//from shraddha kapar video

// function getdata(dataID, nextdata){
//     setTimeout(()=>{
//         console.log("data", dataID);
//         if(nextdata){
//             nextdata(2)
//         }
//     }, 2000)
// }

// //call back hell
// getdata(1,()=>{
//     console.log("getting data 2")
//     getdata(2,()=>{
//         console.log("getting data 3")
//         getdata(3,()=>{
//             console.log("getting data 4")
//             getdata(4)
//         })
//     })
// })





//Promises

// let promise = new Promise((resolve, reject) =>{
//     console.log("I am a promise")
//     reject("some erro occ")
//     console.log(resolve)
// })


//promises is basically made my api call. that it will return the result.so we have to handle that result
// function getdata(dataID, nextdata){
//     return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 console.log("data", dataID);
//                 if(nextdata){
//                     getdata(nextdata)
//                 }
//             }, 5000)

//     })

//     }

// promise = getdata(123, 124)
// console.log(promise)

// const getpromise =()=>{
//     return new Promise((resolve, reject) => {
//         console.log("I am promise");
//         resolve("successfull")
//         // reject("network error")
//     })
// }



// let promise = getpromise()

// Handling the result returned by promise
// promise.then((res)=>{
//     console.log("promise fullfilled", res)
// });

// promise.catch((err)=>{
//     console.log("promised reject", err)
// })


// Promise with async function

// function asyncFunction(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data1")
//             resolve("successful")
//         },4000)
//     })

// }

// console.log("fetching data")
// let p1 = asyncFunction()
// p1.then((res)=>{
//     console.log(res)
// })

// console.log("this should run before successful msg")


// promise chaining
function asyncFunction1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data1")
            resolve("successful")
        },4000)
    })

}

function asyncFunction2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data2")
            resolve("successful")
        },4000)
    })

}

        // the below code is giving data together. but we want data1 first then data 2. for that we have promose chaining
        // console.log("fetching data1")
        // let p1 = asyncFunction1()
        // p1.then((res)=>{
        //     console.log(res)
        // })

        // console.log("fetching data2")
        // let p2 = asyncFunction2()
        // p1.then((res)=>{
        //     console.log(res)
        // })

        // console.log("this should run before successful msg")
    //the below code is for fetching data one after another
    // console.log("fetching data 1")
    // asyncFunction1().then((res)=>{
    //     console.log(res)
    //     console.log("fetching data 2")
    //     asyncFunction2().then((res)=>{
    //         console.log(res)
    //     })
    // })


// function getdata(dataID){
//     return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 console.log("data", dataID);
//                 resolve("success")
//             }, 2000)

//     })

//     }

    //promise chain
// getdata(1).then((res)=>{
//     console.log(res)
//     getdata(2).then((res=>{
//         console.log(res)
//     }))
// })

// getdata(1).then((res)=>{
//     return getdata(2)
// }).then((res)=>{
//     return getdata(3)
// }).then((res)=>{
//     console.log(res)
// })



//async await

// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("weather data")
//             resolve("success")
//         }, 2000);
//     })
// }

// async function weatherdata() {
//     await api()
//     await api()
// }

// weatherdata()

//using async await

function getdata(dataID){
    return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log("data", dataID);
                resolve("success")
            }, 2000)

    })

    }

// async function getalldata(){
//     await getdata(12)
//     await getdata(123)
// }

// getalldata()

//IIFE: immediately Invoked function Expression
(async function(){
    await getdata(12)
    await getdata(123)
    await getdata(12345)
})();


