const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="page-padding">
        <h1>{greeting}</h1>
      </div>
    </div>
  );
};

export default ItemListContainer;
