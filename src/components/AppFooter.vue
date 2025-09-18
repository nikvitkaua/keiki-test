<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__logo">
          <img src="/icons/logo-white.svg" alt="Cats logo white">
        </div>

        <div class="footer__menus">
          <div class="footer__menu">
            <h3>Built for catlovers</h3>
            <nav>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </nav>
          </div>

          <div class="footer__social">
            <h3>Social</h3>
            <ul>
              <li><a href="inshram.com"><img src="/icons/instagram.svg" alt="Instagram"></a></li>
              <li><a href="facebook.com"><img src="/icons/facebook.svg" alt="Facebook"></a></li>
              <li><a href="youtube.com"><img src="/icons/youtube.svg" alt="Youtube"></a></li>
              <li><a href="x.com"><img src="/icons/x.svg" alt="X"></a></li>
            </ul>
          </div>
        </div>

        <div class="footer__copyright">
          <p>@cats.com inc. All rights reserved.</p>
          <button class="lang-switcher">
            <span>English</span>
            <img src="/icons/arrow-down.svg" alt="Arrow Down">
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/main.scss";

  .footer {
    background-color: $footer-bg;

    &__wrapper {
      padding: 32px 0;
      display: grid;
      grid-template-columns: 2fr 1fr;
      row-gap: 55px;
    }

    &__logo {
      max-width: 185px;
    }

    &__menus {
      display: flex;
      justify-content: space-between;
    }

    &__menu ul {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &__menu a {
      color: $footer-text;
      opacity: .8;
      font-size: 14px;
      font-weight: 400;
    }

    &__menu a:hover {
      color: $accent;
    }

    &__social ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 25px;
    }

    &__social a:hover {
      opacity: .8;
    }

    & h3 {
      margin-bottom: 8px;
      font-weight: 700;
      font-size: 16px;
      color: $footer-text;
    }

    &__copyright {
      grid-column: 1 / -1;
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #8E8E8E;
      padding-top: 32px;

      p {
        color: $footer-text;
        opacity: .8;
        font-weight: 400;
        font-size: 14px;
      }

      button {
        display: flex;
        align-items: center;
        gap: 8px;
        color: $footer-text;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;

        img {
          max-width: 16px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .footer {
      &__wrapper {
        grid-template-columns: 1fr;
      }

      &__logo {
        margin: 0 auto;
      }
    }
  }
</style>