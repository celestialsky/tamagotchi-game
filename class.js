class Friend {
  constructor() {
    this.name = document.querySelector('#firstname')
  }
  initFriend(name) {
    const div = document.querySelector('#tamaimage')
    const img = document.createElement('img')
    const status = document.querySelector('#name')

    status.innerText = `Name: ${name}`
  //   const displayName = document.createTextNode(`Name: ${this.name} `)
  //   const bored = document.createTextNode(`Bored: ${this.boredom}  `)

  //   const sleep = document.createTextNode(`Sleep: ${this.sleepiness}  `)
  //   const age = document.createTextNode(`Age : ${this.age}`)
    img.src = 'images/idle.gif'
    div.appendChild(img)

  //   status.appendChild(age)
  //   status.appendChild(bored)
  //   status.appendChild(sleep)
  //
  }
}
