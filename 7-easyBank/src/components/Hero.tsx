import phoneImg from "../img/image-mockups.png";
import desktopBgImg from "../img/bg-intro-desktop.svg";
import mobileBgImg from "../img/bg-intro-mobile.svg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="section">
          <div className="primaryImages">
            <img src={desktopBgImg} alt="two cut out shapes, one light, one dark" />
            <img src={mobileBgImg} alt="two cut out shapes, one light, one dark" />
            <img src={phoneImg} alt="phones with bank information"/>
          </div>
          <div className="content">
            <h1>Next Generation <br/> digital banking</h1>
            <p>Take your financial life online. Your Easybank accoung will be a one-stop-shop for spending, sasving, budgeting, investing, and much more.</p>
            <button className="primary">Request Invite</button>
          </div>
        </div>
      </div>
    </div>
  )
}