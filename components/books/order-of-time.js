class OrderOfTimeReview extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="mb-3">
        <h2 class="text-lg font-semibold mb-1">The Order of Time by Carlo Rovelli</h2>
        <p class="text-gray-700 mb-2 text-sm">
          What I love most about Rovelli's book isn't his remarkable ability to
          simply convey complex topics in modern theoretical physics. It's that
          it is humbling. The science of today has come some way, but it has a
          long, long way to go. Rovelli reminds us of this.
        </p>

        <p class="text-gray-700 mb-2 text-sm">
          Imagine that the universe is an ocean. Somewhere in that ocean,
          there's a ripple. The ripple causes a group of particles to move in a
          certain direction. It also causes the particles to run into each other
          and create patterns. Inside that ripple, within those patterns, is our
          world.
        </p>

        <p class="text-gray-700 mb-2 text-sm">
          Rovelli says that we experience linear time because the ripple is
          pushing us in one direction. He calls it the direction of increasing
          entropy. Perhaps, the push is like skydiving. It's theoretically
          possible to go up, but the skydiver can't. But what's more fascinating
          to me is that all that exists around us is a function of the same
          push, from simple atoms to the complexities of human society.
        </p>

        <p class="text-gray-700 text-sm">
          There is very little that we understand about the underlying forces in
          our universe. Maybe that will change with time. And open up a whole
          new world for humanity. Regardless, it's good to be reminded that we
          have a long way to go.
        </p>
      </div>
    `;
  }
}

customElements.define('review-order-of-time', OrderOfTimeReview);
