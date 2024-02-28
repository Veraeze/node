const NotFoundException = require('../exceptions/NotFoundException');
const User = require('../model/user')

const createUser =  async(request) =>{
    const {firstName, lastName, email, password} = request;

    const user = await User.findOne({email});
    if(user){
        throw new NotFoundException("This email already exists");
    }

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };
    

    const savedUser = await User.create(newUser);

    const response = {
        _id : savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        email: savedUser.email
    }

    return{
        data: response,
        message : "Registration Successful"
    }
};

const login = async (request) =>{
    const{email, password} = request;

    const user = await User.findOne({email})
    if(!user){
        throw new NotFoundException("user does not exist")
    };

    if(user.password !== password){
        throw new NotFoundException("Invalid credentials")
    };
    return{
        msg: "Login successfull",
    }
}

const findUser = async(request) =>{
    const{email} = request;

    const user = await User.findOne({email})
    if(!user){
        throw new NotFoundException("user does not exist")
    };

    const savedUser = await User.findOne({email})

    const response = {
        _id : savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
    }

    return{
        data: response
    }

}

const deleteUser = async(request) =>{
    const {email} = request;

    const user = await User.findOne({email})
    if(!user){
        throw new NotFoundException("user does not exist")
    };

    const savedUser = await User.findOneAndDelete({email})

    return{
        msg: "User successfully deleted"
    }
}


module.exports = {createUser, login, findUser, deleteUser};