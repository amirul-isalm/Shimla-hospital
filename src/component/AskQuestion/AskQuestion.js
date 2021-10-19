import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AskQuestion.css";

const AskQuestion = () => {
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);



  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    handleShow()
  };
  return (
    <div className=" bg-info py-4 ">
      <h1 style={{ color: "purple" }} className="fw-bold my-3">
        {" "}
        Ask a question
      </h1>

      <form className="askqsn w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="rounded-3"
          placeholder="Please enter your name..."
          {...register("example", { required: true })}
        />

        <input
          className="rounded-3"
          placeholder="Please enter your email..."
          {...register("exampleRequired", { required: true })}
        />
        <textarea
          rows="7"
          placeholder="Your question..."
          className="w-100 rounded-3 border-0"
        />

        {errors.exampleRequired && errors.example && (
          <h5>This field is required</h5>
        )}

        {/* modal  */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="bg-info" closeButton>
            <Modal.Title>successfully Recived</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-info">
            "Hello! We recive your message successfully.We will contact you via
            your Email."
          </Modal.Body>
          <Modal.Footer className="bg-info">
            <Button
              className="bg-info fs-5 px-4 rounded-3"
              variant="primary"
              onClick={handleClose}
            >
              ok
            </Button>
          </Modal.Footer>
        </Modal>

        <input className="rounded-3" type="submit" />
      </form>
    </div>
  );
};

export default AskQuestion;
