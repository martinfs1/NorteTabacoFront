import React from 'react'
import { Link } from 'react-router-dom';
import melbourne from '../img/cigarrillos/melbourne.jpg'
import ModalCigarrillo from './ModalCigarrillo';


const CardCigarrillo = (props) => {
  const [modalDatos, setModalDatos] = React.useState()
  const { data } = props;

  const modal = (props) => {
    setModalDatos(props)
  }
  React.useEffect(() => {
    modal()
  }, [props])
  // console.log(modalDatos.img.default);

  return (
    <>
      <Link onClick={() => modal(data)} className="col mb-4" type="button" data-toggle="modal" data-target="#staticBackdrop">
        <div className="card">
          <img src={data.img.default} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.marca}</h5>
            <p className="card-text">{data.description}</p>
          </div>
        </div>
      </Link>
      { modalDatos && <ModalCigarrillo data={modalDatos} />}

    </>
  )
}



export default CardCigarrillo
