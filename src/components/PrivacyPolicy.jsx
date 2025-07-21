import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8 mb-1">PRIVACY POLICY</h1>
      <p className="text-center text-black mb-8">Last Updated May 20, 2025</p>
      <div className="px-4 py-8 bg-white">

        <p className="text-xl font-normal mx-6 mb-6">
          Welcome to Aadiyog, a health and wellness mobile application. We are committed to protecting your privacy and ensuring the security of your personal health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
        </p>

        <h2 className="text-2xl font-semibold mx-6 mb-4">2. Information We Collect</h2>

        <h3 className="text-xl font-medium mx-8 mb-2">2.1 Personal Information</h3>
        <ul className="list-disc list-inside mx-8 my-4">
          <li className="font-normal">Name, email address, phone number</li>
          <li className="font-normal">Date of birth and gender</li>
          <li className="font-normal">Profile photo (optional)</li>
        </ul>

        <h3 className="text-xl font-medium mx-8 mb-2">2.2 Health and Wellness Data</h3>
        <ul className="list-disc list-inside mx-8 my-4">
          <li className="font-normal">Health metrics (weight, height, BMI, blood pressure, heart rate)</li>
          <li className="font-normal">Fitness activities and exercise logs</li>
          <li className="font-normal">Sleep patterns and duration</li>
          <li className="font-normal">Nutrition and dietary information</li>
          <li className="font-normal">Mood and wellness tracking data</li>
          <li className="font-normal">Medical conditions and symptoms (if provided)</li>
        </ul>

        <h3 className="text-xl font-medium mx-8 mb-2">2.3 Device Information</h3>
        <ul className="list-disc list-inside mx-8 my-4">
          <li className="font-normal">Device type, operating system, and version</li>
          <li className="font-normal">Unique device identifiers</li>
          <li className="font-normal">Mobile network information</li>
          <li className="font-normal">Location data (with your permission)</li>
          <li className="font-normal">Camera and microphone access (for specific features)</li>
        </ul>

        <h3 className="text-xl font-medium mx-8 mb-2">2.4 Usage Information</h3>
        <ul className="list-disc list-inside mx-8 my-4">
          <li className="font-normal">App usage patterns and frequency</li>
          <li className="font-normal">Features accessed and time spent</li>
          <li className="font-normal">In-app interactions and preferences</li>
          <li className="font-normal">Crash reports and error logs</li>
        </ul>

        <h2 className="text-2xl font-semibold mx-6 mb-4">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside mx-8 my-4">
            <p>We use your information to:</p>
          <li className="font-normal">Provide personalized health and wellness recommendations</li>
          <li className="font-normal">Track your progress and generate insights</li>
          <li className="font-normal">Send reminders and notifications</li>
          <li className="font-normal">Improve app functionality and user experience</li>
          <li className="font-normal">Provide customer support</li>
          <li className="font-normal">Conduct research and analytics (in aggregated, anonymized form)</li>
          <li className="font-normal">Ensure app security and prevent fraud</li>
          <li className="font-normal">Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mx-6 mb-4">4. Information Sharing and Disclosure</h2>

        <h3 className="text-xl font-medium mx-8 mb-2">4.1 We Do Not Sell Your Personal Information</h3>
        <p className="mx-8 my-2">We do not sell, rent, or trade your personal health information to third parties for marketing purposes.</p>

        <h3 className="text-xl font-medium mx-8 mb-2">4.2 Limited Sharing Circumstances</h3>
        <ul className="list-disc list-inside mx-8 my-4">
          <li>
   
  <span className="font-bold">With Your Consent:</span> When you explicitly authorize us to share specific information with our wellness consultants, yoga instructors, or other third-party services.

          </li>
          <li> <span className="font-bold">Service Providers:</span> With trusted third-party vendors who assist in app operations (cloud storage, analytics, customer support), under strict contractual obligations to protect your data.</li>
          <li><span className="font-bold">Legal Requirements:</span> When required by law, legal process, or government request, or to protect rights, property, or safety.</li>
          <li><span className="font-bold">Business Transfers:</span> In connection with a merger, acquisition, or sale of assets, with continued protection of your information.</li>
          <li><span className="font-bold">Emergency Situations:</span> To prevent serious harm or in medical emergencies, as permitted by law.</li>
        </ul>

        <h2 className="text-2xl font-semibold mx-6 mb-4">5. Data Security</h2>
        <ul className="list-disc list-inside mx-8 my-4">
          <li className="font-normal">End-to-end encryption for sensitive health data</li>
          <li className="font-normal">Secure data transmission (TLS/SSL)</li>
          <li className="font-normal">Regular security audits and assessments</li>
          <li className="font-normal">Limited access controls and authentication</li>
          <li className="font-normal">Secure cloud storage with reputable providers</li>
          <li className="font-normal">Regular software updates and security patches</li>
        </ul>

        <h2 className="text-2xl font-semibold mx-6 mb-4">6. Your Rights and Choices</h2>

        <h3 className="text-xl font-medium mx-8 mb-2">6.1 Access and Control</h3>
        <ul className="list-disc list-inside mx-8 my-4">
          <li className="font-nonormal">View and download your personal data</li>
          <li className="font-nonormal">Correct inaccurate information</li>
          <li className="font-nonormal">Delete your account and associated data</li>
          <li className="font-nonormal">Export your data in a portable format</li>
        </ul>

        <h3 className="text-xl font-medium mx-8 mb-2">6.2 Privacy Settings</h3>
        <ul className="list-disc list-inside mx-8 my-4">
          <li className="font-nonormal">Control what information is shared</li>
          <li className="font-nonormal">Manage notification preferences</li>
          <li className="font-nonormal">Adjust location sharing settings</li>
          <li className="font-nonormal">Opt out of non-essential data collection</li>
        </ul>

        <h3 className="text-xl font-medium mx-8 mb-2">6.3 Communication Preferences</h3>
        <ul className="list-disc list-inside mx-8 my-4">
          <li className="font-nonormal">Unsubscribe from marketing communications</li>
          <li className="font-nonormal">Manage push notifications</li>
          <li className="font-nonormal">Control reminder settings</li>
        </ul>

        <h2 className="text-2xl font-semibold mx-6 mb-4">7. Data Retention</h2>
        <p className="mx-8 my-4">We retain your information while your account is active or as needed for services, legal obligations, or business purposes. If you delete your account, personal information is deleted within 30 days unless otherwise required.</p>

        <h2 className="text-2xl font-semibold mx-6 mb-4">8. Children's Privacy</h2>
        <p className="mx-8 my-4">Our app is not intended for children under 18. We do not knowingly collect personal information from them. If discovered, it will be deleted immediately.</p>

        <h2 className="text-2xl font-semibold mx-6 mb-4">9. International Data Transfers</h2>
        <p className="mx-8 my-4">If you're outside India, your data may be processed in other countries where our servers or providers are located. Safeguards are in place to protect your data during such transfers.</p>

        <h2 className="text-2xl font-semibold mx-6 mb-4">10. Health Information Protections</h2>

        <h3 className="text-xl font-medium mx-8 mb-2">10.1 HIPAA Compliance</h3>
        <p className="mx-8 my-4">The app complies with HIPAA when used in healthcare settings.</p>

        <h3 className="text-xl font-medium mx-8 mb-2">10.2 Health Data Sensitivity</h3>
        <p className="mx-8 my-4">All health data is handled with strict security and confidentiality, beyond standard personal data practices.</p>

        <h2 className="text-2xl font-semibold mx-6 mb-4">11. Third-Party Integration</h2>

        <h3 className="text-xl font-medium mx-8 mb-2">11.1 Health Platforms</h3>
        <p className="mx-8 my-4">Integrations like Apple Health or Google Fit require permission and follow their policies.</p>

        <h3 className="text-xl font-medium mx-8 mb-2">11.2 Wearable Devices</h3>
        <p className="mx-8 my-4">Data from fitness trackers is handled per this policy and the manufacturer’s terms.</p>

        <h2 className="text-2xl font-semibold mx-6 mb-4">12. Cookies and Analytics</h2>
        <ul className="list-disc list-inside mx-8 my-4">
          <li className="font-normal">Remember your preferences</li>
          <li className="font-normal">Analyze app usage patterns</li>
          <li className="font-normal">Improve performance and functionality</li>
        </ul>

        <h2 className="text-2xl font-semibold mx-6 mb-4">13. Updates to This Policy</h2>
        <p className="mx-8 my-4">We may update this Privacy Policy periodically. We will notify you of significant changes via app or email. Continued use of the app means you accept the updated policy.</p>

        <h2 className="text-2xl font-semibold mx-6 mb-4">14. Contact Information</h2>
        <p className="mx-8 my-4">
          For questions, contact us at:<br />
          Email: support@aadiyog.com<br />
          Phone: +91 83059 09208<br />
          Data Protection Officer: dpo@aadiyog.com
        </p>

        <h2 className="text-2xl font-semibold mx-6 mb-4">15. Complaint Resolution</h2>
        <ul className="list-disc list-inside mx-8 my-4">
          <li className="font-normal">Contact us using the information above</li>
          <li className="font-normal">File a complaint with relevant data protection authorities</li>
          <li className="font-normal">[Include specific regulatory body contact info if applicable]</li>
        </ul>

        <h2 className="text-2xl font-semibold mx-6 mb-4">16. Governing Law</h2>
        <p className="mx-8 my-4">This policy is governed by the laws of Ujjain, India. Disputes shall be resolved in courts located in Ujjain, Madhya Pradesh.</p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
