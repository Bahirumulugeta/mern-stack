import { Router } from "express";
const router = Router();
import { createUserValidation } from "./validation";
import { createUser, getAllUsers } from "../../controllers/user";
import validator from "../../utils/validator";

router
  .route("/")
  .post(validator(createUserValidation), createUser)
  .get(getAllUsers);

export default router;
