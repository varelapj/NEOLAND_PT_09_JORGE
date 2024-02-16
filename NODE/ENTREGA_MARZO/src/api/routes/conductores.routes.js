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
} = require("../controllers/conductores.controller");

const ConductoresRouter = require("express").Router();

ConductoresRouter.post("/registerLargo", upload.single("image"), registerLargo);
ConductoresRouter.post(
  "/registerRedirect",
  upload.single("image"),
  registerWithRedirect
); // redirect sendCode

ConductoresRouter.post("/resend", resendCode);
ConductoresRouter.post("/check", checkNewUser);

ConductoresRouter.post("/login", login);
ConductoresRouter.post("/autoLogin", autoLogin);

ConductoresRouter.patch("/forgotPassword", forgotPassword); // redirect sendPassword

//! ------ RUTAS AUTENTICADAS ------
//** middleware isAuth --> verifica que tenemos token */
//** isAuthAdmin --> verifica que tenemos token y somos rol = Admin */
ConductoresRouter.get("/pruebas", [isAuthAdmin], exampleAuth);

ConductoresRouter.patch("/changePassword", [isAuth], changePassword);
ConductoresRouter.patch("/update", [isAuth], upload.single("image"), updateUser);
ConductoresRouter.delete("/delete", [isAuth], deleteUser);
ConductoresRouter.patch("/addLikeMovie/:idMovie", [isAuth], addFavMovie);

// ----------------- Controladores usados por redirect
ConductoresRouter.post("/register/sendMail/:id", sendCode);
ConductoresRouter.patch("/forgot/sendPassword/:id", sendPassword);

module.exports = ConductoresRouter;
