import React from "react";
import { DogTypeSelections } from "./DogTypeSelection";
import { HourSelections } from "./HourSelection";
import { connect } from "react-redux";

const DogWalkerComponent = ({ selectedHour, selectedDogTypes, calculateTotalPrice }) => {
    return (
        <div className="dog-walker-container">
            <h2>Dog Walker</h2>
            <HourSelections />
            <h2>Select Dog type</h2>
            <DogTypeSelections />
            {selectedHour && (
                <div className="cart">
                    <h3>Cart</h3>
                    <p>Selected Hour: {selectedHour.title}</p>
                    {Object.entries(selectedDogTypes).map(([dogType, data]) => (
                        <div key={dogType}>
                            <p>{dogType} - Quantity: {data.quantity}</p>
                        </div>
                    ))}
                    <p>Total Price: ${calculateTotalPrice(selectedDogTypes, selectedHour) || selectedHour.price}</p>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    selectedHour: state.selectedHour,
    selectedDogTypes: state.selectedDogTypes,
});

const mapDispatchToProps = () => ({
    calculateTotalPrice: (dogTypes, hour) => {
        let totalPrice = 0;
        for (const dogType in dogTypes) {
            totalPrice += (dogTypes[dogType].quantity * dogTypes[dogType].price) + hour.price;
        }
        return totalPrice;
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DogWalkerComponent);