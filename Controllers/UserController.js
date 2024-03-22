const UserModel = require("../Models/Usermodel")
const bcrypt = require('bcrypt')

const SignUp = async (req, res) => {
    const { FullName, UserName, PhoneNumber, Password, Email } = req.body
    if (!FullName || !UserName || !PhoneNumber || !Password || !Email) {
        res.status(400).send({ message: 'all fields are mandatory' })
    } else {
        try {
            const verifyEmail = await UserModel.findOne({ Email })
            const verifyPhoneNumber = await UserModel.findOne({ PhoneNumber })
            const verifyUserName = await UserModel.findOne({ UserName })
            if (verifyEmail) {
                res.status(400).send({ message: 'email is already in use' })
            } else if (verifyPhoneNumber) {
                res.status(400).send({ message: 'phone number is already in use' })
            } else if (verifyUserName) {
                res.status(400).send({ message: 'username is already in use' })
            } else {
                const hashedpassword = await bcrypt.hash(Password, 10)
                const createUser = await UserModel.create({
                    FullName,
                    UserName,
                    PhoneNumber,
                    Password: hashedpassword,
                    Email
                })

                if (!createUser) {
                    res.status(400).send({ message: 'unable to create account, try again later' })
                } else {
                    res.status(200).send({ message:`Account successfully created for ${UserName}` })
                }



            }

        } catch (error) {
            res.status(500).send({ message: 'internal server error' })
            console.log('error while signing up', error);

        }




    }


}


module.exports = {SignUp}