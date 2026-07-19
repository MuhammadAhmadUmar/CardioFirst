import MobileFrame from "../components/MobileFrame";
import {
    HeartPulse,
    ClipboardPlus,
    History,
    Heart,
    PhoneCall,
    ChevronRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    const cards = [
        {
            title: "Prediction History",
            icon: <History size={28} />,
            color: "#14B8A6",
            route: "/history"
        },
        {
            title: "Health Tips",
            icon: <Heart size={28} />,
            color: "#22C55E",
            route: "/recommendations"
        },
        {
            title: "Emergency",
            icon: <PhoneCall size={28} />,
            color: "#EF4444",
            route: "/recommendations"
        },
        {
            title: "About",
            icon: <ClipboardPlus size={28} />,
            color: "#3B82F6",
            route: "/prediction"
        }
    ];

    return (

        <MobileFrame>

            <div className="home">

                <div className="hero">

                    <div>

                        <p className="welcome">
                            Welcome 👋
                        </p>

                        <h1>
                            CardioFirst
                        </h1>

                        <span>
                            Heart Disease Prediction using AI
                        </span>

                    </div>

                    <HeartPulse
                        size={70}
                        color="white"
                    />

                </div>

                <div
                    className="predictionCard"
                    onClick={() => navigate("/prediction")}
                >

                    <div>

                        <h2>Start Prediction</h2>

                        <p>
                            Predict your heart disease risk in under one minute.
                        </p>

                    </div>

                    <ChevronRight />

                </div>

                <h3 className="sectionTitle">
                    Quick Access
                </h3>

                <div className="grid">

                    {
                        cards.map((card, index) =>

                            <div
                                key={index}
                                className="featureCard"
                                onClick={() => navigate(card.route)}
                            >

                                <div
                                    className="circle"
                                    style={{
                                        background: card.color
                                    }}
                                >

                                    {card.icon}

                                </div>

                                <h4>

                                    {card.title}

                                </h4>

                            </div>

                        )
                    }

                </div>

            </div>
         
        </MobileFrame>

    );

}