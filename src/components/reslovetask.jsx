import React from "react";

const Resolved = ({ resolvedCustomers }) => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">Resolved Task</h1>
      {resolvedCustomers.length === 0 ? (
        <p className="text-white-400">No resolved tasks yet.</p>
      ) : (
        <div className="space-y-2 mt-3">
          {resolvedCustomers.map(customer => (
            <div key={customer.id} className="p-3 bg-gray-300 rounded-md shadow-md text-black">
              <h2 className="font-semibold">{customer.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Resolved;
