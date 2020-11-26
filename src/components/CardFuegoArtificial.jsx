import React from 'react'
import { Link } from 'react-router-dom';
import ModalFA from './ModalFA';

export const CardFuegoArtificial = (props) => {

  const [modalDatos, setModalDatos] = React.useState()
  const { data } = props;

  const modal = (props) => {
    setModalDatos(props)
  }
  React.useEffect(() => {
    modal()
  }, [props])


  return (
    <>
      <Link onClick={() => modal(data)} className="col mb-4" type="button" data-toggle="modal" data-target="#staticBackdrop">
        <div className="card h-100 ">
          <img src={data.img.default} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
          </div>
        </div>
      </Link>
      { modalDatos && <ModalFA data={modalDatos} />}

    </>
  )
}
