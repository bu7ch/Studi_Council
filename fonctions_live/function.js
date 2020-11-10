function calculateAge(yearOfBirth){
  let age = 2020 - yearOfBirth;
  console.log(age);
  return age
}

const ageBob = calculateAge(1985);
const ageMike = calculateAge(1969);
const ageMary = calculateAge(1948);
const test = calculateAge(2000);

function yearsUntilRetirement(name,yearOfBirth) {
  let age = calculateAge(yearOfBirth)
  let retirement = 62 - age

  if(retirement >= 0){
  // console.log(name + " va partir en retraite dans " + retirement +" ans");
  console.log(`${name} va partir en retraite dans ${retirement} ans`);
  }else {
    console.log(`${name} est déjà la retraite`);
  }
  // return retirement
}

yearsUntilRetirement('Bob',1985)
yearsUntilRetirement('Mike',1969)
yearsUntilRetirement('Mary',1948)


function connexion(username,password,email){
  if(username.length !== 0){
    console.log( 'username OK!')
  }
  if(password.length <= 6){
      console.log( 'votre mot de pass est trop petit')
    }
  if(!email.includes("@")){
    console.log( "votre email n'est pas valide")
  }

  // save((err,userSave) =>{
  //   if(err) return console.log(err)
  //   return userSave
  // })
}

connexion('fjlke','password','bobbob.me')
connexion('','lkg','sjglkg@j')

console.log("----------------------------------------")




3 + 4 

const addition = function(x,y){
  console.log(x + y)
 
}

addition(4,4)
addition(34879696,509090909509090909)