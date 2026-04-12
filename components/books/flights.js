class FlightsReview extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="mb-3">
        <h2 class="text-lg font-semibold mb-1">Flights by Olga Tokarczuk</h2>
        <p class="text-gray-700 mb-2 text-sm">
          In Black Boy, Richard Wright talks about how he could not write well
          when he was young. He tried, but nothing came of it. So he resorted to
          writing perfect sentences. Sentences that would transport him to a
          different world.
        </p>

        <p class="text-gray-700 mb-2 text-sm">
          No small amount of credit goes to Jennifer Croft for what is a
          remarkable English translation of Tokarczuk's Polish text. But one can
          only marvel at the perfection with which Tokarczuk executes each
          sentence, and strings them together to write passages that provoke
          flights of thought.
        </p>

        <p class="text-gray-700 mb-2 text-sm">
          My favorite story is that of a mother who leaves home one day and
          doesn't return for a long time. She remains homeless in a train
          station. But it isn't a story about someone escaping from the normalcy
          of their life. It is a story about what happened, with no why or how
          behind it. It's a story that provokes wonder instead of analysis. And
          that is Tokarzcuk's magic. To distance her work from frameworks of
          analysis and let things be.
        </p>

        <p class="text-gray-700 text-sm">
          Perhaps Tokarzcuk lets us know what to expect in the beginning. She
          talks about her days as a student of psychology and her fascination
          with what is odd instead of what is ordinary. One thing is for sure,
          there is nothing ordinary about Flights.
        </p>
      </div>
    `;
  }
}

customElements.define('review-flights', FlightsReview);
