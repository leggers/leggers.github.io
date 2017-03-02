// Some helper functions for more dyamism.
(() => {

  (function darkenTopLevelNavLink() {
    var websiteSection = document.baseURI.split('/')[3];
    var expectedLinkHref = `/${websiteSection}`;
    Array.from(document.getElementsByClassName('nav-link')).map((linkElement) => {
      if (linkElement.attributes.href.value === expectedLinkHref) {
        linkElement.className += " selected";
      }
    });
  })();

  (function pickHomePageGif() {
    var imageListDiv = document.getElementById('all-images-list-container');
    if (imageListDiv != null) {
      var heroImageDiv = document.getElementById('hero-image');
      var imageListLis = imageListDiv.children[0].children;
      var indexToUse = Math.floor(Math.random() * imageListLis.length);
      var imageUrl = imageListLis[indexToUse].textContent;
      heroImageDiv.innerHTML = `<img src="${imageUrl}">`;
    }
  })();

  // TODO: add a function that detects internet explorer and puts a note in the
  // footer about it making the website shittier.
})();