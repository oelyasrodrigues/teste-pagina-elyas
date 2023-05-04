import Perguntas from "../common/Perguntas";
import "./faq.scss";

function Faq() {
  return (
    <section className="faq d-flex pad">
      <div className="container">
        <div className="content">
          <div className="title">
            <span>F.A.Q</span>
            <p>Perguntas frequentes</p>
          </div>

          <div className="perguntas">
            <Perguntas
              pergunta="Quais serviços você oferece?"
              resposta="Minha especialidade é criação de páginas, mas também faço social media, como posts para feed, story, carrosséis..."
            />
            <Perguntas
              pergunta="Qual o tipo de página que você faz?"
              resposta="As principais páginas para lançamento (página de vendas, página de captura, página de obrigado), mas caso você queira outro tipo de página podemos combinar pelo whatsApp."
            />
            <Perguntas
              pergunta="Você faz a copy das páginas?"
              resposta="Não. É essencial que você tenha um copywriter qualificado para que sua página tenha sucesso."
            />
            <Perguntas
              pergunta="Qual o prazo para entrega?"
              resposta="O prazo será estipulado de acordo com a demanda e urgência, já que cada projeto tem suas caracteristicas e dificuldades distintas."
            />
            <Perguntas
              pergunta="Se eu não gostar do projeto, posso pedir alteração?"
              resposta="Claro. Antes da implementação não terá limite de alterações, desde que o bom senso permaneça e não fuja do briefing."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
