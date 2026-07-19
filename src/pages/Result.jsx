import MobileFrame from "../components/MobileFrame";
import {
    ShieldCheck,
    HeartPulse,
    Activity,
    ChevronRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

export default function Result() {

    const navigate = useNavigate();

    return (

        <MobileFrame>

            <div className="resultPage">

                <div className="resultHeader">

                    <HeartPulse size={70} color="#16A34A" />

                    <h1>Low Risk</h1>

                    <p>
                        Your predicted risk of heart disease is low.
                    </p>

                </div>

                <div className="scoreCard">

                    <div className="scoreCircle">

                        <span>12%</span>

                    </div>

                    <h3>Risk Score</h3>

                    <p>Confidence: <strong>96%</strong></p>

                </div>

                <div className="factorCard">

                    <h3>

                        <Activity size={20} />

                        Key Contributing Factors

                    </h3>

                    <ul>

                        <li>✔ Healthy Blood Pressure</li>

                        <li>✔ Normal Cholesterol</li>

                        <li>✔ Good Heart Rate</li>

                        <li>✔ No Exercise-Induced Angina</li>

                    </ul>

                </div>

                <button
                    className="recommendBtn"
                    onClick={() => navigate("/recommendations")}
                >

                    <ShieldCheck size={20} />

                    View Health Recommendations

                    <ChevronRight size={20} />

                </button>

            </div>
            <BottomNav />
        </MobileFrame>

    );

}