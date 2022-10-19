const inp1 = document.querySelector("input")
const btn1 = document.querySelector("button")
let age = 18

btn1.addEventListener('click', () => {
    let num = new Promise((resolve,reject) => {
        if (inp1.value == age ){
            resolve( "УРА ВЫ УГАДАЛИ")
        }else {
            reject("ВЫ НЕ УГАДАЛИ , ПОПРОБУЙТЕ ЕЩЕ РАЗ")
        }

    }).then((resolve)=> console.log(resolve))
    .catch((reject)=> console.log(reject))
    
})

const type = "JavaScript"
let js = 10
btn1.addEventListener('click',() => {
        let num = new Promise ((resolve,reject) => {
            if (inp1.value == js) {
                alert("ВЫ УГАДАЛИ")
            }else{
                alert("НЕ ПРАВИЛЬНО")
            }

        })
})