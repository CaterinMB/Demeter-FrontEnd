import { useUser } from "../context/UserContext";
import { useRole } from "../context/RoleContext";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdToggleOn, MdToggleOff } from "react-icons/md";

function UserCard({ user, onEdit, onDelete }) {
  const { toggleUserStatus } = useUser();
  const { typeUser } = useRole();

  const types = typeUser.find(
    (type) => type.ID_TypeUser === user.TypeUser_ID
  );

  const barraClass = user.Estado ? "" : "desactivado";

  return (
    <tr>
      <td className="border border-gray-400 px-4 py-2 text-center width-column">{user.Type_Document}</td>
      <td className="border border-gray-400 px-4 py-2 text-center width-column">{user.Document}</td>
      <td className="border border-gray-400 px-4 py-2 text-center width-column">{user.Name_User}</td>
      <td className="border border-gray-400 px-4 py-2 text-center width-column">{user.LastName_User}</td>
      <td className="border border-gray-400 px-4 py-2 text-center width-column">
        {types && types.Name_Type}
      </td>
      <td className={`border border-gray-400 px-4 py-2 text-center width-column ${barraClass}`}>
        {user.State ? "Habilitado" : "Deshabilitado"}
      </td>
      <td className="border border-gray-400 px-4 py-2 text-center">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            className={`text-orange-500 hover:text-orange-700 mr-2 ${!user.State ? "text-gray-400 cursor-not-allowed" : ""}`}
            disabled={!user.State}
            style={{ marginLeft: "14%" }}
            to={`/edit_user/${user.ID_User}`}
          >
            <AiFillEdit size={24} />
          </Link>
          <Link
            className={`text-orange-500 hover:text-orange-700 mr-2 ${!user.State ? "text-gray-400 cursor-not-allowed" : ""}`}
            disabled={!user.State}
            style={{ marginLeft: "14%" }}
            to={`/view_user/${user.ID_User}`}
          >
            <AiOutlineEye />
          </Link>

          <button
            onClick={onDelete}
            className={`text-red-500 hover:text-red-800 mr-2 ${!user.State ? "text-gray-400 cursor-not-allowed" : ""}`}
            style={{ marginRight: "-20px" }}
            disabled={!user.State}
          >
            <AiFillDelete size={24} />
          </button>
          <div
            className={`barra-container ${barraClass} adjust`}
            onClick={() => toggleUserStatus(user.ID_User)}
          >
            <div className={` ${barraClass}`} style={{ marginRight: "-30px" }}>
              {user.State ? (
                <MdToggleOn className={`estado-icon active ${barraClass}`} />
              ) : (
                <MdToggleOff className={`estado-icon inactive ${barraClass}`} />
              )}
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default UserCard;