var app = new Vue({
    el: '#app',
    data: {
        arrayUser:[],
        arrayUsers:[],
        arrayTable:[],
        completeName:"",
        foto:"",
        index:"",
    },
    methods: {
    getIndex(evt){
          
        this.index = evt.target.selectedIndex;
    },
        
    updateLocalStorage(){
        this.arrayUsers = JSON.parse(localStorage.getItem("data"));
        this.arrayUser = JSON.parse(localStorage.getItem("user"));
    },
    updateLocalStorage2(){
        localStorage.setItem("data",JSON.stringify(this.arrayUsers));
    },
    header(){
        this.arrayUser.forEach(element => {
            this.completeName = `${element.usuario1} ${element.usuario2}` 
            this.foto = element.foto 
         });
    },
    table(){
        this.arrayTable.push({
             foto:this.arrayUsers.picture,

        })
    },
    deleteRegister(data, index) {
          Swal.fire({
              title: "¿Está seguro de eliminar a"+ " " +data.name.first+"?",
              text: "¡Este proceso es irreversible!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "SI",
              cancelButtonText: "NO",
            }).then((result) => {
              if (result.isConfirmed) {
                  console.log(this.arrayUsers);
                  this.arrayUsers.splice(index,1);
                  console.log(this.arrayUsers);
                  this.updateLocalStorage2()
                this.message(
                  "Se eliminó correctamente",
                  1500,
                  "center",
                  "¡Este proceso es irreversible!"
                );
            }
          });
    },
    message(msj,time,position,text){
            Swal.fire({
            position: position,
            text: text,
            icon: "success",
            title: msj,
            showConfirmButton: false,
            timer: time,
        });
    },


    },
       
    created(){
        this.updateLocalStorage()
        this.header();
        this.table();
    },
    mounted(){
        
    },
    

  })