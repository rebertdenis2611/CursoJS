const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const colorbody = getComputedStyle(document.body);
const colorbackgroundbody = colorbody.backgroundColor;

for (let p of ps){
    p.style.backgroundColor = colorbackgroundbody;
    p.style.color = 'white';
    p.style.padding = '10px'
}