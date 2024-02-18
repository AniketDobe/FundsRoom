import React, { useState } from 'react';

const OrderModal = ({ order, closeModal }) => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock function to handle form submission
    console.log("Selected Status:", status);
    closeModal();
  };

  return (
    <div>
      <h2>Update Order Status</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="status">Select Status:</label>
          <select
            id="status"
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">None</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile"></input>
</div>
        <button type="submit" className="btn btn-primary mr-2">Submit</button>
        
        <button type="button" className="btn btn-secondary mx-2" onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
};

export default OrderModal;
