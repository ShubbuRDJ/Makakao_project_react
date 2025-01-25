// Import necessary libraries and components
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import MainRoute from './router/MainRoute';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      {/* <Routes>
      
        <Route path="/" element={<SuperAdminLogin />} />


        <Route path="/dashboard" element={<MainContentWrapper />}>
          <Route path="superadmin" element={<SuperAdmin />} />
          <Route path="categories" element={<Categories />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="sellersdetails" element={<SellersDetails />} />
        </Route>
      </Routes> */}

      <ToastContainer style={{ width: 'inherit', maxWidth: '600px' }} theme="dark" />
      <MainRoute />
    </>
  );
}

export default App;