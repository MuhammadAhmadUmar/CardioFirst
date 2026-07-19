import BottomNav from "./BottomNav";

export default function MobileFrame({ children }) {
  return (
    <div className="page">
      <div className="phone">
        <div className="screen">
          {children}
          <BottomNav />
        </div>
      </div>
    </div>
  );
}