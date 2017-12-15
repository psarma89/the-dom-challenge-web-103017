let counter = document.getElementById('counter');
// let body = document.querySelector('body');
let dec = document.getElementById('-');
let inc = document.getElementById('+');
let heart = document.getElementById('<3');
let pauseButton = document.getElementById('pause')
let commentList = document.getElementById('list')
let submitButton = document.getElementById('submit')
let input = document.querySelector('form#comment-form input')
let likesHash = {"0":0}
let ticker;

function incrementCounter(){
  counter.innerText = (parseInt(counter.innerText) +  1).toString();
}

function decrementCounter(){
  counter.innerText = (parseInt(counter.innerText) -  1).toString();
}

function heartComment(){
  return `${counter.innerText} has been liked ${likesHash[counter.innerText]}`
}

function tickerFunc(){
  ticker = setInterval(function(){
  // console.log(likesHash)
  incrementCounter()
  likesHash[counter.innerText] = 0;
  },1000)
  // likesHash[counter.innerText] = 0
}

function commentLi(){
  let li = document.createElement('li')
  // let textNode = heartComment()
  // li.appendChild(textNode)
  li.innerText = heartComment()
  li.setAttribute("id", `counter-${counter.innerText}`)
  return li
}

function pause(){
  dec.disabled = true
  inc.disabled = true
  heart.disabled = true
  pauseButton.innerText = "resume"
}

function resume(){
  dec.disabled = false
  inc.disabled = false
  heart.disabled = false
  pauseButton.innerText = "pause"
}

//Don't need event if not using it
window.addEventListener('load', tickerFunc)


inc.addEventListener('click', () => incrementCounter())

dec.addEventListener('click', () => decrementCounter())

heart.addEventListener('click', function(){
  let ul = document.querySelector('ul.likes')
  // console.log(likesHash[counter.innerText])
  likesHash[counter.innerText] += 1
  // console.log(likesHash)
  if (ul) {
    let li = document.getElementById(`counter-${counter.innerText}`)
    if (li){
      li.innerText = heartComment()
    }else{
      ul.appendChild(commentLi())
    }
  }else {
    let ul = document.createElement('ul')
    ul.appendChild(commentLi())
  }
})

pauseButton.addEventListener('click', function(){
  if (pauseButton.innerText === "pause") {
    clearInterval(ticker)
    pause()
  }else {
    resume()
    tickerFunc()
  }
})

submitButton.addEventListener('click', function(e){
  e.preventDefault()
  if (input.value){
    let comment = document.createElement('p')
    // let textNode = document.createTextNode(input.value)
    // comment.appendChild(textNode)
    comment.innerText = input.value
    commentList.appendChild(comment)
    input.value = ""
  }
})
