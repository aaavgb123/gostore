// src/app/(store)/help/faq/page.tsx
// FAQ page in English, with Chinese comments for maintainability
import React from "react";

export default function FAQPage() {
  return (
    <main className="container py-8">
      {/* 页面主标题 */}
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      {/* 简要引导说明 */}
      <p className="mb-6">
        Have a question? Check out the answers below. If you can't find what you're looking for, please contact our support team.
      </p>

      {/* 热门问题区块 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Popular Questions</h2>
        <ul className="space-y-6">
          <li>
            <strong>How do I track my order?</strong>
            <p>Log in to your account and view "My Orders" to check your order status and tracking information. You will also receive a tracking link via email once your order has shipped.</p>
          </li>
          <li>
            <strong>What should I do if I received the wrong item?</strong>
            <p>If you received the wrong item, please contact our support team with your order number and a photo of the item. We will resolve the issue as soon as possible.</p>
          </li>
          <li>
            <strong>How do I make a return?</strong>
            <p>Please refer to the <a href="/help/returns-policy" className="text-blue-600 underline">Returns Policy</a> page and follow the instructions to complete your return.</p>
          </li>
          <li>
            <strong>When will I receive my refund?</strong>
            <p>Once we have received and inspected your return, we typically process refunds within 3-5 business days. The exact time may vary depending on your bank's processing speed.</p>
          </li>
          <li>
            <strong>When will items be restocked?</strong>
            <p>Restock times for popular items vary. Please check our website and social media for the latest updates.</p>
          </li>
          <li>
            <strong>I want to change my order/address</strong>
          </li>
          <li>
            <strong>Can I cancel my order?</strong>
            <p>You can cancel your order within 15 minutes of placing it by clicking the "Cancel Order" button in your account or in your order confirmation email. Unfortunately, after this window, we are unable to cancel your order as it is quickly processed in our warehouse.</p>
            <p>If you no longer want your order, you can return it within 30 days for a full refund.</p>
          </li>
          <li>
            <strong>Can I change my order?</strong>
            <p>Because orders are sent to our warehouse for fulfillment very quickly, we are unable to edit orders once they are placed. This includes:</p>
            <ul className="list-disc ml-6">
              <li>Adding or removing items from the order</li>
              <li>Changing item, size, or color</li>
              <li>Modifying the shipping address</li>
              <li>Changing the shipping method or courier</li>
              <li>Applying discount codes or editing product prices</li>
            </ul>
            <p>If you notice a mistake and want to make a change, you can click the "Cancel Order" button within 15 minutes of placing your order.</p>
          </li>
          <li>
            <strong>Can I change my shipping address?</strong>
            <p>Unfortunately, once an order is placed, we cannot change the address with the courier. However, you may be able to update the address by contacting the courier directly.</p>
            <p>To do this, please wait until you receive a tracking email directly from the courier, which will include your tracking number. You can then provide this to the courier and request an address update. Please note this is not guaranteed and may vary by courier.</p>
            <p>*If you entered the wrong address at checkout, we are not responsible for lost orders and cannot offer refunds or replacements in such cases.</p>
          </li>
        </ul>
      </section>

      {/* 联系客服区块 */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Need more help?</h2>
        <p>
          If you can't find the answer you're looking for, please contact our support team and we'll be happy to assist you.
        </p>
        <p>
          You can reach us at: <a href="mailto:gostorezhichi@icloud.com" className="text-blue-600 underline">gostorezhichi@icloud.com</a>
        </p>
      </section>
    </main>
  );
} 