import handleError from "./handleError.middleware";
import validateBody from "./validateBody.middleware";
import uniqueUserEmail from "./uniqueUserEmail.middlware.ts";
import verifyToken from "./verifyToken.middleware";
import isAdmin from "./isAdmin.middleware";
import userIdExists from "./userIdExists.middleware";
import uniqueCategoryName from "./categoryNameExists.middleware";

export default {
    handleError,
    validateBody,
    uniqueUserEmail,
    verifyToken,
    isAdmin,
    userIdExists,
    uniqueCategoryName,
};
