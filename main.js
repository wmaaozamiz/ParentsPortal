function myFunction()
{
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;

    //Sample
    if(un=="sample" && pw=="2021")
    {
        window.location.href="https://wmaaozamiz.github.io/ParentsPortal/parents/ParentsPortal.html";
    }
    //Sample
    if(un=="#" && pw=="#")
    {
        window.location.href="#";
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
