// Returns Policy page, modeled after Gymshark
// 参考 Gymshark https://support.gymshark.com/en-US/article/returns-policy
// 英文内容，中文注释
import React from "react";

export default function ReturnsPolicyPage() {
  return (
    <main className="container py-8">
      {/* 页面主标题 */}
      <h1 className="text-2xl font-bold mb-4">Returns Policy</h1>
      {/* 政策说明 */}
      <p className="mb-4">
        We get it - sometimes something just doesn't work for you and you want to return or exchange. As long as your item(s) were purchased from our store and are still in their original condition, you have up to 30 days to return your item back to us!
      </p>
      {/* 可退货商品说明 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What items can I return?</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Any unwanted product must be returned within 30 days from delivery or purchase date.</li>
          <li>All Underwear & Swimwear can't be returned for hygiene reasons.</li>
          <li>Socks can be returned if they are sealed in their original packaging.</li>
          <li>All bottles are non-returnable due to hygiene reasons.</li>
          <li>Personalised items can't be returned.</li>
          <li>Items with a final discount of 60% or more are 'Final Sale' and are not eligible for returns, exchanges, refunds, or store credit.</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">To receive a full refund on eligible returns, all items must be returned to us unworn, unused, unwashed and in the same condition you received them. All items are inspected on return.</p>
      </section>
      {/* 退款说明 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">When will I get my refund?</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Refunds can take up to 7 days to be processed from the date we receive your order back to our warehouse.</li>
          <li>It can take up to an additional 5 days for your refund to appear in your account once processed.</li>
          <li>We only offer refunds onto the original payment method used to make the order.</li>
          <li>For purchases where a gift card is used, the refund will be applied to the gift card first.</li>
        </ul>
      </section>
      {/* 其它说明 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Good to Know</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Keep any proof of return postage receipts as we may need to view these as part of your return query.</li>
          <li>We do not offer combined returns; please send returns from different orders separately.</li>
          <li>Exchanges are available in select regions only and can only be made for a different size of the same item.</li>
        </ul>
      </section>
      {/* 联系客服 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Need More Help?</h2>
        <p>
          If you have more questions, please contact our support team.
        </p>
      </section>
    </main>
  );
} 