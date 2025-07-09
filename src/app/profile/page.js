"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    bmi: "",
    fat: "",
  });

  // Calculate BMI when height and weight change
  const calculateBMI = (height, weight) => {
    if (!height || !weight) return "";
    const h = parseFloat(height) / 100; // convert cm to meters
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      return (w / (h * h)).toFixed(2);
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newForm = { ...form, [name]: value };

    // Auto-calculate BMI if height or weight changes
    if (name === "height" || name === "weight") {
      newForm.bmi = calculateBMI(
        name === "height" ? value : form.height,
        name === "weight" ? value : form.weight
      );
    }

    setForm(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    console.log("Submitted profile:", form);
    alert("Profile submitted! (See console for data)");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        padding: "2.5rem 2rem 2rem 2rem",
        maxWidth: 420,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h1 style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "1.5rem",
          color: "#2d3748",
          letterSpacing: "-1px"
        }}>Submit Your Profile</h1>
        <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          width: "100%"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
            <label htmlFor="name" style={{ fontWeight: 500, color: "#4a5568" }}>Name</label>
            <input
              id="name"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
            <label htmlFor="gender" style={{ fontWeight: 500, color: "#4a5568" }}>Gender</label>
            <select
              id="gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              style={{ ...inputStyle, paddingRight: "2rem" }}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
            <label htmlFor="age" style={{ fontWeight: 500, color: "#4a5568" }}>Age</label>
            <input
              id="age"
              name="age"
              type="number"
              placeholder="Enter your age"
              value={form.age}
              onChange={handleChange}
              min="0"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
            <label htmlFor="height" style={{ fontWeight: 500, color: "#4a5568" }}>Height (cm)</label>
            <input
              id="height"
              name="height"
              type="number"
              placeholder="Enter your height in cm"
              value={form.height}
              onChange={handleChange}
              min="0"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
            <label htmlFor="weight" style={{ fontWeight: 500, color: "#4a5568" }}>Weight (kg)</label>
            <input
              id="weight"
              name="weight"
              type="number"
              placeholder="Enter your weight in kg"
              value={form.weight}
              onChange={handleChange}
              min="0"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
            <label htmlFor="bmi" style={{ fontWeight: 500, color: "#4a5568" }}>BMI</label>
            <input
              id="bmi"
              name="bmi"
              type="number"
              placeholder="BMI will be calculated"
              value={form.bmi}
              onChange={handleChange}
              step="0.01"
              readOnly
              style={{ ...inputStyle, background: "#f7fafc", color: "#718096" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
            <label htmlFor="fat" style={{ fontWeight: 500, color: "#4a5568" }}>Body Fat (%)</label>
            <input
              id="fat"
              name="fat"
              type="number"
              placeholder="Enter your body fat %"
              value={form.fat}
              onChange={handleChange}
              min="0"
              max="100"
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            style={{
              marginTop: "1rem",
              background: "linear-gradient(90deg, #667eea 0%, #5a67d8 100%)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              border: "none",
              borderRadius: ".7rem",
              padding: ".8rem 0",
              boxShadow: "0 2px 8px 0 rgba(102, 126, 234, 0.15)",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseOver={e => e.currentTarget.style.background = "linear-gradient(90deg, #5a67d8 0%, #667eea 100%)"}
            onMouseOut={e => e.currentTarget.style.background = "linear-gradient(90deg, #667eea 0%, #5a67d8 100%)"}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: ".7rem 1rem",
  border: "1px solid #e2e8f0",
  borderRadius: ".6rem",
  fontSize: "1rem",
  background: "#f9fafb",
  color: "#2d3748",
  outline: "none",
  transition: "border 0.2s, box-shadow 0.2s",
  boxShadow: "0 1px 2px 0 rgba(0,0,0,0.03)",
}; 