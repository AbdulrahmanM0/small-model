let root = document.getElementById('root');
let body = document.getElementsByTagName('body');
body[0].style.cssText = 'margin: 0; padding: 0;';
let container = document.createElement('div');
let img = document.createElement('img');
img.setAttribute('src','img/team-01.png');
let model = document.createElement('div');
model.innerHTML = '';
model.style.cssText = 'background-color: rgb(0, 0, 0, .5); top: 0; left: 0; height: 100vh; width: 100%; position:absolute;  padding: 20px;display:none;';
let imgContent = document.createElement('img');
imgContent.setAttribute('src','');
imgContent.setAttribute('alt','');
imgContent.setAttribute('id','imgContent');
let span = document.createElement('span');
span.style.position = 'relative';
span.innerHTML = '<span style=float:right;font-size:40px;position:absolute;cursor:pointer;>&times;</span>'
model.appendChild(span);
model.appendChild(imgContent);
imgContent.style.cssText = 'display: block; margin: auto; opacity: 100%;';
root.appendChild(model);
container.appendChild(img);
root.appendChild(container);

span.children[0].onclick = () => {model.style.display = 'none'};
container.onclick = (e) => {
    imgContent.src = img.src;
    model.style.display = 'block';
    console.log(e.target);
}