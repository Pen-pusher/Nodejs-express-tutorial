// validating user data if its in objec using joi in express
// here we are validating array of objects in array of string
// develop our own custom schema and validate it for arrays
const joi = require('joi');
const arrayString = ['banana','apple','mango'];
const arrayObjects = [{ example: 'example1' }, { example: 'example2' }, { example: 'example3'}]
const userInput = {personalInfo: {
    streetAddress: '12345678',
    city: 'kolkata',
    state: 'wb'
},
    // preferences: arrayString
       preferences:arrayObjects};

const personalInfoSchema = joi.object().keys({
    streetAddress: joi.string().trim().required(),
    city: joi.string().trim().required(),
    state: joi.string().trim().length(2).required()

});
// const preferencesSchema = joi.array().items(joi.string());
const preferencesSchema = joi.array().items(joi.object().keys({
    example: joi.string().required()
}));

const schema  = joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema,

});
joi.validate(userInput, schema, (err, result) => {
    if (err) {
        console.log(err)
        // res.send('an error has occured');
    }

    console.log(result);
    // res.send('successfull posted data')

})
