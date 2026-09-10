import StackItem from './StackItem';

const YourStack = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white sticky top-24">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
      <p className="text-sm text-gray-400 mt-1">
        {stack.length > 0
          ? `${stack.length} Technology Selected`
          : 'No technologies selected yet.'}
      </p>

      {/* Stack Items or Empty State */}
      <div className="mt-4 flex flex-col gap-3">
        {stack.length === 0 ? (
          <div className="border border-dashed border-gray-200 rounded-xl py-8 text-center">
            <p className="text-sm text-gray-400">Your stack is empty.</p>
          </div>
        ) : (
          <>
            {stack.map((item) => (
              <StackItem key={item.id} item={item} onRemove={onRemove} />
            ))}

            {/* Remove All Button */}
            <button
              onClick={onRemoveAll}
              className="mt-2 w-full py-2.5 rounded-lg border-2 border-red-400 text-red-500 font-semibold text-sm hover:bg-red-50 transition-colors cursor-pointer"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default YourStack;
