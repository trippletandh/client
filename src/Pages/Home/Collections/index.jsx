const Collections = () => {
  return (
    <div className="mt-8 lg:mt-16">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Layout */}
        <div className="">
          <h3 className="text-center text-[#212529] text-lg font-bold mb-6 lg:text-4xl">
            New Collections
          </h3>

          <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
            <div className="bg-collection1 h-[350px] bg-cover rounded-md"></div>
            <div className="bg-collection2 h-[350px] bg-cover rounded-md"></div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="bg-collection3 h-[350px] bg-cover rounded-md"></div>
            <div className="bg-collection4 h-[350px] bg-cover rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
