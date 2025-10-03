import { use } from "react";
import { toast } from "react-toastify";
import calendar from "../assets/calender.svg";
import imgGreen from "../assets/button-green.svg";
import imgYello from "../assets/button-yellow.svg";
import Task from "./tasksection";

const TicketSection = ({
  coustomarsPromise,
  setCount,
  selectedCustomers,
  setSelectedCustomers,
  resolvedCustomers,
  setResolvedCustomers,
}) => {
  const coustomarsData = use(coustomarsPromise);

  const handleSelect = (customer) => {
    if (!selectedCustomers.some((c) => c.id === customer.id)) {
      setSelectedCustomers((prev) => [...prev, customer]);
      setCount((prev) => prev + 1);
      toast.success(customer.title, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: true,
      });
    }
  };

  const handleDeleteCustomer = (id) => {
    const removed = selectedCustomers.find((c) => c.id === id);
    setSelectedCustomers((prev) => prev.filter((c) => c.id !== id));
    setResolvedCustomers((prev) => [...prev, removed]);
    setCount((prev) => prev - 1);
    toast.success(removed.title, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      pauseOnHover: true,
    });
  };

  return (
    <div className="md:w-11/12 mx-auto md:py-10 p-4 grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-9 space-y-4">
        <h2 className="text-xl font-bold mb-3">Customer Tickets</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          {coustomarsData.map((customer) => (
            <div
              key={customer.id}
              onClick={() => handleSelect(customer)}
              className="p-5 bg-white rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-gray-800">{customer.title}</h3>
                <div
                  className={`rounded-xl h-8 flex items-center ${
                    customer.status === "Open"
                      ? "bg-green-200"
                      : "bg-yellow-200"
                  } px-2`}
                >
                  <img
                    src={customer.status === "Open" ? imgGreen : imgYello}
                    alt=""
                    className="w-6 h-6"
                  />
                  <span className="text-gray-700 text-sm ml-1">
                    {customer.status}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-2">
                {customer.description}
              </p>
              <div className="flex justify-between flex-wrap gap-2 text-gray-700 text-sm">
                <span>#{customer.id}</span>
                <span
                  className={`font-semibold ${
                    customer.priority === "HIGH  PRIORITY"
                      ? "text-red-500"
                      : customer.priority === "MEDIUM  PRIORITY"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  {customer.priority}
                </span>
                <span>{customer.customer}</span>
                <span className="flex items-center gap-1">
                  <img src={calendar} alt="" className="w-4 h-4" />
                  {customer.createdAt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Task
        selectedCustomers={selectedCustomers}
        handleDeleteCustomer={handleDeleteCustomer}
        resolvedCustomers={resolvedCustomers}
      />
    </div>
  );
};

export default TicketSection;
