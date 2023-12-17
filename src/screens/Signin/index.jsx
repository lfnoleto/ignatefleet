
import {Container,Title,Slogan} from './styles';
import backgroundImg from "../../assets/background.png"
import { Button } from '../../components/Button';



export  function SigIn() {
  return (
  <Container source={backgroundImg}>
    <Title>Ignite Fleet</Title>
    <Slogan>Gestão de uso de veiculos</Slogan>
    <Button title="Entrar com o Google" />
  </Container>
  );
}

