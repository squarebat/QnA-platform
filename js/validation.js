function loginValidate()
{
    var uname = document.getElementById("uname");
    var pwd = document.getElementById("pwd");
    if(uname=="admin" && pwd=="admin")
    {
        window.location=("home.html");
    }
    else
    {
        document.getElementById("invalid").innerHTML = "Username or password is invalid!";
    }

}

function regValidate()
{
    var pwd = document.getElementById("pwd");
    var cpwd = document.getElementById("cpwd");
    var valid=true;
    if(pwd.length<8)
    {
        document.getElementById("pass_len")="Password should be atleast 8 characters long!";
        valid = false;
    }
    if(pwd!=cpwd)
    {
        document.getElementById("pass_match")="Passwords do not match!";
    }
    if(valid)
    {
        document.getElementById("success").innerHTML = "You've been registered successfully";
    }
}