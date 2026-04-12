class OpenSocietyReview extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="mb-3">
        <h2 class="text-lg font-semibold mb-1">The Open Society and Its Enemies by Karl Popper</h2>
        <p class="text-gray-700 mb-2 text-sm">
          When Erik Kandel went on a limb to study memory by analyzing neural
          processes in the giant snail Aplysia, Karl Popper encouraged him. But
          he didn't encourage Kandel by telling him that he was going to be
          right. His encouragement was to the contrary.
        </p>

        <p class="text-gray-700 mb-2 text-sm">
          Aplysia has few neurons, and they are large, making its nervous system
          easy to study. When Kandel was researching them, almost all of his
          colleagues believed that you could not extrapolate learnings from
          non-complex systems, like giant snails, to complex ones, like humans.
          Kandel thought that it might be possible, and he decided to go against
          the grain.
        </p>

        <p class="text-gray-700 mb-2 text-sm">
          Popper told Kandel that he should try and run head first into the face
          of failure. In Popper's view, Kandel's job as a scientist was not to
          be right. His job was to make sure that beliefs were grounded in
          evidence, and there was limited evidence that non-complex systems
          could not inform the study of complex ones. Kandel ran towards
          failure, and as luck would have it, there was no failure on the other
          end. There was a Nobel prize. (Read In Search of Memory by Erik Kandel
          to learn more about Kandel's work and his recollection of his
          interactions with Popper.)
        </p>

        <p class="text-gray-700 text-sm">
          In The Open Society, Popper carefully dismantles political ideas that
          make us more inclined to believe in unproven positives rather than
          acknowledging the true limitations of our knowledge. It's an inspiring
          demonstration of Popper's own analytical ability, which allowed him to
          see past centuries old biases and outline a concise attack on
          long-standing traditions of political philosophy.
        </p>
      </div>
    `;
  }
}

customElements.define('review-open-society', OpenSocietyReview);
