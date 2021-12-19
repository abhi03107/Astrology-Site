var password = $("password")
  , confirm_password = $("confirm_password")
  , createacc = $("createacc");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    createacc.prop("disable",true);
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;