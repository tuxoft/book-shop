import { ValidationArguments, Validator } from 'class-validator';

export const validator = new Validator();

export const isIntMessage = (args: ValidationArguments) => {
  return `должно быть числом`;
};

export const isIsbnMessage = (args: ValidationArguments) => {
  return `не соответствует формату ISBN`;
};
