
const form = document.forms.myform;

form.addEventListener('submit', (event) => {
  event.preventDefault(); 


  const username = form.elements.uname.value;
  const password = form.elements.upswd.value;

  if (username.trim() === '') {
    alert('Please enter your username');
    return;
  }

  if (password.trim() === '') {
    alert('Please enter your password');
    return;
  }

  form.submit();
});
