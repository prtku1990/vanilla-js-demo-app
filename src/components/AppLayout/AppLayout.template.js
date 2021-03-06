const logo = require("../../assets/images/kingLogoRebrand.svg");

export default styles => `
  <header class="${styles.header}">
    <div class="${styles.navContainer}">
    <img src="${logo}" id="logo" class="${styles.logo}" alt="King.com">
    </div>
  </header>

  <main class="${styles.main}">
    <section id="games-view-container" class=${styles.gamesView}></section>
    <section id="games-list-container" class=${styles.gamesList}></section>
  </main>
`;
