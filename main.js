var app = new Vue({
    el: '#app',
    data: {
        name:"",
        password:"",
        arrayData:[],
        arrayUser:[],
        error1:false,
        error2:false,
        
        picture:"",
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
        async consume(){
            var url = 'https://randomuser.me/api/?results=10';
            await fetch(url)
            .then((response) => response.json())
            .then((data) => (this.arrayData = data.results));
            this.updateLocalStorage()
            //console.log(this.arrayData);
            this.arrayUser=this.arrayData.map(element=>element);
            console.log(this.arrayUser);
        },
        updateLocalStorage(){
            localStorage.setItem("data",JSON.stringify(this.arrayData));
        },
        validations(){
            let name =this.name;
            let password=this.password;
            let picture=this.picture;
            if (this.name =="") {
                this.getErrorName();
            }else{
                this.getErrorName();
            }if (this.optionVehicle =="") {
                this.getErrorPassword();
            } else{
                this.getErrorPassword();
            }
            if(this.error1==false && this.error2==false){
              const access=this.arrayUser.find((user) => {
                if( user.login.username == name && user.login.password == password){
                  picture =user.picture.large
                  window.location.href = picture

                }
                return false;

              })

                
                
            }
            
           
            
        }
        
    },
    created(){
        if (localStorage.getItem("data") !== null) {
            this.arrayData = JSON.parse(localStorage.getItem("data"));
          } else {
            this.arrayData = this.arrayData;
          }
        this.consume();
    }
    

  })