export default function MobileFrame({ children }) {
  return (
    <div className="page">
      <div className="phone">
        {children}
      </div>
    </div>
  );
}