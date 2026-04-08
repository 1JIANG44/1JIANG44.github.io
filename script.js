const games=[
{id:1,title:"Super Mario Run",cate:"arcade",img:"https://images.unsplash.com/photo-1550745165-9bc0b252726f",url:"https://www.silvergames.com/embed/super-mario-run"},
{id:2,title:"Tetris Classic",cate:"puzzle",img:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",url:"https://www.silvergames.com/embed/tetris-classic"},
{id:3,title:"Stickman Fighter",cate:"action",img:"https://images.unsplash.com/photo-1542751371-adc38448a05e",url:"https://www.silvergames.com/embed/stickman-fighter"},
{id:4,title:"Candy Crush",cate:"casual",img:"https://images.unsplash.com/photo-1569428034239-9587acd76cc6",url:"https://www.silvergames.com/embed/candy-crush-saga"},
{id:5,title:"Snake Classic",cate:"arcade",img:"https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",url:"https://www.silvergames.com/embed/snake-classic"},
{id:6,title:"Sudoku Master",cate:"puzzle",img:"https://images.unsplash.com/photo-1580519542036-c47de63970aa",url:"https://www.silvergames.com/embed/sudoku-master"},
{id:7,title:"Car Racing 3D",cate:"action",img:"https://images.unsplash.com/photo-1547758728-656a97d8a43a",url:"https://www.silvergames.com/embed/car-racing-3d"},
{id:8,title:"Solitaire",cate:"casual",img:"https://images.unsplash.com/photo-1586201375761-83865001e31c",url:"https://www.silvergames.com/embed/solitaire-classic"}
];
const gList=document.getElementById("games");
const search=document.getElementById("search");
const modal=document.getElementById("modal");
const close=document.getElementById("close");
const frame=document.getElementById("gameFrame");
const btns=document.querySelectorAll(".nav-btn");
function show(arr){gList.innerHTML="";arr.forEach(g=>{const d=document.createElement("div");d.className="card";d.innerHTML=`<img src="${g.img}"><div class="info"><div class="title">${g.title}</div><div class="cate">${g.cate}</div></div>`;d.onclick=()=>{frame.src=g.url;modal.style.display="flex"};gList.appendChild(d)})}
show(games);
btns.forEach(b=>{b.onclick=()=>{btns.forEach(n=>n.classList.remove("active"));b.classList.add("active");const c=b.dataset.cate;show(c==="all"?games:games.filter(g=>g.cate===c))}});
search.oninput=(e)=>{const t=e.target.value.toLowerCase();show(games.filter(g=>g.title.toLowerCase().includes(t)||g.cate.toLowerCase().includes(t)))};
close.onclick=()=>{modal.style.display="none";frame.src=""};
modal.onclick=(e)=>{if(e.target===modal){modal.style.display="none";frame.src=""}};