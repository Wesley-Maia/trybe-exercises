
/**
 * Verify emails that are not allowed
 * @param  {[String]} email [Entire name or just the first]
 * @return {[Boolean]} [Returns TRUE if that email is not allowed to access]
 */

const notAllowed = ['peu@internacional.com', 'mariotto@pcgamer.com'];

 const verifyNotAllowedUsers = (email,listEmails) => 
 {
     
     let result = listEmails.find((element)=>{
         return element === email;
     })
     // Retorna um Booleano
     return result === email;
 }
 
 console.log(verifyNotAllowedUsers('luizcalaca@gmail.com', notAllowed));
 console.log(verifyNotAllowedUsers('peu@internacional.com', notAllowed));
 console.log(verifyNotAllowedUsers('mariotto@pcgamer.com', notAllowed));
