import axios from './axios.js'

export const createRoleRequest = (roles) => axios.post(`/add_role`, roles);
export const getRolesRequest = () => axios.get(`/role`);
export const getRoleRequest = (ID_Role) => axios.get(`/role/${ID_Role}`);
export const updateRoleRequest = (ID_Role, roles) => axios.put(`/role/${ID_Role}`, roles);
export const statusRoleRequest = (ID_Role) => axios.put(`/role/toggle/${ID_Role}`);
export const deleteRoleRequest = (ID_Role) => axios.delete(`/role/${ID_Role}`);

// -------------------------------- Type User -------------------------------- //
export const getTypeUserRequest = () => axios.get(`/type_user`)