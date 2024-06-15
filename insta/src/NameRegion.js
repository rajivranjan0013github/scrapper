import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import "./NameRegion.css";
import {  updateFormData,createAccount } from "./redux/FormSlice";

const NameRegion = () => {
  // State variables for form fields
//   const navigate = useNavigateCustom();
  const { formData } = useSelector((state) => state.form);

  const [region, setRegion] = useState(formData?.region);
  const [name, setName] = useState(formData?.name);
  const [gender, setGender] = useState(formData?.gender);
  const [mobileNumber, setMobileNumber] = useState(
    formData?.email
  );
  const [bio, setBio] = useState(formData?.bio || "");
  const dispatch = useDispatch();

  useEffect(() => {
    if(formData.name) setName(formData.name);
  }, [formData.name])

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let temp = {};
    if(region) {
      temp = {region};
    }
    if(mobileNumber) {
      temp = {...temp, email : mobileNumber};
    }
    dispatch(updateFormData({ ...temp, gender,  bio, name }));
     dispatch(createAccount());
  };

  console.log('gender', gender);

  return (
    <div className="form-container">
      {/* <FormHeader heading={"Enter Your Information"} /> */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="region">Region:</label>
          <input
            type="text"
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option disabled hidden selected value="">
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            // type="number"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            value={bio}
            placeholder="Eg. Fitness content creator & gamer."
            onChange={(e) => setBio(e.target.value)}
            className="bio"
          />
        </div>
        <div className="button-box">
          <button type="submit" className="button-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NameRegion;
