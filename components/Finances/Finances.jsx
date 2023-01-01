import React from "react";
import Image from "next/image";
import trash from '../../assets/trash-light.png'
import entrie from '../../assets/entrie.png'
import output from '../../assets/output.png'
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
            <thead style={{borderBottom: '1px solid #fff'}}>
              <TableRow>
                <th>
                  <Text>Description</Text>
                </th>
                <th>
                  <Text>Value</Text>
                </th>
                <th>
                  <Text style={{paddingRight: "1.2em"}}>Type</Text>
                </th>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <td>
                  <Text>Alimentação</Text>
                </td>
                <td>
                  <Text>1200</Text>
                </td>
                <td style={{ width: "50px", display: "flex", gap: "3px" }}>
                <Image 
                    src={entrie}
                    style={{ marginLeft: "-20%", marginRight: "30%", height: "25px", width: "25px" }}
                  />
                  <Image 
                    src={trash}
                    style={{ height: "32px", width: "32px", marginTop: '-3px' }}
                  />
                </td>
              </TableRow>
              <TableRow>
                <td>
                  <Text>Alimentação</Text>
                </td>
                <td>
                  <Text>1200</Text>
                </td>
                <td style={{ width: "50px", display: "flex", gap: "3px" }}>
                <Image 
                    src={entrie}
                    style={{ marginLeft: "-20%", marginRight: "30%", height: "25px", width: "25px" }}
                  />
                  <Image 
                    src={trash}
                    style={{ height: "32px", width: "32px", marginTop: '-3px' }}
                  />
                </td>
              </TableRow>
            </tbody>
          </table>
        </Table>
      </Section>
    </Container>
  );
}
