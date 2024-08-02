import React from 'react';

// Footer component for displaying the footer content
const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-4 mt-10">
      <div className="container mx-auto">
        <p className="text-center">&copy; {new Date().getFullYear()} AllInOneMart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
