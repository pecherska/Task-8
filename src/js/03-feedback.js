import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const saveData = JSON.parse(localStorage.getItem("feedback-form-state"));
let data = {};

console.log(saveData);

form.addEventListener("input",  throttle(onInput, 500));
form.addEventListener("submit", onSubmit);

updateInput();
function onInput(e) {
    e.preventDefault();
    data[e.target.name] = e.target.value;
    // console.log( data[e.target.name] = e.target.value)

    // const { email, message } = e.currentTarget.elements;
    //    const data = {
    //     email: email.value,
    //     message: message.value,
    // }

    localStorage.setItem("feedback-form-state", JSON.stringify(data));

};


function updateInput() {
           if (saveData) {
            form.email.value = saveData.email;
            form.message.value = saveData.message;
    }

};


function onSubmit(e) {
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem('feedback-form-state');
};
