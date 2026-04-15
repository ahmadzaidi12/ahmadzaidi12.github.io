class JeromesNeighborsPost extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <article class="mb-8">
        <h2 class="text-lg font-semibold mb-1">Jerome's neighbors</h2>
        <p class="text-xs text-gray-400 mb-4">Apr 15, 2026</p>

        <div class="text-sm text-gray-700 space-y-4">
          <p>Many years ago, a man named Jerome moved to Greece. He bought a nice little ocean-view apartment. It was part of a small, two-unit building.</p>

          <p>On his move-in day, he couldn't get his key to work on the main door. His neighbors, an old couple that always seemed to be home, buzzed him in.</p>

          <p>That same day, he went out for dinner. When he got back home, his neighbors smiled at him, said something to him in Greek, and then buzzed him in.</p>

          <p>This went on for weeks. Jerome always took his key with him, but he never had to use it.</p>

          <p>Then, one day, his neighbors smiled when he returned, but they didn't buzz him in. He tried to unlock the door, but his key didn't work. He started gesturing at his neighbors, trying to talk to them. But he spoke English. They spoke Greek. They tried their best to communicate, trying to explain something to him, but to no avail.</p>

          <p>And that's the issue with relying on LLMs when you can't do the job yourself. One day, they may not buzz you in.</p>

          <p>Sometimes, that's okay. There are lots of machines we use in our daily lives that we can't fix. Normally, someone else can. And we accept the risk of not being able to use it at times. But other times, the risk is not worth it. You can live without your microwave for a day, but not having your key can be more problematic. With an LLM, you have to assess how important the machine is a lot more often.</p>
        </div>
      </article>
    `;
  }
}

customElements.define('post-jeromes-neighbors', JeromesNeighborsPost);
