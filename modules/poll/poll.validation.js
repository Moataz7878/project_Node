import Joi from "joi";

export const createPollValidation={
    body: Joi.object().required().keys({
        do_You_Like_School:Joi.string().required().messages({
            "string.Answer": "password must contain at Answer "
        }),
        do_You_Like_TheTeacher:Joi.string().required().messages({
            "string.Answer": "password must contain at Answer "
        }),
        Does_TheTeacher_Respond_To_me_by_Repeating_TheExplanation:Joi.string().required().messages({
            "string.Answer": "password must contain at Answer "
        }),
        createdBy:Joi.string().required().messages({
            "string.createdBy": "password must contain at createdBy "
        })
    })

  }