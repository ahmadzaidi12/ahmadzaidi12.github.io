class DecisionMakingPost extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <article class="mb-8">
        <h2 class="text-lg font-semibold mb-1">Decision-making with non-deterministic systems</h2>
        <p class="text-xs text-gray-400 mb-4">Mar 29, 2026</p>

        <div class="text-sm text-gray-700 space-y-4">
          <p>Imagine a talking computer. You feed it information and rules to make a decision. A lot of the time, it makes the right decision. Other times, it forgets a piece of information, modifies a rule, or just makes something up, and the decision is wrong.</p>

          <p>You may be thinking, "that's a chatbot." But no. People forget and hallucinate all of the time.</p>

          <p>That is the challenge of centralizing decisions with humans. You are relying on a non-deterministic system to make the decision. And small changes to the computer can affect the decision. You saw a black cat in the morning? Unbeknownst to you, it may affect your decision.</p>

          <p>Therefore, it is better to make decisions collaboratively. Your peers can help lower the chance that you make a trivial mistake. Close friends are even more powerful. They understand your state of mind even when they don't have all the information. They can help you make decisions from a more productive state of mind than a less productive one.</p>

          <p>There are legitimate reasons to not consult others. Telling them all the relevant information might take too much time. Or talking about the decision may not justify the benefit. Or you might have genuine specialist knowledge. One need not call their friends to decide what flavor ice cream to order.</p>

          <p>Of these three, the most common reason to not loop others in for important decisions is feigning specialist knowledge. I've done this a lot. "It's my life and I know myself best." But even in life, we're typically trying to achieve a somewhat objective goal and making a better decision brings you closer to it. People who share the information of your reality can help you avoid common traps.</p>

          <p>It's not that we aren't capable. It's that we rely on a system that has a high error rate. Sometimes, the error rate helps us discover cool, new things. But when we want a low error rate for important decisions, it's good to use multiple systems.</p>
        </div>
      </article>
    `;
  }
}

customElements.define('post-decision-making', DecisionMakingPost);
