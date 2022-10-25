import BarChart from './BarChart';

function App() {
  const make = {
    "Volkswagen": 32,
    "Audi": 22,
    "Mercedes-Benz": 20,
    "Ford": 17,
    "Toyota": 12,
    "Nissan": 11,
    "Renault": 10,
    "Hyundai": 10,
    "Skoda": 10,
    "BMW": 9,
    "Peugeot": 5,
    "Citroen": 5,
    "KIA": 4,
    "Mini": 3,
    "Volvo": 3,
    "Mazda": 3,
    "Opel": 3,
    "Suzuki": 2,
    "Mitsubishi": 2,
    "Fiat": 2,
    "Dacia": 2,
    "LAND ROVER": 2,
    "SEAT": 1,
    "Vauxhall": 1,
    "Honda": 1
  };

  const model = {
    "Ford": {
      "Focus": 6,
      "Kuga": 4,
      "EcoSport": 1,
      "Transit": 1,
      "Ranger": 1,
      "Galaxy": 1,
      "Transit Connect": 1,
      "Mondeo": 1,
      "Mustang Mach-E": 1
    },
    "Suzuki": {
      "Vitara": 2
    },
    "Renault": {
      "Megane": 4,
      "Kadjar": 2,
      "Clio": 1,
      "Fluence": 1,
      "Arkana": 1,
      "Grand Scenic": 1
    },
    "Peugeot": {
      "3008": 1,
      "207": 1,
      "308": 1,
      "2008": 1,
      "Partner": 1
    },
    "KIA": {
      "Sportage": 2,
      "ProCeed": 1,
      "Ceed": 1
    },
    "Mini": {
      "Cooper": 2,
      "Paceman": 1
    },
    "SEAT": {
      "Leon": 1
    },
    "Hyundai": {
      "Tucson": 4,
      "i30": 3,
      "ix35": 2,
      "Santa Fe": 1
    },
    "Skoda": {
      "Octavia": 6,
      "Fabia": 1,
      "Karoq": 1,
      "Citigo": 1,
      "Superb": 1
    },
    "Volkswagen": {
      "Golf": 10,
      "Passat": 4,
      "Polo": 4,
      "Transporter": 3,
      "Tiguan": 2,
      "T-Roc": 2,
      "Tiguan Allspace": 1,
      "T-CROSS": 1,
      "Scirocco": 1,
      "Caddy": 1,
      "ID.4": 1,
      "Amarok": 1,
      "Jetta": 1
    },
    "Mercedes-Benz": {
      "E-Class": 8,
      "A-Class": 3,
      "C-Class": 3,
      "Sprinter": 2,
      "EQB": 1,
      "GLB Class": 1,
      "GLE-Class": 1,
      "CLA-Class": 1
    },
    "Mitsubishi": {
      "Outlander": 2
    },
    "Fiat": {
      "500": 2
    },
    "Toyota": {
      "Corolla": 3,
      "Auris": 2,
      "Landcruiser": 2,
      "Yaris": 1,
      "Verso": 1,
      "Hilux": 1,
      "Avensis": 1,
      "C-HR": 1
    },
    "Dacia": {
      "Sandero": 1,
      "Logan": 1
    },
    "Nissan": {
      "Qashqai": 4,
      "Juke": 3,
      "X-Trail": 1,
      "Navara": 1,
      "NV300": 1,
      "NV400": 1
    },
    "BMW": {
      "5-Series": 5,
      "X5": 2,
      "2-Series": 1,
      "4-Series": 1
    },
    "Audi": {
      "A6": 6,
      "A4": 4,
      "Q3": 4,
      "A3": 3,
      "Q2": 2,
      "e-tron": 1,
      "Q5": 1,
      "RS6": 1
    },
    "Citroen": {
      "C4": 1,
      "Berlingo": 1,
      "C4 Cactus": 1,
      "C3": 1,
      "Grand C4 Picasso": 1
    },
    "Volvo": {
      "V40": 2,
      "S60": 1
    },
    "Mazda": {
      "6": 1,
      "2": 1,
      "CX-5": 1
    },
    "Opel": {
      "Mokka": 1,
      "Vivaro": 1,
      "Astra": 1
    },
    "Vauxhall": {
      "Corsa": 1
    },
    "Honda": {
      "CR-V": 1
    },
    "LAND ROVER": {
      "Range Rover Evoque": 2
    }};

  return (
    <div className="App">
      <header className="App-header">
        <BarChart make={make} model={model} />
      </header>
    </div>
  );
}

export default App;
