import { Navigate, Route, Routes } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import routerConstants from "../constants/routerConstants";
import PrivateRouter from "./PrivateRouter";
import SuperAdminLogin from "../app/authpages/superadminlogin";
import SuperAdmin from "../app/pages/superadmin/superadmin";
import Categories from "../app/pages/categories";
import Sellers from "../app/pages/sellers";
import SellersDetails from "../app/pages/sellers/sellers_details";
import SellerSignup from "../app/authpages/sellersignup";
import SellerSignin from "../app/authpages/sellersignin";
import MyProducts from "../app/pages/sellerview/myproducts";
import AddBusiness from "../app/pages/sellerview/addbusiness";
import AddNewProduct from "../app/pages/sellerview/myproducts/addproduct";


function MainRoute() {

  return (
    <Routes>
      {/* public router  */}
      <Route path="/" element={<PublicRouter />}>
        <Route path={routerConstants?.loginRoute} element={<SellerSignin />} />
        <Route path={routerConstants?.adminLoginRoute} element={<SuperAdminLogin />} />
        <Route path={routerConstants?.signupRoute} element={<SellerSignup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>


      {/* private router  */}
      <Route path="/" element={<PrivateRouter />}>
        {/*  ************* admin route *************** */}
        <Route index element={<SuperAdmin />} />
        <Route path={routerConstants?.categoriesRoute} element={<Categories />} />
        <Route path={routerConstants?.sellersRoute} element={<Sellers />} />
        <Route path="/sellersdetails" element={<SellersDetails />} />

        {/* ******************** seller user router ***************** */}
        <Route path={routerConstants?.bussinessInfoRoute} element={<AddBusiness />} />
        <Route path={routerConstants?.myProductRoute} element={<MyProducts />} />
        <Route path={routerConstants?.addProductRoute} element={<AddNewProduct />} />


        <Route path="*" element={<Navigate to="/" />} />
      </Route>

    </Routes>
  );
}

export default MainRoute;
