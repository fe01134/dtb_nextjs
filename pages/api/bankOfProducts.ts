import ProductModel from "../../model/productOrg";
import LaneModel from "../../model/lane";
import StepModel from "../../model/step";
  
// products:
  // id: string
  // description: string
  // version: string
  // milestone: string
  // lanes: LaneModel[] steps set to   
  // selected: boolean

const products: ProductModel[] = [
    new ProductModel(501, 'Predict', '8.8', 'M3', [
        LaneModel.inactive(1, 'Imports Data',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Cleans Data',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Creates Notebook',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'Trains Model',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true)
    ], true),
    new ProductModel(502, 'Health', '8.8', 'M4', [
        LaneModel.inactive(1, 'Imports Health Data',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Creates Custom Score',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Creates Matrix',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'Shades Cells',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true)
    ], false),
    new ProductModel(503, 'Health', '8.8', 'M5', [
        LaneModel.inactive(1, 'Views Asset Table',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'View Asset',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'View Contributor',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'View Timeline',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true)
    ],false),
    new ProductModel(504, 'Predict', '8.8', 'M4', [
        LaneModel.inactive(1, 'Imports Data',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Cleans Data',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Creates Score',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'Activates Score',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true)
    ],false),
    new ProductModel(505, 'Predict', '8.9', 'M1', [
        LaneModel.inactive(1, 'Castro Alves',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Manuel Bandeira',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Carlos Gomes',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'Dom Pedro I',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true)
    ],true),
    new ProductModel(506, 'Predict', '8.9', 'M2', [
        LaneModel.inactive(1, 'Perder',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Fracassar',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Desprezar',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'Conseguir',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true),
    ],false),
    new ProductModel(507, 'Monitor', '8.8', 'M1', [
        LaneModel.inactive(1, 'Argentina',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Espanha',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Brasil',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'Portugal',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true),
    ],true),
    new ProductModel(508,'Monitor', '8.8', 'M2', [
        LaneModel.inactive(1, 'Costa e Silva',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Emílio Médici',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Ernesto Geisel',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'João Figueiredo',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true),
    ],false),
    new ProductModel(509, 'Monitor', '8.9', 'M1', [
        LaneModel.inactive(1, 'Ás',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Nove',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Rei',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'Valete',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true),
    ],true),
    new ProductModel(510, 'Monitor', '8.9', 'M2', [
        LaneModel.inactive(1,'Vela',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Vento',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Vênia',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'Veia',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true),
    ],false),
    new ProductModel(511, 'Monitor', '8.9', 'M3', [
        LaneModel.inactive(1,'Abrupção',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Abolição',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Abnegação',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'Ablução',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true),
    ],false),
    new ProductModel(512, 'Health', '8.9', 'M1', [
        LaneModel.inactive(1,'Monte Branco',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Monte Fuji',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Monte Carlo',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'Monte Everest',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true),
    ],false),
    new ProductModel(513, 'Health', '8.9', 'M2', [
        LaneModel.inactive(1,'Estômago',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Pâncreas',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Rim',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'Pescoço',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true),
    ],true),
    new ProductModel(514, 'Health', '8.9', 'M3', [
        LaneModel.inactive(1,'Déficit',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Indexação',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Indébito',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'Indenização',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true),
    ],false),
    new ProductModel(515, 'Health', '8.9', 'M4', [
        LaneModel.inactive(1,'Cuca',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Curupira',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Boitatá',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'Saci-pererê',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true),
    ],false),
    new ProductModel(516, 'Health', '9', 'M1', [
        LaneModel.inactive(1,'Marechal Deodoro',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(2, 'Barão de Mauá',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.inactive(3, 'Marquês de Pombal',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], false),
        LaneModel.active(4, 'Duque de Caxias',   [
    StepModel.inactive(1, 'first step Data'),
    StepModel.inactive(2, 'first step Data'),
    StepModel.inactive(3, 'first step Notebook'),
    StepModel.active(4, 'first step Model'),
], true),
    ],true),
]

export default products