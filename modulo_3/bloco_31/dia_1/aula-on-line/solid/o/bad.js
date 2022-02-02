
/**
 * Verify emails that are not allowed
 * @param  {[String]} email [Entire name or just the first]
 * @return {[Boolean]} [Returns TRUE if that email is not allowed to access]
 */

const verifyNotAllowedUsers = (email) => 
{
    notAllowed = ['peu@internacional.com', 'mariotto@pcgamer.com']
    let result = notAllowed.find((element)=>{
        return element === email
    })
    return result === email
}

console.log(verifyNotAllowedUsers('luizcalaca@gmail.com'))
console.log(verifyNotAllowedUsers('peu@internacional.com'))
console.log(verifyNotAllowedUsers('mariotto@pcgamer.com'))
   