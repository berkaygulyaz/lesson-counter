class userName {
    constructor() {
        const nameInput = document.querySelector('.name');
        const welcomeText = document.querySelector('.welcome')
        const section = document.querySelectorAll('section')
        const getName = localStorage.getItem('name')
        const nextBtn = document.querySelector('.next-step-btn')
        nameInput.addEventListener('change', () => {
            const nameValue = nameInput.value;
            localStorage.setItem('name', nameValue)
        })

        if(getName) {
            welcomeText.innerHTML += `Hoşgeldin, ${getName}`
            section.forEach(item => {
                item.classList.remove('current-step', 'prev-step', 'next-step')
                item.setAttribute('data-selected-id', '3')
            })
            nextBtn.remove()
        } else {
            welcomeText.innerHTML += `Hoşgeldin`
        }


    }
}