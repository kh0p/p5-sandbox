var toBe = "To be or not to be-that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles, And, by opposing, end them. To die, to sleep - No more - and by a sleep to say we end The heartache and the thousand natural shocks That flesh is heir to - 'tis a consummation Devoutly to be wished. To die, to sleep - To sleep, perchance to dream. Aye, there's the rub, For in that sleep of death what dreams may come, When we have shuffled off this mortal coil, Must give us pause. There's the respect That makes calamity of so long life."
var arr  = toBe.split(" ")
var newArr = []

function setup() {
  createCanvas(800, 600)
  console.log(arr)
}

function draw() {
  background(0)

  var arrIndex   = random(0, arr.length)
  var arrElement = arr[Math.floor(arrIndex)] 
  newArr.push(arrElement)
  stringArr = newArr.join(" ")

  textSize(16)
  fill(100)
  text(stringArr, 12, 24, 590, 790)

  textSize(64)
  fill(255)
  text(arrElement.toString(), 12, 300)

  if (newArr.length > 5000)
    arr = []
}
