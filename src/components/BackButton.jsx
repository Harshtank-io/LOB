import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("../Learn", { replace: true });
  };

  const buttonStyle = {
    backgroundColor: "#570AD5", // Change the background color as needed
    color: "#fff", // Text color
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    display: "flex",
    alignItems: "center", // Center align icon and text horizontally
  };

  const iconStyle = {
    marginRight: "5px", // Add some spacing between the icon and text
  };

  const hoverStyle = {
    backgroundColor: "#0056b3", // Change the background color on hover
  };

  return (
    <div className="backbutton">
      <button
        onClick={goBack}
        style={buttonStyle}
        onMouseEnter={() => (buttonStyle.backgroundColor = "#0056b3")}
        onMouseLeave={() => (buttonStyle.backgroundColor = "#007bff")}
      >
        <FontAwesomeIcon icon={faArrowLeft} style={iconStyle} /> Back
      </button>
    </div>
  );
}
