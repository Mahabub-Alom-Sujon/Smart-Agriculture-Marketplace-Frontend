import { CheckCircle2, Info } from "lucide-react";
const PrivacyContent = () => {
    return (
        <article className="min-w-0 space-y-14">
            {/* Introduction */}
            <section id="introduction" className="scroll-mt-24">
                <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                        <Info className="h-5 w-5 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        1. Introduction
                    </h2>
                </div>
                <div className="space-y-4 text-gray-600 leading-7">
                    <p>
                        Welcome to AgroNexa. We respect your privacy and are
                        committed to protecting the personal information you
                        share with us.
                    </p>
                    <p>
                        This Privacy Policy explains how AgroNexa collects,
                        uses, stores, and protects information when you use
                        our website, marketplace, services, and related
                        features.
                    </p>
                    <p>
                        By using AgroNexa, you acknowledge that you have read
                        and understood this Privacy Policy.
                    </p>
                </div>
            </section>
            {/* Information */}
            <section id="information" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    2. Information We Collect
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    Depending on how you use AgroNexa, we may collect
                    different types of information.
                </p>
                <div className="mt-6 space-y-6">
                    <div>
                        <h3 className="font-bold text-gray-900">
                            Account Information
                        </h3>
                        <p className="mt-2 leading-7 text-gray-600">
                            When you create an account, we may collect your
                            name, email address, phone number, password,
                            profile information, and account role.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">
                            Marketplace Information
                        </h3>
                        <p className="mt-2 leading-7 text-gray-600">
                            Farmers and sellers may provide information about
                            products, prices, quantities, categories, and
                            other marketplace details.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">
                            Communication Information
                        </h3>
                        <p className="mt-2 leading-7 text-gray-600">
                            If you contact us, we may keep the information
                            included in your message and our response.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">
                            Technical Information
                        </h3>
                        <p className="mt-2 leading-7 text-gray-600">
                            We may automatically receive information such as
                            browser type, device information, IP address,
                            pages visited, and general usage information.
                        </p>
                    </div>
                </div>
            </section>
            {/* Usage */}
            <section id="usage" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    3. How We Use Information
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    We may use collected information for purposes including:
                </p>
                <ul className="mt-6 space-y-3">
                    {[
                        "Creating and managing user accounts",
                        "Providing marketplace and platform services",
                        "Processing and managing user requests",
                        "Improving our website and user experience",
                        "Communicating with users about services",
                        "Detecting fraud, abuse, and security issues",
                        "Maintaining and improving platform performance",
                        "Complying with applicable legal requirements",
                    ].map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 text-gray-600"
                        >
                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />

                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>
            {/* Sharing */}
            <section id="sharing" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    4. Information Sharing
                </h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-600">
                    <p>
                        We do not sell your personal information as part of
                        our ordinary business operations.
                    </p>
                    <p>
                        We may share information with trusted service
                        providers when necessary to operate, maintain, or
                        improve our services.
                    </p>
                    <p>
                        We may also disclose information when required by law,
                        to protect our rights, prevent fraud, or protect the
                        safety of users and the platform.
                    </p>
                </div>
            </section>
            {/* Security */}
            <section id="security" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    5. Data Security
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    We use reasonable technical and organizational measures
                    designed to protect personal information against
                    unauthorized access, alteration, disclosure, or
                    destruction.
                </p>
                <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-5">
                    <p className="text-sm leading-6 text-green-800">
                        <strong>Important:</strong> No online service can
                        guarantee absolute security. We continuously work to
                        improve the security of our platform and systems.
                    </p>
                </div>
            </section>
            {/* Cookies */}
            <section id="cookies" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    6. Cookies
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    AgroNexa may use cookies and similar technologies to
                    remember preferences, maintain sessions, understand
                    platform usage, and improve the overall user experience.
                </p>
                <p className="mt-4 leading-7 text-gray-600">
                    You may configure your browser to refuse or limit
                    cookies. However, some features of the platform may not
                    function correctly without certain cookies.
                </p>
            </section>
            {/* Rights */}
            <section id="rights" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    7. Your Privacy Rights
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    Depending on applicable laws, you may have rights
                    regarding your personal information.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                        "Access your personal information",
                        "Correct inaccurate information",
                        "Request deletion of certain information",
                        "Withdraw certain permissions",
                        "Ask questions about our data practices",
                        "Submit privacy-related requests",
                    ].map((item) => (
                        <div
                            key={item}
                            className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                        >
                            <p className="text-sm text-gray-700">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Children */}
            <section id="children" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    8. Children&apos;s Privacy
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    AgroNexa is not intended to knowingly collect personal
                    information from children where such collection is
                    prohibited by applicable law. If you believe a child has
                    provided personal information to us, please contact us.
                </p>
            </section>
            {/* Updates */}
            <section id="updates" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    9. Policy Updates
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    We may update this Privacy Policy from time to time to
                    reflect changes to our services, technology, or legal
                    requirements.
                </p>
                <p className="mt-4 leading-7 text-gray-600">
                    When we make changes, we will update the effective date
                    displayed at the beginning of this policy.
                </p>
            </section>
            {/* Contact */}
            <section id="contact" className="scroll-mt-24">
                <div className="rounded-2xl bg-green-600 p-7 text-white sm:p-8">
                    <h2 className="text-2xl font-bold">
                        10. Contact Us
                    </h2>
                    <p className="mt-3 leading-7 text-green-50">
                        If you have questions, concerns, or requests regarding
                        this Privacy Policy, please contact the AgroNexa team.
                    </p>
                    <div className="mt-6 space-y-2 text-sm">
                        <p>
                            <strong>Email:</strong>{" "}
                            support@agronexa.com
                        </p>
                        <p>
                            <strong>Location:</strong>{" "}
                            Dhaka, Bangladesh
                        </p>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default PrivacyContent;