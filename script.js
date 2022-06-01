const main=document.querySelector(".main");
const account=document.querySelector(".account");
const ho_btn=document.querySelector(".home-btn");
const ac_btn=document.querySelector(".account-btn");
const co_btn=document.querySelector(".code-btn");
const ab_btn=document.querySelector(".code-btn");
ho_btn.addEventListener("click", homepage);
ac_btn.addEventListener("click", accountpage);
co_btn.addEventListener("click", codepage);
ab_btn.addEventListener("click", aboutpage);
function homepage(){
main.style.zIndex="1";
account.style.zIndex="0";
}
function accountpage(){
account.style.zIndex="1";
main.style.zIndex="0";
}