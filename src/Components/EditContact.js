import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { editUserApi } from "../redux/userAPICalls";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();
  const contacts = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const currentContact = contacts.find((contact) => contact.id === id);

  useEffect(() => {
    setName(currentContact.name);
    setEmail(currentContact.email);
    setNumber(currentContact.number);
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      number,
    };
    editUserApi(data, id, dispatch);
    Navigate("/");
  };

  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className="display-3 my-5 text-center">Edit App {id} </h1>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="form-control"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input type="submit" value="Update" className="btn  btn-dark" />
                  <Link to="/" className="btn btn-danger mx-3 my-3">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center"> Don't Find Any {id} here </h1>
      )}
    </div>
  );
};

export default EditContact;
