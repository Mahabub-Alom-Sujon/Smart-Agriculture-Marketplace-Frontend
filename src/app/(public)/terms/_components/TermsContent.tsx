import {
    AlertTriangle,
    CheckCircle2,
    Info,
} from "lucide-react";
const TermsContent = () => {
    return (
        <article className="min-w-0 space-y-14">
            {/* 1 */}
            <section id="acceptance" className="scroll-mt-24">
                <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                        <Info className="h-5 w-5 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        1. Acceptance of Terms
                    </h2>
                </div>
                <div className="space-y-4 leading-7 text-gray-600">
                    <p>
                        Welcome to AgroNexa. These Terms & Conditions govern
                        your access to and use of the AgroNexa website,
                        marketplace, applications, and related services.
                    </p>
                    <p>
                        By accessing or using AgroNexa, you agree to be bound
                        by these Terms & Conditions. If you do not agree with
                        any part of these terms, please do not use the
                        platform.
                    </p>
                </div>
            </section>
            {/* 2 */}
            <section id="eligibility" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    2. Eligibility
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    You must be legally permitted to use online marketplace
                    services in your jurisdiction. By using AgroNexa, you
                    represent that the information you provide is accurate
                    and that you have the authority to agree to these terms.
                </p>
            </section>
            {/* 3 */}
            <section id="accounts" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    3. User Accounts
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    Some AgroNexa features require you to create an account.
                    You are responsible for maintaining the confidentiality
                    of your account credentials.
                </p>
                <ul className="mt-6 space-y-3">
                    {[
                        "Provide accurate and current account information.",
                        "Keep your password and account credentials secure.",
                        "Do not share your account with unauthorized persons.",
                        "Notify us if you suspect unauthorized access.",
                        "You are responsible for activity performed through your account.",
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
            {/* 4 */}
            <section id="marketplace" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    4. Marketplace Rules
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    AgroNexa provides a digital marketplace that helps
                    farmers, buyers, and agricultural service providers
                    connect.
                </p>
                <p className="mt-4 leading-7 text-gray-600">
                    Users must communicate respectfully, provide truthful
                    information, and use the platform only for lawful
                    activities.
                </p>
            </section>
            {/* 5 */}
            <section id="farmers" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    5. Farmer Responsibilities
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    Farmers and sellers are responsible for the accuracy of
                    their product listings and information.
                </p>
                <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-6">
                    <ul className="space-y-3">
                        {[
                            "Provide accurate product descriptions.",
                            "Use truthful prices and quantities.",
                            "Keep product availability information updated.",
                            "Provide accurate images where applicable.",
                            "Comply with applicable agricultural and marketplace laws.",
                        ].map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-3 text-sm text-green-800"
                            >
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* 6 */}
            <section id="buyers" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    6. Buyer Responsibilities
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    Buyers are responsible for reviewing product information
                    before placing an order and providing accurate
                    information required for the transaction.
                </p>
                <p className="mt-4 leading-7 text-gray-600">
                    Buyers should communicate respectfully with sellers and
                    use the platform according to these terms.
                </p>
            </section>
            {/* 7 */}
            <section id="products" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    7. Products & Listings
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    Product listings may include descriptions, images, prices,
                    quantities, availability, categories, and seller
                    information.
                </p>
                <p className="mt-4 leading-7 text-gray-600">
                    AgroNexa may remove or restrict listings that violate
                    these Terms, applicable law, or marketplace policies.
                </p>
                <div className="mt-6 flex gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-5">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

                    <p className="text-sm leading-6 text-amber-800">
                        Product availability, quality, pricing, and other
                        listing details may change. Users should review
                        current information before completing a transaction.
                    </p>
                </div>
            </section>
            {/* 8 */}
            <section id="payments" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    8. Orders & Payments
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    Where ordering and payment functionality is available,
                    users agree to provide accurate information and complete
                    transactions according to the applicable payment and
                    marketplace instructions.
                </p>
                <p className="mt-4 leading-7 text-gray-600">
                    Additional terms may apply to specific payment methods,
                    delivery arrangements, refunds, or cancellations.
                </p>
            </section>
            {/* 9 */}
            <section id="prohibited" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    9. Prohibited Activities
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    You may not use AgroNexa to:
                </p>
                <ul className="mt-6 space-y-3">
                    {[
                        "Break or violate applicable laws or regulations.",
                        "Create fraudulent or misleading listings.",
                        "Impersonate another person or organization.",
                        "Attempt to gain unauthorized access to the platform.",
                        "Upload malicious code or harmful content.",
                        "Abuse, harass, threaten, or deceive other users.",
                        "Use the platform for unauthorized commercial activity.",
                        "Interfere with the security or operation of AgroNexa.",
                    ].map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 text-gray-600"
                        >
                            <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-red-500" />

                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>
            {/* 10 */}
            <section id="intellectual" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    10. Intellectual Property
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    The AgroNexa name, branding, website design, software,
                    graphics, text, logos, and other platform materials may
                    be protected by intellectual property laws.
                </p>
                <p className="mt-4 leading-7 text-gray-600">
                    You may not copy, modify, distribute, reproduce, or
                    commercially exploit protected AgroNexa materials without
                    appropriate authorization.
                </p>
            </section>
            {/* 11 */}
            <section id="third-party" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    11. Third-Party Services
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    AgroNexa may integrate with third-party services,
                    payment providers, maps, analytics tools, authentication
                    services, or other external platforms.
                </p>
                <p className="mt-4 leading-7 text-gray-600">
                    Third-party services may have their own terms and privacy
                    policies. AgroNexa is not responsible for policies or
                    practices outside our control.
                </p>
            </section>
            {/* 12 */}
            <section id="liability" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    12. Limitation of Liability
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    AgroNexa provides a marketplace platform intended to help
                    users connect and access agricultural services.
                </p>
                <p className="mt-4 leading-7 text-gray-600">
                    To the extent permitted by applicable law, AgroNexa is
                    not responsible for losses arising from user-generated
                    content, transactions between users, product quality,
                    seller conduct, buyer conduct, or third-party services.
                </p>
                <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                    <p className="text-sm leading-6 text-gray-600">
                        This section does not exclude or limit liability
                        where such exclusion or limitation is prohibited by
                        applicable law.
                    </p>
                </div>
            </section>
            {/* 13 */}
            <section id="termination" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    13. Account Termination
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    You may stop using AgroNexa at any time. Where account
                    deletion functionality is available, you may request
                    deletion according to our applicable procedures.
                </p>
                <p className="mt-4 leading-7 text-gray-600">
                    AgroNexa may suspend or terminate accounts that violate
                    these Terms & Conditions, applicable laws, or platform
                    policies.
                </p>
            </section>
            {/* 14 */}
            <section id="changes" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    14. Changes to These Terms
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                    We may update these Terms & Conditions from time to time
                    to reflect changes to our services, technology, policies,
                    or legal requirements.
                </p>
                <p className="mt-4 leading-7 text-gray-600">
                    The updated version will be posted on this page with a
                    revised effective date. Continued use of the platform
                    after an update may constitute acceptance of the revised
                    terms where permitted by law.
                </p>
            </section>
            {/* 15 */}
            <section id="contact" className="scroll-mt-24">
                <div className="rounded-2xl bg-green-600 p-7 text-white sm:p-8">
                    <h2 className="text-2xl font-bold">
                        15. Contact Us
                    </h2>
                    <p className="mt-3 leading-7 text-green-50">
                        If you have questions about these Terms & Conditions,
                        please contact the AgroNexa team.
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

export default TermsContent;