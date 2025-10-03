import React from "react";
import Resolved from "./reslovetask";

const Task = ({ selectedCustomers, handleDeleteCustomer, resolvedCustomers }) => {
  return (
    <div className="col-span-12 md:col-span-3 p-2 mt-6 md:mt-0">
      <h2 className="text-xl font-bold mb-3">Task Status</h2>

      <div className="space-y-4">
        {selectedCustomers.length === 0 ? (
          <p className="text-gray-400">Selected tickets will appear here</p>
        ) : (
          selectedCustomers.map((customer) => (
            <div key={customer.id} className="p-3 bg-white rounded-md shadow-md">
              <h3 className="font-semibold text-gray-800">{customer.title}</h3>
              <button
                className="mt-3 w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition-colors"
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
