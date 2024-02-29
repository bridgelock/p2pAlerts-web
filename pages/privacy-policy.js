import Head from "next/head";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy - Your Company Name</title>
        <meta
          name="description"
          content="Privacy policy for P2P Alerts."
        />
      </Head>
      <Navbar />
      <div className="privacy-policy-content">
        <h1>Privacy Policy</h1>
        <p>
          We, as P2P Alerts team, take your privacy seriously. This Privacy
          Policy describes how we collect, use, and protect any information that
          you provide while using our App/Website/Service.
        </p>
        <p>
          <strong>Information We Collect</strong>
          <br />
          <br />
          We do not collect any personal information or data from our users. We
          do not require you to create an account or provide any personal
          details to use our App/Website/Service.
        </p>
        <p>
          <strong>How We Use Information</strong>
          <br />
          <br />
          Since we do not collect any personal information, we do not use any
          information about you. Our App/Website/Service is designed to function
          without the need for personal data collection.
        </p>
        <p>
          <strong>Third-Party Services</strong>
          <br />
          <br />
          We do not utilize any third-party services that may collect or use
          your personal information. We do not incorporate any analytics tools
          or advertising platforms that may track your activity.
        </p>
        <p>
          <strong>Data Security</strong>
          <br />
          <br />
          Even though we do not collect any personal information, we take
          reasonable precautions to protect any non-personal information you may
          provide while using our App/Website/Service.
        </p>
        <p>
          <strong>Changes to This Privacy Policy</strong>
          <br />
          <br />
          We reserve the right to update or change our Privacy Policy at any
          time. Any changes to this policy will be reflected on this page.
        </p>
        <p>
          <strong>Contact Us</strong>
          <br />
          <br />
          If you have any questions or concerns about our Privacy Policy, please
          contact us at bridgelockapp@gmail.com
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
