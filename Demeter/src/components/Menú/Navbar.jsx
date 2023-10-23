import React, { useState } from 'react';
import logo from './img/logo.png'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav class="pc-sidebar">
            <div class="navbar-wrapper">
                <div class="m-header">
                    <button
                        onClick={() => {
                            navigate('/');
                        }}
                        class="b-brand"
                    >
                        <img src={logo} alt="Demeter SOFT" class="logo logo-lg" width="130" height="60" />
                    </button>
                </div>
                <div class="navbar-content">
                    <ul class="pc-navbar">
                        <li class="pc-item pc-caption">
                            <label>MENÚ</label>
                        </li>
                        <li class="pc-item">
                            <button
                                onClick={() => {
                                    navigate('/');
                                }}
                                class="pc-link"
                            >
                                <span class="pc-micon">
                                    <svg class="h-20 w-20 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x="4" y="4" width="6" height="5" rx="2" />
                                        <rect x="4" y="13" width="6" height="7" rx="2" />
                                        <rect x="14" y="4" width="6" height="16" rx="2" />
                                    </svg>
                                </span>
                                <span class="pc-mtext">
                                    Dashboard
                                </span>
                            </button>
                        </li>
                        <li class="pc-item pc-caption">
                            <span>Gestión de configuración</span>
                        </li>
                        <li class="pc-item pc-hasmenu">
                            <button
                                onClick={() => {
                                    navigate('/');
                                }}
                                class="pc-link"
                            >
                                <span class="pc-micon">
                                    <svg class="h-20 w-20 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </span>
                                <span class="pc-mtext">
                                    Roles y permisos
                                </span>
                            </button>
                        </li>
                        <li class="pc-item pc-caption">
                            <span>Gestión de usuarios</span>
                        </li>
                        <li class="pc-item">
                            <button
                                onClick={() => {
                                    navigate('/');
                                }}
                                class="pc-link"
                            >
                                <span class="pc-micon">
                                    <svg class="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </span>
                                <span class="pc-mtext">
                                    Empleados
                                </span>
                            </button>
                        </li>
                        <li class="pc-item pc-caption">
                            <span>Gestión de compras</span>
                        </li>
                        <li class="pc-item pc-hasmenu">
                            <div class="pc-link">
                                <span class="pc-micon">
                                    <svg class="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </span>
                                <span class="pc-mtext">
                                    Empleados
                                </span>
                            </div>
                            <button
                                onClick={() => {
                                    navigate('/');
                                }}
                                class="pc-link"
                            >

                            </button>
                            <a href="#" class="pc-link ">
                                <span class="pc-micon">
                                    <svg class="h-20 w-20 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1="3" y1="21" x2="21" y2="21" />
                                        <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                                        <path d="M5 21v-10.15" />
                                        <path d="M19 21v-10.15" />
                                        <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                                    </svg>
                                </span>
                                <span class="pc-mtext">
                                    Gestión de compras
                                </span>
                                <a href="#" class="pc-link ">
                                    <svg
                                        class="h-16 w-16 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                    <span class="pc-arrow">

                                    </span>
                                </a>
                            </a>
                            <ul class="pc-submenu">
                                {/* <li class="pc-item"><a class="pc-link" href="#">Categoria insumo</a></li>
                                <li class="pc-item"><a class="pc-link" href="#">Insumos</a></li>
                                <li class="pc-item"><a class="pc-link" href="#">Proveedores</a></li>
                                <li class="pc-item"><a class="pc-link" href="#">Compras</a></li> */}
                            </ul>
                        </li>
                        <li class="pc-item pc-caption">
                            <span>Gestión de ventas</span>
                        </li>
                        <li class="pc-item pc-hasmenu">
                            <a href="#" class="pc-link ">
                                <span class="pc-micon">
                                    <svg class="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </span>
                                <span class="pc-mtext">
                                    Gestión de ventas
                                </span>
                                {/* <span class="pc-arrow"><i data-feather="chevron-right"></i></span></a> */}
                            </a>
                            <ul class="pc-submenu">
                                {/* <li class="pc-item"><a class="pc-link" href="#">Categoria producto</a></li>
                                <li class="pc-item"><a class="pc-link" href="#">Producto</a></li>
                                <li class="pc-item"><a class="pc-link" href="#">Receta</a></li>
                                <li class="pc-item"><a class="pc-link" href="#">Venta</a></li> */}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar