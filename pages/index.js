import Navbar from "../components/Navbar";
import homeStyles from "../styles/Home.module.css";
import contentStyles from "../styles/Content.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={contentStyles.content}>
        <h1>P2P Alerts App</h1>
        <p>
          Welcome to P2P Alerts App! 🚀 Discover the ultimate hub for managing
          your p2p exchange journey. Create personalized watchlists, set alerts
          for P2P exchanges, and stay ahead of the market curve. Before diving
          in, take a moment to review our Terms and Conditions and Privacy
          Policy to ensure a secure and seamless experience.
        </p>
        <div className={homeStyles.container}>
          <img src="/app1.png" alt="App1" width={300} />
          <img src="/app2.png" alt="App2" width={300} />
          <img src="/app3.png" alt="App3" width={300} />
        </div>
      </div>
    </div>
  );
}
