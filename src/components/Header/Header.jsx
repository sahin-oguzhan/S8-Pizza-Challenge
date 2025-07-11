export default function Header({ children }) {
  return (
    <header>
      <div className="logo">
        <img src="./images/iteration-1-images/logo.svg" alt="" />
      </div>
      <div className="nav">{children}</div>
    </header>
  );
}
