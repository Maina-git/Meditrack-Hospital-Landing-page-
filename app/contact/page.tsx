import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            Get In Touch
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Contact <span className="text-blue-600">MediTrack</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
            Whether you need medical assistance, appointment scheduling,
            healthcare information, or emergency support, our team is always
            ready to help.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition text-center">
            <FaPhoneAlt className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl">Phone</h3>
            <p className="text-gray-600 mt-2">
              +254 700 123 456
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition text-center">
            <FaEnvelope className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl">Email</h3>
            <p className="text-gray-600 mt-2">
              support@meditrack.com
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition text-center">
            <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl">Location</h3>
            <p className="text-gray-600 mt-2">
              Nairobi, Kenya
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition text-center">
            <FaClock className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl">Working Hours</h3>
            <p className="text-gray-600 mt-2">
              Open 24/7
            </p>
          </div>

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-blue-600 rounded-3xl p-10 text-white">

            <h2 className="text-4xl font-bold mb-6">
              We Are Here To Help
            </h2>

            <p className="text-blue-100 leading-relaxed mb-8">
              Our healthcare specialists are available to answer your
              questions, assist with appointments, and provide support
              regarding medical services.
            </p>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-xl">
                  Emergency Hotline
                </h3>
                <p className="text-blue-100">
                  +254 700 999 999
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Customer Support
                </h3>
                <p className="text-blue-100">
                  support@meditrack.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Address
                </h3>
                <p className="text-blue-100">
                  Westlands Medical Centre,
                  Nairobi, Kenya
                </p>
              </div>

            </div>

            <div className="mt-10 p-6 bg-white/10 rounded-2xl">
              <h3 className="font-bold text-xl">
                Need Immediate Assistance?
              </h3>

              <p className="text-blue-100 mt-2">
                Our emergency department operates around the clock to provide
                urgent medical care whenever needed.
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Send Us A Message
            </h2>

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-gray-100 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-100 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-gray-100 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-100 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                placeholder="Write your message..."
                className="w-full bg-gray-100 p-5 rounded-xl outline-none min-h-[180px] focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;