import React, { useState } from "react";
import { Text, ContainerInputs, Input, Radio, Label } from "../index.js";
import axios from "axios";

export default function Inputs(props) {
  const [value, setValue] = useState(0)
  const [description, setDescription] = useState("")
  const [profit, setProfit] = useState(true)
  const [user_id, setUser_id] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      "profit": profit,
      "value": parseInt(value),
      "description": description,
      "user_id": 2
    }

    console.log(data)
    await axios.post('http://localhost:3000/api/user/createFinance', data)
    .then(res => console.log(res))
    await props.getData()
  }
  return (
    <ContainerInputs>
      <div className="row">
        <div className="col-lg-8">
          <div className="row gap-lg-5 gap-3">
            <div className="col-lg-5">
              <Label>Description</Label>
              <Input onChange={(e) => setDescription(e.target.value)} placeholder="Ex: Groceries" type='text' className="w-100" />
            </div>
            <div className="col-lg-5">
              <Label>Value</Label>
              <Input onChange={(e) => setValue(e.target.value)} placeholder="Ex: 800" type='number' className="w-100" />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8">
              <div className="row pt-4">
                <div className="col-5" style={{ marginRight: "20px" }}>
                  <div className="row">
                    <Radio
                      onClick={() => setProfit(true)}
                      className="col-6"
                      type="radio"
                      name="entrieType"
                      value="gain"
                      defaultChecked
                    />
                    <Text className="col-6">Gain</Text>
                  </div>
                </div>
                <div className="col-5">
                  <div className="row">
                    <Radio
                      onClick={() => setProfit(false)}
                      className="col-6"
                      type="radio"
                      name="entrieType"
                      value="loss"
                    />
                    <Text className="col-6">Loss</Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pt-lg-2 center">
              <button onClick={handleSubmit} className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </ContainerInputs>
  );
}
