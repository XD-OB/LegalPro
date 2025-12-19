'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
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
                {t.termsOfService?.backToHome || 'Back to Home'}
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-dark font-playfair mb-4">
                {t.termsOfService?.title || 'Terms of Service'}
              </h1>
              <p className="text-gray-600">
                {t.termsOfService?.lastUpdated || 'Last Updated'}: December 18, 2025
              </p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12 space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to our legal services website. These Terms of Service ("Terms") govern your access to and use of our website and legal services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you do not agree to these Terms, please do not use our website or services. We reserve the right to modify these Terms at any time, and your continued use of our services after such modifications constitutes acceptance of the updated Terms.
                </p>
              </section>

              {/* Services Description */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  2. Services Description
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We provide professional legal services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Corporate law and business formation</li>
                  <li>Contract drafting and review</li>
                  <li>Real estate transactions and property law</li>
                  <li>Intellectual property protection</li>
                  <li>Civil litigation and dispute resolution</li>
                  <li>Legal consultation and advisory services</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  The specific services provided will be outlined in individual engagement agreements with clients.
                </p>
              </section>

              {/* No Attorney-Client Relationship */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  3. No Attorney-Client Relationship
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Important:</strong> Your use of this website or communication with us through the website, email, or contact forms does not create an attorney-client relationship.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  An attorney-client relationship is established only when:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>We have agreed to represent you in a specific legal matter</li>
                  <li>We have conducted a conflict of interest check</li>
                  <li>We have executed a formal engagement letter or retainer agreement</li>
                  <li>You have agreed to our fee structure and payment terms</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Information you submit through this website before establishing an attorney-client relationship may not be treated as privileged or confidential.
                </p>
              </section>

              {/* Legal Advice Disclaimer */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  4. Legal Advice Disclaimer
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The information provided on this website is for general informational purposes only and does not constitute legal advice. Every legal situation is unique, and information on this website may not apply to your specific circumstances.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Do not act or refrain from acting based solely on information from this website without seeking professional legal counsel. We are not responsible for any actions taken or not taken based on information from this website.
                </p>
              </section>

              {/* Engagement and Fees */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  5. Engagement and Fees
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">
                      5.1 Engagement Process
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Before we can provide legal services, you must complete our engagement process, which includes a consultation, conflict check, and execution of an engagement agreement. We reserve the right to decline representation for any reason.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">
                      5.2 Fee Structure
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Our fees vary depending on the type and complexity of legal services required. Fee arrangements may include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Hourly rates for time spent on your matter</li>
                      <li>Flat fees for specific services or transactions</li>
                      <li>Retainer arrangements for ongoing legal support</li>
                      <li>Contingency fees (where permitted by law)</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      All fee arrangements will be clearly outlined in your engagement agreement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">
                      5.3 Payment Terms
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Payment terms, including retainer requirements and billing frequency, will be specified in your engagement agreement. Failure to pay fees when due may result in suspension or termination of services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Client Responsibilities */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  6. Client Responsibilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As our client, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Provide complete, accurate, and truthful information</li>
                  <li>Respond promptly to our requests for information and documentation</li>
                  <li>Follow our legal advice and recommendations</li>
                  <li>Pay fees and expenses as agreed in the engagement agreement</li>
                  <li>Cooperate fully in the representation process</li>
                  <li>Inform us immediately of any changes in your situation that may affect your legal matter</li>
                  <li>Respect our professional obligations and ethical duties</li>
                </ul>
              </section>

              {/* Confidentiality */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  7. Confidentiality and Privilege
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Once an attorney-client relationship is established, we are bound by strict professional duties of confidentiality. All communications and information related to your representation are protected by attorney-client privilege and professional secrecy.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We will not disclose your confidential information except as required by law, permitted by ethical rules, necessary to provide legal services, or with your informed consent.
                </p>
              </section>

              {/* Conflicts of Interest */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  8. Conflicts of Interest
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We conduct thorough conflict of interest checks before accepting representation. If a conflict arises during representation, we will notify you immediately and may be required to withdraw from representation. We reserve the right to decline or terminate representation if a conflict of interest exists or develops.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  9. Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we strive to provide excellent legal services, we cannot guarantee specific outcomes or results. Legal matters involve inherent uncertainties, and outcomes depend on many factors beyond our control, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Actions of opposing parties and their counsel</li>
                  <li>Decisions by judges, juries, or arbitrators</li>
                  <li>Changes in applicable laws or regulations</li>
                  <li>Availability and credibility of evidence and witnesses</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To the fullest extent permitted by law and professional regulations, our liability is limited to the fees paid for the specific services in question.
                </p>
              </section>

              {/* Website Use */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  10. Website Use and Restrictions
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to use this website only for lawful purposes. You may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Use the website in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Interfere with the proper functioning of the website</li>
                  <li>Use automated systems to access the website without permission</li>
                  <li>Copy, modify, or distribute website content without authorization</li>
                  <li>Use the website to transmit harmful or malicious code</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  11. Intellectual Property Rights
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is our property or the property of our licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from our website content without our express written permission.
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  12. Termination of Services
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">
                      12.1 Client Termination
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      You have the right to terminate our services at any time by providing written notice. You remain responsible for payment of fees for services rendered up to the termination date and any costs incurred on your behalf.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">
                      12.2 Attorney Termination
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      We may terminate representation if:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>You fail to pay fees or costs as agreed</li>
                      <li>You fail to cooperate or follow our advice</li>
                      <li>Continuing representation would violate ethical rules</li>
                      <li>A conflict of interest arises</li>
                      <li>The representation becomes unreasonably difficult</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      We will provide appropriate notice and assist with transition to new counsel where required by professional rules.
                    </p>
                  </div>
                </div>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  13. Governing Law and Jurisdiction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction where our firm is licensed to practice. Any disputes arising from these Terms or our services shall be resolved in the courts of that jurisdiction.
                </p>
              </section>

              {/* Dispute Resolution */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  14. Dispute Resolution
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In the event of a dispute regarding our services or fees, we encourage early communication to resolve the matter informally. If informal resolution is not successful, disputes may be subject to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Mediation or arbitration as specified in the engagement agreement</li>
                  <li>Fee arbitration programs offered by bar associations</li>
                  <li>Court proceedings as a last resort</li>
                </ul>
              </section>

              {/* Professional Responsibility */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  15. Professional Responsibility
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our attorneys are licensed to practice law and are bound by professional rules of conduct, including duties of competence, diligence, communication, and ethical behavior. We are subject to regulation by the bar association and courts in our jurisdiction.
                </p>
              </section>

              {/* Severability */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  16. Severability
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                </p>
              </section>

              {/* Entire Agreement */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  17. Entire Agreement
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms, together with any engagement agreement you execute with us, constitute the entire agreement between you and our firm regarding the use of our website and services, superseding any prior agreements or understandings.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 font-playfair">
                  18. Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-2">
                    <strong className="text-primary-dark">Email:</strong> contact@yourlawfirm.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-primary-dark">Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-primary-dark">Address:</strong> 123 Legal Street, Suite 100, City, State, ZIP
                  </p>
                </div>
              </section>

              {/* Acknowledgment */}
              <section className="bg-primary-gold bg-opacity-10 p-6 rounded-lg border-l-4 border-primary-gold">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-primary-dark">By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
