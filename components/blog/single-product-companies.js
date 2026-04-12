class SingleProductCompaniesPost extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <article class="mb-8">
        <h2 class="text-lg font-semibold mb-1">Single product companies</h2>
        <p class="text-xs text-gray-400 mb-4">Mar 24, 2026</p>

        <div class="text-sm text-gray-700 space-y-4">
          <p>Around the pandemic, Brian Chesky, Airbnb's CEO, decided to centralize product and design decision making, moving away from teams that worked on local areas of the product. This was all the rage in 2024: Founder Mode.</p>

          <p>There is a less discussed reason for why this may work for a company like Airbnb. Airbnb is largely a single product company. Its offering is short-term stays.</p>

          <p>It makes sense that many product and design people at a single product company should be able to reason about the full product. If the customer experiences the product in its entirety, then the people investing in it should reason about it in its fullness too.</p>

          <p>Often, companies opt for narrow domains instead. Narrow domains can help optimize important parts of the product and create career ladders that retain talent. But they can create issues when almost everyone is allocating resources into their local areas and very few people are thinking globally.</p>

          <p>Airbnb tried to solve this. Clearly outlined the group of people responsible for thinking about the whole product. Ensured that a good amount of resources are optimized globally by this group. Separated out important, complex problems (e.g. integrate 100 local payment providers) as internal products.</p>

          <p>People still get into the weeds to understand and solve problems. That's what attracts the most attention in Founder Mode. But, more importantly, many more people have the starting point of "out of all the things I can do for the customer," not "the checkout page."</p>

          <p>Arguably, what Chesky did is not centralize. He just realized the flaw in growing a single product organization like it was a multi-product organization.</p>
        </div>
      </article>
    `;
  }
}

customElements.define('post-single-product-companies', SingleProductCompaniesPost);
