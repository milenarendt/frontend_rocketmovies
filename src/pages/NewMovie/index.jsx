import { Container, Form } from "./style";
import { FiArrowLeft } from "react-icons/fi";

import { Header } from '../../components/Header';
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { Link } from 'react-router-dom';

export function NewMovie() {
  return (
    <Container>
      <Header />

      <main>
        <Link to="/">
          < FiArrowLeft />
          voltar
        </Link>

        <Form>
          <h1>Novo filme</h1>

          <div className="input">
            <Input 
              placeholder="Título"
              type="text"
            />

            <Input 
              placeholder="Sua nota (de 0 a 5)"
              type="number"
            />
          </div>

          <Textarea placeholder="Observações"/>

          <section>
            <h2>Marcadores</h2>

            <div className="notes">
              <NoteItem value="react"/>
              <NoteItem placeholder="Novo marcador" isNew/>
            </div>

          </section>

          <div className="btn">
            <Button className="btn-delete" title="Excluir filme"/>

            <Button title="Salvar alterações"/>
          </div>


        </Form>

      </main>
    </Container>
  )
};