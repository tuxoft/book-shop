import { ValidationArguments, Validator } from 'class-validator';

export const validator = new Validator();

export const isIntMessage = (args: ValidationArguments) => {
  return `должно быть числом`;
};

export const isIsbnMessage = (args: ValidationArguments) => {
  return `не соответствует формату ISBN`;
};

export const isNotEmptyMessage = (args: ValidationArguments) => {
  return `не может быть пустым`;
};

export const isEmailMessage = (args: ValidationArguments) => {
  return `не соответствует адресу электронной почты`;
};

export const isMobilePhoneMessage = (args: ValidationArguments) => {
  return `не соответствует номеру мобильного телефона`;
};
