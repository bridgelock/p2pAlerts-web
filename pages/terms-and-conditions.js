import Head from "next/head";
import Navbar from "../components/Navbar";
import contentStyles from "../styles/Content.module.css";

const TermsAndConditions = () => {
  return (
    <div>
      <Head>
        <title>Terms and Conditions - Your Company Name</title>
        <meta
          name="description"
          content="Terms and conditions for Your Company Name."
        />
      </Head>
      <Navbar />
      <div>
        <div className={contentStyles.content}>
          <h1>Terms and Conditions</h1>
          <p>
            Please read these terms and conditions carefully before using our
            website.
          </p>

          <p>
            <strong>Acceptance of Terms</strong>
            <br />
            <br />
            By accessing or using this website, you agree to be bound by these
            terms and conditions. If you do not agree to all the terms and
            conditions, then you may not access the website or use any services.
          </p>

          <p>
            <strong>Use License</strong>
            <br />
            <br />
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Your Company Name's website
            for personal, non-commercial transitory viewing only. This is the
            grant of a license, not a transfer of title, and under this license
            you may not:
          </p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on
              Your Company Name's website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transfer the materials to another person or "mirror" the materials
              on any other server.
            </li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by Your Company Name at any
            time. Upon terminating your viewing of these materials or upon the
            termination of this license, you must destroy any downloaded
            materials in your possession whether in electronic or printed
            format.
          </p>
          <p>
          <strong>Disclaimer</strong>
            <br />
            <br />
            The materials on Your Company Name's website are provided on an 'as
            is' basis. Your Company Name makes no warranties, expressed or
            implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of
            rights.
          </p>
          <p>
          <strong>Limitations</strong>
            <br />
            <br />
            In no event shall Your Company Name or its suppliers be liable for
            any damages (including, without limitation, damages for loss of data
            or profit, or due to business interruption) arising out of the use
            or inability to use the materials on Your Company Name's website,
            even if Your Company Name or a Your Company Name authorized
            representative has been notified orally or in writing of the
            possibility of such damage.
          </p>
          {/* Add more terms and conditions content as needed */}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
