const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");


const router = express.Router();

/** create user */
router.post(
  "/create-user",
  validate(userValidation.createUser),
  userController.createUser
);

/** Get user list */
router.get(
  "/list",
  userController.getUserList
);

/** Get user details by id */
router.get(
  "/get-details/:userId",
  userController.getUserDetails
);

/** user details update by id */
router.put(
  "/update-details/:userId",
  userController.updateDetails
);

/** Delete user */
router.delete(
  "/delete-user/:userId",
  userController.deleteUser
);



module.exports = router;