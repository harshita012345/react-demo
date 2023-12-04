export const DogTypeSelection = ({ data, selectedDogTypes, handleQuantityChange }) => {
    return (
        <div className="quantity-manager-group">
            {data.map((dogType, index) => (
                <div key={dogType.title} className="quantity-item">
                    <div className="item-info">
                        {dogType.title} - ${dogType.price}
                    </div>
                    <div className="quantity-controls">
                        <button onClick={() => handleQuantityChange(index, "decrement")}>-</button>
                        <span>{selectedDogTypes[dogType.title]?.quantity || 0}</span>
                        <button onClick={() => handleQuantityChange(index, "increment")}>+</button>
                    </div>
                </div>
            ))}
        </div>
    )
}