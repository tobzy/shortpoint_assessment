let button = document.getElementById('finish_button');

button.addEventListener('click', () => {
    moveProgressBars()
})

let i = 0;
const moveProgressBars = () => {
    if (i === 0) {
        i = 1;
        let bars = document.getElementsByClassName('bar');
        let progressTexts = document.getElementsByClassName('progress-text');
        // console.log(bars)
        let width = 1;

        let id = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                for (let bar of bars) {
                    bar.style.width = width + "%";
                }
                for (let item of progressTexts) {
                    item.innerText = width + "%";
                }

            }
        }
    }
}