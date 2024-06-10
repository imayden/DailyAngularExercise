// Ayden Deng

document.addEventListener("DOMContentLoaded", () => {
    const formObject = {
        name: "Ayden Deng",
        phone: "1234567890",
        email: "ayden.yiming.deng@gmail.com",
        address: "123 p p, Chicago IL 60661"
    };

    function createForm(formObject) {
        const formContainer = document.getElementById('form-container');
        const formElement = document.createElement('form');

        Object.keys(formObject).forEach(key => {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';

            const label = document.createElement('label');
            label.htmlFor = key;
            label.textContent = `${key}:`;

            const input = document.createElement('input');
            input.type = 'text';
            input.id = key;
            input.name = key;
            input.value = formObject[key];

            formGroup.appendChild(label);
            formGroup.appendChild(input);
            formElement.appendChild(formGroup);
        });

        formContainer.appendChild(formElement);
    }

    createForm(formObject);
});
