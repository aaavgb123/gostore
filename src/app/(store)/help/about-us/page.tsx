// About Us page, modeled after Gymshark
// 参考 Gymshark https://www.gymshark.com/pages/about-us
// 英文内容，中文注释
import React from "react";

export default function AboutUsPage() {
  return (
    <main className="container py-8">
      {/* 页面主标题 */}
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      {/* 公司简介 */}
      <section className="mb-6">
        <p>
          We're Go Store. We exist to unite the active community.<br />
          It's not our goals that unite us, but the things we do to achieve them. Because although our training grounds and end goals might be different, effort is our sport. And we're a team of individuals who know that to go further, we go together.
        </p>
      </section>
      {/* 公司历史 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Story</h2>
        <p>
          Our legacy began in 2024, from a small garage with nothing but a vision and ambition. Today, we create the tools that help everyone become their personal best: the clothing you'll sweat in, the content you'll find inspiration in, and the community you'll become your best in.
        </p>
      </section>
      {/* 团队与规模 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Community</h2>
        <p>
          Our Go Store family of employees, athletes, and followers is growing every day, with customers in many countries and a passionate team dedicated to our mission.
        </p>
      </section>
      {/* 核心价值观 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Core Values</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Be human.</strong> Being accessible, inclusive, and humble is at our heart.</li>
          <li><strong>Care deeply.</strong> We care for those around us and strive to create positive change.</li>
          <li><strong>Do the right thing.</strong> We are honest, trustworthy, and genuine.</li>
          <li><strong>Stay ambitious.</strong> We never forget our roots and always look for new ways to improve.</li>
          <li><strong>Put family first.</strong> Unconditionally.</li>
        </ul>
      </section>
      {/* 联系方式 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
        <p>
          For media and press enquiries please email: <a href="mailto:gostorezhichi@icloud.com" className="text-blue-600 underline">gostorezhichi@icloud.com</a><br />
          For general business enquiries please email: <a href="mailto:gostorezhichi@icloud.com" className="text-blue-600 underline">gostorezhichi@icloud.com</a><br />
          For all customer service enquiries please <a href="/help/orders" className="text-blue-600 underline">contact us</a>.
        </p>
      </section>
    </main>
  );
} 