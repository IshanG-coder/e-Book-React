import { Route,Routes } from "react-router-dom";
import {HomePage, Login, Register,ProductDetail, ProductList, CartPage} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";


export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/:id" element={<ProductDetail />} />

            <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
    </div>
  )
}
