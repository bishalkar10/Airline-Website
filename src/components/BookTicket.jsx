import "../styles/book-ticket.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function BookTicket() {
  const [selectedItem, setSelectedItem] = useState({
    tripType: "",
    travelClass: "",
  });
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    tripType: "",
    adult: "",
    children: "",
    travelClass: "",
  });

  // this function is only used to update the tripType, travelClass in the formData state 
  const handleListItemClick = (e) => {
    const name = e.target.getAttribute("name");
    const value = e.target.getAttribute("value");
    console.log(name, value);
    // if the value is already selected then set the value to empty string 
    if (selectedItem[name] === value) {
      setSelectedItem((prevSelectedItem) => ({
        ...prevSelectedItem,
        [name]: "",
      }));
      // update the formData state and the set the value to empty string
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: "",
      }));
    } else {
      // if the value is not selected then set the value to the selected value and update the formData state
      setSelectedItem((prevSelectedItem) => ({
        ...prevSelectedItem,
        [name]: value,
      }));
      // update the formData state with a actual value
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }

  };

  // this function is used to update only source, destination, departureDate and returnDate state in the formData state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // apply regex to only allow numbers
  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    const regex = /^\d*$/;

    // Check if the value is not a valid number and not an empty string
    if (!regex.test(value)) {
      e.preventDefault();
      return;
    }
    // if the value is an empty string then set the value to empty string else convert the value to number and update the formData state
    // if just do this `const newValue = Number(value);` then it will convert empty string to 0 and we can't remove the 0 from the input field at all.
    const newValue = value.trim() === "" ? "" : Number(value);
    setFormData({ ...formData, [name]: newValue });
  }
  // when mouse enters the input card, add the hover class and show the option card container
  const handleMouseHover = (e) => {
    const inputCard = e.target.closest(".input-card");
    inputCard.classList.add("hover");
    const optionCardContainer = inputCard.querySelector(".option-card-container");
    if (optionCardContainer) {
      optionCardContainer.style.display = "block";
    }
  }

  // when mouse leaves the input card, remove the hover class and hide the option card container
  const handleMouseLeave = (e) => {
    const inputCard = e.target.closest(".input-card");
    inputCard.classList.remove("hover");
    const optionCardContainer = inputCard.querySelector(".option-card-container");
    if (optionCardContainer) {
      optionCardContainer.style.display = "none";
    }
  }

  return (
    <div className="book-ticket-container">
      <div className="option-div">
        <div className="input-card"
          onMouseOver={handleMouseHover}
          onMouseLeave={handleMouseLeave}>
          <div className="field-title">Trip Type  </div>
          <div className="option-card-container">
            <div className="upward-arrow"></div>
            <ul className="option-card">
              <li
                name="tripType"
                value="one-way"
                onClick={handleListItemClick}
                style={{
                  backgroundColor: selectedItem.tripType === "one-way" ? "black" : "white",
                  color: selectedItem.tripType === "one-way" ? "white" : "black",
                }}
              >One-way</li>
              <li
                name="tripType"
                value="round-trip"
                onClick={handleListItemClick}
                style={{
                  backgroundColor: selectedItem.tripType === "round-trip" ? "black" : "white",
                  color: selectedItem.tripType === "round-trip" ? "white" : "black",
                }}
              >Round Trip</li>
            </ul>
          </div>
        </div>
        <div className="input-card"
          onMouseOver={handleMouseHover}
          onMouseLeave={handleMouseLeave}>
          <div className="field-title">Travellers</div>
          <div className="option-card-container">
            <div className="upward-arrow"></div>
            <ul className="option-card">
              <li>
                <input
                  name="adult"
                  id="adult"
                  type="text"
                  value={formData.adult}
                  placeholder="Adult"
                  onChange={handleNumberChange}
                />
              </li>
              <li>
                <input
                  name="children"
                  id="children"
                  type="text"
                  value={formData.children}
                  placeholder="Children"
                  onChange={handleNumberChange}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="input-card"
          onMouseOver={handleMouseHover}
          onMouseLeave={handleMouseLeave}>
          <div className="field-title">Travel Class</div>
          <div className="option-card-container">
            <div className="upward-arrow"></div>
            <ul className="option-card">
              <li
                name="travelClass"
                value="economy"
                onClick={handleListItemClick}
                style={{
                  backgroundColor: selectedItem.travelClass === "economy" ? "black" : "white",
                  color: selectedItem.travelClass === "economy" ? "white" : "black",
                }}
              >Economy</li>
              <li
                name="travelClass"
                value="Business"
                onClick={handleListItemClick}
                style={{
                  backgroundColor: selectedItem.travelClass === "Business" ? "black" : "white",
                  color: selectedItem.travelClass === "Business" ? "white" : "black",
                }}
              > Business</li>
              <li
                name="travelClass"
                value="first-class"
                onClick={handleListItemClick}
                style={{
                  backgroundColor: selectedItem.travelClass === "first-class" ? "black" : "white",
                  color: selectedItem.travelClass === "first-class" ? "white" : "black",
                }}
              >First Class</li>
            </ul>
          </div>
        </div>
      </div>
      <form >
        <div
          className="text-input-div"><input
            id="source"
            name="source"
            type="text"
            value={formData.source}
            placeholder="Source"
            onChange={handleInputChange}
          />
          {/* if formData.from is not a empty string then show the icon. If we click the icon then the input field gets cleared */}
          {formData.source && <FontAwesomeIcon className="clear-icon" icon={faX} />}
        </div>
        <div className="text-input-div">
          <input
            id="destination"
            name="destination"
            type="text"
            value={formData.destination}
            placeholder="Destination"
            onChange={handleInputChange}
          />
          {/* if formData.to is not a empty string then show the icon. If we click the icon then the input field gets cleared */}
          {formData.destination && <FontAwesomeIcon className="clear-icon" icon={faX} />}
        </div>
        <input
          id="departure-date"
          name="depart"
          type="date"
          value={formData.departureDate}
          placeholder="Start"
          onChange={handleInputChange} />
        <input
          id="return-date"
          name="returnDate"
          type="date"
          value={formData.returnDate}
          placeholder="End"
          onChange={handleInputChange}
        />
        <button id="search-btn" >
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </form>
    </div>
  );
}
