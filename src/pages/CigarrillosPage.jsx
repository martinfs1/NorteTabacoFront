import React from 'react'
import App from '../../src/App.css'
import CardCigarrillo from '../components/CardCigarrillo'

const CigarrillosPage = () => {

  const Cigarrillos = {
    producto: [{
      marca: "Melbourne",
      img: require("../img/cigarrillos/melbourne.jpg"),
      description: "Disponible en sus versiones - Red - Mint - Blue",
      descriptionModal: "Melbourne con un nuevo diseño, más moderno y atractivo, Introduce nuevos estándares de calidad en el mercado nacional."
    },
    {
      marca: "Milenio",
      img: require("../img/cigarrillos/milenio.jpg"),
      description: "Disponible en sus versiones - Red - Click - Mint - Gold",
      descriptionModal: "Milenio una propuesta más, elegante y refinada, en sus sabores full flavour y mild flavour."
    },
    {
      marca: "Master",
      img: require("../img/cigarrillos/master@3x.png"),
      description: "Disponible en su version - Rubio Master Filters King Size 20",
      descriptionModal: "Un muy buen cigarrillo rubio a un excelente precio"
    },
    {
      marca: "Red Point",
      img: require("../img/cigarrillos/redpoint@3x.png"),
      description: "Disponible en sus versiones - Blue - Menthol - On",
      descriptionModal: "Nuestra marca de cigarrillos líder y ampliamente reconocida en todo el país. Con un blend joven, creado para quienes saben disfrutar de lo que les gusta,compartiéndolo con amigos o -incluso- con ellos mismos. Calidad internacional producida en Argentina "
    },
    {
      marca: "Pier",
      img: require("../img/cigarrillos/pier@3x.png"),
      description: "Disponible en sus versiones - Original Blend y Menthol",
      descriptionModal: "Es un cigarrillo joven, audaz, innovador, para gente que le gusta descubrir nuevos horizontes. Un cigarrillo con cuerpo que permite disfrutar del sabor de un blend suave y fiel."
    },
    {
      marca: "Boxer",
      img: require("../img/cigarrillos/boxer@3x.png"),
      description: "Disponible en sus versiones - Clásico - Menthol - Suave",
      descriptionModal: "Sofisticado, con la madurez necesaria para crear un blend diferente, con un sabor único para un público que sabe lo que quiere."
    },
    {
      marca: "Liverpool",
      img: require("../img/cigarrillos/liverpool@3x.png"),
      description: "Disponible en sus versiones - Red - Blue - Menthol",
      descriptionModal: "Liverpool, a traves de sus variables, presenta una experiencia amplia y diferente para cada exigencia personalizada."
    }]
  }

  const cardsCigarrillo = Cigarrillos.producto.map(c => <CardCigarrillo data={c} />)

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 justify-content-center pt-4 m-0">
          {cardsCigarrillo}
        </div>
      </div>
    </>
  )
}

export default CigarrillosPage
