// let section = document.querySelector(".outer");
let turned = 0;
let turned_arr = [];
let fill = 18;
let allCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let done_add = 1;
let all_img = document.querySelectorAll(".backy");
let uttar = [];
let flip = document.querySelector(".flip");
let match = document.querySelector(".match");
let head2 = document.querySelector(".head2");
let flip_no = Number(flip.innerText);
let match_no = Number(match.innerText);


function getRandom() {
  let ran = Math.floor(Math.random() * allCard.length);
  // allCard[ran] = setUrl(allCard[ran]);
  uttar.push(allCard[ran]);
  allCard = allCard
    .slice(0, ran)
    .concat(allCard.slice(ran + 1, allCard.length));
}

for (let k = 0; k < 16; k++) {
  getRandom();
}
setUrl();

// while(fill > 0){
//     console.log('lj');
//     let ran = Math.floor(Math.random() * 18);
//     if(typeof(allCard[ran]) === 'number'){
//         console.log('lp');
//         fill  -= 2;
//         allCard[ran] = createEle(done_add);
//         done_add += 1;
//     }
// }

// for(let j = 0; j < allCard.length; j++){
//     section.append(allCard[j]);
// }

function setUrl() {
  for (let i = 0; i < uttar.length; i++) {
    let msg = `assets/${uttar[i]}.png`;
    all_img[i].setAttribute("src", msg);
  }
}

function turnThem() {
  for (let i = 0; i < turned_arr.length; i++) {
    console.log("chal");
    turned_arr[i].style.transform = "none";
  }
}

function makeNormal() {
  let f = turned_arr[0].getElementsByClassName("backy")[0].src;
  let s = turned_arr[1].getElementsByClassName("backy")[0].src;
  f = f.substring(f.length - 6, f.length - 4);
  s = s.substring(s.length - 6, s.length - 4);
  f = f[0] === "/" ? Number(f[1]) : Number(f);
  s = s[0] === "/" ? Number(s[1]) : Number(s);
  f = f % 8;
  s = s % 8;
  if (f === s) {
    match_no++;
    if(match_no === 8){
      let my_msg = `You Won it in ${flip_no} flips`;
      head2.innerHTML = my_msg;
      head2.style.fontSize = "34px";
      head2.style.fontWeight = "600";
      head2.style.justifyContent = "center";
    }
    match.innerText = match_no;
    turned_arr = [];
    return;
  }
  for (var j = 0; j < turned_arr.length; j++) {
    delay(j);
  }
  function delay(j) {
    setTimeout(() => {
        turned_arr[j].style.transform = "none";
        if(j === turned_arr.length-1){
          turned_arr = [];
        }
    }, 800);
  }
}

// let node = createEle(1);
// section.appendChild(node);

// function createEle(url){
//     console.log("create");
//     let c1_img = document.createElement("img");
//     let c2_img = document.createElement("img");
//     let fbf1 = document.createElement("div");
//     let fbb2 = document.createElement("div");
//     let fbi_o = document.createElement("div");
//     let fbi_oo = document.createElement("div");
//     let url1 = `assets/undraw.png`;
//     let url2 = `assets/${url}.png`;
//     c1_img.setAttribute("src", url1);
//     c2_img.setAttribute("src", url2);
//     c1_img.style = "width:300px;height:200px";
//     c2_img.style = "width:300px;height:200px";
//     fbf1.appendChild(c1_img);
//     fbb2.appendChild(c2_img);
//     fbf1.classList.add("flip-box-front");
//     fbb2.classList.add("flip-box-back");
//     fbi_o.appendChild(fbf1);
//     fbi_o.appendChild(fbb2);
//     fbi_o.classList.add("flip-box-inner");
//     fbi_oo.appendChild(fbi_o);
//     fbi_oo.classList.add("flip-box");
//     return fbi_oo;
// }

let ele = document.querySelectorAll(".flip-box-front");
let inner = document.querySelectorAll(".flip-box-inner");

for (let i = 0; i < ele.length; i++) {
  ele[i].addEventListener("click", () => {
    flip_no++;
    flip.innerText = flip_no;
    inner[i].style.transform = "rotateY(180deg)";
    turned_arr.push(inner[i]);
    turned++;
    if (turned >= 2) {
      makeNormal();
      turned = 0;
    //   setTimeout(() => {
    //     turned_arr = [];
    //   }, 2000);
    }
  });
}