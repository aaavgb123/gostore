// Delivery Information page, modeled after Gymshark
// 参考 Gymshark https://support.gymshark.com/en-US/article/delivery-information
// 英文内容，中文注释
import React from "react";

export default function DeliveryInformationPage() {
  return (
    <main className="container py-8">
      {/* 页面主标题 */}
      <h1 className="text-2xl font-bold mb-4">Delivery Information</h1>
      {/* 简要说明 */}
      <p className="mb-4">
        Delivery timeframes are a live representation at the time of ordering and are subject to change. If you've already placed an order, please check your shipping confirmation email for your specific delivery timeframe and tracking link.
      </p>
      {/* 重要须知 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Things you need to know...</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>You'll receive a confirmation email once your order is placed, followed by a second email containing your tracking information once your order has been shipped from our warehouse.</li>
          <li>All delivery timeframes start from the day after you place the order unless specified.</li>
          <li>Gift Card purchases don't count towards qualifying for a free shipping threshold.</li>
          <li>Unfortunately, we're unable to deliver to Military Addresses in EU countries.</li>
          <li>If you don't receive your order after the stated delivery timeframe, or your order is damaged when it arrives, please contact us within 7 days of delivery.</li>
        </ul>
      </section>
      {/* 不配送地区列表 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Shipping Exclusion List</h2>
        <p className="mb-2">We currently do not ship to the following places:</p>
        <p className="text-sm text-gray-600">
          Afghanistan, Belarus, Burundi, Bonaire, Cambodia, Central African Republic, Cuba, Democratic Republic of Congo, Guadeloupe, Iran, Iraq, Israel, Kosovo, Lebanon, Libya, Mali, Martinique, Myanmar, Nicaragua, North Korea, Northern Marianas Islands, Oaxaca Region of Mexico, Pakistan, Réunion, Russia, Somalia, South Georgia and South Sandwich Islands, South Sudan, Sudan, Gauteng Province of South Africa, Syria, St. Barthélemy, St. Martin, St. Pierre and Miquelon, Ukraine, Venezuela, Yemen, Zimbabwe.
        </p>
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