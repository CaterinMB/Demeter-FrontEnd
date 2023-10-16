import React, { useState } from 'react';
import logo from '../img/logo.png'
import compras from '../img/compras.png'
import ventas from '../img/ventas.png'
import informes from '../img/informes.png'
import configuracion from '../img/configuracion.png'
import usuario from '../img/usuario.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [submenuConfiguracionVisible, setSubmenuConfiguracionVisible] = useState(false);
  const [submenuUsuariosVisible, setSubmenuUsuariosVisible] = useState(false);
  const [submenuComprasVisible, setSubmenuComprasVisible] = useState(false);
  const [submenuVentasVisible, setSubmenuVentasVisible] = useState(false);

  const navigate = useNavigate();

  const toggleSubmenuConfiguracion = () => {
    setSubmenuConfiguracionVisible(!submenuConfiguracionVisible);
    setSubmenuConfiguracionVisible(false);
  };

  const toggleSubmenuUsuarios = () => {
    setSubmenuUsuariosVisible(!submenuUsuariosVisible);
    setSubmenuUsuariosVisible(false);
  };

  const toggleSubmenuCompras = () => {
    setSubmenuComprasVisible(!submenuComprasVisible);
    setSubmenuComprasVisible(false);
  };

  const toggleSubmenuVentas = () => {
    setSubmenuVentasVisible(!submenuVentasVisible);
    setSubmenuVentasVisible(false);
  }

  return (
    <div className="bg-white">
      <div className="menu bg-[#201e1e] min-h-screen flex flex-col justify-start items-start p-1">
        <img src={logo} alt="Logo" className="w-32 h-25 ml-8 mt-8" />
        <ul className="mt-8 space-y-5">
          <li>
            <button
              onClick={() => {
                navigate('/');
              }}
              className="text-white bg-[#201E1E] rounded-md p-2 w-full"
            >
              <img src={informes} alt="Informes" className="w-8 h-8" />
              <span className='ml-2'>Informes</span>
            </button>
          </li>
          <li>
            <div
              className="flex items-center text-white p-2 rounded ml-5"
              onClick={toggleSubmenuConfiguracion}
            >
              <img src={configuracion} alt="Configuracion" className="w-8 h-8" />
              <span className="ml-2">Configuracion</span>
            </div>
            {submenuConfiguracionVisible && (
              <ul className="ml-7 space-y-2">
                <li>
                  <button
                    onClick={() => {
                      navigate('/');
                    }}
                    className="text-white bg-[#201E1E] rounded-md p-2 w-full"
                  >
                    Roles
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="flex items-center text-white p-2 rounded ml-5"
              onClick={toggleSubmenuUsuarios}
            >
              <img src={usuario} alt="Usuarios" className="w-8 h-8" />
              <span className="ml-2">Usuarios</span>
            </div>
            {submenuUsuariosVisible && (
              <ul className="ml-7 space-y-2">
                <li>
                  <button
                    onClick={() => {
                      navigate('/');
                    }}
                    className="text-white bg-[#201E1E] rounded-md p-2 w-full"
                  >
                    Usuarios
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="flex items-center text-white p-2 rounded ml-5"
              onClick={toggleSubmenuCompras}
            >
              <img src={compras} alt="Compras" className="w-8 h-6" />
              <span className="ml-2">Compras</span>
            </div>
            {submenuComprasVisible && (
              <ul className="ml-7 space-y-2">
                <li>
                  <button
                    onClick={() => {
                      navigate('/');
                    }}
                    className="text-white bg-[#201E1E] rounded-md p-2 w-full"
                  >
                    Categoria de insumos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate('/');
                    }}
                    className="text-white bg-[#201E1E] rounded-md p-2 w-full"
                  >
                    Insumos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate('/');
                    }}
                    className="text-white bg-[#201E1E] rounded-md p-2 w-full"
                  >
                    Proveedores
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate('/');
                    }}
                    className="text-white bg-[#201E1E] rounded-md p-2 w-full"
                  >
                    Compras
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="flex items-center text-white p-2 rounded ml-5"
              onClick={toggleSubmenuVentas}
            >
              <img src={ventas} alt="Ventas" className="w-8 h-6" />
              <span className="ml-2">Ventas</span>
            </div>
            {submenuVentasVisible && (
              <ul className="ml-7 space-y-2">
                <li>
                  <button
                    onClick={() => {
                      navigate('/');
                    }}
                    className="text-white bg-[#201E1E] rounded-md p-2 w-full"
                  >
                    Categoria de productos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate('/');
                    }}
                    className="text-white bg-[#201E1E] rounded-md p-2 w-full"
                  >
                    Productos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate('/');
                    }}
                    className="text-white bg-[#201E1E] rounded-md p-2 w-full"
                  >
                    Ventas
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar