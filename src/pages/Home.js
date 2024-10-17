import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto py-10 px-6">
      
      {/* Primeira Seção */}
      <div className="text-center text-lg leading-relaxed mb-10 px-6">
        <p>
          O Grupo de Pesquisa Núcleo de Pesquisas em Computação Aplicada da Universidade Federal Rural da Amazônia (UFRA) é uma entidade criada com o propósito de servir como um catalisador para o desenvolvimento de pesquisas em uma ampla gama de áreas da ciência da computação. Entre estas áreas estão a Inteligência Computacional, a Biologia Computacional, a Tecnologia, Inovação e Educação, as Redes de Computadores, a Informática Agrária, a Informática Aplicada à Saúde e a Computação Verde. Professores pesquisadores dos diversos campi da UFRA, juntamente com colaboradores externos de instituições parceiras, como UFPA, UFAM, IFPA, Prodepa, Uninassau, entre outras, unem esforços em prol do avanço do conhecimento nessas áreas de atuação. Essa colaboração multidisciplinar e interinstitucional fortalece o impacto e a relevância das pesquisas realizadas, contribuindo para o desenvolvimento científico e tecnológico não apenas da região amazônica, mas também do país como um todo.
        </p>

        {/* Botões */}
        <div className="flex flex-col md:flex-row justify-center mt-6">
          <a href="/publicacoes" className="bg-gray-800 text-white rounded-full mx-2 mb-2 md:mb-0 px-4 py-2">
            Publicações
          </a>
          <a href="/lab" className="bg-gray-800 text-white rounded-full mx-2 mb-2 md:mb-0 px-4 py-2">
            Laboratório de Computação Aplicada
          </a>
          <a href="https://dgp.cnpq.br/dgp/espelhogrupo/2599301941111101" className="bg-gray-800 text-white rounded-full mx-2 px-4 py-2">
            GPD / CNPq
          </a>
        </div>
      </div>

      {/* Seção Destaques */}
      <h2 className="text-2xl font-semibold mb-4 text-center">Destaques</h2>
      <hr className="mb-8"/>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <div className="card bg-white shadow-lg">
            <img src="static/imagens/fotoprojeto.png" alt="Imagem 1" className="w-full h-auto" />
            <div className="p-4">
              <h5 className="text-lg font-bold">Projeto 1</h5>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="card bg-white shadow-lg">
            <img src="static/imagens/fotoprojeto.png" alt="Imagem 2" className="w-full h-auto" />
            <div className="p-4">
              <h5 className="text-lg font-bold">Projeto 2</h5>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="card bg-white shadow-lg">
            <img src="static/imagens/fotoprojeto.png" alt="Imagem 3" className="w-full h-auto" />
            <div className="p-4">
              <h5 className="text-lg font-bold">Projeto 3</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Seção UFRA */}
      <h2 className="text-2xl font-semibold mb-4 text-center">UFRA</h2>
      <hr className="mb-8"/>
      <div className="flex flex-col md:flex-row justify-between items-center py-10">
        <div className="text-center text-lg leading-relaxed mb-10 md:mb-0 md:w-2/3 px-6">
          <p>
            A Universidade Federal Rural da Amazônia (UFRA), fundada em 1975, destaca-se como uma instituição de ensino superior pública situada no estado do Pará. Reconhecida pela sua atuação nas áreas de ciências agrárias e ambientais, a UFRA oferece cursos de graduação e pós-graduação alinhados às demandas regionais, promovendo a formação de profissionais qualificados e o avanço do conhecimento científico. Além disso, a UFRA tem um forte compromisso com a extensão universitária, desenvolvendo projetos e programas que visam à integração com a comunidade e à promoção do desenvolvimento sustentável na região amazônica.
          </p>
        </div>
        <div className="w-40 h-auto">
          <img src="static/imagens/ufra.png" alt="UFRA" />
        </div>
      </div>

      {/* Mapa */}
      <div className="text-center">
        <a
          href="https://www.google.com/maps/place/PA-256+-+Nova+Conquista,+Paragominas+-+PA/@-2.989053,-47.407198,17z/data=!4m6!3m5!1s0x92ba2ce4420df23d:0xd3c0d4766aa97628!8m2!3d-2.9848064!4d-47.4543701!16s%2Fg%2F11x1nm7z3?hl=pt-BR&entry=ttu"
          className="bg-gray-800 text-white rounded-full px-4 py-2"
        >
          Ver no Mapa
        </a>
      </div>
    </div>
  );
};

export default Home;
