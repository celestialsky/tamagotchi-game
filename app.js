const submitNameBtn = document.querySelector('#submit-name')
const modal = document.querySelector('.trigger-btn')

const hungerBtn = document.querySelector("#feed")


submitNameBtn.addEventListener('click',()=> {
  const name = document.querySelector('#firstname').value
  game.createFriend(name)
  game.setStatus()
  modal.style.visibility = 'hidden'
}),

hungerBtn.addEventListener('click', ()=> {
  let feed = document.querySelector("#hunger").value
  feed = 0
  game.updateHunger()
})


const game = {
  time: 0,
  hunger: 0,
  bored: 0,
  sleep: 0,
  age: 1,

  createFriend(name) {
    const friend = new Friend()
    friend.initFriend(name)
  },

  setStatus(){
    //const times = document.querySelector("#timer")
    game.updateHunger(),
    game.updateSleep(),
    game.updateBored(),
    game.updateAge()
  },


    // const age = document.querySelector("#age")

  updateHunger() {
    const hungry = document.querySelector("#hunger")
    const hungryLvl = setInterval(()=> {
      this.hunger ++
      hungry.innerText = `Hunger: ${this.hunger}`
        if(this.hunger === 7) {
          alert("Getting hungry! Feed me!")
        }
        else if(this.hunger === 10) {
          alert("Starved to death :(")
          clearInterval(hungryLvl)
        }
    }, 15000);
  },

  updateSleep() {
    const sleepy = document.querySelector("#sleep")
    const sleepLvl = setInterval(()=> {
      this.sleep ++
      sleepy.innerText = `Sleep: ${this.sleep}`
        if(this.sleep === 7) {
          alert("Getting sleepy! Wanna take a nap")
        }
        else if(this.sleep === 10) {
          alert("Died from insomnia :(")
          clearInterval(sleepLvl)
        }
    }, 10000);
  },

  updateBored() {
    const bored = document.querySelector("#bored")
    const boredLvl = setInterval(()=> {
      this.bored ++
      bored.innerText = `Boredom: ${this.bored}`
        if(this.bored === 7) {
          alert("So bored! Play with me!")
        }
        else if(this.bored === 10) {
          alert("Died of boredom :(")
          clearInterval(boredLvl)
        }
    }, 7000);
  },

  updateAge() {
    const age = document.querySelector("#age")
    const ageLvl = setInterval(()=> {
      this.age ++
      age.innerText = `Age: ${this.age}`
        if(this.age === 5) {
          alert(`Congrats you reached ${this.age}!`)
        }
    }, 1000);
  }

 //    const timer = setInterval(() => {
 //      this.time ++
 //        times.innerText = `Timer: ${this.time}`
 //        if(this.time % 7 === 0) {
 //          this.bored ++
 //          bored.innerText = `Boredom: ${this.bored}`
 //        }
 //        else if(this.time % 10 === 0) {
 //          this.sleep ++
 //          sleepy.innerText = `Sleep: ${this.sleep}`
 //        }
 //        else if(this.time % 15 === 0) {
 //          this.hunger ++
 //          hungry.innerText = `Hunger: ${this.hunger}`
 //        }
 //        else if(this.time % 23 === 0) {
 //          this.age ++
 //          bored.age = `Age: ${this.age}`
 //        }
 //      }, 1000);
 //    game.boredAlert()



}
