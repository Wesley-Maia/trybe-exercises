let users = []

/**
 * Add an User and calculate IMC
 * @param  {[String]} name [Entire name or just the first]
 * @param  {[String]} phone [Number phone without formatting]
 * @param  {[Integer]} weight [Weight]
 * @param  {[Integer]} size [Size]
 * @return {[user, Integer]} [Returns an User and the IMC calculted from weight and size]
 */

const calculateIMC = (size, weight) => {
  size = size / 100;
  let imc = weight / (size * size);

  return  {
    imc
  }
}
const addUser = (name, phone, size) => {
  let user = {
    name: name,
    phone: phone,
    size: size
  }
  users.push(user)

  return {
    user, imc
  }
}

let result = addUser("Peu", "3396635645", 70, 2)
console.log(result.user, result.imc)
