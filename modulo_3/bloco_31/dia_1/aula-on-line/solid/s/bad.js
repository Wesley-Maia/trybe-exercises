let users = []

/**
 * Add an User and calculate IMC
 * @param  {[String]} name [Entire name or just the first]
 * @param  {[String]} phone [Number phone without formatting]
 * @param  {[Integer]} weight [Weight]
 * @param  {[Integer]} size [Size]
 * @return {[user, Integer]} [Returns an User and the IMC calculted from weight and size]
 */
const addUser = (name, phone, weight, size) =>{
    let user = {
        name: name,
        phone: phone,
        size: size
    }
    users.push(user)
    
    size = size / 100;
    imc = weight / (size * size)

    return{
        user, imc
    }
}

let result = addUser("Peu", "3396635645", 70, 2)
console.log(result.user, result.imc)