import MobileFrame from "../components/MobileFrame";
import {
    ShieldCheck,
    HeartPulse,
    Activity,
    ChevronRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Result() {

    const navigate = useNavigate();

    return (

        <MobileFrame>

            <div className="resultPage">

                <div className="resultHeader">

                    <HeartPulse size={70} color="#F59E0B" />

                    <h1 style={{color:"#F59E0B"}}>Moderate Risk</h1>

<p>
    Your health profile indicates a moderate risk of heart disease.
    Lifestyle changes and regular medical follow-up are recommended.
</p>
                </div>

                <div className="scoreCard">

                    <div
    className="scoreCircle"
    style={{background:"#F59E0B"}}
>

                        <span>64%</span>

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

<li>Elevated Resting Blood Pressure</li>

<li>Increased Serum Cholesterol</li>

<li> Age-related Cardiovascular Risk</li>

<li> Mild Exercise-Induced Angina</li>

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
        </MobileFrame>

    );

}