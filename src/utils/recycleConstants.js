import { Paper, Plastic, Metals, Ewaste, OtherWaste } from "../components/svg";
export const RecyleContants = [
  {
    name: "Paper",
    logoUri: Paper,
    description: "Newspapers, cartons, books",
  },
  {
    name: "Plastics",
    logoUri: Plastic,
    description: "Oil cointainer, Hard / Soft",
  },
  {
    name: "Metals",
    logoUri: Metals,
    description: "Utensils, coolores, drums",
  },
  {
    name: "E-waste",
    logoUri: Ewaste,
    description: "Computers, keyboard",
  },
  {
    name: "Vehicle-Waste",
    logoUri: Paper,
    description: "Bike, car scraps",
  },
  {
    name: "Other Items",
    logoUri: OtherWaste,
    description: "Beer Bottles, machines",
  },
];

export const ScrapePrice = {
  Paper: [
    {
      name: "Newspaper",
      price: "15/kg",
    },
    {
      name: "Books",
      price: "12/kg",
    },
    {
      name: "Carton",
      price: "10/kg",
    },
    {
        name: "White Papers",
        price: "7/kg",
    },
    {
        name: "Record Paper",
        price: "7/kg",
    },
    {
        name: "Grey Board",
        price: "2/kg",
    }
  ],
  Plastics: [
    {
      name: "Bumper",
      price: "20/kg",
    },
    {
      name: "Plastic Jar",
      price: "10/piece",
    },
    {
      name: "Fibre",
      price: "8/kg",
    },
    {
        name: "Soft Plastic",
        price: "7/kg",
    },
    {
        name: "Mix Plastic",
        price: "4/kg",
    },
    {
        name: "Hard Palstic",
        price: "2/kg"
    }
  ],
  Metals:  [
    {
      name: "Cooper",
      price: "250/kg",
    },
    {
      name: "Brass",
      price: "200/kg",
    },
    {
      name: "Almuinium",
      price: "75/kg",
    },
    {
        name: "Iron",
        price: "25/kg",
    },
    {
        name: "Steel",
        price: "24/kg",
    },
  ],
  "E-waste":  [
    {
      name: "E-waste",
      price: "10/kg",
    },
    {
      name: "E-waste(piece)",
      price: "10/piece",
    }
  ],
  "Vehicle-Waste": [
    {
      name: "Motor",
      price: "5/kg",
    },
    {
      name: "Handle",
      price: "3/kg",
    },
    {
      name: "Vechicle Parts",
      price: "10/kg",
    },
  ],
  "Other Items":  [
    {
      name: "Battery",
      price: "13/kg",
    },
    {
      name: "Mixed Waste",
      price: "4/kg",
    },
    {
      name: "Tire",
      price: "3/kg",
    },
  ]
};
