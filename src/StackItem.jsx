const StackItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl bg-white">
      <img
        src={item.icon}
        alt={item.name}
        className="w-10 h-10 object-contain"
      />
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-gray-900">{item.name}</h4>
        <p className="text-xs text-gray-400">{item.category}</p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-gray-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
        aria-label={`Remove ${item.name}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default StackItem;
