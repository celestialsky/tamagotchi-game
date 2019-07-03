class Friend {
  constructor() {
    this.name = document.querySelector('#firstname')
    this.hunger = 1
    this.sleepiness = 1
    this.boredom = 1
    this.age = 1
  }
  initFriend(name) {
    const div = document.querySelector('#tamaimage')
    const img = document.createElement('img')
    const statusdisplay = document.querySelector('#statusdisplay')
    const hunger = document.querySelector('#hunger')
    statusdisplay.innerText = `Name: ${name}`
    hunger.innerText = `Hunger: ${this.hunger}`
    // const displayName = document.createTextNode(`Name: ${this.name}`)
    // const bored = document.createTextNode(`Bored: ${this.boredom}`)
    // const hunger = document.createTextNode(`Hunger: ${this.hunger}`)
    // const sleep = document.createTextNode(`Sleep: ${this.sleepiness}`)
    // const age = document.createTextNode(`Age : ${this.age}`)
    img.src = 'images/Ichigo_reading.png'
    div.appendChild(img)
    // status.appendChild(hunger)
    // status.appendChild(age)
    // status.appendChild(bored)
    // status.appendChild(sleep)

  }
}
