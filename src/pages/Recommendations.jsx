import MobileFrame from "../components/MobileFrame";
import {
    ArrowLeft,
    Heart,
    Activity,
    Apple,
    Dumbbell,
    Moon,
    Stethoscope
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

export default function Recommendations() {

    const navigate = useNavigate();

    const recommendations = [
        {
            icon: <Heart size={26} />,
            title: "Monitor Blood Pressure",
            text: "Check your blood pressure regularly and keep it within the normal range."
        },
        {
            icon: <Apple size={26} />,
            title: "Healthy Diet",
            text: "Reduce salt and saturated fats. Increase fruits and vegetables."
        },
        {
            icon: <Dumbbell size={26} />,
            title: "Exercise",
            text: "Walk or exercise for at least 30 minutes, five days a week."
        },
        {
            icon: <Moon size={26} />,
            title: "Quality Sleep",
            text: "Aim for 7–8 hours of sleep every night."
        },
        {
            icon: <Activity size={26} />,
            title: "Stay Active",
            text: "Avoid sitting for long periods and maintain a healthy lifestyle."
        },
        {
            icon: <Stethoscope size={26} />,
            title: "Medical Check-up",
            text: "Visit a cardiologist for routine follow-up and screening."
        }
    ];

    return (

        <MobileFrame>

            <div className="recommendationPage">

                <div className="topBar">

                    <ArrowLeft
                        className="back"
                        onClick={() => navigate("/home")}
                    />

                    <h2>Health Recommendations</h2>

                </div>

                <div className="recommendationList">

                    {recommendations.map((item, index) => (

                        <div className="recommendationCard" key={index}>

                            <div className="recommendationIcon">

                                {item.icon}

                            </div>

                            <div>

                                <h3>{item.title}</h3>

                                <p>{item.text}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
            <BottomNav />
        </MobileFrame>

    );

}