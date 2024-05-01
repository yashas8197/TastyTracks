import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="container col-md-7">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              onClick={handleClick}
            >
              <strong>
                {data.title} ({data.itemCards.length})
              </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${showItems ? "show" : ""}`}
            data-bs-parent="#accordionExample"
          >
            {showItems && <ItemsList items={data?.itemCards} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
