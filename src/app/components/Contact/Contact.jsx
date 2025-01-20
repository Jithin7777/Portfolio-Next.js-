import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {


    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1319b47d-60d8-47d4-ade1-b6c5f876de24");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div id="contact" className="py-20 bg-gray-50">
      {/* Heading Section */}
      <h4 className="text-center text-sm font-medium text-gray-600">Connect with me</h4>
      <h2 className="font-Ovo text-center text-2xl sm:text-xl md:text-3xl lg:text-5xl text-gray-800 mt-2">
        Get in touch
      </h2>
      <p className="font-Ovo text-center max-w-2xl mx-auto mt-5 text-gray-600">
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </p>

      {/* Form Section */}
      <form onSubmit={onSubmit}
        action=""
        className="mt-8 max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10"
      >
        {/* Input Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        {/* Textarea */}
        <textarea
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className="w-full mt-6 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        ></textarea>

        {/* Submit Button */}

<button
  type="submit"
  className="w-full mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black-600 transition duration-300 flex items-center justify-center space-x-2"
>
  <span>Submit now</span>
  <Image
    src={assets.right_arrow_white} 
    alt="Right arrow"
    width={20} 
    height={20} 
    className="ml-2" 
  />
</button>

      </form>
      <p>{result}</p>
    </div>
  );
};

export default Contact;
