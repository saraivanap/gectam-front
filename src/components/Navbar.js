import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/static/imagens/logo.png" alt="logo" className="h-12" />
            </Link>
          </div>

          {/* Botão para mobile */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Links de navegação */}
          <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
            <div className="lg:flex items-center space-x-4">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                Home
              </Link>
              <Link to="/pesquisa" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                Linhas de Pesquisa
              </Link>
              <Link to="/projetos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                Projetos
              </Link>
              <Link to="/contato" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                Contato
              </Link>

              {/* Dropdown */}
              <div className="relative">
                <button className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                  Mais
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 z-10">
                  <Link to="/pesquisadores" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Pesquisadores</Link>
                  <Link to="/publicacoes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Publicações</Link>
                  <Link to="/lab" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Laboratório</Link>
                  <Link to="/ps" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Processo Seletivo</Link>
                  <Link to="/leituras" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Leituras</Link>
                  <Link to="/oc" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Oficinas e Cursos</Link>
                </div>
              </div>
            </div>

            {/* Barra de Pesquisa */}
            <form className="flex items-center space-x-2 ml-4">
              <input
                type="text"
                placeholder="Procurar..."
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
