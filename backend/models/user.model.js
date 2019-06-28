const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const user = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
        timestamps: true//this timestamp add createdAt, updatedAt key info
    });

// NOTE: Arrow functions are not used here as we do not want to use lexical scope for 'this'
// user.pre('save', function (next) {
//     let user = this;
//     // Make sure not to rehash the password if it is already hashed
//     if (!user.isModified('password')) return next();
//     // Generate a salt and use it to hash the user's password
//     bcrypt.genSalt(10, (err, salt) => {
//         if (err) return next(err);
//         console.log("admin salt", salt, user.password)
//         bcrypt.hash(user.password, salt, (err, hash) => {
//             console.log("admin hash", salt, hash)
//             if (err) return next(err);
//             user.password = hash;
//             next();
//         });
//     });
// });
// user.methods.checkPassword = function (attempt, callback) {
//     let user = this;
//     bcrypt.compare(attempt, user.password, (err, isMatch) => {
//         if (err) return callback(err);
//         callback(null, isMatch);
//     });
// };
module.exports = mongoose.model('user', user);

