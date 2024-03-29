import Joi from "joi";

const fieldValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirm_password: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({ "any.only": "confirm password does not match with password" })
};

type SignUpValues = {
  username: string;
  email: string;
  password: string;
};

export type FieldErrors = {
  [key: string]: string;
};

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {};

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join(".")] = err.message;
    });
  }

  return errors;
}

export function signUpValidate(values: SignUpValues) {
  const schema = Joi.object(fieldValidations);

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

type SignInValues = {
  email: string;
  password: string;
};

export function signInValidate(values: SignInValues) {
  const { email, password } = fieldValidations;
  const schema = Joi.object({ email, password });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

type ForgotValidateParams = {
  email: string;
};

export function forgotValidate(values: ForgotValidateParams) {
  const { email } = fieldValidations;
  const schema = Joi.object({ email });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

type ResetValidateParams = {
  password: string;
  confirm_password: string;
};

export function resetValidate(values: ResetValidateParams) {
  const { password, confirm_password } = fieldValidations;
  const schema = Joi.object({ password, confirm_password });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}
