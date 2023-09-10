import Joi from "joi";

export const signUpValidatinon = {
    body: Joi.object()
      .required()
      .keys({
        firstName: Joi.string().min(2).max(10).messages({
          "string.min": "firstName must contain at least 2 charachters",
        }),
        lastName: Joi.string().min(2).max(10).messages({
          "string.min": "lastName must contain at least 2 charachters",
        }),
        email: Joi.string()
          .email({ tlds: { allow: ["com", "net"] }, minDomainSegments: 2 })
          .required()
          .messages({
            "string.email": "Email format in-valid",
            "any.required": "please enter your email",
          }),
        password: Joi.string().required().min(5).max(10).alphanum().messages({
          "string.min": "password must contain at least 5 charachters",
        }),
      }),
  };


  export const loginValidation = {
    body: Joi.object()
      .required()
      .keys({
        email: Joi.string()
          .email({ tlds: { allow: ["com", "net"] }, minDomainSegments: 2 })
          .required()
          .messages({
            "string.email": "Email format in-valid",
            "any.required": "please enter your email",
          }),
        password: Joi.string().required().min(4).max(16).messages({
          "string.min": "password must contain at least 4 charachters",
        }),
      }),
  };
  