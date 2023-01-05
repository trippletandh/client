const OurTestimonial = () => {
  return (
    <div className="mt-8 mb-8 lg:mt-16 lg:mb-16">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Layout */}
        <div className="text-center bg-gray-200 rounded-md p-11">
          <h3 className="text-[#212529] text-3xl font-bold">Our Testimonial</h3>
          <p className="text-[#212529] text-6xl">""</p>
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> ever since the 1500s, when an unknown printer took
            a galley of type and <br /> scrambled
          </p>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0623/7578/8783/files/testi1_80x80.png?v=1644382541"
              alt=""
            />
            <p className="pt-2 pb-2">Ms.Bella</p>
            <p className="">Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTestimonial;
