let block = document.querySelector('.block')
let create_card_bth = document.querySelector('body')


create_card_bth.addEventListener('click',function(e){
    block.style.transform = `translate(${e.pageX-25}px,${e.pageY-150}px)`
    block.style.opacity =0.5
    anime({
        targets:'.block',
        scale:[
            {value:2},
            {value:0.5}
        ],
        display:'none',
        duration:1000
    })
    setTimeout(function(){block.style.opacity =0},800)
})



function calc_price() {
    let days_amount = +document.querySelector('.days-input').value
    let one_day_price = +document.querySelector('.submit-select').value
    let total = days_amount * one_day_price
    alert(total)
}
 
let calc_button = document.querySelector('.submit-btn-calc')
calc_button.addEventListener('click', calc_price)
