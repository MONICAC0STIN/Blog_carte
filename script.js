function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="admin")
{
    alert("Login succesfully");
    return false;
}
else {
    alert("Login failed");
}

}

window.onscroll = function() {scrollFunction()};

