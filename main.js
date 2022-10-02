var app = new Vue({
    el: '#app',
    data: {
        name:"tinykoala528",
        password:"thecat",
        arrayData:[],
        arrayDatosUser:[],
        error1:false,
        error2:false,
        
       
    },
    methods: {
        getErrorName() {
            if (this.name == "") {
              this.error1 = true;
            } else {
              this.error1 = false;
            }
          },
          getErrorPassword() {
            if (this.password == "") {
              this.error2 = true;
            } else {
              this.error2 = false;
            }
          },
          updateLocalStorage(){
            localStorage.setItem("data",JSON.stringify(this.arrayData));
            localStorage.setItem("user",JSON.stringify(this.arrayDatosUser));
        },
        async consume(){
            var url = 'https://randomuser.me/api/?results=10';
        await fetch(url)
            .then((response) => response.json())
            .then((data) => (this.arrayData = data.results));
            this.updateLocalStorage()
            
            
        },
        validations(){
          var name =this.name;
          var password=this.password;
          
          if (this.name =="") {
            this.getErrorName();
          }else{
            this.getErrorName();
          }if (this.password =="") {
            this.getErrorPassword();
          } else{
            this.getErrorPassword();
          }
          if(this.error1==false && this.error2==false){
            const access=this.arrayData.find((user) => {
              if( user.login.username == name && user.login.password == password){
                this.arrayDatosUser.push({usuario1:user.name.first,usuario2:user.name.last,foto:user.picture.thumbnail})
                window.location.href = "./tabla.html"; 
                this.updateLocalStorage();
              }
              return false;
              
            })
            
            
            
          }
          
          
          
        },
        
        
      },
      
    
    created(){
        if (localStorage.getItem("data") !== null) {
            this.arrayData = JSON.parse(localStorage.getItem("data"));
          } else {
            this.consume();
          }
          
          
    },
    
   
    

  })