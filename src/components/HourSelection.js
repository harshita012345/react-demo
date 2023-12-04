export const HourSelection = ({ data, selectedHour, handleHourSelection }) => {
    return (
        <div className="radio-button-group">
            {data.map((hour) => (
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