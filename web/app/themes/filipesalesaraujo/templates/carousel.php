<!-- https://glidejs.com/docs/ -->
<section class="t-carousel glide js-carousel" data-scroll-section>
  <div class="t-carousel__track glide__track" data-glide-el="track" data-scroll>
    <ul class="t-carousel__slides glide__slides" data-scroll>
      <li class="t-carousel__slide glide__slide" data-scroll>
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/dist/img/banners/banner-1.png" alt="Banner 1" class="t-carousel__img" data-scroll>
      </li>
      <li class="t-carousel__slide glide__slide">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/dist/img/banners/banner-2.jpg" alt="Banner 2" class="t-carousel__img" data-scroll>
      </li>
    </ul>
  </div>
  <div class="t-carousel__arrows glide__arrows" data-glide-el="controls" data-scroll>
    <button class="t-carousel__arrow t-carousel__arrow--left glide__arrow glide__arrow--left" data-glide-dir="<" data-scroll>prev</button>
    <button class="t-carousel__arrow t-carousel__arrow--right glide__arrow glide__arrow--right" data-glide-dir=">" data-scroll>next</button>
  </div>
</section>