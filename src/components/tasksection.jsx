import React from "react";
import Resolved from './reslovetask';

const Task = ({ selectedCustomers, handleDeleteCustomer, resolvedCustomers }) => {
  return (
    <div className='md:col-span-3 col-span-5 p-2'>
      <div>
        <div className="text-xl font-bold mt-3">Task Status</div>
      </div>

      <div className="space-y-4 mt-2">
        {selectedCustomers.length === 0 ? (
          <p className="text-white-400">Selected tickets will appear here</p>
        ) : (
          selectedCustomers.map(customer => (
            <div key={customer.id} className="p-3 bg-white rounded-md shadow-lg">
              <h2 className="font-bold">{customer.title}</h2>

              <button
                className="mt-4 btn bg-green-700 w-full text-white"
                onClick={() => handleDeleteCustomer(customer.id)}
              >
                Complete
              </button>
            </div>
          ))
        )}
      </div>

      <Resolved resolvedCustomers={resolvedCustomers} />
    </div>
  );
};

export default Task;
