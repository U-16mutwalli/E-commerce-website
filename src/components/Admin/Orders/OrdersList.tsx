import React, {useState} from 'react';

const mockOrders = [
  {id: 1, customer: 'John Doe', status: 'Pending', total: 1500},
  {id: 2, customer: 'Jane Smith', status: 'Shipped', total: 2200},
];

const OrdersList: React.FC = () => {
  const [orders, setOrders] = useState(mockOrders);

  const handleStatusChange = (id: number, newStatus: string) => {
    setOrders(orders.map((o) => (o.id === id ? {...o, status: newStatus} : o)));
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Orders</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left">
            <th className="p-3">Customer</th>
            <th className="p-3">Total</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="p-3">{order.customer}</td>
              <td className="p-3">₹{order.total}</td>
              <td className="p-3">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="rounded border p-1"
                >
                  <option>Pending</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
