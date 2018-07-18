import joi from "joi";

const userSchema = {
  body: {
    name: joi.string().required(),
    email: joi
      .string()
      .email()
      .required(),
    password: joi.required()
  }
};

const signinSchema = {
  body: {
    email: joi
      .string()
      .email()
      .required(),
    password: joi.required()
  }
};
export { userSchema, signinSchema };
