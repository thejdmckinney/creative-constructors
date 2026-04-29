"use client";

import { useState } from "react";

export default function DesignerContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    projectType: "",
    timeline: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/designer-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          projectType: "",
          timeline: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Thank You for Reaching Out!
        </h3>
        <p className="text-green-700 mb-4">
          We've received your inquiry and will get back to you within 24 hours to discuss how we can support your design projects.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-green-600 hover:text-green-800 font-medium underline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-navy mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-navy mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
            placeholder="jane@designstudio.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-navy mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
            placeholder="(214) 555-0123"
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-bold text-navy mb-2">
            Company/Firm Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
            placeholder="Your Design Studio"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="projectType" className="block text-sm font-bold text-navy mb-2">
            Primary Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors bg-white"
          >
            <option value="">Select a project type</option>
            <option value="Window Treatments">Window Treatments (Curtain Rods, Shades)</option>
            <option value="Wall Art & Decor">Wall Art & Gallery Walls</option>
            <option value="Shelving & Storage">Shelving & Storage Solutions</option>
            <option value="Furniture Assembly">Furniture Assembly</option>
            <option value="Finish Work">Finish Work & Millwork</option>
            <option value="Specialty Install">Specialty Installation</option>
            <option value="Multiple Services">Multiple Services</option>
            <option value="General Partnership">General Partnership Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-bold text-navy mb-2">
            Project Timeline *
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors bg-white"
          >
            <option value="">Select timeline</option>
            <option value="This Week">This Week</option>
            <option value="Next Week">Next Week</option>
            <option value="Within 2 Weeks">Within 2 Weeks</option>
            <option value="This Month">This Month</option>
            <option value="Next Month">Next Month</option>
            <option value="Flexible">Flexible Timeline</option>
            <option value="Ongoing Partnership">Ongoing Partnership</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-navy mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors resize-y"
          placeholder="Tell us about your project needs, measurements, client requirements, or partnership inquiry..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
      >
        {status === "loading" ? "Sending..." : "Start Partnership Conversation"}
      </button>

      {status === "error" && (
        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-center">
          <p className="text-red-700 font-medium">
            Something went wrong. Please call us at{" "}
            <a href="tel:817-470-1889" className="underline font-bold">
              (817) 470-1889
            </a>
          </p>
        </div>
      )}
    </form>
  );
}
