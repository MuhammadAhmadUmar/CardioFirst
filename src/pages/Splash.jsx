import { HeartPulse } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MobileFrame from "../components/MobileFrame";
import BottomNav from "../components/BottomNav";

export default function Splash() {

    const navigate = useNavigate();

    useEffect(() => {

        const timer = setTimeout(() => {

            navigate("/home");

        }, 2500);

        return () => clearTimeout(timer);

    }, []);

    return (

        <MobileFrame>

            <div className="splash">

                <HeartPulse
                    size={95}
                    color="#ffffff"
                />

                <h1>CardioFirst</h1>

                <p>Predict • Prevent • Protect</p>

            </div>
            <BottomNav />
        </MobileFrame>

    );

}