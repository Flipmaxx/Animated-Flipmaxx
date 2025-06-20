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
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setError("Only PDF files are allowed.");
        setResume(null);
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setError("File must be less than 2MB.");
        setResume(null);
        return;
      }
      setError("");
      setResume(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      setError("Please upload a valid PDF file under 2MB.");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    data.append("resume", resume);

    try {
      const res = await axios.post("/api/careers", data);
      setMessage(res.data.message || "Submission successful.");
      setError("");
      setFormData({
        name: "",
        email: "",
        place: "",
        phone: "",
        currentCTC: "",
        expectedCTC: "",
        talk: "",
      });
      setResume(null);
    } catch (err) {
      setMessage("");
      setError(err?.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Job Application</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { name: "name", label: "Full Name" },
          { name: "email", label: "Email" },
          { name: "place", label: "Place" },
          { name: "phone", label: "Phone" },
          { name: "currentCTC", label: "Current CTC" },
          { name: "expectedCTC", label: "Expected CTC" },
          { name: "talk", label: "Tell us about yourself" },
        ].map(({ name, label }) => (
          <div key={name}>
            <label htmlFor={name} className="block font-medium mb-1">{label}</label>
            <input
              type="text"
              id={name}
              name={name}
              required
              placeholder={label}
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        ))}

        <div>
          <label htmlFor="resume" className="block font-medium mb-1">Upload Resume (PDF, max 2MB)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {message && <p className="text-green-600 text-sm">{message}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
