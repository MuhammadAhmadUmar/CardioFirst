import MobileFrame from "../components/MobileFrame";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function History() {

    const navigate = useNavigate();

    const history = [

    {
        date: "18 July 2026",
        risk: "Moderate Risk",
        confidence: "94%",
        color: "#F59E0B"
    },

    {
        date: "10 July 2026",
        risk: "Low Risk",
        confidence: "97%",
        color: "#16A34A"
    },

    {
        date: "25 June 2026",
        risk: "High Risk",
        confidence: "91%",
        color: "#DC2626"
    }

];

    return (

        <MobileFrame>

            <div className="historyPage">

                <div className="topBar">

                    <ArrowLeft
                        className="back"
                        onClick={() => navigate("/home")}
                    />

                    <h2>Prediction History</h2>

                </div>

                <div className="historyList">

                    {

                        history.map((item, index) => (

                            <div className="historyCard" key={index} style={{borderLeft:`5px solid ${item.color}`}}>

                                <h3 style={{color: item.color}}>{item.risk}</h3>

                                <p>{item.date}</p>

                                <span>Confidence: {item.confidence}</span>

                            </div>

                        ))

                    }

                </div>

            </div>
           
        </MobileFrame>

    );

}