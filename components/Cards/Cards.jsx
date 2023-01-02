import React, { useEffect, useState } from "react";
import Image from "next/image";
import entrie from "../../assets/entrie-light.png";
import output from "../../assets/output-light.png";
import cash from "../../assets/dollar-light.png";
import { ContainerCards, Card, Text, Price } from "../index.js";

export default function Cards(props) {
  // console.log(props.data)
  const data = props.data

  const [teste, setTeste] = useState(true)
  
  
  

  return (
    <ContainerCards>
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-6">
              <Card>
                <div style={{ display: "flex", gap: "20px" }}>
                  <Text>Gain</Text>
                  <Image
                    src={entrie}
                    style={{ height: "25px", width: "25px" }}
                  />
                </div>
                <Price>R$ {props.gain}.00</Price>
              </Card>
            </div>
            <div className="col-6">
              <Card>
                <div style={{ display: "flex", gap: "20px" }}>
                  <Text>Loss</Text>
                  <Image src={output} style={{ height: "25px", width: "25px" }} />
                </div>
                <Price>R$ {props.loss}.00</Price>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <Card>
            <div style={{ display: "flex", gap: "20px" }}>
              <Text>Cash</Text>
              <Image src={cash} style={{ height: "25px", width: "25px" }} />
            </div>
            <Price>R$ {props.cash}.00</Price>
          </Card>
        </div>
      </div>
    </ContainerCards>
  );
}
