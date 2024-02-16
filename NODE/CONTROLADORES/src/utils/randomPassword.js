

const randomPassword = () => {
  //^ METEMOS RANDOM CARACTÉRES PARA QUE COJA CARACTERES ESPECIALES PARA EL STRONG PASSWORD
  const randomString = "*@!=&$";
  //^ GENERAMOS LA CONSTANTE QUE GUARDARÁ LA CONTRASEÑA
  const passwordSecure = `${Math.random().toString(36).slice(-4)}${
    //^ MATH RANDOMS PARA LSO NÚMEROS
    randomString[Math.floor(Math.random() * 5)]
  }${randomString[Math.floor(Math.random() * 5)]}${Math.random()
    .toString(36)
    .slice(-4)
    //^  TO UPPER CASE PARA LAS MAYÚSCULAS
    .toUpperCase()}${randomString[Math.floor(Math.random() * 5)]}${
    randomString[Math.floor(Math.random() * 5)]
  }`;

  return passwordSecure;
};

module.exports = randomPassword;
