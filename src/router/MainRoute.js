import { Navigate, Route, Routes } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import routerConstants from "../constants/routerConstants";
import PrivateRouter from "./PrivateRouter";
import SuperAdminLogin from "../app/authpages/superadminlogin";
import SuperAdmin from "../app/pages/superadmin/superadmin";
import Categories from "../app/pages/categories";
import Sellers from "../app/pages/sellers";
import SellersDetails from "../app/pages/sellers/sellers_details";


function MainRoute() {

  return (
    <Routes>
      {/* public router  */}
      <Route path="/" element={<PublicRouter />}>
        <Route path={routerConstants?.loginRoute} element={<SuperAdminLogin />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>


      {/* private router  */}
      <Route path="/" element={<PrivateRouter />}>
        <Route index element={<SuperAdmin />} />
        <Route path={routerConstants?.categoriesRoute} element={<Categories />} />
        <Route path={routerConstants?.sellersRoute} element={<Sellers />} />
        <Route path="/sellersdetails" element={<SellersDetails />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default MainRoute;
