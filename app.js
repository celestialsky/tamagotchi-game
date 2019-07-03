const submitNameBtn = document.querySelector('#submit-name')
const modal = document.querySelector('.trigger-btn')
console.log(submitNameBtn);
 submitNameBtn.addEventListener('click',()=> {
   const name = document.querySelector('#firstname').value
   game.createFriend(name)
   modal.style.visibility = 'hidden'
 })


 const game = {

   createFriend(name) {
     const friend = new Friend()
     friend.initFriend(name)
     }

   }
