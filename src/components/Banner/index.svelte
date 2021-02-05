<script>
    import {themeValue} from '../../utils/stores.js';

    let stateValue = 'dark';

    themeValue.subscribe(value => {
        stateValue = value;
    })
</script>

<style>
  .banner {
      position: relative;
      display: flex;
      justify-content: center;
  }

  .banner__content {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
  }

  .banner__heading {
      color: var(--interface-color);
      font-size: 31px;
      max-width: 220px;
      line-height: 1.2;
  }

  .banner__subtitle {
      color: var(--second-color);
      max-width: 220px;
      font-size: 17px;
      line-height: 1.2;
  }

  .banner__img-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .banner__img {
      max-width: 100%;
      padding: 3em 0;
      width: 450px;
      aspect-ratio: 1 / 1;
  }

  @media (max-width: 1170px) {
      .banner__content {
          padding-left: 1.5em;
      }
  }

  @media (max-width: 870px) {
      .banner__content {
          position: static;
          transform: none;
      }

      .banner {
          flex-direction: column;
          margin-top: 2em;
      }

      .banner__img {
          padding-top: 1em;
      }

      .banner__heading, .banner__subtitle {
          max-width: 100%;
          text-align: center;
      }
  }
  
  @media (max-width: 425px) {
      .banner__heading {
          font-size: 25px;
      }

      .banner__subtitle {
          font-size: 15px;
      }
  }
</style>

<section class="banner wrapper">
    <div class="banner__content">
        <h1 class="banner__heading">Cейчас потом
            не интересует</h1>
        <p class="banner__subtitle">умеем справляться со сложными задачами</p>
    </div>
    <picture class="banner__img-wrap">
        <source type="image/webp" srcset="/img/banner/banner-{stateValue}.webp">
        <img class="banner__img" src="/img/banner/banner-{stateValue}.png" alt="Cейчас потом не интересует" />
    </picture>
</section>