// Cookie Policy page, modeled after Gymshark
// 参考 Gymshark https://support.gymshark.com/en-US/pages/cookie-policy
// 英文内容，中文注释
import React from "react";

export default function CookiePolicyPage() {
  return (
    <main className="container py-8 max-w-3xl mx-auto">
      {/* 页面主标题 */}
      <h1 className="text-3xl font-bold mb-6 text-center">Cookie Policy</h1>
      {/* 简要说明 */}
      <section className="mb-8">
        <p className="mb-4">This Cookie Policy explains how we use cookies and similar technologies on our website. By using our site, you agree to our use of cookies as described in this policy.</p>
      </section>
      {/* What are cookies */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. What are cookies?</h2>
        <p>Cookies are small text files that are placed on your device to help the website function and provide a better user experience.</p>
      </section>
      {/* How we use cookies */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. How we use cookies</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>To remember your preferences and settings.</li>
          <li>To analyze site traffic and usage.</li>
          <li>To provide personalized content and ads.</li>
        </ul>
      </section>
      {/* Managing cookies */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Managing cookies</h2>
        <p>You can control and manage cookies through your browser settings. Please note that disabling cookies may affect your experience on our site.</p>
      </section>
      {/* 其它条款可继续补充... */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">More Information</h2>
        <p>For the full cookie policy, please contact our support team or visit our website for the latest updates.</p>
      </section>
    </main>
  );
} 