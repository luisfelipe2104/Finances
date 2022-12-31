import React from "react";
import { Text, ContainerInputs, Input, Radio, Label } from "../index.js";

export default function Inputs() {
  return (
    <ContainerInputs>
      <div className="row">
        <div className="col-lg-8">
          <div className="row gap-lg-5 gap-3">
            <div className="col-lg-5">
              <Label>Description</Label>
              <Input placeholder="Ex: Groceries" type='text' className="w-100" />
            </div>
            <div className="col-lg-5">
              <Label>Value</Label>
              <Input placeholder="Ex: 800" type='number' className="w-100" />
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
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </ContainerInputs>
  );
}
