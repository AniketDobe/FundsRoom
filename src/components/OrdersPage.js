import React, { useState } from 'react';
import Modal from 'react-modal';
import OrderModal from './OrderModal';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './OrdersPage.css'; // Custom CSS for styling

// Mock order data
const orders = [
  {
    id: 1,
    customerName: "John Doe",
    items: ["Pizza", "Pasta"],
    totalPrice: 25.99,
    status: "Pending",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    items: ["Burger", "Fries"],
    totalPrice: 15.49,
    status: "Confirmed",
  },
  // Add more order objects as needed
];

const OrdersPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openModal = (order) => {
    setSelectedOrder(order);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleStatusChange = (order, newStatus) => {
    // Mock function to update order status
    console.log(`Updating status of order ${order.id} to ${newStatus}`);
    order.status = newStatus;
    setSelectedOrder(order);
    openModal(order);
  };

  return (
    <div className="container mt-5">
      <h2>Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Items</th>
            <th>Total Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.items.join(", ")}</td>
              <td>${order.totalPrice.toFixed(2)}</td>
              <td>
                <div className="btn-group" role="group">
                  {order.status === "Pending" && (
                    <>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleStatusChange(order, "Confirmed")}
                      >
                        Confirm
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => handleStatusChange(order, "Canceled")}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                  {order.status === "Confirmed" && (
                    <>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => handleStatusChange(order, "Completed")}
                      >
                        Complete
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => handleStatusChange(order, "Canceled")}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                  {order.status === "Completed" && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => handleStatusChange(order, "Canceled")}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Update Order Status"
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '30px',
            border: 'none',
            borderRadius: '8px',
          }
        }}
      >
        {selectedOrder && <OrderModal order={selectedOrder} closeModal={closeModal} />}
      </Modal>
    </div>
  );
};

export default OrdersPage;
