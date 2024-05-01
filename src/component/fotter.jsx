const Footer = () => {
  return (
    <footer className="mt-6 text-center text-lg text-blue-600 dark:text-blue-400">
      <div className="pb-4">
        <p className="font-bold">Think Bank</p>
        <p>9876 Main Street, Suite 123</p>
        <p>Mainland, HL12345</p>
        <p>
          Phone:{" "}
          <a
            href="tel:9876543210"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            987-654-3210
          </a>
        </p>
      </div>
      <p>© {new Date().getFullYear()} Think Bank. All rights reserved.</p>
      <p>Powered by Think Technologies</p>
    </footer>
  );
};

export default Footer;
