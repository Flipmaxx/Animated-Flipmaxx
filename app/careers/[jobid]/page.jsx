'use client';

import { useState } from "react";
import axios from "axios";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    place: "",
    phone: "",
    currentCTC: "",
    expectedCTC: "",
    talk: "",
  });
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    for (let key in formData) {
      data.append(key, formData[key]);
    }
    data.append("resume", resume);

    try {
      const res = await axios.post("/api/careers", data);
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Job Application</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "email", "place", "phone", "currentCTC", "expectedCTC", "talk"].map((field) => (
          <input
            key={field}
            name={field}
            type="text"
            required
            placeholder={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        ))}
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files[0])}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit good
        </button>
      </form>
      {message && <p className="mt-4 text-green-700">{message}</p>}
    </div>
  );
}
