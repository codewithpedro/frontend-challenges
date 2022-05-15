import onlineSvg from "../img/icon-online.svg";
import budgetingSvg from "../img/icon-budgeting.svg";
import onboardingSvg from "../img/icon-onboarding.svg";
import apiSvg from "../img/icon-api.svg";

export default function ChooseSection() {
  return (
    <div className="choose">
      <div className="container">
        <h2 className="title">Why Choose Easybank?</h2>
        <p className="subtitle">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        <div className="section">
          <div className="column">
            <img src={onlineSvg} alt="hand holding on to debet card" />
            <h4>Online Banking</h4>
            <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
          </div>
          <div className="column">
            <img src={budgetingSvg} alt="mobile phone displaying bank information" />
            <h4>Simple Budgeting</h4>
            <p>See exactly where your money goes each month. Recieve notifications when you're close to hitting your limits</p>
          </div>
          <div className="column">
            <img src={onboardingSvg} alt="People checking their accounts" />
            <h4>Fast Onboarding</h4>
            <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away</p>
          </div>
          <div className="column">
            <img src={apiSvg} alt="CPU graph with wires spearding outside" />
            <h4>Open API</h4>
            <p>Manage your savings, investments, pension, and much more form one account. Tracking your money has never been easier.</p>
          </div>
        </div>
      </div>
    </div>
  )
}