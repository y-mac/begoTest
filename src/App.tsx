import { Route, Routes } from 'react-router-dom';
import './App.css';
import UpcomingOrders from './components/UpcomingOrders';
import { Suspense } from 'react';
import CompletedOrders from './components/CompletedOrders';
import PastOrders from './components/PastOrders';
import Single from './components/Single';



function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<div> Loading... </div>}>
            <UpcomingOrders />
          </Suspense>
        }>
        </Route>
        <Route path="/upcomingOrders" element={
          <Suspense fallback={<div> Loading... </div>}>
            <UpcomingOrders />
          </Suspense>
        }>
        </Route>
        <Route path="/completedOrders" element={
          <Suspense fallback={<div> Loading... </div>}>
            <CompletedOrders />
          </Suspense>
        }>
        </Route>
        <Route path="/pastOrders" element={
          <Suspense fallback={<div> Loading... </div>}>
            <PastOrders />
          </Suspense>
        }>
        </Route>
        <Route path="/order/:id" element={
          <Suspense fallback={<div> Loading... </div>}>
            <Single />
          </Suspense>
        }>
        </Route>
      </Routes>
    </>
  )
}

export default App
