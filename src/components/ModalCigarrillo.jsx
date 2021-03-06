import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

const ModalCigarrillo = (props) => {
  const [nameClient, setNameClient] = React.useState();
  const [cellNumber, setCellNumber] = React.useState();
  const [message, setMessage] = React.useState();

  const sendForm = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/v1/send', { nameClient, cellNumber, message })
      Swal.fire({
        icon: 'success',
        title: 'Envio Exitoso. Pronto responderemos tu consulta',
      });
    } catch (error) {
      console.log(error)
    }
  }

  const { data } = props;

  return (
    <>
      {/* <!-- Modal --> */}
      <div className="modal fade " id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">{data.marca}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={data.img.default} className="card-img-top img-fluid" alt="..." />
              <div className="row pt-2">
                <div className="col-12 col-sm-3 ">
                  <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active text-center" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Info</a>
                    <a className="nav-link text-center" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Contacto</a>
                  </div>
                </div>
                <div className="col-12 col-sm-9">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                      <p>{data.descriptionModal}
                      </p>
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      <form className="pt-2">
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <input
                              type="text"
                              id="nombre"
                              className="form-control"
                              name='nameClient'
                              maxLength='10'
                              onChange={(e) => { setNameClient(e.target.value) }}
                              placeholder='Nombre Completo' />
                          </div>
                          <div className="form-group col-md-6">
                            <input
                              type="number"
                              className="form-control"
                              id="cellphone"
                              name="cellNumber"
                              onChange={(e) => { setCellNumber(e.target.value) }}
                              placeholder='Numero de teléfono'
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="message-text"
                            name="message"
                            onChange={(e) => { setMessage(e.target.value) }}
                            placeholder='Consulta:'
                          >
                          </textarea>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" onClick={sendForm}>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalCigarrillo
