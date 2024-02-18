import React from 'react';

const OrderItem = ({ order, openModal }) => {
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.customerName}</td>
      <td>{order.items.join(", ")}</td>
      <td>${order.totalPrice.toFixed(2)}</td>
      <td>{order.status}</td>
      <td>
        {order.status === "Pending" && (
          <button className="btn btn-primary" onClick={() => openModal(order.id)}>
            Confirm
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderItem;
