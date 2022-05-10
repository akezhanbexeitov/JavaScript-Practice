// let text = document.querySelector('.text')
// let txt = $('.text2')
// text.innerHTML = "JavaScript"
// txt.html("JQuery")
// text.style.color = "red"
// txt.css("color", "green")
// txt.css({"color" : "red", "backgroundColor" : "yellow"})

// $('.show-btn').on('click', () => {
//     // $('.sq').fadeIn()
//     // $('.sq').fadeOut()
//     // $('.sq').animate({'width' : '+=150px'})
//     // $('.show-btn').unbind('click')
//     $('.sq').fadeToggle()
// })

// $('.sq').attr('id', 'div')
// $('.sq').addClass('div')
// // $('.sq').removeClass('div')
// $('.sq').toggleClass('div')

// Question 1
// $('.show').on('click', () => {
//     $('.sq').fadeIn()
//     $('.show').unbind('click')
// })
// $('.hide').on('click', () => {
//     $('.sq').fadeOut()
// })
// $('.toggle').on('click', () => {
//     $('.sq').fadeToggle()
// })

// Question 2
// $('.load').on('click', () => {
//     $('.two').fadeIn()
//     $('.load').fadeOut()
// })
// $('.load').click(() => {
//     $('.two').fadeIn()
//     $('.load').fadeOut()
// })
// $('.load').hover(() => {
//     $('.sq').css('backgroundColor', 'red')
// })
    
// Question 3
// $('.bye').html('Bye')

// Question 4
// $('.edit').on('click', () => {
//     $('.input').removeAttr('disabled')
// })
// $('.save').on('click', () => {
//     $('.input').attr('disabled', 'true')
// })
// $('.clear').on('click', () => {
//     $('.input').removeAttr('value')
// })

// Question 5
// $('.send').on('click', () => {
//     $('.p').html($('input').val())
// })

// Append in JQuery difference
// $('.a').first().css('color', 'red')
// $('.a:even').css('color', 'red')
// let out = `<p>Append</p>`
// $('.parent').append(out)
// let par = document.querySelector('.parent')
// par.outerHTML = out

// Question 6
// $('.green').on('click', () => {
//     $('.sq').css('backgroundColor', 'green')
// })
// $('.red').on('click', () => {
//     $('.sq').css('backgroundColor', 'red')
// })
// $('.blue').on('click', () => {
//     $('.sq').css('backgroundColor', 'blue')
// })
$('.change').on('click', () => {
    let color = $('input').val()
    $('.sq').css('backgroundColor', color)
})
$('.changeColor').on('click', () => {
    let color = $('.changeColor').val()
    $('.sq').css('backgroundColor', color)
})

