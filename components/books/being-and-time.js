class BeingAndTimeReview extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="mb-3">
        <h2 class="text-lg font-semibold mb-1">Being and Time by Martin Heidegger</h2>
        <p class="text-gray-700 mb-2 text-sm">
          Some books, like math theory textbooks, require careful study. And
          even then, much remains in the way of mastery. Being and Time falls
          squarely into that category, partly due its complexity, and partly due
          to the fact that Heidegger did not care to write well. It isn't a text
          that I would have read outside of a course focused only on it with a
          Heidegger expert, Professor Martin Hagglund. But it is a text well
          worth reading.
        </p>

        <p class="text-gray-700 mb-2 text-sm">
          Heidegger is interested in the most elementary philosophical question:
          How do we experience everyday life as humans? And he doesn't take an
          experimental approach. He uses formal logic to dissect the very nature
          of our being. His deep, philosophical analyses reminds one of
          experimental and theoretical frameworks, like Daniel Kahneman's System
          1 and System 2 (fast and slow thinking), or Piaget's theory of child
          development.
        </p>

        <p class="text-gray-700 mb-2 text-sm">
          What stood out to me from Heidegger's book is the notion of
          finiteness. He posits that any action we take in life has meaning only
          because our lives are finite. Taking an action always comes at the
          cost of time, and there is no way to recover that cost, regardless of
          who we are.
        </p>

        <p class="text-gray-700 text-sm">
          But Heidegger is not a normative thinker, asking us to focus our
          energies on good, worthwhile actions. Not in the slightest. He coolly
          accepts that we have little control over the circumstances in which
          are born and in which we live our lives. Instead, his book on being
          offers us an orthogonal choice: to care or not care about what we're
          doing.
        </p>
      </div>
    `;
  }
}

customElements.define('review-being-and-time', BeingAndTimeReview);
