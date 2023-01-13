import { param } from "express-validator";
import validateSchema from "../middleware/validateSchema.js";

function isNumeric(num) {
  return !isNaN(num);
}

export const checkDateParam = [
  param("date", "Date debe ser un unix o una fecha valida")
    .exists()
    .custom((value) => {
      return isNumeric(value) || new Date(value) !== "Invalid Date";
    })
    .customSanitizer((value) => {
      if (isNumeric(value)) value = parseInt(value);
      return new Date(value);
    }),
  (req, res, next) => {
    validateSchema(req, res, next);
  },
];
