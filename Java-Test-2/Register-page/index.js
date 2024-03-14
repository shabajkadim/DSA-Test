function Register(event){
    event.preventDefault();
    // alert ("Hello")
    // console.log("helloooo");

    var name=document.getElementById("name").value
    console.log(name, "- name");
    var email=document.getElementById("email").value
    console.log(email,"- email");
    var password=document.getElementById("password").value
    console.log(password,"- password");

    if(!name || !email || !password){
        return alert("All fields are required")
    }
    // console.log()

    
     
    var userData={name: name , email:email, password:password}

    var users=JSON.parse(localStorage.getItem("Users")) || [] ;

    users.push(userData)

   localStorage.setItem("Users",JSON.stringify(users))

   document.getElementById("name").value="" ;
   document.getElementById("email").value="";
   document.getElementById("password").value="";

  

   alert("Registation succusseful")
   window.location.href ='./../Login-page/index.html'
    
    
}