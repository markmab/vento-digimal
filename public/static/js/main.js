// Valida Email e ativa botão
document.getElementById('email').addEventListener('keyup', function() {
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  if(validateEmail(this.value)) {
    document.getElementById('continue-step2').classList.add('active')
    document.querySelector(".popup__right").classList.add('active')
    document.querySelector(".popup__left").classList.add('desactive')
  }  
})
// Valida Nome e ativa botão
document.querySelector("button[type='submit']").disabled = true 
document.getElementById('nome').addEventListener('keyup', function() {
  if(this.value.length >= 4) {    
    document.querySelector("button[type='submit']").classList.add('active')
    document.querySelector("button[type='submit']").disabled = false    
  }
})
document.querySelector("button[type='submit']")
//Impede Submit de form ao clicar button Enter
function checkEnter(e){
  e = e || event;
  var txtArea = /textarea/i.test((e.target || e.srcElement).tagName);
  return txtArea || (e.keyCode || e.which || e.charCode || 0) !== 13;
 }
 document.querySelector('form').onkeypress = checkEnter
 