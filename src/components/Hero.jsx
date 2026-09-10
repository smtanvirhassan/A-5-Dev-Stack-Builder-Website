import bannerImg from '../assets/banner-stack.png';

function Hero() {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left column - Text content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Build Your Ideal
            <br />
            <span className="gradient-text">Development Stack</span>
          </h1>
          <p className="text-gray-500 text-lg mt-4">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex gap-4 justify-center lg:justify-start">
            <button className="gradient-bg text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Explore Technologies
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right column - Banner image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={bannerImg}
            alt="Development Stack Banner"
            className="max-w-md lg:max-w-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
