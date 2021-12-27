<!-- https://glidejs.com/docs/ -->
<div class="t-carousel glide js-carousel" data-scroll-section>
  <div class="t-carousel__track glide__track" data-glide-el="track" data-scroll>
    <ul class="t-carousel__slides glide__slides" data-scroll>
      <li class="t-carousel__slide glide__slide" data-scroll>
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/dist/banners/banner-1.png" alt="Banner 1" class="t-carousel__img" data-scroll>
      </li>
      <li class="t-carousel__slide glide__slide">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/dist/banners/banner-2.jpg" alt="Banner 2" class="t-carousel__img" data-scroll>
      </li>
    </ul>
  </div>
  <div class="t-carousel__arrows glide__arrows" data-glide-el="controls" data-scroll>
    <button class="t-carousel__arrow t-carousel__arrow--left glide__arrow glide__arrow--left" data-glide-dir="<" data-scroll>prev</button>
    <button class="t-carousel__arrow t-carousel__arrow--right glide__arrow glide__arrow--right" data-glide-dir=">" data-scroll>next</button>
  </div>
  <div class="t-carousel__bullets glide__bullets" data-glide-el="controls[nav]" data-scroll>
    <button class="t-carousel__bullet glide__bullet" data-glide-dir="=0" data-scroll></button>
    <button class="t-carousel__bullet glide__bullet" data-glide-dir="=1" data-scroll></button>
    <button class="t-carousel__bullet glide__bullet" data-glide-dir="=2" data-scroll></button>
  </div>
</div>