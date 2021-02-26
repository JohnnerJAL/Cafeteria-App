import empanadaImage from "../API/Images/Empanadas-pexels.jpg";
import hamburgerImage from "../API/Images/Hamburger-pexels.jpg";
import drinkImage from "../API/Images/beer-pexels.jpg";

const PRODUCTS = {
  general: [
    {
      id: "gen1",
      name: "Empanada",
      category: "empanadas",
      styles: {
        backgroundImage: `url('${empanadaImage}')`
      }
    },
    {
      id: "gen2",
      name: "Hamburguesa",
      category: "hamburgers",
      styles: {
        backgroundImage: `url('${hamburgerImage}')`
      }
    },
    {
      id: "gen3",
      name: "Bebidas",
      category: "bebidas",
      styles: {
        backgroundImage: `url('${drinkImage}')`
      }
    }
  ],

  empanadas: [
    {
      id: "emp1",
      name: "Empanada de carne",
      description: "Empanada de carne con huevo",
      cost: 1800,
      styles: {
        backgroundImage: `url('${empanadaImage}')`
      }
    },
    {
      id: "emp2",
      name: "Empanada de pollo",
      description: "Empanada de pollo con huevo",
      cost: 1800,
      styles: {
        backgroundImage: `url('${empanadaImage}')`
      }
    }
  ],

  hamburgers: [
    {
      id: "ham1",
      name: "Hamburguesa",
      description: "Hamburguesa sencilla",
      cost: 5000,
      styles: {
        backgroundImage: `url('${hamburgerImage}')`
      }
    }
  ],

  bebidas: [
    {
      id: "beb1",
      name: "Cocacola",
      description: "gaseosa 2L",
      cost: 3000,
      styles: {
        backgroundImage: `url('${drinkImage}')`
      }
    },
    {
      id: "beb2",
      name: "Poker",
      description: "cerveza 350ml",
      cost: 2200,
      styles: {
        backgroundImage: `url('${drinkImage}')`
      }
    }
  ]
}

export { PRODUCTS };