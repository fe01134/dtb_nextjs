import LaneModel from "../../model/lane";
import StepModel from "../../model/step";

interface Product {
    id: string;
    name: string;
    price: number;
  }
  

const lanes: LaneModel[] = [
    new LaneModel('306', 'Ryan Lane', [
        StepModel.inactive('Imports Data'),
        StepModel.inactive('Cleans Data'),
        StepModel.inactive('Creates Notebook'),
        StepModel.active('Trains Model'),
    ]),
    new LaneModel('202', 'Marcia Lane for Health v8.6', [
        StepModel.inactive('Imports Health Data'),
        StepModel.inactive('Creates Custom Score'),
        StepModel.inactive('Creates Matrix'),
        StepModel.active('Shades Cells'),
    ]),
    new LaneModel('203', 'Jeff Lane for Health v8.5', [
        StepModel.inactive('Views Asset Table'),
        StepModel.inactive('View Asset'),
        StepModel.inactive('View Contributor'),
        StepModel.active('View Timeline'),
    ]),
    new LaneModel('204', 'John Lane For Health v8.6', [
        StepModel.inactive('Imports Data'),
        StepModel.inactive('Cleans Data'),
        StepModel.inactive('Creates Score'),
        StepModel.active('Activates Score'),
    ]),
    new LaneModel('205', 'Quem compôs o Hino da Independência?', [
        StepModel.inactive('Castro Alves'),
        StepModel.inactive('Manuel Bandeira'),
        StepModel.inactive('Carlos Gomes'),
        StepModel.active('Dom Pedro I'),
    ]),
    new LaneModel('206', 'Qual é o antônimo de "malograr"?', [
        StepModel.inactive('Perder'),
        StepModel.inactive('Fracassar'),
        StepModel.inactive('Desprezar'),
        StepModel.active('Conseguir'),
    ]),
    new LaneModel('207', 'Em que país nasceu Carmen Miranda?', [
        StepModel.inactive('Argentina'),
        StepModel.inactive('Espanha'),
        StepModel.inactive('Brasil'),
        StepModel.active('Portugal'),
    ]),
    new LaneModel('208', 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        StepModel.inactive('Costa e Silva'),
        StepModel.inactive('Emílio Médici'),
        StepModel.inactive('Ernesto Geisel'),
        StepModel.active('João Figueiredo'),
    ]),
    new LaneModel('209', 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        StepModel.inactive('Ás'),
        StepModel.inactive('Nove'),
        StepModel.inactive('Rei'),
        StepModel.active('Valete'),
    ]),
    new LaneModel('210', 'O adjetivo "venoso" está relacionado a:', [
        StepModel.inactive('Vela'),
        StepModel.inactive('Vento'),
        StepModel.inactive('Vênia'),
        StepModel.active('Veia'),
    ]),
    new LaneModel('211', 'Que nome se dá à purificação por meio da água?', [
        StepModel.inactive('Abrupção'),
        StepModel.inactive('Abolição'),
        StepModel.inactive('Abnegação'),
        StepModel.active('Ablução'),
    ]),
    new LaneModel('212', 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        StepModel.inactive('Monte Branco'),
        StepModel.inactive('Monte Fuji'),
        StepModel.inactive('Monte Carlo'),
        StepModel.active('Monte Everest'),
    ]),
    new LaneModel('213', 'Em que parte do corpo se encontra a epiglote?', [
        StepModel.inactive('Estômago'),
        StepModel.inactive('Pâncreas'),
        StepModel.inactive('Rim'),
        StepModel.active('Pescoço'),
    ]),
    new LaneModel('214', 'A compensação por perda é chamada de...', [
        StepModel.inactive('Déficit'),
        StepModel.inactive('Indexação'),
        StepModel.inactive('Indébito'),
        StepModel.active('Indenização'),
    ]),
    new LaneModel('215', 'Que personagem do folclore brasileiro tem uma perna só?', [
        StepModel.inactive('Cuca'),
        StepModel.inactive('Curupira'),
        StepModel.inactive('Boitatá'),
        StepModel.active('Saci-pererê'),
    ]),
    new LaneModel('216', 'Quem é o "patrono" do Exército Brasileiro?', [
        StepModel.inactive('Marechal Deodoro'),
        StepModel.inactive('Barão de Mauá'),
        StepModel.inactive('Marquês de Pombal'),
        StepModel.active('Duque de Caxias'),
    ]),
]

export default lanes