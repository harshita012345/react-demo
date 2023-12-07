import { connect } from "react-redux";
import { DogWalker } from "../dogType";
import { selectHour } from "../redux/actions";

const HourSelection = ({ selectedHour, handleHourSelection }) => {
    return (
        <div className="radio-button-group">
            {DogWalker[0].data.map((hour) => (
                <div key={hour._id} className="radio-item">
                    <label>{hour.hour} hr</label>
                    <div>
                        <span>${hour.price}</span>
                        <input
                            type="radio"
                            name="hourSelection"
                            value={hour._id}
                            checked={selectedHour && selectedHour._id === hour._id}
                            onChange={() => handleHourSelection(hour)}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}


const mapStateToPropsHour = (state) => ({
    selectedHour: state.selectedHour,
  });
  
  const mapDispatchToPropsHour = (dispatch) => ({
    handleHourSelection: (hour) => dispatch(selectHour(hour)),
  });
  
  export const HourSelections = connect(
    mapStateToPropsHour,
    mapDispatchToPropsHour
  )(HourSelection);