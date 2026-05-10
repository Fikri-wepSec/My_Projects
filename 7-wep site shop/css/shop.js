let SignOutBtn = document.querySelector('.liout');
 let btn = document.querySelector('.btn');
 let items = document.querySelectorAll('.items');
 let brodict = document.querySelector('.brodict');
 let cont = document.querySelector('.con');
 let inputSearch = document.querySelector('.inp');
 let msg = document.querySelector('.msg');
SignOutBtn.addEventListener('click', () => {
    let msgW = confirm('Are You sure ?');
    if (msgW === true) {
        location.href = 'login.html';
    }  
})


btn.addEventListener('click', () => {
    if (inputSearch.value.trim() === '') return ;
    let i = [];
    let searchValue = inputSearch.value ;
items.forEach((e) => {
    e.style = 'display:none';
    
    document.body.style = 'min-height:100vh;';  
    // document.querySelector('footer').style = 'position: absolute; bottom:0;';
    brodict.style = 'font-size:25px; color:red; ';  
})

///////////////////////////////////

let bro = document.querySelectorAll('.items');
bro.forEach( (e) => {

    if (e.textContent.includes(searchValue)) {
        console.log('yse')
        i.push(e);
    }
})

if (i.length !== 0) {
    msg.textContent = `found ${i.length} brodict`;
    msg.style = 'font-size:25px ; text-align:center; margin:30px ; color:balck';
    bro.forEach(function (e) {
      if (e.textContent.includes(searchValue)) {
        console.log('good');
          e.style.display = 'block';
          
        }
    })
    console.log(i)
}  else if (i.length === 0) {
msg.textContent = `Not found '${searchValue}'`;
msg.style = 'font-size:25px ; text-align:center; margin:30px ; color:red';
document.querySelector('footer').style = '  position: absolute; \
    bottom: 0;';
} 
    










})










