const TechCard = ({ tech, onAddToStack, isAdded }) => {

  const getBadgeColor = (badge) => {
    const colors = {
      Popular: 'bg-pink-100 text-pink-600',
      Versatile: 'bg-purple-100 text-purple-600',
      Fast: 'bg-red-100 text-red-600',
      Standard: 'bg-green-100 text-green-600',
      'Top SQL': 'bg-blue-100 text-blue-600',
      Cache: 'bg-red-100 text-red-600',
      Ubiquitous: 'bg-orange-100 text-orange-600',
      Essential: 'bg-teal-100 text-teal-600',
      Robust: 'bg-indigo-100 text-indigo-600',
      Modern: 'bg-cyan-100 text-cyan-600',
      Containers: 'bg-blue-100 text-blue-600',
    };
    return colors[badge] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="border border-gray-200 rounded-xl p-5 flex flex-col gap-3 bg-white hover:shadow-md transition-shadow duration-200">
  
      <div className="flex items-start justify-between">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-12 h-12 object-contain"
        />
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${getBadgeColor(tech.badge)}`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>

      <p className="text-sm text-gray-500 leading-relaxed flex-grow">
        {tech.description}
      </p>

      <div className="flex items-center gap-3 flex-wrap text-sm">
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
          {tech.category}
        </span>
        <span className="text-gray-500 text-xs">{tech.difficulty}</span>
        <span className="flex items-center gap-1 text-xs text-gray-500 ml-auto">
          <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAddToStack(tech)}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
          isAdded
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'gradient-bg text-white hover:opacity-90'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;
