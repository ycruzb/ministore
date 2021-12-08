const ProductList = ({ children }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {children}
    </div>
  );
};

export default ProductList;
