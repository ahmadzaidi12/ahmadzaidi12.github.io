class FavoriteQuote extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="fav-quote" class="mt-6 border-t pt-4">
        <h2 class="text-lg font-semibold mb-2">Favorite Quote</h2>
        <blockquote class="text-gray-700 text-sm italic leading-relaxed">
          "The young man, who does not know the future, sees life as a kind of epic adventure, an Odyssey through strange seas and unknown islands, where he will test and prove his powers, and thereby discover his immortality. The man of middle years, who has lived the future that he once dreamed, sees life as a tragedy; for he has learned that his power, however great, will not prevail against those forces of accident and nature to which he gives the names of gods, and has learned that he is mortal. But the man of age, if he plays his assigned role properly, must see life as a comedy. For his triumphs and his failures merge, and one is no more the occasion for pride or shame than the other; and he is neither the hero who proves himself against those forces, nor the protagonist who is destroyed by them. Like any poor, pitiable shell of an actor, he comes to see that he has played so many parts that there no longer is himself."
        </blockquote>
        <p class="text-gray-500 text-xs mt-2">— John Williams, <em>Augustus</em></p>
      </div>
    `;
  }
}

customElements.define('books-favorite-quote', FavoriteQuote);
