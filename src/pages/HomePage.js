import React from 'react';
const Container = ({ children }) => (
  <div style={{ marginBottom: '20px' }}>
    {children}
  </div>
);
const HomePage = () => {
  return (

    <div className="container mx-auto px-4">
        <Container>
        </Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Top Offers Container */}
        <div className="bg-gray-100 rounded-md shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Top Offers</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img
                src="https://i.ebayimg.com/images/g/jFUAAOSw3o1mn8vA/s-l1600.webp"
                alt="Top Offer 1"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
              <div className="flex justify-between mt-2">
                <span className="text-red-500 font-bold">20% off</span>
                <span className="font-bold">Limited time deal</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i.ebayimg.com/images/g/59IAAOSwus1l~fXF/s-l1600.webp"
                alt="Top Offer 2"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
              <div className="flex justify-between mt-2">
                <span className="text-red-500 font-bold">29% off</span>
                <span className="font-bold">Limited time deal</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col items-center">
              <img
                src="https://i.ebayimg.com/images/g/LIYAAOSwl~lmL777/s-l500.webp"
                alt="Top Offer 3"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
              <div className="flex justify-between mt-2">
                <span className="text-red-500 font-bold">75% off</span>
                <span className="font-bold">Limited time deal</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i.ebayimg.com/images/g/qpsAAOSwKCRmlmfw/s-l500.webp"
                alt="Top Offer 4"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
              <div className="flex justify-between mt-2">
                <span className="text-red-500 font-bold">20% off</span>
                <span className="font-bold">Limited time deal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Categories Container */}
        <div className="bg-gray-100 rounded-md shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img
                src="https://i.ebayimg.com/images/g/f7MAAOSwbWtkMVTt/s-l500.webp"
                alt="Grocery"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
              <p className="mt-2">Grocery</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i.ebayimg.com/thumbs/images/g/pN0AAOSw2UJjKRzI/s-l500.jpg"
                alt="Home Storage"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
              <p className="mt-2">Home Storage</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col items-center">
              <img
                src="https://i.ebayimg.com/images/g/Nr4AAOSwBlNmo1kA/s-l1600.webp"
                alt="Electronics"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
              <p className="mt-2">Electronics</p>
            </div>
            <div className="flex flex-col items-center">
              <a href="#">
                <img
                  src="https://i.ebayimg.com/thumbs/images/g/4ksAAOSwhkhmq8~G/s-l500.jpg"
                  alt="Books"
                  className="w-32 h-32 object-cover rounded-md mb-2"
                />
              </a>
              <p className="mt-2">Books</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Shop now
            </button>
          </div>
        </div>

        {/* Garden Essentials Container */}
        <div className="bg-gray-100 rounded-md shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Garden Essentials</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img
                src="https://i.ebayimg.com/thumbs/images/g/n7UAAOSwGIpkkxLD/s-l500.jpg"
                alt="Furniture"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
              <p className="mt-2">Furniture</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i.ebayimg.com/thumbs/images/g/WhMAAOSwiDBmJpDo/s-l500.jpg"
                alt="Gardening"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
              <p className="mt-2">Gardening</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col items-center">
              <img
                src="https://i.ebayimg.com/thumbs/images/g/coMAAOSwTj9moj1E/s-l500.jpg"
                alt="Outdoor Cooking"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
              <p className="mt-2">Outdoor Cooking</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i.ebayimg.com/thumbs/images/g/5XcAAOSwYMJlwVKT/s-l500.jpg"
                alt="Decor & Lighting"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
              <p className="mt-2">Decor & Lighting</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Shop now
            </button>
          </div>
        </div>

      </div>
      <Container>
      </Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

{/* Top Offers Container */}

<div className="bg-gray-100 rounded-md shadow-md p-4">

  <h2 className="text-xl font-bold mb-4">Top Offers</h2>
  <div className="grid grid-cols-2 gap-4">
    <div className="flex flex-col items-center">
      <img
        src="https://i.ebayimg.com/images/g/jFUAAOSw3o1mn8vA/s-l1600.webp"
        alt="Top Offer 1"
        className="w-32 h-32 object-cover rounded-md mb-2"
      />
      <div className="flex justify-between mt-2">
        <span className="text-red-500 font-bold">20% off</span>
        <span className="font-bold">Limited time deal</span>
      </div>
    </div>
    <div className="flex flex-col items-center">
      <img
        src="https://i.ebayimg.com/images/g/59IAAOSwus1l~fXF/s-l1600.webp"
        alt="Top Offer 2"
        className="w-32 h-32 object-cover rounded-md mb-2"
      />
      <div className="flex justify-between mt-2">
        <span className="text-red-500 font-bold">29% off</span>
        <span className="font-bold">Limited time deal</span>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4 mt-4">
    <div className="flex flex-col items-center">
      <img
        src="https://i.ebayimg.com/images/g/LIYAAOSwl~lmL777/s-l500.webp"
        alt="Top Offer 3"
        className="w-32 h-32 object-cover rounded-md mb-2"
      />
      <div className="flex justify-between mt-2">
        <span className="text-red-500 font-bold">75% off</span>
        <span className="font-bold">Limited time deal</span>
      </div>
    </div>
    <div className="flex flex-col items-center">
      <img
        src="https://i.ebayimg.com/images/g/qpsAAOSwKCRmlmfw/s-l500.webp"
        alt="Top Offer 4"
        className="w-32 h-32 object-cover rounded-md mb-2"
      />
      <div className="flex justify-between mt-2">
        <span className="text-red-500 font-bold">20% off</span>
        <span className="font-bold">Limited time deal</span>
      </div>
    </div>
  </div>
</div>

{/* Popular Categories Container */}
<div className="bg-gray-100 rounded-md shadow-md p-4">
  <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
  <div className="grid grid-cols-2 gap-4">
    <div className="flex flex-col items-center">
      <img
        src="https://i.ebayimg.com/images/g/f7MAAOSwbWtkMVTt/s-l500.webp"
        alt="Grocery"
        className="w-32 h-32 object-cover rounded-md mb-2"
      />
      <p className="mt-2">Grocery</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src="https://i.ebayimg.com/thumbs/images/g/pN0AAOSw2UJjKRzI/s-l500.jpg"
        alt="Home Storage"
        className="w-32 h-32 object-cover rounded-md mb-2"
      />
      <p className="mt-2">Home Storage</p>
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4 mt-4">
    <div className="flex flex-col items-center">
      <img
        src="https://i.ebayimg.com/images/g/Nr4AAOSwBlNmo1kA/s-l1600.webp"
        alt="Electronics"
        className="w-32 h-32 object-cover rounded-md mb-2"
      />
      <p className="mt-2">Electronics</p>
    </div>
    <div className="flex flex-col items-center">
      <a href="#">
        <img
          src="https://i.ebayimg.com/thumbs/images/g/4ksAAOSwhkhmq8~G/s-l500.jpg"
          alt="Books"
          className="w-32 h-32 object-cover rounded-md mb-2"
        />
      </a>
      <p className="mt-2">Books</p>
    </div>
  </div>
  <div className="flex justify-center mt-4">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Shop now
    </button>
  </div>
</div>

{/* Garden Essentials Container */}
<div className="bg-gray-100 rounded-md shadow-md p-4">
  <h2 className="text-xl font-bold mb-4">Garden Essentials</h2>
  <div className="grid grid-cols-2 gap-4">
    <div className="flex flex-col items-center">
      <img
        src="https://i.ebayimg.com/thumbs/images/g/n7UAAOSwGIpkkxLD/s-l500.jpg"
        alt="Furniture"
        className="w-32 h-32 object-cover rounded-md mb-2"
      />
      <p className="mt-2">Furniture</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src="https://i.ebayimg.com/thumbs/images/g/WhMAAOSwiDBmJpDo/s-l500.jpg"
        alt="Gardening"
        className="w-32 h-32 object-cover rounded-md mb-2"
      />
      <p className="mt-2">Gardening</p>
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4 mt-4">
    <div className="flex flex-col items-center">
      <img
        src="https://i.ebayimg.com/thumbs/images/g/coMAAOSwTj9moj1E/s-l500.jpg"
        alt="Outdoor Cooking"
        className="w-32 h-32 object-cover rounded-md mb-2"
      />
      <p className="mt-2">Outdoor Cooking</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src="https://i.ebayimg.com/thumbs/images/g/5XcAAOSwYMJlwVKT/s-l500.jpg"
        alt="Decor & Lighting"
        className="w-32 h-32 object-cover rounded-md mb-2"
      />
      <p className="mt-2">Decor & Lighting</p>
    </div>
  </div>
  <div className="flex justify-center mt-4">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Shop now
    </button>
  </div>
</div>

</div>
    </div>

  );
};

export default HomePage;
