import React from 'react';
import Navbar from '../components/Navbar'; // Caminho relativo dentro do src
import Footer from '../components/Footer'; // Caminho relativo dentro do src


const MainPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Conteúdo principal da página */}
      <main className="flex flex-col min-h-screen">
        <section>
          <h1 className="text-4xl font-bold mb-4">Bem-vindo ao NPCA!</h1>
          <p className="mb-6">O Núcleo de Pesquisa em Ciências Agrárias (NPCA) tem como objetivo ...</p>
          <p>Aqui você pode acessar informações sobre nossas linhas de pesquisa, projetos e publicações...</p>
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
          <h2 className="text-2xl font-semibold mb-4">Projetos</h2>
          <p>Conheça os projetos que estão em andamento no NPCA ...</p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
