"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const EditpageForm = ({ data }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", selectedFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);

    try {
      const res = await fetch(`/api/blog/${data.id}`, {
        method: "PUT",
        body: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        alert("Blog Updated!");
        router.push("/profile");
      } else {
        console.error("Error updating blog post");
      }
    } catch (error) {
      console.error("Error updating blog post:", error);
    }
  };
  useEffect(() => {
    const setformdata = () => {
      setTitle(data.title);
      setDescription(data.description);
      setCategory(data.category);
      setSelectedFile(data.selectedFile);
    };

    setformdata();
  }, [data.category, data.description, data.title, data.selectedFile]);

  return (
    <div className="flex justify-center bg-gray-700 items-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-medium text-black mb-6">Update Post</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-bold">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add your post title"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-bold"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2.5 border rounded-lg"
              placeholder="Write your Description here..."
            ></textarea>
          </div>
          <div>
            <label htmlFor="category" className="block mb-2 text-sm font-bold">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              placeholder="Type your blog post category"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="category" className="block mb-2 text-sm font-bold">
              Image
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              name="file"
              placeholder="Type your blog post category"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg text-sm"
            >
              Update Your Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditpageForm;
