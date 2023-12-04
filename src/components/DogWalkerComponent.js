import React, { useState } from "react";
import { DogTypeSelection } from "./DogTypeSelection";
import { HourSelection } from "./HourSelection";
import { DogWalker } from "../dogType";

const DogWalkerComponent = () => {
    const [selectedHour, setSelectedHour] = useState(null);
    const [selectedDogTypes, setSelectedDogTypes] = useState({});

    const handleHourSelection = (hour) => {
        setSelectedHour(hour);
    };

    const handleQuantityChange = (dogTypeIndex, action) => {
        setSelectedDogTypes((prevDogTypes) => {
            const updatedDogTypes = { ...prevDogTypes };
            const dogType = DogWalker[1].data[dogTypeIndex];
            updatedDogTypes[dogType.title] = updatedDogTypes[dogType.title] || { quantity: 0, price: dogType.price };
            if (action === "increment") {
                updatedDogTypes[dogType.title].quantity += 1;
            } else if (action === "decrement" && updatedDogTypes[dogType.title].quantity > 0) {
                updatedDogTypes[dogType.title].quantity -=1;
            }
            return updatedDogTypes;
        });
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        for (const dogType in selectedDogTypes) {
            totalPrice += (selectedDogTypes[dogType].quantity * selectedDogTypes[dogType].price) + selectedHour.price;
        }
        return totalPrice;
    };
    
    return (
        <div className="dog-walker-container">
            <h2>Dog Walker</h2>
            <HourSelection data={DogWalker[0].data} selectedHour={selectedHour} handleHourSelection={handleHourSelection} />
            <h2>Select Dog type</h2>
            <DogTypeSelection data={DogWalker[1].data} selectedDogTypes={selectedDogTypes} handleQuantityChange={handleQuantityChange} />
            {selectedHour && (
                <div className="cart">
                    <h3>Cart</h3>
                    <p>Selected Hour: {selectedHour.title}</p>
                    {Object.entries(selectedDogTypes).map(([dogType, data]) => (
                        <div key={dogType}>
                            <p>{dogType} - Quantity: {data.quantity}</p>
                        </div>
                    ))}
                    <p>Total Price: ${calculateTotalPrice() || selectedHour.price}</p>
                </div>
            )}
        </div>
    );
};

export default DogWalkerComponent;