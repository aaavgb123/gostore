// Submit a Fake page, modeled after Gymshark
// 参考 Gymshark https://www.gymshark.com/pages/submit-a-fake
// 英文内容，中文注释
import React from "react";

export default function SubmitAFakePage() {
  return (
    <main className="container py-8">
      {/* 页面主标题 */}
      <h1 className="text-2xl font-bold mb-4">Submit a Fake</h1>
      {/* 说明内容 */}
      <p className="mb-4">
        If you suspect you have found a counterfeit product or website, please let us know. Counterfeit products can be dangerous and may not meet safety standards. Your report helps us protect our community and brand.
      </p>
      {/* 假货危害说明 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Why is it important?</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Counterfeit products may be unsafe and of poor quality.</li>
          <li>Your personal data may be at risk if you purchase from fake websites.</li>
          <li>Counterfeiting can be linked to organized crime and environmental harm.</li>
        </ul>
      </section>
      {/* 举报方式说明 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How to report</h2>
        <p>
          Please contact our support team with details and any evidence (such as website links or photos). We appreciate your help in keeping our community safe.
        </p>
      </section>
      {/* 结尾 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Thank You</h2>
        <p>
          By avoiding fakes and reporting suspicious products, you are helping us protect everyone. Thank you for your support!
        </p>
      </section>
    </main>
  );
} 