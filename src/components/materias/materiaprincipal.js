import React from 'react';
import './materiaprincipal.css';
import { Link } from 'react-router-dom';

export default function MateriaPrincipal() {
  return (
    <div className="container-fluid">
      <div className="alert alert-success" id="titulinho" role="alert">
        Capítulo 1
      </div>
      <button className="btn btn-success" id="print" onClick={window.print}>
        Imprimir
      </button>
      <Link to="/">
        <button className="btn btn-warning" id="voltar">
          Voltar
        </button>
      </Link>

      <div className="conteudo">
        <div id="capitulo1">
          <strong>A indústria metalúrgica e literatura</strong>
          
          <p> 
          <br></br> 
            Conextualizando...
          </p>
          <br></br>
          <p>
            Questão-problema: O que a indústria metalúrgica tem a ver com a literatura? Você consegue imaginar como foram os primeiros livros impressos?
            Foi Gutenberg quem fabricou os primeiros tipos metálicos. Habilmente ele construiu peça por peça. As letras deixaram de ser escritas à mão, 
            agora eram estampadas por cunho de caracteres feitos a partir da fundição do metal (uma liga de chumbo e estanho). 
          </p>
          <br></br>
            <div className="img1">
              <div id="img">
                <img src="./img/portugues/img1.png"/>
                <p>
                  Johannes Gutenberg, nasceu provavelmente em 1397, na Alemanha. É considerado o criador do processo de impressão com tipos móveis, a tipografia. 
                  De uma família próspera, com o pai e o tio trabalhando na Casa da Moeda, desde cedo interessou-se pela estamparia.
                  (Fonte: https://educacao.uol.com.br/biografias/johannes-gutenberg.htm)

                </p>
              </div>
            </div>
          
          <br></br>
            <strong>O processo de fundição em detalhe</strong>
          <br></br>
          <p> 
          <br></br> 
            I Fase: Gravar punções
          </p>

          <p>

            Na extremidade de um punção de aço, o corpo em relevo da letra era gravado. Usavam-se ferramentas de precisão e se obtinha o patriz. 
            Para a impressão da Bíblia de 42 linhas foram necessários 296 punções, para obter todos os glifos (letras, números, ligaduras, abreviações)
            usados para compor a obra.

          </p>
          <p> 
          <br></br> 
            II Fase: Fazer as matrizes
          </p>
          <br></br>
          <div className="img2">
              <div id="img">
                <img src="./img/portugues/img2.png"/>
              </div>
            </div>

          <p>

            A partir do cunho com os patrizes – uma forte pancada do punção sobre uma barra retangular de cobre – obtinham-se formas negativas, as 
            chamadas matrizes. Depois de cunhadas pelo punção, as matrizes ficavam deformadas nos bordos, sendo necessário retificá-las.

          </p>
          <br></br>
          <div className="img3">
              <div id="img">
                <img src="./img/portugues/img3.png"/>
                <p>
                  Matrizes modernas de metal
                </p>
              </div>
            </div>
            <br></br>
          <p> 
          <br></br> 
            III Fase: A Fundição
          </p>
          <p>
          As matrizes de cobre, inseridas num aparelho também inventado por Gutenberg, tornam-se moldes. Estes moldes permitem a fundição 
          de milhares de caracteres de imprensa. A partir do molde, o fundidor de tipos obtinha um caractere em relevo, réplica exata 
          da forma original que tinha gravado na ponta do punção. 
          </p> 
          <br></br>
          
        </div>
      </div>
    </div> //Final do Container
  );
}
