import LaneModel from "../../model/lane";
import StepModel from "../../model/step";

interface Product {
    id: string;
    name: string;
    price: number;
  }
  

const lanes: LaneModel[] = [
    new LaneModel(306, 'Ryan Lane', [
        StepModel.inactive(1, 'Imports Data'),
        StepModel.inactive(2, 'Cleans Data'),
        StepModel.inactive(3, 'Creates Notebook'),
        StepModel.active(4, 'Trains Model'),
    ]),
    new LaneModel(202, 'Marcia Lane for Health v8.6', [
        StepModel.inactive(1, 'Imports Health Data'),
        StepModel.inactive(2, 'Creates Custom Score'),
        StepModel.inactive(3, 'Creates Matrix'),
        StepModel.active(4, 'Shades Cells'),
    ]),
    new LaneModel(203, 'Jeff Lane for Health v8.5', [
        StepModel.inactive(1, 'Views Asset Table'),
        StepModel.inactive(2, 'View Asset'),
        StepModel.inactive(3, 'View Contributor'),
        StepModel.active(4, 'View Timeline'),
    ]),
    new LaneModel(204, 'John Lane For Health v8.6', [
        StepModel.inactive(1, 'Imports Data'),
        StepModel.inactive(2, 'Cleans Data'),
        StepModel.inactive(3, 'Creates Score'),
        StepModel.active(4, 'Activates Score'),
    ]),
    new LaneModel(205, 'Quem compôs o Hino da Independência?', [
        StepModel.inactive(1,'Castro Alves'),
        StepModel.inactive(2, 'Manuel Bandeira'),
        StepModel.inactive(3, 'Carlos Gomes'),
        StepModel.active(4, 'Dom Pedro I'),
    ]),
    new LaneModel(206, 'Qual é o antônimo de "malograr"?', [
        StepModel.inactive(1,'Perder'),
        StepModel.inactive(2, 'Fracassar'),
        StepModel.inactive(3, 'Desprezar'),
        StepModel.active(4, 'Conseguir'),
    ]),
    new LaneModel(207, 'Em que país nasceu Carmen Miranda?', [
        StepModel.inactive(1, 'Argentina'),
        StepModel.inactive(2, 'Espanha'),
        StepModel.inactive(3, 'Brasil'),
        StepModel.active(4, 'Portugal'),
    ]),
    new LaneModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        StepModel.inactive(1, 'Costa e Silva'),
        StepModel.inactive(2, 'Emílio Médici'),
        StepModel.inactive(3, 'Ernesto Geisel'),
        StepModel.active(4, 'João Figueiredo'),
    ]),
    new LaneModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        StepModel.inactive(1,'Ás'),
        StepModel.inactive(2, 'Nove'),
        StepModel.inactive(3, 'Rei'),
        StepModel.active(4, 'Valete'),
    ]),
    new LaneModel(210, 'O adjetivo "venoso" está relacionado a:', [
        StepModel.inactive(1,'Vela'),
        StepModel.inactive(2, 'Vento'),
        StepModel.inactive(3, 'Vênia'),
        StepModel.active(4, 'Veia'),
    ]),
    new LaneModel(211, 'Que nome se dá à purificação por meio da água?', [
        StepModel.inactive(1, 'Abrupção'),
        StepModel.inactive(2, 'Abolição'),
        StepModel.inactive(3, 'Abnegação'),
        StepModel.active(4, 'Ablução'),
    ]),
    new LaneModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        StepModel.inactive(1, 'Monte Branco'),
        StepModel.inactive(2, 'Monte Fuji'),
        StepModel.inactive(3, 'Monte Carlo'),
        StepModel.active(4, 'Monte Everest'),
    ]),
    new LaneModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        StepModel.inactive(1,'Estômago'),
        StepModel.inactive(2, 'Pâncreas'),
        StepModel.inactive(3, 'Rim'),
        StepModel.active(4, 'Pescoço'),
    ]),
    new LaneModel(214, 'A compensação por perda é chamada de...', [
        StepModel.inactive(1, 'Déficit'),
        StepModel.inactive(2, 'Indexação'),
        StepModel.inactive(3, 'Indébito'),
        StepModel.active(4, 'Indenização'),
    ]),
    new LaneModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        StepModel.inactive(1, 'Cuca'),
        StepModel.inactive(2, 'Curupira'),
        StepModel.inactive(3, 'Boitatá'),
        StepModel.active(4, 'Saci-pererê'),
    ]),
    new LaneModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        StepModel.inactive(1, 'Marechal Deodoro'),
        StepModel.inactive(2, 'Barão de Mauá'),
        StepModel.inactive(3, 'Marquês de Pombal'),
        StepModel.active(4, 'Duque de Caxias'),
    ]),
]

export default lanes