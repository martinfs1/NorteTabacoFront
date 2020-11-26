import React from 'react'
import { CardFuegoArtificial } from '../components/CardFuegoArtificial'

const FuegosAPage = (props) => {

  const FuegosArtificiales = {
    producto: [
      {
        title: "Giratorio 6 Chisperos F6660",
        img: require("../img/FuegosA/giratorio6chisperos-F6660.png"),
        description: "100x1",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Avion Nocturno F6600",
        img: require("../img/FuegosA/avionNocturno-F6600.png"),
        description: "120x6",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Ovni Dancing New F9990",
        img: require("../img/FuegosA/ovniDancingNew-F9990.png"),
        description: "20x12x6",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Mariposas F6610",
        img: require("../img/FuegosA/mariposas-F6610.png"),
        description: "120x6",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Remolino de Luces F6636",
        img: require("../img/FuegosA/remolinoLuces-F6636.png"),
        description: "200x1",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Bomba Color Tornado F8817",
        img: require("../img/FuegosA/bombaColorTornado-F8817.png"),
        description: "36x6",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Giratorio Abejitas F9910",
        img: require("../img/FuegosA/giratorioAbejitasTornado-F9910.png"),
        description: "300x12",
        descriptionModal: "Batería de mano"
      },

      {
        title: "Magnum II F3344",
        img: require("../img/FuegosA/magnumII-f3344.png"),
        description: "36x2",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Magnum F3347",
        img: require("../img/FuegosA/magnum-F3347.png"),
        description: "72x3 54x4",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Magic Colours F3336",
        img: require("../img/FuegosA/magicColours-F3336.png"),
        description: "72x6",
        descriptionModal: "Batería de mano"

      },
      {
        title: "Super Fantasia F3394",
        img: require("../img/FuegosA/superFantasia-F3394.png"),
        description: "96x1",
        descriptionModal: "Caña voladora con luces"
      },
      {
        title: "Caña Bomba F3357",
        img: require("../img/FuegosA/cañaBomba-F3357.png"),
        description: "36x6",
        descriptionModal: "Caña voladora con luces"
      },
      {
        title: "Bengalita 3 Colores F2201",
        img: require("../img/FuegosA/bengalita-F2201.jpg"),
        description: "40x10x5",
        descriptionModal: "Bengala de mano"
      },
      {
        title: "Estrellita F2257",
        img: require("../img/FuegosA/estrellita-F2257-150.jpg"),
        description: "150x10x5",
        descriptionModal: "Estrellita de mano"
      },
      {
        title: "Candela chica de interior F2254",
        img: require("../img/FuegosA/candelaChica-F2254.jpg"),
        description: "16x10x4",
        descriptionModal: "Candela chica de interior"
      },
      {
        title: "Estallo nuevo boom f9935",
        img: require("../img/FuegosA/nuevoBoom-f9935.jpg"),
        description: "50x40x10",
        descriptionModal: "Estallo nuevo boom"
      },
      {
        title: "Estrellita F2257",
        img: require("../img/FuegosA/estrellita-f2257jpg.jpg"),
        description: "15x100x5",
        descriptionModal: "Estrellita"
      },
      {
        title: "Huevo de dragon F9920",
        img: require("../img/FuegosA/huevoDragon-f9920.png"),
        description: "50x24x5 - 100x12x5",
        descriptionModal: "Huevo de dragon"
      },
      {
        title: "Botellita de champagne F9970",
        img: require("../img/FuegosA/botellitaChampagneF9970.png"),
        description: "100x12",
        descriptionModal: "Botellita de champagne"
      },
      {
        title: "Globo Aerostático F9995",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "100x1",
        descriptionModal: "Globo Aerostático"
      },
      {
        title: "Colita de dragon F9960",
        img: require("../img/FuegosA/colitaDragon-F9960.jpg"),
        description: "12x50x40",
        descriptionModal: "Colita de dragon"
      },
      {
        title: "Batería F1190",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "20x40x14",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Batería F1190",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "40x40x14",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Batería en Rollo F1195",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "4x5x500",
        descriptionModal: "Batería de piso"
      },
      {
        title: "Fósforo F1101",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "80x40x5, 80x40x6, 50x40x8",
        descriptionModal: "Fósforo de mano"
      },
      {
        title: "Trompito Luminoso F1103",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "60x40x5",
        descriptionModal: "Trompito de mano"
      },
      {
        title: "Fuente LLuvia Celestial F5506",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "77x2",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Infierno Rojo F5507",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "20x1",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Ala Giratoria 3 Chisperos F6630",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "24X12",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Bomba de Estruendo T1 TU8812",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "120x1",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Bomba de Estruendo T1 1/2 TU8813",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "60x1",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Bomba de Estruendo T2 TU8814",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "48x1",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Base Misil 100 Tiros F4490",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "30x1",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Base Misil 50 Tiros F4450",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "60x1",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Base Misil 25 Tiros F4425",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "30x4",
        descriptionModal: "Batería de mano"

      },
      {
        title: "Base Misil 16 Tiros F4416",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "45x4",
        descriptionModal: "Batería de mano"
      },
      {
        title: "Titanic Rocket F3348",
        img: require("../img/FuegosA/fuegoLandia.png"),
        description: "24x6",
        descriptionModal: "Caña voladora con luces"
      },
    ]
  }

  const cardsFuegoArtificial = FuegosArtificiales.producto.map(F => <CardFuegoArtificial data={F} />)


  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 justify-content-center pt-4 m-0">
        {cardsFuegoArtificial}
      </div>
    </div>
  )
}

export default FuegosAPage
