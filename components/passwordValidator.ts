import passwordValidator from "password-validator";

export const schema = new passwordValidator();

schema
  .is()
  .min(8)
  .is()
  .max(16)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(1)
  .has()
  .symbols()
  .has()
  .not()
  .spaces();
