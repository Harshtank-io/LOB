import reason from '../assets/lcopro.svg';
import '../css/Info.css'

function Info() {
    return(
        <>
        <div className="info-container">
            <div className="info-text">
                <h1>Why Lines of Binary ?</h1>
                <div className="why">
                The "Lines of Binary" project is an educational initiative aimed at helping beginners learn about binary code, a fundamental concept in computer science. The project focuses on creating an interactive platform that visually demonstrates the conversion of text characters into binary code and provides a hands-on learning experience for users.
                </div>
            </div>
            <div className="info-img">
            <img src={reason} alt="reason" />
            </div>
        </div>
        </>
    )
}

export default Info;