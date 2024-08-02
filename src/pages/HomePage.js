import React from 'react';
const Container = ({ children }) => (
  <div style={{ marginBottom: '20px' }}>
    {children}
  </div>
);
const HomePage = () => {
  return (

    <div className="container bg-gray mx-auto px-4">
       <Container>
      <div> </div>
    </Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Top Offers Container */}
        <div className="bg-gray rounded-md shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Top Offers</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img src="https://i.ebayimg.com/images/g/jFUAAOSw3o1mn8vA/s-l1600.webp" alt="Top Offer 1" className="w-32 h-32 object-cover rounded-md mb-2" />
              <div className="flex justify-between mt-2">
                <span className="text-red-500 font-bold">20% off</span>
                <span className="font-bold">Limited time deal</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://i.ebayimg.com/images/g/59IAAOSwus1l~fXF/s-l1600.webp" alt="Top Offer 2" className="w-32 h-32 object-cover rounded-md mb-2" />
              <div className="flex justify-between mt-2">
                <span className="text-red-500 font-bold">29% off</span>
                <span className="font-bold">Limited time deal</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col items-center">
              <img src="https://i.ebayimg.com/images/g/LIYAAOSwl~lmL777/s-l500.webp" alt="Top Offer 3" className="w-32 h-32 object-cover rounded-md mb-2" />
              <div className="flex justify-between mt-2">
                <span className="text-red-500 font-bold">75% off</span>
                <span className="font-bold">Limited time deal</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://i.ebayimg.com/images/g/qpsAAOSwKCRmlmfw/s-l500.webp" alt="Top Offer 4" className="w-32 h-32 object-cover rounded-md mb-2" />
              <div className="flex justify-between mt-2">
                <span className="text-red-500 font-bold">20% off</span>
                <span className="font-bold">Limited time deal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Categories Container */}
        <div className="bg-gray rounded-md shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img src="https://i.ebayimg.com/images/g/f7MAAOSwbWtkMVTt/s-l500.webp" alt="Grocery" className="w-32 h-32 object-cover rounded-md mb-2" />
              <p className="mt-2">Grocery</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://i.ebayimg.com/thumbs/images/g/pN0AAOSw2UJjKRzI/s-l500.jpg" alt="Home Storage" className="w-32 h-32 object-cover rounded-md mb-2" />
              <p className="mt-2">Home Storage</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col items-center">
              <img src="https://i.ebayimg.com/images/g/Nr4AAOSwBlNmo1kA/s-l1600.webp" alt="Electronics" className="w-32 h-32 object-cover rounded-md mb-2" />
              <p className="mt-2">Electronics</p>
            </div>
            <div className="flex flex-col items-center">
              <a href="#"><img src="https://i.ebayimg.com/thumbs/images/g/4ksAAOSwhkhmq8~G/s-l500.jpg" alt="Books" className="w-32 h-32 object-cover rounded-md mb-2" /></a>
              <p className="mt-2">Books</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Shop now</button>
          </div>
        </div>

        {/* Garden Essentials Container */}
        <div className="bg-gray rounded-md shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Garden Essentials</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img src="https://i.ebayimg.com/thumbs/images/g/n7UAAOSwGIpkkxLD/s-l500.jpg" alt="Furniture" className="w-32 h-32 object-cover rounded-md mb-2" />
              <p className="mt-2">Furniture</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://i.ebayimg.com/thumbs/images/g/WhMAAOSwiDBmJpDo/s-l500.jpg" alt="Gardening" className="w-32 h-32 object-cover rounded-md mb-2" />
              <p className="mt-2">Gardening</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col items-center">
              <img src="https://i.ebayimg.com/thumbs/images/g/coMAAOSwTj9moj1E/s-l500.jpg" alt="Outdoor Cooking" className="w-32 h-32 object-cover rounded-md mb-2" />
              <p className="mt-2">Outdoor Cooking</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://i.ebayimg.com/thumbs/images/g/5XcAAOSwYMJlwVKT/s-l500.jpg" alt="Decor & Lighting" className="w-32 h-32 object-cover rounded-md mb-2" />
              <p className="mt-2">Decor & Lighting</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Shop now</button>
          </div>
        </div>
      </div>
      <Container>
      <div> </div>
    </Container>
      {/* New Container */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Top offers</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img src="https://i.imgur.com/zX5bK1c.jpg" alt="Ninja air fryer" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-full">20% off</span>
                  <span className="text-gray-600 font-medium">Limited time deal</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/4984o2Q.jpg" alt="Ninja portable ac" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-full">29% off</span>
                  <span className="text-gray-600 font-medium">Limited time deal</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/K1kKq6w.jpg" alt="Ninja earbuds" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-full">75% off</span>
                  <span className="text-gray-600 font-medium">Limited time deal</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/iO2a86p.jpg" alt="Ninja blender" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-full">20% off</span>
                  <span className="text-gray-600 font-medium">Limited time deal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Popular categories</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img src="https://i.imgur.com/pO4x0qD.jpg" alt="Grocery" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Grocery</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/u3bIu1e.jpg" alt="Home Storage" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Home Storage</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/d1YQh1Z.jpg" alt="Electronics" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Electronics</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/5N94hI8.jpg" alt="Books" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Books</span>
                </div>
              </div>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shop now</button>
          </div>
          <div className="bg-gray rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Garden essentials</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img src="https://i.imgur.com/5nG82hM.jpg" alt="Furniture" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Furniture</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/09c5y6v.jpg" alt="Gardening" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Gardening</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/k5o1G9l.jpg" alt="Outdoor Cooking" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Outdoor cooking</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/X49h8v1.jpg" alt="Decor & Lighting" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Decor & Lighting</span>
                </div>
              </div>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shop now</button>
          </div>
        </div>
      </div>
      <Container>
      <div> </div>
    </Container>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Top offers</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img src="https://i.imgur.com/zX5bK1c.jpg" alt="Ninja air fryer" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-full">20% off</span>
                  <span className="text-gray-600 font-medium">Limited time deal</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/4984o2Q.jpg" alt="Ninja portable ac" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-full">29% off</span>
                  <span className="text-gray-600 font-medium">Limited time deal</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/K1kKq6w.jpg" alt="Ninja earbuds" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-full">75% off</span>
                  <span className="text-gray-600 font-medium">Limited time deal</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/iO2a86p.jpg" alt="Ninja blender" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-full">20% off</span>
                  <span className="text-gray-600 font-medium">Limited time deal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Popular categories</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img src="https://i.imgur.com/pO4x0qD.jpg" alt="Grocery" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Grocery</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/u3bIu1e.jpg" alt="Home Storage" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Home Storage</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/d1YQh1Z.jpg" alt="Electronics" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Electronics</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/5N94hI8.jpg" alt="Books" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Books</span>
                </div>
              </div>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shop now</button>
          </div>
          <div className="bg-gray rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Garden essentials</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img src="https://i.imgur.com/5nG82hM.jpg" alt="Furniture" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Furniture</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/09c5y6v.jpg" alt="Gardening" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Gardening</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/k5o1G9l.jpg" alt="Outdoor Cooking" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Outdoor cooking</span>
                </div>
              </div>
              <div>
                <img src="https://i.imgur.com/X49h8v1.jpg" alt="Decor & Lighting" className="w-full h-auto" />
                <div className="mt-2">
                  <span className="text-gray-600 font-medium">Decor & Lighting</span>
                </div>
              </div>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shop now</button>
          </div>
        </div>

      </div>

      <div class="grid grid-cols-3 gap-4">
  <div>
    <h2 class="text-2xl font-bold mb-4">Top offers</h2>
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        {/* <img src="https://i.imgur.com/Q3vH09s.jpg" alt="Air Conditioner" class="w-full h-auto"> */}
        <div class="flex justify-center items-center mt-2">
          <span class="bg-red-500 text-white font-bold px-3 py-1 rounded-md">20% off</span>
          <span class="ml-2 bg-gray-300 text-gray-700 font-bold px-3 py-1 rounded-md">Limited time deal</span>
        </div>
      </div>
      <div>
        {/* <img src="https://i.imgur.com/1fG825i.jpg" alt="Air Conditioner" class="w-full h-auto"> */}
        <div class="flex justify-center items-center mt-2">
          <span class="bg-red-500 text-white font-bold px-3 py-1 rounded-md">29% off</span>
          <span class="ml-2 bg-gray-300 text-gray-700 font-bold px-3 py-1 rounded-md">Limited time deal</span>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        {/* <img src="https://i.imgur.com/xOq1yT3.jpg" alt="Airpods" class="w-full h-auto"> */}
        <div class="flex justify-center items-center mt-2">
          <span class="bg-red-500 text-white font-bold px-3 py-1 rounded-md">75% off</span>
          <span class="ml-2 bg-gray-300 text-gray-700 font-bold px-3 py-1 rounded-md">Limited time deal</span>
        </div>
      </div>
      <div>
        {/* <img src="https://i.imgur.com/5l0v2O4.jpg" alt="Food Processor" class="w-full h-auto"> */}
        <div class="flex justify-center items-center mt-2">
          <span class="bg-red-500 text-white font-bold px-3 py-1 rounded-md">20% off</span>
          <span class="ml-2 bg-gray-300 text-gray-700 font-bold px-3 py-1 rounded-md">Limited time deal</span>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h2 class="text-2xl font-bold mb-4">Popular categories</h2>
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        {/* <img src="https://i.imgur.com/f583O5r.jpg" alt="Grocery" class="w-full h-auto"> */}
        <div class="text-center mt-2">Grocery</div>
      </div>
      <div>
        {/* <img src="https://i.imgur.com/j5O76gB.jpg" alt="Home Storage" class="w-full h-auto"> */}
        <div class="text-center mt-2">Home Storage</div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        {/* <img src="https://i.imgur.com/z5K7o0j.jpg" alt="Electronics" class="w-full h-auto"> */}
        <div class="text-center mt-2">Electronics</div>
      </div>
      <div>
        {/* <img src="https://i.imgur.com/Fz0Kz46.jpg" alt="Books" class="w-full h-auto"> */}
        <div class="text-center mt-2">Books</div>
      </div>
    </div>
    <div class="text-center mt-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shop now</button>
    </div>
  </div>
  <div>
    <h2 class="text-2xl font-bold mb-4">Garden essentials</h2>
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        {/* <img src="https://i.imgur.com/l8Vq2eA.jpg" alt="Furniture" class="w-full h-auto"> */}
        <div class="text-center mt-2">Furniture</div>
      </div>
      <div>
        {/* <img src="https://i.imgur.com/908vW68.jpg" alt="Gardening" class="w-full h-auto"> */}
        <div class="text-center mt-2">Gardening</div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        {/* <img src="https://i.imgur.com/qQzI26J.jpg" alt="Outdoor Cooking" class="w-full h-auto"> */}
        <div class="text-center mt-2">Outdoor cooking</div>
      </div>
      <div>
        {/* <img src="https://i.imgur.com/xZ1jV3m.jpg" alt="Decor & Lighting" class="w-full h-auto"> */}
        <div class="text-center mt-2">Decor & Lighting</div>
      </div>
    </div>
    <div class="text-center mt-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shop now</button>
    </div>
  </div>
</div>
    </div>

  );
};

export default HomePage;
