//alert('plugin');

/* add main sitewide js here */

(function(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
})(main);

function main() {
  formActionUpdate();
  console.log('this is the main function');
}

//add the email to the form action after page load so it isn't visible to bots
function formActionUpdate() {
  var form = document.getElementById('contact-form'),
      email = 'khalilrutledge@gmail.com';
  if(form)
    form.action += email;
  return;
}
