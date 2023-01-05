const Collections = () => {
  return (
    <div className="mt-8 lg:mt-16">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Layout */}
        <div className="">
          <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
            <div className="bg-collection1 h-[350px] bg-cover rounded-md">
              <p className="mt-16 px-4 py-16 text-[#212529]">
                Beautiful Child Stationary Accessories
              </p>
            </div>
            <div className="bg-collection2 h-[350px] bg-cover rounded-md">
              <p className="mt-16 px-4 py-16 text-[#212529]">
                Amazing Soft Toys
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="bg-collection3 h-[350px] bg-cover rounded-md">
              <p className="mt-16 px-4 py-16 text-[#212529]">Small Seat Sofa</p>
            </div>

            <div className="bg-collection4 h-[350px] bg-cover rounded-md">
              <p className="mt-16 px-4 py-16 text-[#212529]">
                Latest Toy House For Your Children
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
