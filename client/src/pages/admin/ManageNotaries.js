// NotaryManagement.jsx
import React, { useState, useEffect } from "react";
import "./ManageNotaries.css";

const NotaryManagement = () => {
  const [notaries, setNotaries] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", city: "" });

  useEffect(() => {
    fetch("/api/notaries")
      .then((res) => res.json())
      .then((data) => setNotaries(data))
      .catch((err) => console.error(err));
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    // Thirr backend-in për shtim noteri
    setNotaries([...notaries, { ...formData, id: Date.now() }]);
    setFormData({ name: "", email: "", city: "" });
  };

  const handleDelete = (id) => {
    setNotaries(notaries.filter((n) => n.id !== id));
    // Thirr backend-in për delete
  };

  const handleEdit = (id) => {
    const updatedCity = prompt("Vendos qytetin e ri:");
    if (updatedCity) {
      setNotaries(
        notaries.map((n) =>
          n.id === id ? { ...n, city: updatedCity } : n
        )
      );
    }
  };

  return (
    <div className="notary-container">
      <h2>Menaxhimi i Noterëve</h2>

      <form className="add-form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Emri"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Emaili"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Qyteti"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          required
        />
        <button type="submit">Shto Noter</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Emri</th>
            <th>Email</th>
            <th>Qyteti</th>
            <th>Veprime</th>
          </tr>
        </thead>
        <tbody>
          {notaries.map((n) => (
            <tr key={n.id}>
              <td>{n.name}</td>
              <td>{n.email}</td>
              <td>{n.city}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(n.id)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(n.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageNotaries;
