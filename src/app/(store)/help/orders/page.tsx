// Orders page, modeled after Gymshark Orders & Delivery category
// 参考 Gymshark https://support.gymshark.com/en-US/category/orders-and-delivery
// 英文内容，中文注释
import React from "react";

export default function OrdersPage() {
  return (
    <main className="container py-8">
      {/* 页面主标题 */}
      <h1 className="text-2xl font-bold mb-4">Orders & Delivery</h1>
      {/* 简要说明 */}
      <p className="mb-4">
        Find answers to your questions about orders and delivery below. If you need more help, please contact our support team.
      </p>
      {/* 相关文章列表 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Articles in this category</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><a href="/help/delivery-information" className="text-blue-600 underline">Delivery Information</a></li>
          <li><a href="#" className="text-blue-600 underline">How do I track my order?</a></li>
          <li><a href="#" className="text-blue-600 underline">I want to change my order/address</a></li>
          <li><a href="#" className="text-blue-600 underline">I've received my order but it's wrong</a></li>
          <li><a href="#" className="text-blue-600 underline">Customs & Import Fees</a></li>
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