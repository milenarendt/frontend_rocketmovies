import { Container, Content } from "./style";
import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header';
import { Movie } from "../../components/Movie";

import { Link } from 'react-router-dom';


export function Home() {
  return (
    <Container>
      <Header />

      <header className="header">
        <h1>Meus filmes</h1>
        <Link to="newmovie" className="add">
          <FiPlus />
          Adicionar filme
        </Link>
      </header>

      <Content>
  
        <Movie data={{
          title: 'Avatar: O Caminho da Água',
          grade: '4',
          description: `Mais de uma década depois que os Na'vi repeliram a invasão humana de Pandora, Jake Sully vive como chefe do clã Omaticaya e cria uma família com Neytiri, que inclui os filhos Neteyam e Lo'ak, a filha Tuk e a filha adotiva Kiri. (nascido do avatar inerte de Grace Augustine), e um menino humano chamado Spider, filho do Coronel Miles Quaritch que nasceu em Pandora e não pôde ser transportado para a Terra em criostase devido à sua tenra idade. Para consternação dos Na'vi, os humanos retornam e erguem uma nova base operacional principal chamada Bridgehead City para preparar Pandora para a colonização, já que a Terra está morrendo. Entre os recém-chegados estão os recombinantes, avatares Na'vi implantados com as mentes e memórias de fuzileiros navais RDA falecidos, com o recombinante de Quaritch como seu líder.

                Jake inicia uma campanha de guerrilha contra as linhas de abastecimento RDA. Quaritch e seus recombinantes conduzem uma missão de contrainsurgência contra Jake, capturando seus filhos. Jake e Neytiri chegam e libertam a maioria deles, mas Spider é levado por Quaritch, que o reconhece como seu filho. Ele decide passar um tempo com ele para atrair Spider ao seu lado e, por sua vez, Spider ensina Quaritch sobre a cultura e a linguagem Na'vi. Ciente do perigo que o conhecimento de Spider sobre seu paradeiro representa para sua segurança, Jake e sua família se exilam de Omaticaya e se retiram para o clã do povo do recife Metkayina na costa leste de Pandora, onde recebem abrigo, embora alguns membros da tribo considerem que eles tenham "sangue de demônio" por sua herança genética humana. A família aprende os costumes do povo do recife, Kiri desenvolve um vínculo espiritual com o mar e suas criaturas, e Lo'ak torna-se amigo de Tsireya, filha do chefe do clã Tonowari e sua esposa Ronal.
                
                Lo'ak briga com o irmão de Tsireya, Aonung. Quando ele volta para se desculpar pela insistência de Jake, Aonung e seus amigos o induzem a uma viagem ao território de um perigoso predador marinho e o deixam encalhado. Lo'ak é salvo e torna-se amigo de Payakan, um tulkun, uma espécie de cetáceo inteligente e pacifista que os Metkayina consideram sua família espiritual. Após seu retorno, Lo'ak assume a culpa, ganhando a amizade de Aonung, mas é informado de que Payakan é um pária entre sua espécie. Em uma viagem à Árvore Espiritual de Metkayina, Kiri se conecta a ela para encontrar sua mãe, mas sofre uma convulsão violenta. Ela é curada por Ronald, mas quando Jake liga para Norm Spellman e Max Patel pedindo ajuda, Quaritch consegue rastreá-los até o arquipélago onde vivem as pessoas do recife. Trazendo Spider com ele, ele comanda um navio baleeiro que está caçando tulkuns para colher suas enzimas cerebrais para criar remédios antienvelhecimento chamados amrita. Quaritch começa a questionar brutalmente as tribos indígenas sobre a localização de Jake; quando isso se mostra infrutífero, ele ordena que a tripulação baleeira mate tulkuns arbitrariamente para atrair Jake. Lo'ak se conecta mentalmente com Payakan e descobre que o tulkun foi expulso porque foi contra os costumes de sua espécie e atacou os baleeiros que mataram sua mãe.
                
                Quando o Metkayina fica sabendo dos assassinatos de tulkun, Lo'ak parte para avisar Payakan, seguido por seus irmãos, Tsireya, Aonung e Rotxo. Eles encontram Payakan sendo perseguido pelos baleeiros, e Lo'ak, Tsireya e Tuk são capturados por Quaritch. Com seus filhos em perigo, Jake, Neytiri e o Metkayina partiram para enfrentar os humanos. Quaritch força Jake a se render, mas ao ver Lo'ak em perigo, Payakan ataca os baleeiros, iniciando uma luta que mata a maior parte da tripulação e danifica gravemente a embarcação, fazendo-a afundar. Neteyam resgata Lo'ak, Tsireya e Spider, mas é morto a tiros. Jake enfrenta Quaritch, que usa Kiri como refém. Quando Neytiri faz o mesmo com Spider, Quaritch a princípio nega seu relacionamento com ele, mas desiste quando Neytiri corta Spider no peito.
                
                Jake, Quaritch, Neytiri e Tuk acabam presos dentro do navio que está afundando. Jake estrangula Quaritch até deixá-lo inconsciente e é resgatado por Lo'ak e Payakan, enquanto Kiri convoca criaturas marinhas para ajudá-la a salvar Neytiri e Tuk. Spider encontra e resgata Quaritch, mas o renuncia por sua crueldade e se junta à família de Jake. Após o funeral de Neteyam, Jake informa Tonowari e Ronal sobre sua decisão de deixar o Metkayina. Tonowari, no entanto, o identifica respeitosamente como parte do clã e dá as boas-vindas à permanência de sua família. Jake e sua família aceitam e criam uma nova vida no mar, com Jake jurando continuar lutando contra os invasores humanos.`,
          tags:[
              {id:'1', name: 'Ficção Científica'},
              {id:'2', name: 'Aventura'},
              {id:'3', name: 'Ação'},
              {id:'4', name: 'Fantasia'}
            ]
          }}/>

        <Movie data={{
          title: 'Interestellar',
          grade: '3',
          description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.

          Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
          `,
          tags:[
              {id:'1', name: 'Ficção Científica'},
              {id:'2', name: 'Familia'},
              {id:'3', name: 'Drama'}
            ]
          }}/>

        <Movie data={{
          title: 'Barbie',
          grade: '5',
          description: `A história acompanha a Barbie Estereotípica, que vive em um lugar perfeito, na companhia de amigas perfeitas (as outras Barbies), fazendo coisas divertidas e imersa na certeza de que a sua invenção fez bem para meninas no mundo real. No entanto, começam a acontecer mudanças de comportamento que a levam a uma inevitável crise existencial
          `,
          tags:[
              {id:'1', name: 'Ficção Científica'},
              {id:'2', name: 'Familia'},
              {id:'3', name: 'Comédia'}
            ]
          }}/>

      </Content>

      
    </Container>
  )
};