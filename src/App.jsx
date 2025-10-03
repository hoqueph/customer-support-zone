import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import TicketSection from "./components/ticketsection";

const fetchCustomers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const customersPromise = fetchCustomers();

function App() {
  const [count, setCount] = useState(0);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [resolvedCustomers, setResolvedCustomers] = useState([]);

  return (
    <>
      <Navbar />

      <Banner count={count} resolvedCount={resolvedCustomers.length} />

      <Suspense fallback="Loading...">
        <TicketSection
          coustomarsPromise={customersPromise}
          setCount={setCount}
          selectedCustomers={selectedCustomers}
          setSelectedCustomers={setSelectedCustomers}
          resolvedCustomers={resolvedCustomers}
          setResolvedCustomers={setResolvedCustomers}
        />
      </Suspense>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
