class BaburnamaReview extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="mb-3">
        <h2 class="text-lg font-semibold mb-1">Baburnama - Memoirs of the Mughal Babur</h2>
        <p class="text-gray-700 mb-2 text-sm">
          The field of history is egregious for putting forward unfalsifiable
          hypotheses. It is easy to say X led to Y when you can never reproduce
          the conditions and put the claim to test. But the study of history,
          when done well, can strengthen our imagination. Our knowledge of
          causality might be extremely limited, but that does not stop us from
          learning how lots of different things fit together to make the world
          go round.
        </p>

        <p class="text-gray-700 mb-2 text-sm">
          Baburnama is a testament to the kind of history that acknowledges its
          limitations yet remains an incredibly rich well of learning. Babur's
          memoirs are certainly subject to editorial influence, both by himself
          and the people responsible for its subsequent reproductions. But the
          memoirs' breadth sheds light on the sheer volume of things that
          determine the rise of an empire. They contain descriptions of fauna in
          the subcontinent as well as the tone Babur adopted when writing to his
          son Humayun (the second emperor of the Mughal Empire) for being tardy.
        </p>

        <p class="text-gray-700 mb-2 text-sm">
          My favorite part in the memoirs is when Babur is making his first
          excursion into India. His attention to detail is unmistakable. He
          talks about how some villages use a water wheel while others still
          carry water in buckets. And he does not miss political connections.
          When listing animals in the subcontinent, he notes that people
          involved in elephant capture report directly to the exchequer.
        </p>

        <p class="text-gray-700 text-sm">
          Simplification can be helpful. But it does not have to come at the
          cost of depriving a subject of its richness. It can take the form of
          focus - the choice to study one thing over another, without ignoring
          the fact that a choice was made. The Baburnama is a curated account of
          an emperor who was less than egalitarian, to say the least. Studying
          it is still a choice to study the making of history as opposed to
          studying an explanation of history.
        </p>
      </div>
    `;
  }
}

customElements.define('review-baburnama', BaburnamaReview);
