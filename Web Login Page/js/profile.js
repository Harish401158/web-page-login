const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const age = document.querySelector('input[name="age"]').value;
  const dob = document.querySelector('input[name="dob"]').value;
  const contact = document.querySelector('input[name="contact"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const website = document.querySelector('input[name="website"]').value;

  console.log('Name:', name);
  console.log('Age:', age);
  console.log('Date of Birth:', dob);
  console.log('Contact Number:', contact);
  console.log('Email:', email);
  console.log('Website:', website);
});
