class Stopwatch {
  constructor() {
    this.timer = 0;
    this.interval = null;

    this.timerDisplay = document.querySelector('.time');
    const startBtn = document.querySelector('.start-btn');
    const stopBtn = document.querySelector('.stop-btn');
    const body = document.querySelector('body');
    const audio = document.querySelector('.audio')

    const workTime = 1500 ;
    const breakTime = 300;
    let timer = 0;
    


    startBtn.addEventListener('click', () => {
      this.timerInterval();
      body.classList.add('start-timer');

      setInterval(() => {
        timer++

        if(timer == workTime) {
          audio.play();
          body.classList.remove('start-timer');
          body.classList.add('break-timer');
          body.classList.add('break-alert');
          timer = 0;
        } else if (timer == breakTime && body.classList.contains('break-alert')) {
          audio.play();
          body.classList.add('start-timer');
          body.classList.remove('break-timer');
          body.classList.remove('break-alert');
          timer = 0
        }
      }, 1000);


    });

    stopBtn.addEventListener('click', () => {
      this.timerClear(this.interval);
      body.classList.remove('start-timer', 'break-timer')
      audio.pause();
    });
  }

  msToTimeString(ms) {
    let second = (ms / 1000) % 60;
    let minutes = Math.floor(ms / 1000 / 60) % 60;
    let hours = Math.floor(ms / 1000 / 60 / 60);

    second = ('0' + second).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    hours = ('0' + hours).slice(-2);

    return `${hours}:${minutes}:${second}`;
  }

  timerInterval() {
    this.interval = setInterval(() => {
      this.timer += 1000;
      this.timerDisplay.innerHTML = this.msToTimeString(this.timer);
    }, 1000);
  }

  timerClear() {
    clearInterval(this.interval);
    this.timer = 0;
    this.timerDisplay.innerHTML = `00:00:00`;
  }
}
