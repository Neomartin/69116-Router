import { Navigate } from "react-router-dom";

// El elemento children es el componente que se renderiza dentro de AdminGuard. En este caso, se renderiza un div con el texto AdminGuard.
export default function AdminGuard({ children }) {

    const userRole = "USER";

    return (
        userRole === "ADMIN" ? children : <Navigate to="/" replace />
    )
}
