"use client";
import Link from "next/link";

export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <main className="flex min-h-[90vh] flex-col items-center">
  <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80">
    <div className="mb-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="form-name">Name:</label>
          <input
            className="w-full h-12 rounded-xl border p-3 border-black"
            id="form-name"
            autoComplete="name"
            maxLength={50}
            name="name"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="form-email">Email:</label>
          <input
            id="form-email"
            required
            autoComplete="email"
            maxLength={80}
            name="email"
            type="email"
            className="w-full h-12 rounded-xl border p-3 border-black"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="form-mobile">Mobile Number:</label>
          <input
            id="form-mobile"
            required
            autoComplete="mobile"
            maxLength={80}
            name="mobile"
            type="number"
            className="w-full h-12 rounded-xl border p-3 border-black"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="form-message">Message:</label>
          <textarea
            id="form-message"
            required
            name="message"
            rows={5}
            className="w-full rounded-xl border p-3 border-black"
          />
        </div>
      </div>
    </div>
    <button className="w-full h-12 rounded bg-sky-400 text-white" type="submit">
      Send
    </button>
  </form>
</main>

  );
}
