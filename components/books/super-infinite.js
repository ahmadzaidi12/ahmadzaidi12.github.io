class SuperInfiniteReview extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="mb-3">
        <h2 class="text-lg font-semibold mb-1">Super-infinite by Katherine Rundell</h2>
        <p class="text-gray-700 mb-2 text-sm">
          It is refreshing to read a recounting of someone's life that does not
          search for reasons behind their greatness. And instead focuses on the
          fragile moments in which luck and chance, more than anything, led to
          the creation of a fascinating personage. In this case, it is the
          personage of John Donne, a contemporary of Shakespeare.
        </p>

        <p class="text-gray-700 mb-2 text-sm">
          Donne was remarkably witty and smart, and he wrote love poems so
          modern for their time that they remind you of Sabrina Carpenter
          lyrics. They wouldn't be published until after his death, at which
          time he was one of the most influential preachers in the city of
          London.
        </p>

        <p class="text-gray-700 mb-2 text-sm">
          The credit Rundell receives for the biography cannot be understated.
          She writes not of one Donne, but of many Donnes, from the boy who lost
          his brother to the man who almost died in a debtor's prison. She
          writes of him as a master of flattery, who wrote to wealthy women in
          hopes of securing money. And a witty intellectual, who wrote a satire
          attacking illogical biases. Rundell loves Donne, and it shows.
        </p>

        <p class="text-gray-700 text-sm">
          The book does Donne justice. Donne comes off as uniquely human, but
          that adds to his character. It mirrors Donne's own works, which while
          deeply moving and often highly intellectual, are grounded in the
          reality of everyday life. The passion of both Rundell and Donne is
          infectious, and that is a big reason that I love this book.
        </p>
      </div>
    `;
  }
}

customElements.define('review-super-infinite', SuperInfiniteReview);
