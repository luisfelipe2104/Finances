import React, { useEffect, useState } from "react";
import Image from "next/image";
import trash from "../../assets/trash-light.png";
import entrie from "../../assets/entrie.png";
import output from "../../assets/output.png";
import {
  Container,
  Header,
  Title,
  Section,
  Table,
  TableRow,
  Text,
} from "./styles";
import Cards from "../Cards/Cards";
import Inputs from "../Inputs/Inputs";
import axios from "axios";

export default function Finances() {
  let url = 'https://finances-xi.vercel.app'
  // url = 'http://localhost:3000'
  const [gain, setGain] = useState(0)
  const [loss, setLoss] = useState(0)
  const [cash, setCash] = useState(0)
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const getData = async () => {
    await axios.post(url + '/api/user/getFinance', {user_id: 2})
    .then(res => {
      setData(res.data.data)
      setGain(res.data.gain)
      setLoss(res.data.loss)
      setCash(res.data.cash)
      setLoaded(true)
    })
  }  

  const handleDelete = async (id) => {
    await axios.post(url + '/api/user/deleteFinance', {"id": parseInt(id)})
    await getData()
  }

  useEffect(() => {
    getData()
  }, [])

  {!loaded && <Text>Loading...</Text>}
  return (
    <Container>
      <Header>
        <Title>Finances Manager</Title>
      </Header>
      <Section>
        <Cards gain={gain} loss={loss} cash={cash} loaded={loaded} />
        <Inputs getData={getData} />
        <Table>
          <table style={{ width: "100%" }}>
            <thead style={{ borderBottom: "1px solid #fff" }}>
              <TableRow>
                <th style={{width: '40%',}}>
                  <Text>Description</Text>
                </th>
                <th>
                  <Text>Value</Text>
                </th>
                <th>
                  <Text style={{ paddingRight: "1.6em" }}>Type</Text>
                </th>
              </TableRow>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <td style={{width: '40%', wordBreak: 'break-all' }}>
                      <Text>{item.description}</Text>
                    </td>
                    <td>
                      <Text>{item.value}</Text>
                    </td>
                    <td style={{ width: "50px", display: "flex", gap: "3px" }}>
                      <Image
                        src={item.profit ? entrie : output}
                        style={{
                          marginLeft: "-20%",
                          marginRight: "30%",
                          height: "25px",
                          width: "25px",
                        }}
                      />
                      <Image
                        onClick={() => handleDelete(item.id)}
                        src={trash}
                        style={{
                          cursor: 'pointer',
                          height: "32px",
                          width: "32px",
                          marginTop: "-5px",
                        }}
                      />
                    </td>
                  </TableRow>
                );
              })}
            </tbody>
          </table>
        </Table>
      </Section>
    </Container>
  );
}
