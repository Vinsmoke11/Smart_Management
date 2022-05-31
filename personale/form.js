const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
function controlloTelefono(t) {
  if (isNaN(t)) {
      alert("Il telefono deve essere un numero");
      return false;
  }
  if (t.length != 10 && t.length != 9) {
      alert("Il telefono deve contenere 9 o 10 cifre");
      return false;
  }
  return true;
}
function controlloPassword(p){
  if(p.length < 6){
    alert("la password deve contenere almeno 6 caratteri");
    return false;
  }
}
function validaReg(){
  var p1 = document.regform.inputPassword.value
  var p2 = document.regform.inputPassword2.value
  var tel = document.regform.inputTelefono.value
  if(p1 != p2){
    alert('Le password inserite sono diverse!');
    return false;
  }
  if(!controlloPassword(p)){
    return false;
  }
  if(!controlloTelefono(tel)){
    return false;
  }
  return true;
}