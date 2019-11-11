const mongoose = require('mongoose');

const {
    Schema,
    model
} = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false // 撈部會撈出來
    },
    age: {
        type: Number,
        required: false
    },
    // avatar_url: {
    //     type: String,
    //     required: false
    // },
    gender: {
        type: String,
        enum: ['male', 'female'],
        default: 'male',
        required: false
    },
    headline: {
        type: String,
        required: false
    },
    localtions: {
        type: [{
            type: String
        }],
        required: false
    },
    business: {
        type: String,
        required: false
    },
    employments: {
        type: [{
            company: {
                type: String
            },
            job: {
                type: String
            }
        }],
        required: false
    },
    educations: {
        type: [{
            school:{type:String},
            major:{type:String},
            degree:{type:Number, enum:[1,2,3,4,5]},
            entrance_year:{type:Number},
            graduation_year:{type:Number}
        }]
    },
    __v: {
        type: Number,
        select: false
    }
})

module.exports = model('User', userSchema)