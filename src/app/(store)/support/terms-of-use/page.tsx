// Terms of Use page, modeled after Gymshark
// 参考 Gymshark https://support.gymshark.com/en-US/pages/terms-of-use-us
// 英文内容，中文注释
import React from "react";

export default function TermsOfUsePage() {
  return (
    <main className="container py-8 max-w-3xl mx-auto">
      {/* 页面主标题 */}
      <h1 className="text-3xl font-bold mb-6 text-center">Terms of Use</h1>
      {/* 简要说明 */}
      <section className="mb-8">
        <p className="mb-4">By accessing or using our website, you agree to be bound by these Terms of Use. Please read them carefully. We may update these terms from time to time, so please check this page regularly.</p>
      </section>
      {/* Use of the site */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Use of the Site</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>You may use our site only for lawful purposes.</li>
          <li>You must not misuse our site by knowingly introducing viruses or other harmful material.</li>
          <li>We reserve the right to restrict or terminate your access to the site at any time without notice.</li>
        </ul>
      </section>
      {/* Intellectual Property */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Intellectual Property</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>All content on this site, including text, graphics, logos, and images, is the property of Go Store or its licensors.</li>
          <li>You may not use, reproduce, or distribute any content without our prior written permission.</li>
        </ul>
      </section>
      {/* Limitation of Liability */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Limitation of Liability</h2>
        <p>We are not liable for any damages or losses resulting from your use of our site.</p>
      </section>
      {/* 其它条款可继续补充... */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">More Information</h2>
        <p>For the full terms of use, please contact our support team or visit our website for the latest updates.</p>
      </section>
    </main>
  );
} 