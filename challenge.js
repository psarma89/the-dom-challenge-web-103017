let counter = document.getElementById('counter');
// let body = document.querySelector('body');
let dec = document.getElementById('-');
let inc = document.getElementById('+');
let heart = document.getElementById('<3');
let pauseButton = document.getElementById('pause')
let commentList = document.getElementById('list')
let submitButton = document.getElementById('submit')
let input = document.querySelector('form#comment-form input')
// let likesHash = {}

let ticker;
function tickerFunc(){
  ticker = setInterval(function(){
  counter.innerText = (parseInt(counter.innerText) +  1).toString();
  },1000)
  // likesHash[counter.innerText] = 0
}

submitButton.addEventListener('click', function(e){
  e.preventDefault()
  if (input.value){
    let comment = document.createElement('p')
    let textNode = document.createTextNode(input.value)
    comment.appendChild(textNode)
    commentList.appendChild(comment)
  }
})

//Don't need event if not using it
window.addEventListener('load', function(){
  // console.log("something")
  tickerFunc()
})


dec.addEventListener('click', function () {
  // console.log("something")
  if (parseInt(counter.innerText) > 0) {
    counter.innerText = (parseInt(counter.innerText) - 1).toString();
  }
})

inc.addEventListener('click', function () {
  // console.log("something")
  counter.innerText = (parseInt(counter.innerText) + 1).toString();
})

heart.addEventListener('click', function(){
  let ul = document.querySelector('ul.likes')
  // likesHash[counter.innerText] += 1
  if (ul) {
    let li = document.createElement('li')
    let textNode = document.createTextNode(`${counter.innerText} has been liked 1 time`)
    li.appendChild(textNode)
    ul.appendChild(li)
  }else {
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    let textNode = document.createTextNode(`${counter.innerText} has been liked 1 time`)
    li.appendChild(textNode)
    ul.appendChild(li)
  }
})

pauseButton.addEventListener('click', function(){
  if (pauseButton.innerText === "pause") {
    clearInterval(ticker)
    dec.disabled = true
    inc.disabled = true
    heart.disabled = true
    pauseButton.innerText = "resume"
  }else {
    dec.disabled = false
    inc.disabled = false
    heart.disabled = false
    pauseButton.innerText = "pause"
    tickerFunc()
  }
})
