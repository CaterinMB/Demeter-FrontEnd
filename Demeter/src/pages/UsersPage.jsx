import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext.jsx'
import DeleteUser from './UserDeletePage.jsx';
import UserCard from '../components/User.card';

function UsersPage() {
    const { user, getUsers, deleteUser } = useUser();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUser, setFilteredUser] = useState([]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredUser(user);
        } else {
            const filtered = user.filter((user) =>
                user.Document.includes(searchTerm)
            );
            setFilteredUser(filtered);
        }
    }, [searchTerm, user]);

    const handleDelete = (user) => {
        setUserToDelete(user);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (userToDelete) {
            deleteUser(userToDelete.ID_User);
            setUserToDelete(null);
            setIsDeleteModalOpen(false);
        }
    };

    const cancelDelete = () => {
        setUserToDelete(null);
        setIsDeleteModalOpen(false);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const userToDisplay = filteredUser.slice(startIndex, endIndex);

    return (
        <div className="mx-auto mt-4 contenedor">
            <h1 className="text-3xl font-bold text-center mb-20">USUARIOS</h1>
            <div className="flex justify-between items-center mb-4">
                <Link
                    to="/add_user"
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-5 rounded border border-orange-500 hover:border-orange-700 focus:outline-none focus:shadow-outline"
                >
                    Crear Usuario
                </Link>
                <input
                    type="text"
                    placeholder="Buscar usuario por número de documento"
                    value={searchTerm}
                    onChange={(e) => {
                        const inputValue = e.target.value;
                        const filteredInput = inputValue.replace(/[^0-9]/g, '');
                        setSearchTerm(filteredInput);
                    }}
                    className="border-2 border-gray-800 rounded-lg p-2 focus:outline-none"
                />
            </div>
            <table className="table-auto mx-auto w-full">
                <thead>
                    <tr className="bg-[#201E1E] text-white">
                        <th className="border border-gray-400 px-2 py-2 w-1/7">Tipo</th>
                        <th className="border border-gray-400 px-2 py-2 w-1/7">N° documento</th>
                        <th className="border border-gray-400 px-2 py-2 w-1/7">Nombre</th>
                        <th className="border border-gray-400 px-2 py-2 w-1/7">Apellido</th>
                        <th className="border border-gray-400 px-2 py-2 w-1/7">Tipo</th>
                        <th className="border border-gray-400 px-2 py-2 w-1/7">Estado</th>
                        <th className="border border-gray-400 px-4 py-2 w-1/7">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {userToDisplay.map((user) => (
                        <UserCard
                            user={user}
                            key={user.ID_User}
                            onDelete={() => handleDelete(user)}
                        />
                    ))}
                </tbody>
            </table>

            {isDeleteModalOpen && (
                <DeleteUser
                    onClose={cancelDelete}
                    onDelete={confirmDelete}
                />
            )}

            <div className="pagination">
                <div className="pagination text-center mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-5 rounded border border-orange-500 hover:border-orange-700 focus:outline-none focus:shadow-outline mr-2"
                    >
                        Anterior
                    </button>
                    <span>Página {currentPage}</span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={endIndex >= user.length}
                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-5 rounded border border-orange-500 hover:border-orange-700 focus:outline-none focus:shadow-outline ml-2"
                    >
                        Siguiente
                    </button>
                </div>
            </div>

        </div>
    );
}

export default UsersPage