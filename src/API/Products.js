import empanadaImage from "../API/Images/Empanadas-pexels.jpg";
import hamburgerImage from "../API/Images/Hamburger-pexels.jpg";
import beerImage from "../API/Images/beer-pexels.jpg";
import comboImage from "../API/Images/combo-pexels.jpg";
import cocaColaImage from "../API/Images/coca-cola-1.5l.png";

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
      category: "hamburgesas",
      styles: {
        backgroundImage: `url('${hamburgerImage}')`
      }
    },
    {
      id: "gen3",
      name: "Bebidas",
      category: "bebidas",
      styles: {
        backgroundImage: `url('${beerImage}')`
      }
    },
    {
      id: "gen4",
      name: "Combos",
      category: "combos",
      styles: {
        backgroundImage: `url('${comboImage}')`
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

  hamburgesas: [
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
        backgroundImage: `url('${cocaColaImage}')`
      }
    },
    {
      id: "beb2",
      name: "Poker",
      description: "cerveza 350ml",
      cost: 2200,
      styles: {
        backgroundImage: `url('${beerImage}')`
      }
    }
  ],

  combos: [
    {
      id: "comb1",
      name: "Hamburguesa + gaseosa",
      description: "Hamburguesa sencilla + gaseosa 350ml",
      cost: 6500,
      styles: {
        backgroundImage: `url('${comboImage}')`
      }
    }
  ]
}

export { PRODUCTS };