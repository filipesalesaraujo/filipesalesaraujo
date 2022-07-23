import { Box, Heading } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {
  SiAngular,
  SiApollographql,
  SiBootstrap,
  SiChakraui,
  SiCloudflare,
  SiCpanel,
  SiCss3,
  SiEslint,
  SiExpo,
  SiFontawesome,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitkraken,
  SiGraphql,
  SiGrunt,
  SiGulp,
  SiHeroku,
  SiHtml5,
  SiJamstack,
  SiJavascript,
  SiJest,
  SiJoomla,
  SiJquery,
  SiMaterialui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNodemon,
  SiNpm,
  SiPhp,
  SiPhpmyadmin,
  SiPostgresql,
  SiPrettier,
  SiPrismic,
  SiPython,
  SiReact,
  SiRedux,
  SiRoots,
  SiRootsbedrock,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWebpack,
  SiWoo,
  SiWordpress,
  SiYarn,
} from 'react-icons/all'

export function Technologies() {
  return (
    <Box mb="20">
      <Heading as="h2" mb="10">
        Technologies
      </Heading>
      <Box>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 10,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <SiHtml5 size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiCss3 size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiSass size={50} />
          </SwiperSlide>

          <SwiperSlide>
            <SiFontawesome size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiBootstrap size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiChakraui size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiMaterialui size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiTailwindcss size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiStyledcomponents size={50} />
          </SwiperSlide>

          <SwiperSlide>
            <SiJquery size={50} />
          </SwiperSlide>

          <SwiperSlide>
            <SiReact size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiVite size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiNextdotjs size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiVercel size={50} />
          </SwiperSlide>

          <SwiperSlide>
            <SiExpo size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiRedux size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiGraphql size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiApollographql size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiAngular size={50} />
          </SwiperSlide>

          <SwiperSlide>
            <SiJamstack size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiJest size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiEslint size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiPrettier size={50} />
          </SwiperSlide>

          <SwiperSlide>
            <SiPhp size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiNodedotjs size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiNodemon size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiPython size={50} />
          </SwiperSlide>

          <SwiperSlide>
            <SiWordpress size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiWoo size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiRoots size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiRootsbedrock size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiJoomla size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiPrismic size={50} />
          </SwiperSlide>

          <SwiperSlide>
            <SiCloudflare size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiCpanel size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiPhpmyadmin size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiPostgresql size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiMysql size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiHeroku size={50} />
          </SwiperSlide>

          <SwiperSlide>
            <SiGit size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiGithub size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiGithubactions size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiGitkraken size={50} />
          </SwiperSlide>

          <SwiperSlide>
            <SiWebpack size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiGulp size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiGrunt size={50} />
          </SwiperSlide>

          <SwiperSlide>
            <SiNpm size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiYarn size={50} />
          </SwiperSlide>

          <SwiperSlide>
            <SiJavascript size={50} />
          </SwiperSlide>
          <SwiperSlide>
            <SiTypescript size={50} />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  )
}
