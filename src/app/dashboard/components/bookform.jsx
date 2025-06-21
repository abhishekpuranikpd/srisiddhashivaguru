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
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow-lg space-y-4 bg-white"
    >
      <h2 className="text-2xl font-bold mb-4">Upload a Book</h2>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
          required
          className="border px-3 py-2 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author name"
          required
          className="border px-3 py-2 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price in USD"
          required
          className="border px-3 py-2 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Book category"
          required
          className="border px-3 py-2 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description"
          required
          className="border px-3 py-2 rounded resize-none"
          rows="4"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Upload Files (max 7)</label>
        <input
          type="file"
          multiple
          accept=".pdf,.epub,.jpg,.png"
          onChange={(e) => setFiles(Array.from(e.target.files).slice(0, 7))}
          className="border px-3 py-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Upload Book
      </button>
    </form>
  );
}
