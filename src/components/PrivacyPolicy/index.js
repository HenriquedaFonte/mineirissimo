import Link from "next/link";

import styles from "./privacyPolicy.module.scss";

export function _PrivacyPolicy() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Políticas de Privacidade</h1>
      <p className={styles.paragraph}>
        Aplicativos móveis, serviços, produtos e aplicativos baseados na web
        Mineiríssimo foram construídos para propósito Comercial. Este SERVIÇO é
        fornecido pela <em>Guimarães Maia, Ltda</em> e deve ser usado no estado
        em que se encontra.
      </p>
      <p className={styles.paragraph}>
        Esta página é usada para informar os visitantes sobre nossas políticas
        de coleta, uso e divulgação de Informações Pessoais, caso alguém decida
        usar nosso Serviço.
      </p>
      <p className={styles.paragraph}>
        Se você optar por usar nosso Serviço, você concorda com a coleta e uso
        de informações em relação a esta política. As informações pessoais que
        coletamos são usadas para fornecer e melhorar o serviço. Não usaremos ou
        compartilharemos suas informações com ninguém, exceto conforme descrito
        nesta Política de Privacidade.
      </p>
      <p className={styles.paragraph}>
        Os termos usados nesta Política de Privacidade têm os mesmos
        significados que em nossos{" "}
        <a className={styles.link} href="/termos_e_condicoes">
          Termos e Condições
        </a>
        , que podem ser acessados na página da Mineiríssimo, a menos que
        definido de outra forma nesta Política de Privacidade.
      </p>
      <h3 className={styles.article}>Coleta de dados</h3>
      <p className={styles.paragraph}>
        Para uma melhor experiência, ao usar nosso Serviço, podemos exigir que
        você nos forneça certas informações de identificação pessoal, incluindo,
        mas não se limitando a nome, e-mail, CPF, celular, endereço. As
        informações que solicitamos serão retidas por nós e usadas conforme
        descrito nesta política de privacidade.
      </p>
      <p className={styles.paragraph}>
        Também usamos ferramentas de coleta de informações, como cookies e
        tecnologias semelhantes, que coletam automaticamente informações que
        podem conter Dados Pessoais de seu computador ou dispositivo móvel
        quando você usa nossos Serviços, visita nossos Sites ou interage com
        nossos e-mails.
      </p>
      <h3 className={styles.article}>Log Data</h3>
      <p className={styles.paragraph}>
        Queremos informá-lo que sempre que você utilizar nosso Serviço, em caso
        de erro nos Serviços, coletamos dados e informações (por meio de
        produtos de terceiros) em seu telefone denominado Log Data. Esses dados
        de registro podem incluir informações como endereço de protocolo de
        Internet (&quot;IP&quot;) do dispositivo, nome do dispositivo, versão do
        sistema operacional, configuração dos Serviços ao utilizar nosso
        serviço, hora e data de uso do serviço e outras estatísticas.
      </p>
      <h3 className={styles.article}>Cookies</h3>
      <p className={styles.paragraph}>
        Cookies são arquivos com uma pequena quantidade de dados que são
        comumente usados como identificadores exclusivos anônimos. Eles são
        enviados para o seu navegador a partir dos sites que você visita e são
        armazenados na memória interna do seu dispositivo.
      </p>
      <p className={styles.paragraph}>
        Este Serviço não usa esses “cookies” explicitamente. No entanto, os
        Serviços pode usar código de terceiros e bibliotecas que usam “cookies”
        para coletar informações e melhorar seus serviços. Você tem a opção de
        aceitar ou recusar esses cookies e saber quando um cookie está sendo
        enviado para o seu dispositivo. Se você optar por recusar nossos
        cookies, pode não ser capaz de usar algumas partes deste Serviço.
      </p>
      <h3 className={styles.article}>Provedores de serviço</h3>
      <p className={styles.paragraph}>
        Podemos empregar empresas terceirizadas e indivíduos pelos seguintes
        motivos:
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>Para facilitar nosso serviço;</li>
        <li className={styles.item}>Para fornecer o serviço em nosso nome;</li>
        <li className={styles.item}>
          Para realizar serviços relacionados com o serviço; ou
        </li>
        <li className={styles.item}>
          Para nos ajudar a analisar como nosso serviço é usado.
        </li>
      </ul>
      <p className={styles.paragraph}>
        Queremos informar aos usuários deste Serviço que esses terceiros têm
        acesso às suas Informações Pessoais. O motivo é realizar as tarefas
        atribuídas a eles em nosso nome. No entanto, eles são obrigados a não
        divulgar ou usar as informações para qualquer outra finalidade.
      </p>
      <h3 className={styles.article}>Segurança</h3>
      <p className={styles.paragraph}>
        Valorizamos sua confiança em nos fornecer suas informações pessoais,
        portanto, estamos nos empenhando para usar meios comercialmente
        aceitáveis de protegê-las. Mas lembre-se que nenhum método de
        transmissão pela internet, ou método de armazenamento eletrônico é 100%
        seguro e confiável, e não podemos garantir sua segurança absoluta.
      </p>
      <h3 className={styles.article}>Links para outros Sites</h3>
      <p className={styles.paragraph}>
        Este serviço pode conter links para outros sites. Se você clicar em um
        link de terceiros, você será direcionado a esse site. Observe que esses
        sites externos não são operados por nós. Portanto, recomendamos
        enfaticamente que você analise a Política de Privacidade desses sites.
        Não temos controle e não assumimos responsabilidade pelo conteúdo,
        políticas de privacidade ou práticas de quaisquer sites ou serviços de
        terceiros.
      </p>
      <h3 className={styles.article}>Privacidade das crianças</h3>
      <p className={styles.paragraph}>
        Esses Serviços não se dirigem a ninguém com menos de 13 anos. Não
        coletamos intencionalmente informações de identificação pessoal de
        crianças com menos de 13 anos. No caso de descobrirmos que uma criança
        menor de 13 anos nos forneceu informações pessoais, nós as apagamos
        imediatamente de nossos servidores. Se você é um pai ou responsável e
        sabe que seu filho nos forneceu informações pessoais, entre em contato
        para que possamos tomar as medidas necessárias.
      </p>
      <h3 className={styles.article}>Mudanças nesta Política de Privacidade</h3>
      <p className={styles.paragraph}>
        Podemos atualizar nossa Política de Privacidade de tempos em tempos.
        Portanto, é recomendável revisar esta página periodicamente para
        verificar quaisquer alterações. Iremos notificá-lo de quaisquer
        alterações, publicando a nova Política de Privacidade nesta página.
      </p>
      <h3 className={styles.article}>Contato</h3>
      <p className={styles.paragraph}>
        Se tiver alguma pergunta ou sugestão sobre nossa Política de
        Privacidade, não deixe de entrar em contato através do email{" "}
        <a
          className={styles.link}
          href="mailto:mineirissimoartesanal@gmail.com"
          target="_blank"
          rel="noopener"
        >
          mineirissimoartesanal@gmail.com
        </a>
        .
      </p>
      <Link href="/">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
