import {Box, Heading, VStack} from "@chakra-ui/react";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
    SiAngular,
    SiApollographql, SiBootstrap, SiChakraui, SiCloudflare, SiCpanel,
    SiCss3, SiEslint,
    SiExpo, SiFontawesome, SiGit, SiGithub, SiGithubactions, SiGitkraken, SiGraphql, SiGrunt, SiGulp, SiHeroku,
    SiHtml5, SiJamstack, SiJavascript, SiJest, SiJoomla,
    SiJquery, SiMaterialui, SiMysql,
    SiNextdotjs, SiNodedotjs, SiNodemon, SiNpm, SiPhp, SiPhpmyadmin, SiPostgresql, SiPrettier, SiPrismic, SiPython,
    SiReact,
    SiRedux, SiRoots, SiRootsbedrock,
    SiSass, SiStyledcomponents, SiTailwindcss, SiTypescript,
    SiVercel,
    SiVite, SiWebpack, SiWoo, SiWordpress, SiYarn
} from "react-icons/all";

export function Technologies() {
    return (
        <Box mb='20'>
            <Heading as='h2'  mb='10' >Technologies</Heading>
            <Box >
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <SiHtml5 size={100}/>
                    </SwiperSlide>
                    <SwiperSlide><SiCss3 size={100}/></SwiperSlide>
                    <SwiperSlide><SiSass size={100}/></SwiperSlide>

                    <SwiperSlide><SiJquery size={100}/></SwiperSlide>

                    <SwiperSlide><SiReact size={100}/></SwiperSlide>
                    <SwiperSlide><SiVite size={100}/></SwiperSlide>
                    <SwiperSlide><SiNextdotjs size={100}/></SwiperSlide>
                    <SwiperSlide><SiVercel size={100}/></SwiperSlide>

                    <SwiperSlide><SiExpo size={100}/></SwiperSlide>
                    <SwiperSlide><SiRedux size={100}/></SwiperSlide>
                    <SwiperSlide><SiGraphql size={100}/></SwiperSlide>
                    <SwiperSlide><SiApollographql size={100}/></SwiperSlide>
                    <SwiperSlide><SiAngular size={100}/></SwiperSlide>

                    <SwiperSlide><SiJamstack size={100}/></SwiperSlide>
                    <SwiperSlide><SiJest size={100}/></SwiperSlide>
                    <SwiperSlide><SiEslint size={100}/></SwiperSlide>
                    <SwiperSlide><SiPrettier size={100}/></SwiperSlide>

                    <SwiperSlide><SiPhp size={100}/></SwiperSlide>
                    <SwiperSlide><SiNodedotjs size={100}/></SwiperSlide>
                    <SwiperSlide><SiNodemon size={100}/></SwiperSlide>
                    <SwiperSlide><SiPython size={100}/></SwiperSlide>

                    <SwiperSlide><SiFontawesome size={100}/></SwiperSlide>
                    <SwiperSlide><SiBootstrap size={100}/></SwiperSlide>
                    <SwiperSlide><SiChakraui size={100}/></SwiperSlide>
                    <SwiperSlide><SiMaterialui size={100}/></SwiperSlide>
                    <SwiperSlide><SiTailwindcss size={100}/></SwiperSlide>
                    <SwiperSlide><SiStyledcomponents size={100}/></SwiperSlide>

                    <SwiperSlide><SiWordpress size={100}/></SwiperSlide>
                    <SwiperSlide><SiWoo size={100}/></SwiperSlide>
                    <SwiperSlide><SiRoots size={100}/></SwiperSlide>
                    <SwiperSlide><SiRootsbedrock size={100}/></SwiperSlide>
                    <SwiperSlide><SiJoomla size={100}/></SwiperSlide>
                    <SwiperSlide><SiPrismic size={100}/></SwiperSlide>

                    <SwiperSlide><SiCloudflare size={100}/></SwiperSlide>
                    <SwiperSlide><SiCpanel size={100}/></SwiperSlide>
                    <SwiperSlide><SiPhpmyadmin size={100}/></SwiperSlide>
                    <SwiperSlide><SiPostgresql size={100}/></SwiperSlide>
                    <SwiperSlide><SiMysql size={100}/></SwiperSlide>
                    <SwiperSlide><SiHeroku size={100}/></SwiperSlide>

                    <SwiperSlide><SiGit size={100}/></SwiperSlide>
                    <SwiperSlide><SiGithub size={100}/></SwiperSlide>
                    <SwiperSlide><SiGithubactions size={100}/></SwiperSlide>
                    <SwiperSlide><SiGitkraken size={100}/></SwiperSlide>

                    <SwiperSlide><SiWebpack size={100}/></SwiperSlide>
                    <SwiperSlide><SiGulp size={100}/></SwiperSlide>
                    <SwiperSlide><SiGrunt size={100}/></SwiperSlide>

                    <SwiperSlide><SiNpm size={100}/></SwiperSlide>
                    <SwiperSlide><SiYarn size={100}/></SwiperSlide>

                    <SwiperSlide><SiJavascript size={100}/></SwiperSlide>
                    <SwiperSlide><SiTypescript size={100}/></SwiperSlide>

                </Swiper>
            </Box>
        </Box>
    )
}