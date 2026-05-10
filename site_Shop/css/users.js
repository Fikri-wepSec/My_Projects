let sub = document.querySelector('.sub') ;
let email = document.querySelector('.email');
let pass = document.querySelector('.pass');
let msg = document.querySelector('.msg')
let form = document.forms[0];



// get users from json
fetch('json.json').then(result => {
 return result = result.json();
}).then(users => {
form.addEventListener('submit', (a) => {
  if (pass.value === '') return
  if (email.value === '') return
  
  users.forEach( e => {
    let {id:i , Name:n , Email:E , PassWord:p} = e ;
    if (email.value === E && pass.value === p) {
      msg.innerHTML = 'succssfully login';
      location.href = 'shop.html';
      console.log('right user')
    }  else {
      a.preventDefault() ;
      msg.innerHTML = 'Error Email or Password';
      msg.style = '   text-transform: capitalize; \
      color: rgba(252, 53, 53, 1);  \
      text-shadow: 1px 2px 2px black;   padding: 0; n\
      margin: 0; text-align:start; \
      align-self: self-start; \
   margin-left: 10px;  \
      margin-top: 5px;'
    } 
  });     
});
})


