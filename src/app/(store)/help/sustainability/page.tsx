// Sustainability page, modeled after Gymshark
// 参考 Gymshark https://sustainability.gymshark.com/
// 英文内容，中文注释
import React from "react";

export default function SustainabilityPage() {
  return (
    <main className="container py-8">
      {/* 页面主标题 */}
      <h1 className="text-2xl font-bold mb-4">Our Goals for Our Planet and Its People</h1>
      {/* 简要说明 */}
      <p className="mb-6">
        To unite a community of changemakers to lift, strengthen and sustain our planet and the people it homes.
      </p>
      {/* Our Planet 区块 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Our Planet</h2>
        <p>
          We only have one planet. And we need to do more for its future. Our goals are to improve our community's environment, reduce our environmental impact, and help our community do better, too.
        </p>
      </section>
      {/* Our People 区块 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Our People</h2>
        <p>
          We are one community, from supply chain to customer. Our goals are to always respect human rights, create safe working spaces, help all workers receive a fair living wage, and stay transparent on the factories we use.
        </p>
      </section>
      {/* Wear More, Waste Less 区块 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Wear More, Waste Less</h2>
        <p>
          Instead of taking materials, making products, and then throwing them away, we want to extend our products' lifecycle and reduce the amount of waste we create. Our goals are to make our products last longer, reduce our reliance on fossil fuels and water, and increase the recyclability of our products.
        </p>
      </section>
      {/* 结尾说明 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Our Commitment</h2>
        <p>
          We know we're not as good as we can be. But we will be better. We will do better. Because our planet doesn't have time for empty words, and neither do we.
        </p>
      </section>
    </main>
  );
} 