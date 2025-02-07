import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Reports from './components/reports/Reports';
import RechargeAndBill from './components/recharge-bill/RechargeAndBill';
import FinancialStatus from './components/financial-status/FinancialStatus';
import PurchaseOrder from './components/purchase-order/PurchaseOrder';
import ApiGstInvoiceReport from './components/api-gst-invoice/ApiGstInvoiceReport';
import OperatorWiseCommission from './components/operator-wise-commission/OperatorWiseCommission';
import FundRecieve from './components/fund-recieve/FundRecieve';
import Commission from './components/commission/Commission';
import DisputeReport from './components/dispute-report/DisputeReport';
import DisputeReports from './components/reports/basic-info/DisputeReports';
import GenerateToken from './components/reports/basic-info/GenerateToken';
import Ledger from './components/reports/basic-info/Ledger';
import LoginInfo from './components/reports/basic-info/LoginInfo';
import MyEarn from './components/reports/basic-info/MyEarn';
import BankInfo from './components/reports/basic-info/BankInfo';
import Invoice from './components/reports/basic-info/Invoice';
import DayBook from './components/reports/basic-info/DayBook';
import Help from './components/reports/basic-info/Help';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="reports" element={<Reports />}>
          <Route path="day-book" element={<DayBook />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="bank-info" element={<BankInfo />} />
          <Route path="my-earn" element={<MyEarn />} />
          <Route path="login-info" element={<LoginInfo />} />
          <Route path="ledger" element={<Ledger />} />
          <Route path="generate-token" element={<GenerateToken />} />
          <Route path="dispute-reports" element={<DisputeReports />} />
          <Route path="help" element={<Help />} />
        </Route>
        <Route path="recharge-and-bill" element={<RechargeAndBill />} />
        <Route path="financial-services" element={<FinancialStatus />} />
        <Route path="purchase-order" element={<PurchaseOrder />} />
        <Route path="api-gst-invoice-report" element={<ApiGstInvoiceReport />} />
        <Route path="operator-wise-commission" element={<OperatorWiseCommission />} />
        <Route path="fund-recieve" element={<FundRecieve />} />
        <Route path="commission" element={<Commission />} />
        <Route path="dispute-report" element={<DisputeReport />} />
      </Routes>
    </>
  );
}

export default App;