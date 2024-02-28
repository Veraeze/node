function validateEmail(email){
    if (password.length < 8){
        return false
    }
    let regex = /([a-z]+)([A-Z]+)([0-9]+)[@.#$!%*?&^]/;
    let result = regex.test(email)
    return result;
}

module.exports = validateEmail;