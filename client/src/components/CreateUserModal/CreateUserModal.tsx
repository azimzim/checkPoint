import { useState } from "react";
import "./CreateUserModal.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { firstName: string; lastName: string; email: string; password: string }) => void;
}

export default function CreateUserModal({ isOpen, onClose, onSubmit }: Props) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ firstName: "", lastName: "", email: "", password: "" });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">Create New User</h2>
        <form onSubmit={handleSubmit} className="form">
          <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
          <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <div className="actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit" className="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
