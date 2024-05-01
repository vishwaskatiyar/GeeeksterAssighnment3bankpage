const MainContent = () => {
  return (
    <main className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <img
          src="https://images.unsplash.com/photo-1616803140344-6682afb13cda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D"
          alt="Therapy Session"
          className="w-full md:w-1/2 rounded-lg shadow-md border-2 border-blue-500 dark:border-blue-400"
          crossOrigin="anonymous"
        />
        <div className="flex flex-col md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            Think Health. Think Massage.
          </h2>
          <p className="text-lg text-blue-600 dark:text-blue-400">
            We are open 9am to 6pm, Monday through Sunday. If you would like to
            schedule an appointment with us, please call us at{" "}
            <a
              href="tel:9876543210"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              987-654-3210
            </a>{" "}
            today!
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-colors duration-300 shadow-md"
            >
              Learn more about us
            </a>
            <a
              href="#"
              className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-blue-600 px-8 py-4 rounded-full hover:text-white transition-colors duration-300 shadow-md"
            >
              Contact us today
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 p-6 bg-blue-100 dark:bg-blue-200 rounded-lg shadow-md">
        <p className="text-lg text-gray-800 dark:text-gray-800">
          Are you looking for a professional, registered massage therapist?
          Sample Massage Therapy has 4 registered massage therapists who can
          provide clinical massage.
        </p>
        <p className="text-lg text-gray-800 dark:text-gray-800">
          We are committed to your long-term health and well-being. Our
          multi-disciplinary clinic provides a balanced approach to a healthy
          lifestyle. Enhance your health and improve your performance with our
          treatments.
        </p>
        <p className="text-lg text-gray-800 dark:text-gray-800">
          We welcome you to come explore all the benefits you enjoy as one of
          our valued guests. Our professional staff is committed to offering the
          best massage therapy in Mainland.
        </p>
      </div>
    </main>
  );
};

export default MainContent;
