const path = require('path');

const mainController = {
  home: (req, res) => {
    res.render('home');
  },

  about: (req, res) => {
    // Método para la vista de "Acerca de Nosotros"
    res.render('about');
  },

  contact: (req, res) => {
    // Método para la vista de "Contacto"
    res.render('contact');
  }
};

module.exports = mainController;