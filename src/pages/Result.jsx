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

                    <HeartPulse size={70} color="#DC2626" />

                    <h1 style={{color:"#DC2626"}}>High Risk</h1>

<p>
    Your health profile indicates a moderate risk of heart disease.
    Lifestyle changes and regular medical follow-up are recommended.
</p>
                </div>

                <div className="scoreCard">

                    <div
    className="scoreCircle"
    style={{background:"#DC2626"}}
>

                        <span>86%</span>

                    </div>

                    <h3>Risk Score</h3>

                    <p>Confidence: <strong>92%</strong></p>

                </div>

                <div className="factorCard">

                    <h3>

                        <Activity size={20} />

                        Key Contributing Factors

                    </h3>

                   <ul>

<li> Severely Elevated Resting Blood Pressure</li>

<li> High Serum Cholesterol Level</li>

<li> Exercise-Induced Angina Present</li>

<li> Abnormal Resting ECG Findings</li>

<li> Age and Multiple Cardiovascular Risk Factors</li>

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