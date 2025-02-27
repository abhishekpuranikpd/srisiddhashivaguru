"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.message) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccess("");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors({ form: data.error || "Something went wrong" });
      } else {
        setSuccess("Your message has been sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          mobile: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      setErrors({ form: "Failed to submit. Please try again!" });
    }

    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <div className="bg-amber-400 rounded-full p-2 w-16 h-16 flex items-center justify-center mb-2">
          <svg
            className="w-8 h-8 text-amber-800"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </div>
        <h2 className="text-amber-600 font-bold text-lg border-b-2 border-amber-400 pb-1">
          CONTACT US
        </h2>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-2xl font-bold text-maroon-800 text-center mb-4">
        For Enquiries, information and any other query
      </h1>
      <div className="w-48 h-1 bg-amber-400 mx-auto mb-16"></div>

      {/* Contact Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Contact Info */}
        <div className="bg-amber-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-maroon-800 mb-6">
            Chidambar Ashram Sri Siddharudh Math
          </h2>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-amber-400 rounded-full p-3 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-maroon-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-maroon-800 font-medium mt-2">
                  Sri Siddharudh math Gumpa, Bidar-585401
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-amber-400 rounded-full p-3 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-maroon-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-maroon-800 font-medium mt-2">
                  siddharudhamathbidar@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-amber-400 rounded-full p-3 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-maroon-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-maroon-800 font-medium mt-2">+91 9665322445</p>
              </div>
            </div>
          </div>

          {/* Map */}
          {/* <div className="mt-8 h-64 w-full relative border border-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Location Map"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-white px-2 py-1 text-xs text-blue-600 rounded">
              View larger map
            </div>
          </div> */}
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-red-700 p-6 rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-amber-400 font-bold mb-6">
            PLEASE FILL BELOW FORM
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Fields */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="bg-white text-black"
                />
                {errors.firstname && (
                  <p className="text-red-300 text-sm">{errors.firstname}</p>
                )}
              </div>
              <div>
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="bg-white text-black"
                />
                {errors.lastname && (
                  <p className="text-red-300 text-sm">{errors.lastname}</p>
                )}
              </div>
            </div>

            {/* Mobile & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mobile">Mobile No.</Label>
                <Input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="bg-white text-black"
                />
                {errors.mobile && (
                  <p className="text-red-300 text-sm">{errors.mobile}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email ID</Label>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white text-black"
                />
                {errors.email && (
                  <p className="text-red-300 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-white text-black"
              />
              {errors.message && (
                <p className="text-red-300 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <Button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-2"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>

            {/* Success or Error Message */}
            {success && (
              <p className="text-green-300 text-center mt-4">{success}</p>
            )}
            {errors.form && (
              <p className="text-red-300 text-center mt-4">{errors.form}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
