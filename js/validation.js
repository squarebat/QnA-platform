function loginValidate()
{
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;
    document.getElementById("invalid").innerHTML = "";
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
    document.getElementById("pass_len").innerHTML="";
    document.getElementById("pass_match").innerHTML="";
    document.getElementById("success").innerHTML = "";

    var pwd = document.getElementById("pwd").value;
    var cpwd = document.getElementById("cpwd").value;
    var valid=true;
    if(pwd.length<8)
    {
        document.getElementById("pass_len").innerHTML="Password should be atleast 8 characters long!";
        valid = false;
    }
    if(pwd!=cpwd)
    {
        document.getElementById("pass_match").innerHTML="Passwords do not match!";
        valid=false;
    }
    if(valid==true)
    {
        document.getElementById("success").innerHTML = "You've been registered successfully<br>"+
        "<span style='color:black'>Username: "
        +document.getElementById("uname").value+"</span><br><span style='color:black'>Email ID: "
        +document.getElementById("email").value+"</span>";
    }
}