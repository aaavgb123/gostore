// Terms & Conditions page, modeled after Gymshark
// 参考 Gymshark https://support.gymshark.com/en-US/pages/terms-and-conditions
// 英文内容，中文注释
import React from "react";

export default function TermsAndConditionsPage() {
  return (
    <main className="container py-8 max-w-3xl mx-auto">
      {/* 页面主标题 */}
      <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>
      {/* 更新时间 */}
      <p className="text-sm text-gray-500 mb-6 text-center">Last updated: 06 May 2025</p>
      {/* 简要说明 */}
      <section className="mb-8">
        <p className="mb-4">These are the terms and conditions on which we supply our products to you. Please read these terms carefully before ordering with us. We may revise these terms and conditions without notice by posting revised terms and conditions of sale on our website. The terms and conditions posted at the time you place your order will govern that purchase.</p>
      </section>
      {/* Who we are and how to contact us */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Who we are and how to contact us</h2>
        <p className="mb-2"><strong>Who we are:</strong> We are Go Store Inc.</p>
        <p className="mb-2"><strong>How to contact us:</strong> You can contact us at <a href="mailto:gostorezhichi@icloud.com" className="text-blue-600 underline">gostorezhichi@icloud.com</a>, by contacting us at our business address, or via the support section on our website.</p>
        <p><strong>How we may contact you:</strong> If we have to contact you, we will send an email to the email address you provided to us in your last order.</p>
      </section>
      {/* Placing an order */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Placing an order</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Orders may be placed through our website. Please check your order details before confirming.</li>
          <li>Your order is an offer from you to us to buy the product(s) in your basket. Our official acceptance takes place when we email you to confirm we've dispatched your product(s).</li>
          <li>To order our products, you must be at least 18 years old and be authorized to use the payment method.</li>
        </ul>
      </section>
      {/* Our rights to cancel your order */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Our rights to cancel your order</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>If we cannot fulfil your order, we'll let you know by email and we won't charge you for the product.</li>
          <li>We may cancel an order if we notice unusual or suspicious activity.</li>
          <li>We may have to suspend the supply of a product to deal with technical problems or make changes.</li>
        </ul>
      </section>
      {/* 其它条款可继续补充... */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">More Information</h2>
        <p>For the full terms and conditions, please contact our support team or visit our website for the latest updates.</p>
      </section>
    </main>
  );
} 