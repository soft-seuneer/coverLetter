
const myForm = document.querySelector('.my-form');
const nameInput = document.querySelector('#name');

const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const outResult = document.querySelector('#resultId'); 



myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

     if(nameInput.value === ''){
        
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
     } else {
      //  const outResult = document.querySelector('#resultId');  
       // outResult.appendChild(document.createTextNode(`${nameInput.value}`));


       const li = document.createElement('li');

       const result = `${nameInput.value}`;
       const textResult = result.toUpperCase();

       li.appendChild(document.createTextNode(textResult));
        
       userList.appendChild(li);

       

       outResult.innerHTML = textResult;
       console.log(textResult);
     }
} 



