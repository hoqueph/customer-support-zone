import { use } from 'react';
import { toast } from 'react-toastify';
import calendar from "../assets/calendar.svg";
import imgGreen from "../assets/button-green.svg";
import imgYello from "../assets/button-yellow.svg";  
import Task from "./tasksection";

const TicketSection = ({
  coustomarsPromise,
  setCount,
  selectedCustomers,
  setSelectedCustomers,
  resolvedCustomers,
  setResolvedCustomers
}) => {
  const coustomarsData = use(coustomarsPromise);

  const handleSelect = (customer) => {
    if (!selectedCustomers.some(c => c.id === customer.id)) {
      setSelectedCustomers(prev => [...prev, customer]);
      setCount(prev => prev + 1);
      toast.success(customer.title, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: true,
      });
    }
  };

  const handleDeleteCustomer = (id) => {
    const removed = selectedCustomers.find(c => c.id === id);
    setSelectedCustomers(prev => prev.filter(c => c.id !== id));
    setResolvedCustomers(prev => [...prev, removed]);
    setCount(prev => prev - 1);
    toast.success(removed.title, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      pauseOnHover: true,
    });
  };

  return (
    <div className='md:w-11/12 mx-auto md:py-10 p-6 grid grid-cols-12 md:p-0 md:gap-5 gap-1.5'>
      <div className='md:col-span-9 col-span-7'>
        <div className="text-xl font-bold p-2">Customer Ticket</div>

        <div className='md:grid grid-cols-2 gap-5 md:space-y-0 space-y-3'>
          {coustomarsData.map(customer => (
            <div
              key={customer.id}
              onClick={() => handleSelect(customer)}
              className='p-5 bg-white-200 rounded-2xl shadow-xl cursor-pointer'
            >
              <div className="flex justify-between">
                <h1 className='font-bold'>{customer.title}</h1>
                <div className={`rounded-xl md:h-[30px] ${customer.status === "Open" ? "bg-green-200" : "bg-yellow-200"} flex justify-between items-center`}>
                  {customer.status === "Open" ? <img className='w-[30px] p-2' src={imgGreen} alt="" /> : <img className='w-[30px] p-2' src={imgYello} alt="" />}
                  <p className='text-gray-700 text-sm p-2'>{customer.status}</p>
                </div>
              </div>
              <p className='text-sm text-gray-700'>{customer.description}</p>
              <div className='md:flex justify-between items-center'>
                <div className='md:flex justify-between items-center space-x-2'>
                  <h3 className='text-gray-700 text-sm'>#{customer.id}</h3>
                  <p className={`text-sm text-gray-700 ${customer.priority === "HIGH  PRIORITY" ? "text-red-500" : customer.priority === "MEDIUM  PRIORITY" ? "text-yellow-500" : "text-green-500"}`}>{customer.priority}</p>
                </div>
                <div className='md:flex justify-between items-center space-x-2'>
                  <p className='text-gray-700 text-sm'>{customer.customer}</p>
                  <img src={calendar} alt="" />
                  <p className='text-sm text-gray-700'>{customer.createdAt}</p>
                </div>
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
