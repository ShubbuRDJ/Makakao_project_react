import axios from "axios";
import CryptoJS from "crypto-js";

// create axios instance with baseURL and x-Api-key
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_STAGE === "prod"
    ? process.env.REACT_APP_BASE_URL_PROD
    : process.env.REACT_APP_BASE_URL_DEV
  ,
  headers: {
    "X-API-KEY": process.env.REACT_APP_API_KEY,
  },
});


//*****************getitng refresh token***************
// const refreshToken = async (refresh_token) => {
//   try {
//     let result = await axiosInstance.post(
//       "users/refresh-session",
//       { refresh_token },
//       {}
//     );
//     console.log(result);
//     return result.data;
//   } catch (error) {
//     console.log("getting error in refresh", error);
//     localStorage.clear();
//     return error?.response;
//   }
// };


// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      const decryptedToken = CryptoJS.AES.decrypt(token, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8);
      if (decryptedToken) config.headers.Authorization = `Bearer ${decryptedToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);




//   *************add a response interceptor with refresh token functionality**********************
// axiosInstance.interceptors.response.use(
//   function (result) {
//     return result;
//   },
//   async function (error) {
//     //Get access token uisng refresh token if accesstoken is expired
//     const originalRequest = error.config;

//     if (error.response && error.response?.status === 401) {
//       // validating refresh token request url if refresh token is invaild
//       if (error?.config?.url !== "users/refresh-session") {
//         const refresh_Token = localStorage.getItem("REFRESH_TOKEN");
//         console.log(refresh_Token);
//         if (refresh_Token) {
//           originalRequest._retry = true;
//           const resp = await refreshToken(refresh_Token);
//           const access_token = resp.access;
//           localStorage.setItem("ACCESS_TOKEN", access_token);
//           axiosInstance.defaults.headers.common[
//             "Authorization"
//           ] = `Bearer ${access_token}`;
//           return axiosInstance(originalRequest);
//         }
//       } else {
//         localStorage.clear();
//       }
//     }
//     return Promise.reject(error);
//   }
// );




//   *****************add a response interceptor without refresh token functionality***********************
axiosInstance.interceptors.response.use(
  function (result) {
    return result;
  },
  async function (error) {
    if (error.response && error.response?.status === 401) {
      // localStorage.clear();
      // setTimeout(() => {
      //   window.location.reload(1);
      // }, 1000);
    }
    return Promise.reject(error);
  }
);

// function for get request
// export const getRequest = async (url, params) => {
//   try {
//     const res = await axiosInstance.get(url, { params });
//     return res;
//   } catch (error) {
//     return error?.response;
//   }
// };


// function for get request
export const getRequest = async (url, params, signal) => {
  try {
    const res = await axiosInstance.get(url, {
      params,
      signal, // Pass the signal to the Axios request
    });
    return res;
  } catch (error) {
    // If the request was aborted, handle it accordingly
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
    }
    return error?.response;
  }
};




// function for post request
export const postRequest = async (url, data) => {
  try {
    const res = await axiosInstance.post(url, data);
    return res;
  } catch (error) {
    return error?.response;
  }
};

// function for patch request
export const patchRequest = async (url, data) => {
  try {
    const res = await axiosInstance.patch(url, data);
    return res;
  } catch (error) {
    return error?.response;
  }
};

// function for put request
export const putRequest = async (url, data) => {
  try {
    const res = await axiosInstance.put(url, data);
    return res;
  } catch (error) {
    return error?.response;
  }
};

// function for delete request
export const deleteRequest = async (url, data) => {
  try {
    const res = await axiosInstance.delete(url, { data });
    return res;
  } catch (error) {
    return error?.response;
  }
};

export { axiosInstance };
