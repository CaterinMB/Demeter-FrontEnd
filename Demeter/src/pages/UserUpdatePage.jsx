import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext.jsx'

function UserUpdatePage() {
    const { user, getUsers } = useUser();

    return (
        <div className="mx-auto mt-4 contenedor">
            <h1 className="text-3xl font-bold text-center mb-20">ACTUALIZAR USUARIO</h1>
        </div>
    );
}

export default UserUpdatePage