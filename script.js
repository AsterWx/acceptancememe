const acceptance = document.getElementById("acceptance");
const rejection = document.getElementById("rejection");

rejection.addEventListener("mouseover", rejectionClick);
let rejectionCount = 0;
function rejectionClick() {
  let x = Math.random() * (window.innerWidth - rejection.offsetWidth);
  let y = Math.random() * (window.innerHeight - rejection.offsetHeight);
  rejection.style.left = x + "px";
  rejection.style.top = y + "px";
  rejectionCount++;

  if(rejectionCount > 5) {
    document.querySelector("h1").textContent="Kys then"
  }
}

acceptance.addEventListener("click",acceptanceClick);
function acceptanceClick() {
    document.querySelector("h1").textContent="You will be my pookie bear for the rest of eternity"
    document.querySelector("img").src="https://media1.tenor.com/images/7106845393e9a9d584f82a6d9484c2b0/tenor.gif?itemid=13611267"
    acceptance.remove();
    rejection.remove();
}