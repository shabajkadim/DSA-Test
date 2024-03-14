function Login(event){
    event.preventDefault();

    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
  
    if(!email || !password){
        return alert("all fields are required")
    }

    var users= JSON.parse(localStorage.getItem("Users"));
    console.log(users)  

    for(var i=0; i < users.length ; i++ ){
        if(users[i].email == email && users[i].password == password){
            document.getElementById("email").value="";
            document.getElementById("password").value="";
            window.location.href="./../index.html";
            return  alert("Login Successful")
           
        }
    }
   return alert("check your email or password")
 }

