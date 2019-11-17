const Validator = require ('validator');
const validText = require ('./valid-text');


module.exports = function validateTweetInput(data){

    let errors = {};

    data.text = validText(data.text) ? data.text : "";

    if(!Validator.isLength(data.text, {min:5, max: 140}))


}
