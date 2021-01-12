<script>
    import Image from './img/banner_main.png'
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
      color: white;
      font-size: 31px;
      max-width: 220px;
      line-height: 1.2;
  }

  .banner__subtitle {
      color: #16B5C7;
      max-width: 220px;
      font-size: 17px;
      line-height: 1.2;
  }
</style>

<section class="banner wrapper">
    <div class="banner__content">
        <h1 class="banner__heading">Cейчас потом
            не интересует</h1>
        <p class="banner__subtitle">умеем справляться со сложными задачами</p>
    </div>
    <img src={Image} alt="Cейчас потом не интересует" />
</section>