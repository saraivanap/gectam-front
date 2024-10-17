import React from 'react';
import Navbar from '../components/Navbar';  // Importando o Navbar
import Footer from '../components/Footer';  // Importando o Footer

const Projetos = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Conteúdo principal */}
      <main className="flex-grow">
        {/* Título com separador */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-4">Projeto 1</h2>
          <hr className="border-gray-300 mb-8" />

          {/* Conteúdo do projeto */}
          <div className="flex justify-between px-4">
            <div className="w-full text-left">
              <p className="text-lg">
                Aqui está o conteúdo descritivo do Projeto 1. Adicione detalhes sobre o projeto aqui.
              </p>
            </div>
          </div>
        </section>

        {/* Botão */}
        <div className="container mx-auto px-4 text-right mb-8">
          <a href="/" className="btn btn-dark rounded-full bg-gray-800 text-white px-6 py-2">
            Visualizar Projeto
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projetos;
