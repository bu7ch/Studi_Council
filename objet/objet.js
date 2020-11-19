// Object 
// {}

// [value, value,...]
// {
//   key : value
// }

// let ecole = {
//   name: 'Studi'
// }
// les objets ont des propriétés et des choses qu'ils vont faire ( methodes)

// blog 
// propriétés : titre / contenu / author
// methodes : publier / depublier / effacer

// let ecole = {
//   name: 'Studi',
//   classes : ['cp', 'CE1','CE2'],
//   couleur : "Vert"
// }

// console.log(ecole.name)
// console.log(ecole.classes[2])

// 1 exemple 

let user = {
  name : "Billy",
  age : 30,
  email: "billy@Studi.fr",
  location:"france",
  blogs:[
    {title: 'Comment faire les burgers', likes: 30},
  {title: "POurquoi les animaux ne dorment pas la nuit", likes:5}
  ],
  "mes papiers":['impôts', "assurance", "loyer"],
  login:function(){
    console.log("L'utilisateur est connecté")
  },
  logout:function(){
    console.log("L'Utilisateur est deconnecté");
  },
  logBlogs: function(){
    console.log("Cet utilisateur a ecrit ces articles :")
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    })
  }
}


user.logBlogs(); 
