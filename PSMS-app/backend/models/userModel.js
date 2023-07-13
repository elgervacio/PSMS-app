const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add a name"]
    },

    email: {
        type: String,
        require: [true, "Please add a email"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email"
        ]
    },
    password: {
        type: String,
        require: [true, "Please add a password"],
        minLength: [6, "Password must be up to 6 Characters"],
        maxLength: [23, "Password must not be more than 23 Characters"],
    },
    photo: {
        type: String,
        require: [true, "Please add a photo"],
        default: "http://i.ibb.co/4pDNDk1/avatar.png"
    },
    phone: {
        type: String,
        default: "+63"
    },
    bio: {
        type: String,
        maxLength: [250, "Bio must be not be more than 250 characters"],
        default: "bio"
    },

}, {
    timestamps: true,
})

const User = mongoose.model("User", userSchema)
module.exports = User