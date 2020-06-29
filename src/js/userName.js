class userName {
    constructor() {
        const nameInput = document.querySelector('.name');
        const welcomeText = document.querySelector('.welcome')
        const getName = localStorage.getItem('name')
        nameInput.addEventListener('change', () => {
            const nameValue = nameInput.value;
            localStorage.setItem('name', nameValue)
        })

        if(getName) {
            welcomeText.innerHTML += `Hoşgeldin, ${getName}`
        } else {
            welcomeText.innerHTML += `Hoşgeldin`
        }


    }
}