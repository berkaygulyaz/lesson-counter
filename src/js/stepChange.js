class stepChange {
    constructor() {
        const nextStepBtn = document.querySelector('.next-step-btn');
        const step = document.querySelectorAll('section')
        nextStepBtn.addEventListener('click', () => {
            step.forEach(item => {
                const stepId = item.getAttribute('data-step-id')
                const selectedId = item.getAttribute('data-selected-id')
                const changeId = parseInt(selectedId) + 1
                item.setAttribute('data-selected-id', changeId)
                
                item.classList.remove('current-step', 'prev-step', 'next-step')

                if(stepId == changeId) {
                    item.classList.add('current-step')
                } else if (stepId < changeId) {
                    item.classList.add('prev-step')
                } else if (stepId > changeId) {
                    item.classList.add('next-step')
                }

                if(changeId == 3) {
                    nextStepBtn.remove()
                }
            })
        })
    }
}