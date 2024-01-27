import ProductModel from "../../model/product";
import LaneModel from "../../model/lane";
  
// products:
  // id: string
  // description: string
  // version: string
  // milestone: string
  // lanes: LaneModel[] steps set to null
  // selected: boolean

const products: ProductModel[] = [
    new ProductModel(501, 'Predict', '8.8', 'M3', [
        LaneModel.inactive(1, 'Imports Data', null, false),
        LaneModel.inactive(2, 'Cleans Data', null, false),
        LaneModel.inactive(3, 'Creates Notebook', null, false),
        LaneModel.active(4, 'Trains Model', null, true)
    ], true),
    new ProductModel(502, 'Health', '8.8', 'M4', [
        LaneModel.inactive(1, 'Imports Health Data', null, false),
        LaneModel.inactive(2, 'Creates Custom Score', null, false),
        LaneModel.inactive(3, 'Creates Matrix', null, false),
        LaneModel.active(4, 'Shades Cells', null, true)
    ], false),
    new ProductModel(503, 'Health', '8.8', 'M5', [
        LaneModel.inactive(1, 'Views Asset Table', null, false),
        LaneModel.inactive(2, 'View Asset', null, false),
        LaneModel.inactive(3, 'View Contributor', null, false),
        LaneModel.active(4, 'View Timeline', null, true)
    ],false),
    new ProductModel(504, 'Predict', '8.8', 'M4', [
        LaneModel.inactive(1, 'Imports Data', null, false),
        LaneModel.inactive(2, 'Cleans Data', null, false),
        LaneModel.inactive(3, 'Creates Score', null, false),
        LaneModel.active(4, 'Activates Score', null, true)
    ],false),
    new ProductModel(505, 'Predict', '8.9', 'M1', [
        LaneModel.inactive(1, 'Castro Alves', null, false),
        LaneModel.inactive(2, 'Manuel Bandeira', null, false),
        LaneModel.inactive(3, 'Carlos Gomes', null, false),
        LaneModel.active(4, 'Dom Pedro I', null, true)
    ],true),
    new ProductModel(506, 'Predict', '8.9', 'M2', [
        LaneModel.inactive(1, 'Perder', null, false),
        LaneModel.inactive(2, 'Fracassar', null, false),
        LaneModel.inactive(3, 'Desprezar', null, false),
        LaneModel.active(4, 'Conseguir', null, true),
    ],false),
    new ProductModel(507, 'Monitor', '8.8', 'M1', [
        LaneModel.inactive(1, 'Argentina', null, false),
        LaneModel.inactive(2, 'Espanha', null, false),
        LaneModel.inactive(3, 'Brasil', null, false),
        LaneModel.active(4, 'Portugal', null, true),
    ],true),
    new ProductModel(508,'Monitor', '8.8', 'M2', [
        LaneModel.inactive(1, 'Costa e Silva', null, false),
        LaneModel.inactive(2, 'Emílio Médici', null, false),
        LaneModel.inactive(3, 'Ernesto Geisel', null, false),
        LaneModel.active(4, 'João Figueiredo', null, true),
    ],false),
    new ProductModel(509, 'Monitor', '8.9', 'M1', [
        LaneModel.inactive(1, 'Ás', null, false),
        LaneModel.inactive(2, 'Nove', null, false),
        LaneModel.inactive(3, 'Rei', null, false),
        LaneModel.active(4, 'Valete', null, true),
    ],true),
    new ProductModel(510, 'Monitor', '8.9', 'M2', [
        LaneModel.inactive(1,'Vela', null, false),
        LaneModel.inactive(2, 'Vento', null, false),
        LaneModel.inactive(3, 'Vênia', null, false),
        LaneModel.active(4, 'Veia', null, true),
    ],false),
    new ProductModel(511, 'Monitor', '8.9', 'M3', [
        LaneModel.inactive(1,'Abrupção', null, false),
        LaneModel.inactive(2, 'Abolição', null, false),
        LaneModel.inactive(3, 'Abnegação', null, false),
        LaneModel.active(4, 'Ablução', null, true),
    ],false),
    new ProductModel(512, 'Health', '8.9', 'M1', [
        LaneModel.inactive(1,'Monte Branco', null, false),
        LaneModel.inactive(2, 'Monte Fuji', null, false),
        LaneModel.inactive(3, 'Monte Carlo', null, false),
        LaneModel.active(4, 'Monte Everest', null, true),
    ],false),
    new ProductModel(513, 'Health', '8.9', 'M2', [
        LaneModel.inactive(1,'Estômago', null, false),
        LaneModel.inactive(2, 'Pâncreas', null, false),
        LaneModel.inactive(3, 'Rim', null, false),
        LaneModel.active(4, 'Pescoço', null, true),
    ],true),
    new ProductModel(514, 'Health', '8.9', 'M3', [
        LaneModel.inactive(1,'Déficit', null, false),
        LaneModel.inactive(2, 'Indexação', null, false),
        LaneModel.inactive(3, 'Indébito', null, false),
        LaneModel.active(4, 'Indenização', null, true),
    ],false),
    new ProductModel(515, 'Health', '8.9', 'M4', [
        LaneModel.inactive(1,'Cuca', null, false),
        LaneModel.inactive(2, 'Curupira', null, false),
        LaneModel.inactive(3, 'Boitatá', null, false),
        LaneModel.active(4, 'Saci-pererê', null, true),
    ],false),
    new ProductModel(516, 'Health', '9', 'M1', [
        LaneModel.inactive(1,'Marechal Deodoro', null, false),
        LaneModel.inactive(2, 'Barão de Mauá', null, false),
        LaneModel.inactive(3, 'Marquês de Pombal', null, false),
        LaneModel.active(4, 'Duque de Caxias', null, true),
    ],true),
]

export default products