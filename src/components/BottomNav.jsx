import {
    House,
    HeartPulse,
    History
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {

    const navigate = useNavigate();
    const location = useLocation();

    return (

        <div className="bottomNav">

            <div
                className={location.pathname==="/home"?"navItem active":"navItem"}
                onClick={()=>navigate("/home")}
            >

                <House size={22}/>

                <span>Home</span>

            </div>

            <div
                className={location.pathname==="/prediction"?"navItem active":"navItem"}
                onClick={()=>navigate("/prediction")}
            >

                <HeartPulse size={22}/>

                <span>Predict</span>

            </div>

            <div
                className={location.pathname==="/history"?"navItem active":"navItem"}
                onClick={()=>navigate("/history")}
            >

                <History size={22}/>

                <span>History</span>

            </div>

        </div>

    );

}