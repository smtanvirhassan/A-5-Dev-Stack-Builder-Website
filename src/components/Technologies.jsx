import TechCard from './TechCard';
import YourStack from './YourStack';

const Technologies = ({ technologies, stack, onAddToStack, onRemove, onRemoveAll }) => {
  return (
    <section id="technologies" className="py-12 lg:py-16 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">

      <div className="mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Explore the <span className="gradient-text">Technologies</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              onAddToStack={onAddToStack}
              isAdded={stack.some((item) => item.id === tech.id)}
            />
          ))}
        </div>

        <div className="w-full lg:w-72 xl:w-80 shrink-0">
          <YourStack
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
