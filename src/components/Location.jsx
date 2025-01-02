import React from "react";

const Location = () => {
  return (
    <section className="location-section bg-neutral-light py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-neutral-black mb-6">
          Visit Us
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
          {/* Google Map */}
          <div className="map-container w-full md:w-2/3 h-64 md:h-96 mb-6 md:mb-0 md:mr-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.0440188799894!2d-120.02321615863613!3d46.308963271220726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54982344ea6adb17%3A0x5114479c1059a723!2sLower%20Valley%20Cards!5e0!3m2!1sen!2sus!4v1735539804882!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Store Hours */}
          <div className="store-hours w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center md:text-left">
            <h3 className="text-xl font-bold text-neutral-black mb-4">
              Store Hours
            </h3>
            <p className="text-neutral-black mb-2">Mon: Closed</p>
            <p className="text-neutral-black mb-2">Tues-Fri: 11:00 AM - 5:30 PM</p>
            <p className="text-neutral-black mb-2">Sat-Sun: 11:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
