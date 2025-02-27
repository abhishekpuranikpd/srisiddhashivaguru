"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function JoinUsForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    occupation: "",
    mobile: "",
    email: "",
    dateofbirth: "",
    address1: "",
    address2: "",
    city: "",
    State: "",
    pincode: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle Select Change
  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, State: value }));
  };

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
alert("Form submitted successfully!");
        setFormData({
          fullname: "",
          occupation: "",
          mobile: "",
          email: "",
          dateofbirth: "",
          address1: "",
          address2: "",
          city: "",
          State: "",
          pincode: "",
          description: "",
        });
      } else {
       alert(data.error || "Something went wrong!");
      }
    } catch (error) {
    alert("Error submitting the form!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
            <h1 className="text-2xl md:text-2xl font-bold text-[#C5341c] text-center mb-2">
      Join With Us
      </h1>
      <h1 className="text-xl md:text-xl font-bold text-[#C5341c] text-center mb-8">
        PLEASE FILL YOUR PERSONAL INFORMATION
      </h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-[#C5341c] font-medium" htmlFor="fullname">Full Name<span className="text-red-500">*</span></Label>
            <Input id="fullname" value={formData.fullname} onChange={handleChange} required className="border-amber-400 focus:border-amber-500 focus:ring-amber-500" />
          </div>
          <div className="space-y-2">
            <Label className="text-[#C5341c] font-medium" htmlFor="occupation">Occupation</Label>
            <Input id="occupation" value={formData.occupation} onChange={handleChange} className="border-amber-400 focus:border-amber-500 focus:ring-amber-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label className="text-[#C5341c] font-medium" htmlFor="mobile">Mobile No.<span className="text-red-500">*</span></Label>
            <Input id="mobile" value={formData.mobile} onChange={handleChange} required className="border-amber-400 focus:border-amber-500 focus:ring-amber-500" />
          </div>
          <div className="space-y-2">
            <Label className="text-[#C5341c] font-medium" htmlFor="email">Email ID<span className="text-red-500">*</span></Label>
            <Input id="email" type="email" value={formData.email} onChange={handleChange} required className="border-amber-400 focus:border-amber-500 focus:ring-amber-500" />
          </div>
          <div className="space-y-2">
            <Label className="text-[#C5341c] font-medium" htmlFor="dateofbirth">Date Of Birth<span className="text-red-500">*</span></Label>
            <Input id="dateofbirth" type="date" value={formData.dateofbirth} onChange={handleChange} required className="border-amber-400 focus:border-amber-500 focus:ring-amber-500" />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-[#C5341c] font-medium" htmlFor="address1">Address Line 1<span className="text-red-500">*</span></Label>
          <Input id="address1" value={formData.address1} onChange={handleChange} required className="border-amber-400 focus:border-amber-500 focus:ring-amber-500" />
        </div>

        <div className="space-y-2">
          <Label className="text-[#C5341c] font-medium" htmlFor="address2">Address Line 2</Label>
          <Input id="address2" value={formData.address2} onChange={handleChange} className="border-amber-400 focus:border-amber-500 focus:ring-amber-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label className="text-[#C5341c] font-medium" htmlFor="city">City<span className="text-red-500">*</span></Label>
            <Input id="city" value={formData.city} onChange={handleChange} required className="border-amber-400 focus:border-amber-500 focus:ring-amber-500" />
          </div>
          <div className="space-y-2">
            <Label className="text-[#C5341c] font-medium" htmlFor="State">State<span className="text-red-500">*</span></Label>
            <Select onValueChange={handleSelectChange} required className="border-amber-400 focus:border-amber-500 focus:ring-amber-500">
              <SelectTrigger className="border-amber-400 focus:border-amber-500 focus:ring-amber-500"><SelectValue placeholder="Select State" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                <SelectItem value="Karnataka">Karnataka</SelectItem>
                <SelectItem value="Gujarat">Goa</SelectItem>
                <SelectItem value="Gujarat">Telangana</SelectItem>
                <SelectItem value="Gujarat">Andra Pradesh</SelectItem>


              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-[#C5341c] font-medium" htmlFor="pincode">Pincode<span className="text-red-500">*</span></Label>
            <Input id="pincode" value={formData.pincode} onChange={handleChange} required className="border-amber-400 focus:border-amber-500 focus:ring-amber-500" />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-[#C5341c] font-medium" htmlFor="description">Description</Label>
          <Textarea id="description" value={formData.description} onChange={handleChange} className="border-amber-400 focus:border-amber-500 focus:ring-amber-500"/>
        </div>

        <div className="flex justify-center mt-8">
        <Button  className=" hover:bg-maroon-900 text-white px-8 py-2" type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</Button>
        </div>
      </form>
    </div>
  );
}
