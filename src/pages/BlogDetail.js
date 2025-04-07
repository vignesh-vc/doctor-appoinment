import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const blogs = [
  {
    id: 1,
    tag: 'Finance',
    title: 'Clever ways to invest in product to organize your portfolio',
    content: `Full detailed content about organizing your portfolio...`,
    img: 'https://pagedone.io/asset/uploads/1696244059.png',
    date: 'April 5, 2025',
  },
  {
    id: 2,
    tag: 'Growth',
    title: 'How to grow your profit...',
    content: `Full detailed blog content about growing profit...`,
    img: 'https://pagedone.io/asset/uploads/1696244074.png',
    date: 'April 3, 2025',
  },
  // Add all blogs with full content
];

const BlogDetail = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) return <div className="p-10 text-center text-red-500">Blog not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-2">{blog.date} | {blog.tag}</p>
      <img src={blog.img} alt={blog.title} className="w-full h-96 object-cover rounded-xl mb-8" />
      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
