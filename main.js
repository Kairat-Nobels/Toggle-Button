const BUTTON = document.querySelector("button");
const SYNC = document.querySelector("#sync");
const m1 = document.querySelector('#m1')
const m2 = document.querySelector('#m2')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
let muz = false
const TOGGLE = () =>
{
    const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
    BUTTON.setAttribute("aria-pressed", IS_PRESSED ? false : true);
    IS_PRESSED ? document.body.style.background = '#d7deea' : document.body.style.background = 'rgb(20, 20, 20)'
    if (muz) {
        if (IS_PRESSED) {
            m2.pause()
            m1.play()
        }
        else {
            m1.pause()
            m2.play()
        }
    }
};
BUTTON.addEventListener("click", TOGGLE);
btn1.onclick = () =>
{
    btn2.classList.remove("activeBtn");
    btn1.classList.add("activeBtn");
    muz = true;
}
btn2.onclick = () =>
{
    btn1.classList.remove("activeBtn");
    btn2.classList.add("activeBtn");
    muz = false;
    m1.pause()
    m1.currentTime = 0;
    m2.pause()
    m2.currentTime = 0;
} 
