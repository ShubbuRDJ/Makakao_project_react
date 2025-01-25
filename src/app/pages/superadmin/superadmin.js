import React, { useEffect, useState } from "react";
import './style.css';
import DatePicker from "react-datepicker";
import Counter from "../../componetns/CounterValue/countervalue";
import SmoothLineChart from "../../componetns/LineChart/LineChart";
import SmoothLineChartCustomers from "../../componetns/LineChart/LineChartCustomers";
import Footer from "../../componetns/Footer/Footer";
import toaster from "../../../utility/toaster/toaster";
import { useQuery } from "react-query";
import { apiurl } from "../../../constants/apiURLsConstants";
import { getRequest } from "../../../services/axios-api-request/axios_api_Request";

function SuperAdmin() {
  const [startDate, setStartDate] = useState(new Date());
  const [abortController, setAbortController] = useState(null);

  // ********* for fetch the categories list and transform data according to requirement *********

  const fetchDahboardCount = () => {
    if (abortController) {
      abortController.abort(); // Cancel the previous request
    }

    const newAbortController = new AbortController();
    setAbortController(newAbortController);

    return getRequest(apiurl?.GET_ADMIN_DASHBOARD_URL,
      newAbortController.signal
    )
  }

  const { isLoading, data: allCountData, isError, error } = useQuery(
    ['admin-dashboard-count'],
    fetchDahboardCount,
    {
      // select: (data) => {
      //   return data?.data?.data
      // },

    }
  )

  // ********** for error message when we fetch the list ********** 
  useEffect(() => {
    if (isError) {
      toaster('error', error?.message)
    }
    // eslint-disable-next-line
  }, [isError])
  return (
    <>

      <div className='admin_wrapper'>
        <div className='admin_heading_wrapper'>
          <div className='page_heading'>
            <h2>Dashboard</h2>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>

          <div className="row mt-3">
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="admin_data_tile">
                <div className="data_icon"><img src='/images/total_customers.svg' alt='total_customers' /></div>
                <div className="data_value_wrap">
                  <h3>Total Customers</h3>
                  <h2><Counter value={150} duration={2000} /></h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="admin_data_tile">
                <div className="data_icon"><img src='/images/total_customers_active.svg' alt='total_customers_active' /></div>
                <div className="data_value_wrap">
                  <h3>Total Active Customers</h3>
                  <h2><Counter value={120} duration={2000} /></h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="admin_data_tile">
                <div className="data_icon"><img src='/images/total_sellers.svg' alt='total_sellers' /></div>
                <div className="data_value_wrap">
                  <h3>Total Sellers</h3>
                  <h2><Counter value={88} duration={2000} /></h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="admin_data_tile">
                <div className="data_icon"><img src='/images/total_seller_active.svg' alt='total_seller_active' /></div>
                <div className="data_value_wrap">
                  <h3>Total Sellers Active</h3>
                  <h2><Counter value={75} duration={2000} /></h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="admin_data_tile">
                <div className="data_icon"><img src='/images/total_users.svg' alt='total_users' /></div>
                <div className="data_value_wrap">
                  <h3>Total Users</h3>
                  <h2><Counter value={800} duration={2000} /></h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="admin_data_tile">
                <div className="data_icon"><img src='/images/total_users_active.svg' alt='total_users_active' /></div>
                <div className="data_value_wrap">
                  <h3>Total Sellers Active</h3>
                  <h2><Counter value={120} duration={2000} /></h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="admin_graph_card">
                <div className="grap_value_wrap">
                  <div className="data_icon"><img src='/images/total_sellers_graph.svg' alt='total_sellers_graph' /></div>
                  <div className="data_value_wrap">
                    <h3>Total Sellers</h3>
                    <h2><Counter value={75} duration={2000} /></h2>
                  </div>
                </div>
                <div className="seller_graph">
                  <SmoothLineChart />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="admin_graph_card">
                <div className="grap_value_wrap">
                  <div className="data_icon"><img src='/images/total_customers_graph.svg' alt='total_customers_graph' /></div>
                  <div className="data_value_wrap">
                    <h3>Total Customers</h3>
                    <h2><Counter value={75} duration={2000} /></h2>
                  </div>
                </div>
                <div className="seller_graph">
                  <SmoothLineChartCustomers />
                </div>
              </div>
            </div>
          </div>


        </div>

        <Footer />
      </div>

    </>
  )
}

export default SuperAdmin