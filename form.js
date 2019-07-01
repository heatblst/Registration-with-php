$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

function myFunction() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var contact = document.getElementById("contact").value;
var channel = document.getElementById("channel").value;
var insta = document.getElementById("insta").value;
var dataString = 'name1=' + name + '&email1=' + email + '&password1=' + password + '&contact1=' + contact + '&channel1' + channel + '&insta1' + insta;
if (name == '' || email == '' || password == '' || contact == '' || insta== '' || channel== '' ) {
alert("Please Fill All Fields");
} 
else {
$.ajax({
type: "POST",
url: "form.php",
data: dataString,
cache: false,
success: function(html) {
alert(html);
}
});
}
return false;
}
