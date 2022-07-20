function valueChange(event){
    console.log(event.currentTarget.value);
    const p_contents = document.querySelector('#contents');
    p_contents.textContent = event.currentTarget.value;
}
  
let radio1 = document.getElementById('radio1');
radio1.checked = true;
radio1.addEventListener('change', valueChange);

let radio2 = document.getElementById('radio2');
radio2.addEventListener('change', valueChange);

let radio3 = document.getElementById('radio3');
radio3.addEventListener('change', valueChange);

let radio4 = document.getElementById('radio4');
radio4.addEventListener('change', valueChange);

let radio5 = document.getElementById('radio5');
radio5.addEventListener('change', valueChange);

let radio6 = document.getElementById('radio6');
radio6.addEventListener('change', valueChange);



const mainVisualBgImage = [
    'university','education', 'study', 'study_abroad', 'student_life', 'career'
];

const home = document.querySelector('#home');

let num = 0;
function changeColor(num){
    var element = document.getElementById("home")
    element.style.backgroundImage = `url(images/${mainVisualBgImage[num]}.jpg)`;
}
