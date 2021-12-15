const PJProductItem = () => {
  return (
    <div className="w-full flex gap-5 animate-pulse" data-testid="placeholder-product">
      <div className="w-full relative max-w-[140px] mb-1">
        <div className="w-[140px] h-[180px] bg-gray-300"></div>
      </div>
      <div className="w-full">
        <div className="w-[55%] h-5 bg-gray-300 mb-2"></div>
        <div className="w-[85%] h-5 bg-gray-200 mb-2"></div>
        <div className="w-[70%] h-5 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default PJProductItem;
