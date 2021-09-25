function myFunction()
{
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;
    if(un=="faculty" && pw=="2021")
    {
        window.location.href="dashboard.html";
    }
    if(un=="wmaa" && pw=="apare")
    {
        window.location.href="student.html";
    }
    if(un=="bhem" && pw=="1234")
    {
        window.location.href="studentinfo/g9aparebj.html";
    }
    if(un=="Reda" && pw=="09051709539")
    {
        window.location.href="https://wmaaozamiz.github.io/portal/dashboard.html";
    }
    
}

function myFunction2() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
