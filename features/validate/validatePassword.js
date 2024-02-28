function validatePassword(password){
    if (password.length < 8){
        return false
    }
    let regex = /([a-z]+)([A-Z]+)([0-9]+)[@.#$!%*?&^]/;
    let result = regex.test(password)
    return result;
}

module.exports = validatePassword;