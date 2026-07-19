import MobileFrame from "../components/MobileFrame";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Prediction() {

    const navigate = useNavigate();

    return (
        <MobileFrame>

            <div className="predictionPage">

                <div className="topBar">

                    <ArrowLeft
                        size={24}
                        className="back"
                        onClick={() => navigate("/home")}
                    />

                    <h2>Patient Information</h2>

                </div>

                <div className="form">

                    <input placeholder="Age" />

                    <select>
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>

                    <select>
                        <option>Chest Pain Type</option>
                        <option>Typical Angina</option>
                        <option>Atypical Angina</option>
                        <option>Non-anginal Pain</option>
                        <option>Asymptomatic</option>
                    </select>

                    <input placeholder="Resting Blood Pressure (mmHg)" />

                    <input placeholder="Serum Cholesterol (mg/dL)" />

                    <select>
                        <option>Fasting Blood Sugar 120</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>

                    <select>
                        <option>Resting ECG</option>
                        <option>Normal</option>
                        <option>ST-T Wave Abnormality</option>
                        <option>Left Ventricular Hypertrophy</option>
                    </select>

                    <input placeholder="Maximum Heart Rate" />

                    <select>
                        <option>Exercise-Induced Angina</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>

                    <input placeholder="Oldpeak" />

                    <select>
                        <option>Slope</option>
                        <option>Upsloping</option>
                        <option>Flat</option>
                        <option>Downsloping</option>
                    </select>

                    <select>
                        <option>Major Vessels (0-3)</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>

                    <select>
                        <option>Thalassemia</option>
                        <option>Normal</option>
                        <option>Fixed Defect</option>
                        <option>Reversible Defect</option>
                    </select>

                    <button
                        className="predictBtn"
                        onClick={() => navigate("/result")}
                    >
                        Predict Heart Disease
                    </button>

                </div>

            </div>
         
        </MobileFrame>
    );

}