import React from 'react';

const MainPage = () => {
  return (
    <div>

      {/* Conteúdo principal da página */}
      <main className="container mx-auto py-10 px-6">
        <section>
          <h1 className="text-4xl font-bold mt-20 mb-4">Bem-vindo ao GECTAM!</h1>
          <p className="mb-6">O Grupo em Engenharia, Ciência e Tecnologia na Amazônia (GECTAM) tem como objetivo ...</p>
          <p>Aqui você pode acessar informações sobre nossas linhas de pesquisa, projetos e publicações.</p>
        </section>

        {/* Seções adicionais */}
        <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Linhas de Pesquisa</h2>
            <p>Amazon Tall Tower Observatory (ATTO) - Rede de monitoramento de gases de efeito estufa, de variáveis climáticas e de fluxos de energia na Amazônia brasileira.</p>
            <hr></hr>
            <p>Análise Ambiental e Geotecnologias</p>
            <hr></hr>
            <p>Modelagem, otimização e simulação computacional de biossistemas e processos</p>
            <hr></hr>
            <p>Saneamento, Meio Ambiente e Políticas Públicas</p>
        </section>
        <section className="mt-8">
        <div className="flex flex-col md:flex-row justify-center mt-6">
          <a href="/projetos" className="bg-green-800 text-white rounded-full mx-2 mb-2 md:mb-0 px-4 py-2 transition duration-300 hover:bg-gray-300">
            Projetos
          </a>
          <a href="/publicacoes" className="bg-green-800 text-white rounded-full mx-2 mb-2 md:mb-0 px-4 py-2 transition duration-300 hover:bg-gray-300">
           Publicações
          </a>
        </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
