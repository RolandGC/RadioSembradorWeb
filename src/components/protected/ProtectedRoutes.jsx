import { Navigate, useLocation } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import Swal from 'sweetalert2';

const ProtectedRoutes = ({ children }) => {
    const { user } = useUser();
    const location = useLocation();

    if (!user || Object.keys(user).length === 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Necesitas iniciar sesión para acceder a este sitio.",
        });
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoutes;