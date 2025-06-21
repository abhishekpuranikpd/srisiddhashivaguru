// src/components/BookUploadForm.jsx
"use client";

import React, { useState } from "react";

export default function BookUploadForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);
    files.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });

    const response = await fetch("/api/books", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Book uploaded successfully");
    } else {
      console.error("Failed to upload book");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(Array.from(e.target.files).slice(0, 7))}
      />
      <button type="submit">Upload Book</button>
    </form>
  );
}
