import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react'
import Card from './card';

function ModalComp({ modelState, data, handleClose }) {
    return (
        <div>
            <Modal show={modelState} onHide={handleClose} dialogClassName="modal-50w" aria-labelledby="example-custom-modal-styling-title" fullscreen={'xl-down'}>
                <Modal.Header closeButton>
                    <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div  className=' d-flex mb-3 align-items-center justify-content-around p-7'>
                        <div className='mr-6'>
                            <img src={data.img_url} width={"250px"} />
                        </div>

                        <div>
                            {
                                data.list.map((ele, index) => <div key={index}>{ele.key} : {ele.value}</div>)
                            }
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalComp