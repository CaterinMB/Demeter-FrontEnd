import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useRole } from '../context/RoleContext.jsx'

function Roles() {
    const { role, getRoles } = useRole();

    return (
        <div className="mx-auto mt-4 contenedor">
            <h1 className="text-3xl font-bold text-center mb-20">ROLES</h1>
        </div>
    );
}

export default Roles