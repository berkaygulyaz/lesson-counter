class stepChange {
    constructor() {
        const nextStepBtn = document.querySelector('.next-step-btn');
        const step = document.querySelectorAll('section')

        nextStepBtn.addEventListener('click', () => {
            step.forEach(item => {
                const stepId = item.getAttribute('data-step-id')
                const selectedId = item.getAttribute('data-selected-id')

                if(stepId === selectedId) {
                    item.classList.remove('current-step')
                    item.classList.add('prev-step')
                } else if (stepId < selectedId) {
                    item.classList.remove('prev-step')
                    item.classList.add('prev-step')
                } else if (stepId > selectedId) {
                    item.classList.remove('next-step')
                    item.classList.add('next-step')
                }
            })
        })
    }
}