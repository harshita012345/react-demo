import { connect } from "react-redux";
import { updateDogTypes } from "../redux/actions";
import { DogWalker } from "../dogType";

const DogTypeSelection = ({ selectedDogTypes, handleQuantityChange }) => {
    return (
        <div className="quantity-manager-group">
            {DogWalker[1].data.map((dogType, index) => (
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

const mapStateToPropsDogType = (state) => ({
    selectedDogTypes: state.selectedDogTypes,
});

const mapDispatchToPropsDogType = (dispatch) => ({
    handleQuantityChange: (dogTypeIndex, actionType) => {
        dispatch(updateDogTypes({ dogTypeIndex, actionType }));
    },
});

export const DogTypeSelections = connect(
    mapStateToPropsDogType,
    mapDispatchToPropsDogType
)(DogTypeSelection);