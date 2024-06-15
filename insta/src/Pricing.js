import React, { useState } from "react";
import "./Pricing.css";
import { useSelector, useDispatch } from "react-redux";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import {  updateFormData } from "./redux/FormSlice";
import { OutlinedInput, InputAdornment } from "@mui/material";

const Pricing = () => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const [iprice, setIprice] = useState(
    formData?.iprice || {
      reels: { price: undefined },
      story: { price: undefined },
      photo: { price: undefined },
    }
  ); // {video : 123, photo : 3232}
  // console.log(iprice);
  const [yprice, setYprice] = useState(
    formData?.yprice || { shorts: { price: undefined }, video: { price: undefined } }
  );

  const handleSubmit = (e) => {
    // console.log('clicke');
    e.preventDefault();
    let temp = {};
    // if (formData.iaccountID) {
      temp = { ...temp, ...{ iprice } };
    // }
    if (formData.yaccountID) {
      temp = { ...temp, ...{ yprice } };
    }
    // console.log('temp', temp);
    dispatch(updateFormData(temp));
  };

  return (
    <div className="container-1">
      <p>
        Charges are listed on your profile can be purchased by brands. Ensure
        what to charge <a href="#">Use our rate Calculator</a>. Colab.com will
        take 15% fee.{" "}
      </p>
      <div className="items">
        <div
          className="item-body"
          
        >
          <div className="icon-body">
            <FaInstagram size={30} />
            <p
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                letterSpacing: "0.5px",
              }}
            >
              Instagram
            </p>
          </div>
          {/* <p style={{textAlign:'center'}}>Per field price</p> */}
          <div className="inpute-items">
            <p>Story : </p>
            {/* <input  placeholder='Price(INR)' value={Array.isArray(iprice.story?.price)?iprice.story.price[0]:iprice.story.price} onChange={(e) => setIprice({...iprice, ...{story : {price:e.target.value} }})} type='number'  /> */}
            <OutlinedInput
              placeholder="Amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              style={{ width: "150px", height: "30px" }}
              value={
                Array.isArray(iprice.story?.price)
                  ? iprice.story.price[0]
                  : iprice.story.price
              }
              onChange={(e) =>
                setIprice({
                  ...iprice,
                  ...{ story: { price: Number(e.target.value) } },
                })
              }
            />
          </div>
          <div className="inpute-items">
            <p>Photo : </p>
            {/* <input  placeholder='Price(INR)' value={Array.isArray(iprice.photo?.price)?iprice.photo.price[0]:iprice.photo.price} onChange={(e) => setIprice({...iprice, ...{photo : {price:e.target.value} }})} type='number' /> */}
            <OutlinedInput
              placeholder="Amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              style={{ width: "150px", height: "30px" }}
              value={
                Array.isArray(iprice.photo?.price)
                  ? iprice.photo.price[0]
                  : iprice.photo.price
              }
              onChange={(e) =>
                setIprice({
                  ...iprice,
                  ...{ photo: { price: Number(e.target.value) } },
                })
              }
            />
          </div>
          <div className="inpute-items">
            <p>Reels : </p>
            {/* <input  placeholder='Price(INR)' value={iprice.reels?.price} onChange={(e) => setIprice({...iprice, ...{reels :{price: e.target.value} }})} type='number'  /> */}
            <OutlinedInput
              placeholder="Amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              style={{ width: "150px", height: "30px" }}
              value={iprice.reels?.price}
              onChange={(e) =>
                setIprice({
                  ...iprice,
                  ...{ reels: { price: Number(e.target.value) } },
                })
              }
            />
          </div>
        </div>
        <div
          className="item-body"
          style={{ display: formData.yaccountID ? "block" : "none" }}
        >
          <div className="icon-body">
            <FaYoutube size={30} />
            <p
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                letterSpacing: "0.5px",
              }}
            >
              Youtube
            </p>
          </div>
          <div className="inpute-items">
            <p>Shorts : </p>
            {/* <input placeholder='Price(INR)' value={yprice.shorts?.price} onChange={(e) => setYprice({...yprice, ...{shorts : e.target.value }})} type='number' /> */}
            <OutlinedInput
              placeholder="Amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              style={{ width: "150px", height: "30px" }}
              value={yprice.shorts?.price}
              onChange={(e) =>
                setYprice({
                  ...yprice,
                  ...{ shorts: { price: Number(e.target.value) } },
                })
              }
              type="number"
            />
          </div>
          <div className="inpute-items">
            <p>Video : </p>
            {/* <input placeholder='Price(INR)' value={yprice.video?.price} onChange={(e) => setYprice({...yprice, ...{video : e.target.value }})} type='number'  /> */}
            <OutlinedInput
              placeholder="Amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              style={{ width: "150px", height: "30px" }}
              value={yprice.video?.price}
              onChange={(e) =>
                setYprice({
                  ...yprice,
                  ...{ video: { price: Number(e.target.value) } },
                })
              }
            />
          </div>
        </div>
      </div>
      <button className="button-submit" onClick={handleSubmit}>
        continue
      </button>
    </div>
  );
};

export default Pricing;
