export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-[#f37003] tracking-wide uppercase">
                Legal
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Last Updated: May 20, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg prose-foreground max-w-none space-y-12">
            
            {/* Introduction */}
            <div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Welcome to Aadiyog, a health and wellness mobile application. We are committed to protecting your privacy and ensuring the security of your personal health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-foreground mb-4 mt-8">1.1 Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Name, email address, phone number</li>
                <li>Date of birth and gender</li>
                <li>Profile photo (optional)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4 mt-8">1.2 Health and Wellness Data</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Health metrics (weight, height, BMI, blood pressure, heart rate)</li>
                <li>Fitness activities and exercise logs</li>
                <li>Sleep patterns and duration</li>
                <li>Nutrition and dietary information</li>
                <li>Mood and wellness tracking data</li>
                <li>Medical conditions and symptoms (if provided)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4 mt-8">1.3 Device Information</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Device type, operating system, and version</li>
                <li>Unique device identifiers</li>
                <li>Mobile network information</li>
                <li>Location data (with your permission)</li>
                <li>Camera and microphone access (for specific features)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4 mt-8">1.4 Usage Information</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>App usage patterns and frequency</li>
                <li>Features accessed and time spent</li>
                <li>In-app interactions and preferences</li>
                <li>Crash reports and error logs</li>
              </ul>
            </div>

            {/* 2. How We Use Your Information */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">2. How We Use Your Information</h2>
              <p className="text-foreground/80 mb-4">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Provide personalized health and wellness recommendations</li>
                <li>Track your progress and generate insights</li>
                <li>Send reminders and notifications</li>
                <li>Improve app functionality and user experience</li>
                <li>Provide customer support</li>
                <li>Conduct research and analytics (in aggregated, anonymized form)</li>
                <li>Ensure app security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* 3. Information Sharing and Disclosure */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">3. Information Sharing and Disclosure</h2>

              <h3 className="text-xl font-semibold text-foreground mb-4 mt-4">3.1 We Do Not Sell Your Personal Information</h3>
              <p className="text-foreground/80 mb-6">We do not sell, rent, or trade your personal health information to third parties for marketing purposes.</p>

              <h3 className="text-xl font-semibold text-foreground mb-4">3.2 Limited Sharing Circumstances</h3>
              <ul className="list-disc list-inside space-y-4 text-foreground/80 ml-4">
                <li>
                  <strong>With Your Consent:</strong> When you explicitly authorize us to share specific information with our wellness consultants, yoga instructors, or other third-party services.
                </li>
                <li>
                  <strong>Service Providers:</strong> With trusted third-party vendors who assist in app operations (cloud storage, analytics, customer support), under strict contractual obligations to protect your data.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, legal process, or government request, or to protect rights, property, or safety.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with continued protection of your information.
                </li>
                <li>
                  <strong>Emergency Situations:</strong> To prevent serious harm or in medical emergencies, as permitted by law.
                </li>
              </ul>
            </div>

            {/* 4. Data Security */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">4. Data Security</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>End-to-end encryption for sensitive health data</li>
                <li>Secure data transmission (TLS/SSL)</li>
                <li>Regular security audits and assessments</li>
                <li>Limited access controls and authentication</li>
                <li>Secure cloud storage with reputable providers</li>
                <li>Regular software updates and security patches</li>
              </ul>
            </div>

            {/* 5. Your Rights and Choices */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">5. Your Rights and Choices</h2>

              <h3 className="text-xl font-semibold text-foreground mb-4 mt-4">5.1 Access and Control</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>View and download your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Export your data in a portable format</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4 mt-8">5.2 Privacy Settings</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Control what information is shared</li>
                <li>Manage notification preferences</li>
                <li>Adjust location sharing settings</li>
                <li>Opt out of non-essential data collection</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4 mt-8">5.3 Communication Preferences</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Unsubscribe from marketing communications</li>
                <li>Manage push notifications</li>
                <li>Control reminder settings</li>
              </ul>
            </div>

            {/* 6. Data Retention */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">6. Data Retention</h2>
              <p className="text-foreground/80">We retain your information while your account is active or as needed for services, legal obligations, or business purposes. If you delete your account, personal information is deleted within 30 days unless otherwise required.</p>
            </div>

            {/* 7. Children's Privacy */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">7. Children's Privacy</h2>
              <p className="text-foreground/80">Our app is not intended for children under 13. We do not knowingly collect personal information from them. If discovered, it will be deleted immediately.</p>
            </div>

            {/* 8. International Data Transfers */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">8. International Data Transfers</h2>
              <p className="text-foreground/80">If you're outside India, your data may be processed in other countries where our servers or providers are located. Safeguards are in place to protect your data during such transfers.</p>
            </div>

            {/* 9. Health Information Protections */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">9. Health Information Protections</h2>

              <h3 className="text-xl font-semibold text-foreground mb-4 mt-4">9.1 HIPAA Compliance</h3>
              <p className="text-foreground/80 mb-4">The app complies with HIPAA when used in healthcare settings.</p>

              <h3 className="text-xl font-semibold text-foreground mb-4">9.2 Health Data Sensitivity</h3>
              <p className="text-foreground/80">All health data is handled with strict security and confidentiality, beyond standard personal data practices.</p>
            </div>

            {/* 10. Third-Party Integration */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">10. Third-Party Integration</h2>

              <h3 className="text-xl font-semibold text-foreground mb-4 mt-4">10.1 Health Platforms</h3>
              <p className="text-foreground/80 mb-4">Integrations like Apple Health or Google Fit require permission and follow their policies.</p>

              <h3 className="text-xl font-semibold text-foreground mb-4">10.2 Wearable Devices</h3>
              <p className="text-foreground/80">Data from fitness trackers is handled per this policy and the manufacturer's terms.</p>
            </div>

            {/* 11. Cookies and Analytics */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">11. Cookies and Analytics</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Remember your preferences</li>
                <li>Analyze app usage patterns</li>
                <li>Improve performance and functionality</li>
              </ul>
            </div>

            {/* 12. Updates to This Policy */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">12. Updates to This Policy</h2>
              <p className="text-foreground/80">We may update this Privacy Policy periodically. We will notify you of significant changes via app or email. Continued use of the app means you accept the updated policy.</p>
            </div>

            {/* 13. Contact Information */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">13. Contact Information</h2>
              <p className="text-foreground/80 whitespace-pre-line">
                For questions, contact us at:
                Email: support@aadiyog.com
                Phone: +91 83059 09208
                Data Protection Officer: dpo@aadiyog.com
              </p>
            </div>

            {/* 14. Complaint Resolution */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">14. Complaint Resolution</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Contact us using the information above</li>
                <li>File a complaint with relevant data protection authorities</li>
                <li>[Include specific regulatory body contact info if applicable]</li>
              </ul>
            </div>

            {/* 15. Governing Law */}
            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">15. Governing Law</h2>
              <p className="text-foreground/80">This policy is governed by the laws of Ujjain, India. Disputes shall be resolved in courts located in Ujjain, Madhya Pradesh.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}