const { isAuth, isAuthAdmin } = require("../../middleware/auth.middleware");
const { upload } = require("../../middleware/files.middleware");
const {
  registerLargo,
  registerWithRedirect,
  sendCode,
  resendCode,
  checkNewUser,
  login,
  autoLogin,
  forgotPassword,
  sendPassword,
  exampleAuth,
  changePassword,
  updateUser,
  deleteUser,
  addFavMovie,
} = require("../controllers/conductores.controllers");

const UserRoutes = require("express").Router();

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
UserRoutes.post(
  "/registerRedirect",
  upload.single("image"),
  registerWithRedirect
); // redirect sendCode

UserRoutes.post("/resend", resendCode);
UserRoutes.post("/check", checkNewUser);

UserRoutes.post("/login", login);
UserRoutes.post("/autoLogin", autoLogin);

UserRoutes.patch("/forgotPassword", forgotPassword); // redirect sendPassword

//! ------ RUTAS AUTENTICADAS ------
//** middleware isAuth --> verifica que tenemos token */
//** isAuthAdmin --> verifica que tenemos token y somos rol = Admin */
UserRoutes.get("/pruebas", [isAuthAdmin], exampleAuth);

UserRoutes.patch("/changePassword", [isAuth], changePassword);
UserRoutes.patch("/update", [isAuth], upload.single("image"), updateUser);
UserRoutes.delete("/delete", [isAuth], deleteUser);
UserRoutes.patch("/addLikeMovie/:idMovie", [isAuth], addFavMovie);

// ----------------- Controladores usados por redirect
UserRoutes.post("/register/sendMail/:id", sendCode);
UserRoutes.patch("/forgot/sendPassword/:id", sendPassword);

module.exports = UserRoutes;
