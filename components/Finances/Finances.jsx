import React from "react";
import Image from "next/image";
import { Container, Header, Title, Section, Table, TableRow, Text } from "./styles";
import Cards from "../Cards/Cards";
import Inputs from "../Inputs/Inputs";

export default function Finances() {
  return (
    <Container>
      <Header>
        <Title>Finances Manager</Title>
      </Header>
      <Section>
        <Cards />
        <Inputs />
        <Table>
          <table style={{width: '100%'}}>
            <TableRow>
              <th><Text>Description</Text></th>
              <div className="tableContainer">
                <th><Text>Value</Text></th>
                <th><Text className="border">Type</Text></th>
              </div>
            </TableRow>
            <TableRow>
              <td><Text>Alimentação</Text></td>
              <div className="tableContainer">
                <td><Text>1200</Text></td>
                <td style={{width: "50px", display: "flex", gap: "3px"}}><Text>pp</Text><Text>GG</Text></td>

              </div>
            </TableRow>
            <TableRow>
              <td><Text>Conta de Luz</Text></td>
              <div className="tableContainer">
                <td><Text>10000</Text></td>
                <td><Text>pp</Text></td>
              </div>
            </TableRow>
          </table>
        </Table>
      </Section>
    </Container>
  );
}
