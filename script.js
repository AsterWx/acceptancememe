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
    document.querySelector("h1").textContent="Kys then lil nigga"
  }
}
  
