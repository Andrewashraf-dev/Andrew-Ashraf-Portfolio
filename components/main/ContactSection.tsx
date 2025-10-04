// components/GetInTouch.tsx
'use client';
import { useState } from 'react';

export default function GetInTouch() {
  const [status, setStatus] = useState<string | null>(null);
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Submitting form...");

  const form = e.currentTarget; // Save the form reference here

  const data = new FormData(form);

  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log("Response status:", res.status);

  if (res.ok) {
    setStatus('Message sent!');
    form.reset();  // Use saved form reference here
  } else {
    const errorData = await res.json();
    console.log("Error response:", errorData);
    setStatus(`Failed to send message: ${errorData.message || 'Unknown error'}`);
  }
};


  return (
    <section id="contact" className="relative z-10 py-20 bg-transparent text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-white underline underline-offset-4 decoration-blue-500">
  Get in Touch
</h2>

        <p className="text-center text-gray-400 mb-10">
          Reach out to me for collaboration or any questions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-2 rounded-md text-white font-medium hover:opacity-90 transition-all"
          >
            Send Message
          </button>
          {status && <p className="text-center text-sm mt-4">{status}</p>}
          
        </form>
      </div>
    </section>
  );
}
