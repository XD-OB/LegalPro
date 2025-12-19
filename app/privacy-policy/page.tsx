'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-12">
              <Link
                href="/"
                className="text-primary-gold hover:text-primary-dark transition-colors mb-6 inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                {t.privacyPolicy?.backToHome || 'Back to Home'}
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-dark font-playfair mb-4">
                {t.privacyPolicy?.title || 'Privacy Policy'}
              </h1>
              <p className="text-gray-600">
                {t.privacyPolicy?.lastUpdated || 'Last Updated'}: December 18, 2025
              </p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12 space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  1. Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to our legal services website. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  2. Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">
                      2.1 Personal Information
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      We collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Contact us through our contact form</li>
                      <li>Request legal consultation or services</li>
                      <li>Subscribe to our newsletter or communications</li>
                      <li>Engage with us through WhatsApp or other communication channels</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      This information may include: name, email address, phone number, address, and any other information you choose to provide in your communications with us.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">
                      2.2 Client Information
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      When you engage our legal services, we collect information necessary to provide legal representation, including but not limited to: case details, legal documents, financial information relevant to your case, and any other information required to fulfill our professional obligations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">
                      2.3 Automatically Collected Information
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      When you visit our website, we automatically collect certain information about your device, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>IP address and browser type</li>
                      <li>Operating system and device information</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website and search terms used</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect or receive to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Provide, operate, and maintain our legal services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Process your legal matters and represent your interests</li>
                  <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations and professional duties</li>
                  <li>Protect against fraudulent, unauthorized, or illegal activity</li>
                </ul>
              </section>

              {/* Attorney-Client Privilege */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  4. Attorney-Client Privilege and Confidentiality
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We take our professional duty of confidentiality very seriously. All information shared with us in the context of legal representation is protected by attorney-client privilege and professional secrecy obligations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We will not disclose confidential client information except as required by law, with your explicit consent, or as necessary to provide legal services on your behalf.
                </p>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  5. Information Sharing and Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Legal Obligations:</strong> When required by law, court order, or legal process</li>
                  <li><strong>Professional Consultants:</strong> With other legal professionals, experts, or consultants working on your case (subject to confidentiality agreements)</li>
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our website and services (subject to strict confidentiality obligations)</li>
                  <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  6. Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Secure server infrastructure and encrypted data transmission</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Regular security assessments and updates</li>
                  <li>Staff training on data protection and confidentiality</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  7. Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. Client files and related information are retained in accordance with professional regulations and legal requirements governing legal practice.
                </p>
              </section>

              {/* Your Privacy Rights */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  8. Your Privacy Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal and professional obligations)</li>
                  <li><strong>Objection:</strong> Object to the processing of your personal information</li>
                  <li><strong>Data Portability:</strong> Request transfer of your information to another service provider</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where consent was the basis</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the contact information provided below.
                </p>
              </section>

              {/* Third-Party Websites */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  9. Third-Party Websites
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              {/* International Data Transfers */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  10. International Data Transfers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with this privacy policy and applicable data protection laws.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  11. Children's Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  12. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date. We encourage you to review this privacy policy periodically for any changes.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  13. Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions or concerns about this privacy policy or our data practices, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-2">
                    <strong className="text-primary-dark">Email:</strong> privacy@yourlawfirm.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-primary-dark">Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-primary-dark">Address:</strong> 123 Legal Street, Suite 100, City, State, ZIP
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
