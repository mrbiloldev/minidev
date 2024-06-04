import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import 'antd/dist/antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {MyCourseProvider} from './components/ProfilePage/Components/MyCourse/Context/MyCourseData'
import { QueryClientProvider, QueryClient } from 'react-query'
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MyCourseProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MyCourseProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

