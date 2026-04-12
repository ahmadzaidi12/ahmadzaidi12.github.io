class LearningClaimsPost extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <article class="mb-8">
        <h2 class="text-lg font-semibold mb-1">Learning claims and identity claims</h2>
        <p class="text-xs text-gray-400 mb-4">Apr 11, 2026</p>

        <div class="text-sm text-gray-700 space-y-4">
          <p>Claims that allow you to learn need to be testable. When you're solving a math equation or making a prediction about the future, the test for correctness is built-in.</p>

          <p>When people say things that don't map onto the learning loop, they are making an identity-based claim. For example "I don't like pasta" or "America should be a steward of peace." These aren't testable. The speaker has no feedback loop by which they can learn if they were right. If they said "I will never eat pasta" or "America will end all wars in the next decade," then they can get feedback from the world.</p>

          <p>Common identity-based claims are important. They are the basis of politics. They allow people who have a variety of incentives to form a larger group under a single banner. There is no logical reason that supporting green energy and opposing gun ownership fall under the same banner. It just happens to be that they do.</p>

          <p>But identity-based claims shouldn't be mixed with learning claims. I tell people "that I am a go with the flow person" to explain the general sets of behaviors I engage in, like not scheduling things too far in advance or changing up my fitness routine regularly. That is genuinely helpful. It provides a lot of information to people quickly. However, when I start using "go with the flow" to justify starting my day with coffee, it becomes less helpful, since that may not be the best decision.</p>

          <p>Compressing information with identity-based claims is helpful. It allows us to relate to each other. But justifying actions with them can ruin our ability to learn.</p>
        </div>
      </article>
    `;
  }
}

customElements.define('post-learning-claims', LearningClaimsPost);
