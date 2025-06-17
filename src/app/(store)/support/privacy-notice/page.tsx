// Privacy Notice page, modeled after Gymshark
// 参考 Gymshark https://support.gymshark.com/en-US/pages/privacy-notice-gs
// 英文内容，中文注释
import React from "react";

export default function PrivacyNoticePage() {
  return (
    <main className="container py-8 max-w-3xl mx-auto">
      {/* 页面主标题 */}
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Notice</h1>
      {/* 简要说明 */}
      <section className="mb-8">
        <p className="mb-4">Your privacy is important to us. This notice explains how we collect, use, and protect your personal information. By using our website, you agree to the terms of this Privacy Notice.</p>
      </section>
      {/* What information we collect */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. What information we collect</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Information you provide to us directly, such as your name, email address, and payment details.</li>
          <li>Information collected automatically, such as IP address, browser type, and usage data.</li>
        </ul>
      </section>
      {/* How we use your information */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. How we use your information</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>To process your orders and provide our services.</li>
          <li>To improve our website and customer experience.</li>
          <li>To communicate with you about your account or orders.</li>
        </ul>
      </section>
      {/* How we protect your information */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. How we protect your information</h2>
        <p>We use appropriate security measures to protect your personal data from unauthorized access, disclosure, or loss.</p>
      </section>
      {/* 其它条款可继续补充... */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">More Information</h2>
        <p>For the full privacy notice, please contact our support team or visit our website for the latest updates.</p>
      </section>
    </main>
  );
} 