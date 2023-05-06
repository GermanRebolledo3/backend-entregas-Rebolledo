class UserManager {
   #users;
   static idCounter = 0;
   constructor(Name, lastName, cours , age)   //Inicializo la lista de productos y el contador de IDs
       this.#userS = []
       this.Name = Name;
       this.lastname = lastName;
       this.cours = cours;
     this.age = age;     
      
   }

  
    addUser(name, lastname, cours , age); {
      if (Name == undefined || lastName == undefined || cours == undefined || age == undefined )
           return console.log("Todos los campos son obligatorios");

       if (this.#users.find(p => p.code === code))
            return console.log("Ya existe un usuario con este codigo");

      const newUser = {
        name,
           lastname,
           cours,
           age,
          id: ++userManager.idCounter  };
     this.#users.push(newUser);

    return console.log("usuario añadido");
 }

   // Devuelve la lista completa de usuarios    
   getAllUsers() ;{
       return console.log(this.#users);    } 
         
        getUserById(pid); { 
                 if (this.#users.find(p => p.id === pid)) {
           const userFound = this.#users.find(p => p.id === pid);
          return console.log(userFound);
           }  }
    
      deleteUser(id); {
        
        const usersString = JSON.stringify(this.users);
        fs.writeFileSync("users.json", usersString);
      }
      updateUser(id, user); {
        
        const usersString = JSON.stringify(this.users);
        fs.writeFileSync("users.json", usersString);
      }

        return console.log("No existe un ¡usuario con ese id");     
const userManager = new userManager();

userManager.addUser([{"name":"Juan","lastname":"Perez","age":"23","cours":"2b"},{"name":"monica","lastname":"rodriguez","age":"23","cours":"2b"}]);userManager.addUser([{"name":"Juan","lastname":"Perez","age":"23","cours":"2b"},{"name":"monica","lastname":"rodriguez","age":"23","cours":"2b"}]);
userManager.addUser([{"name":"Juan","lastname":"Perez","age":"23","cours":"2b"},{"name":"monica","lastname":"rodriguez","age":"23","cours":"2b"}]);
userManager.addUser([{"name":"Juan","lastname":"Perez","age":"23","cours":"2b"},{"name":"monica","lastname":"rodriguez","age":"23","cours":"2b"}]);


