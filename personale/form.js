const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
function validaReg(){
  var p1 = document.regform.inputPassword.value
  var p2 = document.regform.inputPassword2.value
  if(p1 != p2){
    alert('Le password inserite sono diverse!');
    console.log(p1);
    console.log(p2);
    return false;
  }
  else{
    return true;
  }
}