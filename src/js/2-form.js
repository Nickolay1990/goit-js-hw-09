const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const formDataKey = 'feedback-form-state';

form.addEventListener('input', inputSaveHandler);

function inputSaveHandler(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(formDataKey, JSON.stringify(formData));
}

if (localStorage.getItem(formDataKey)) {
  try {
    const storageData = JSON.parse(localStorage.getItem(formDataKey));
    form.elements.email.value = storageData.email;
    form.elements.message.value = storageData.message;
    formData.email = storageData.email;
    formData.message = storageData.message;
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem(formDataKey);
    formData.email = '';
    formData.message = '';
    form.reset();
    return;
  }
  alert('Fill please all fields');
}
