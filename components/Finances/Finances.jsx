import React from "react";
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

export default function Finances() {
  const data = [
    {
      id: 1,
      description: "Alimentaçãooooooooooooooooooooooooooooooooo",
      value: 2000,
      profit: true,
    },
    {
      id: 2,
      description: "Cinema",
      value: 800,
      profit: false,
    },
    {
      id: 3,
      description: "Imposto",
      value: 1500,
      profit: true,
    },
  ];
  return (
    <Container>
      <Header>
        <Title>Finances Manager</Title>
      </Header>
      <Section>
        <Cards />
        <Inputs />
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
                        src={entrie}
                        style={{
                          marginLeft: "-20%",
                          marginRight: "30%",
                          height: "25px",
                          width: "25px",
                        }}
                      />
                      <Image
                        src={trash}
                        style={{
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
