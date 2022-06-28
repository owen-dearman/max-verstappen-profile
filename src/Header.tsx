export function Header() {
  return (
    <header>
      <img
        className="header-title-image"
        src="./images/headerImage.png"
        alt="the name Max Verstappen in bold text with a gradient from white to orange"
      />
      <div className="header-sub-container">
        <img
          className="header-profile-image"
          src="./images/maxVerstappen.jpg"
          alt="Max Verstappen cheering a win with fist raised"
        />
        <img
          className="header-team-logo"
          src="./images/redBullLogo.png"
          alt="Red Bull Racing team logo"
        />
      </div>
    </header>
  );
}
