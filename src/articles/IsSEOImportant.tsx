import {
  Box,
  Container,
  Heading,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

export function IsSEOImportant() {
  const bg = useColorModeValue('gray.100', 'gray.800')

  return (
    <Box bg={bg}>
      <Container w="100%" maxW="container.xl" p="5">
        <VStack align="left" gap="5">
          <Heading as="h1">Is SEO important?</Heading>
          <Text>Jul 17, 2022</Text>
          <Text fontSize="2xl" mb="5">
            Search engine optimization (SEO) is the process of increasing the
            number of visitors to a website by achieving a high rank in the
            search results returned by a search engine, or the set of practices
            involved in attaining a high ranking in search engine results, is a
            web writing skill that requires more attention in business
            communication pedagogy, because SEO helps businesses attract
            customers
            <Tooltip
              label="
                                MORENO, L.; MARTINEZ, P. Overlapping factors in search engine optimization and web
                                accessibility. 37, 2013.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . SEO constitutes a variety of strategies that, combined, boost a
            website, blog post, or online article high in search engine
            rankings. Individuals and businesses value these high rankings
            because it is important that their websites are among the first few
            that appear when a consumer searches for a product, a service, an
            event, or another item related to the company. It is important to be
            high in the rankings because, if not, poten- tial customers or
            connections may never view the company’s site and purchase its
            products or learn about its services. In fact, multiple studies
            demonstrate that web searchers rarely choose to go past the first
            page of Google results
            <Tooltip
              label="
                                VAN  DEURSEN, A. J. A. M.; VAN DIRJ, J. A. G. M. Ousing the Internet:
                                Skill related problems in users’ online behavior. Interacting With Computers. 21, 393-402., 2009.
                               "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            and that sites ranked in the top three organic positions actually
            receive 58.4% of all user clicks
            <Tooltip
              label="
                                GOODWIN, D. Top Google Result Gets 36.4% of Clicks [Study]. Search Engine Watch. Apr. 2011.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . Organic positions refer to obtaining high results naturally
            through SEO tactics versus through search engine marketing (SEM),
            which instead refers to gaining traffic by purchasing ads on search
            engines
            <Tooltip
              label="
                                JANDA, J. What exactly is the difference between SEO & SEM?. Jun. 2018.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            .
          </Text>
          <Text fontSize="2xl" mb="5">
            SEO requires care of relevant keywords and phrases, which often
            requires authors to consider using the language their audience uses
            to search within a search engine, but there is still room for
            personality. There are indeed SEO practices that are unethi- cal,
            which are often deemed black hat tactics. Black hat tactics involve
            writers or coders going against guidelines set by search engines and
            manipulating them to achieve higher rankings
            <Tooltip
              label="
                                O’CONNOR, P. An introduction to black hat SEO. Oct, 2019.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . These strategies can include practices such as keyword stuffing,
            which refers to adding many irrelevant keywords to one’s site just
            to boost rankings for those keywords, and hiding text and links
            behind images
            <Tooltip
              label="
                                GUDIVADA, V N; RAO, D; PARIS, J. nderstanding Search-Engine
                                Optimization. Computer 48 (10): 43–52. 2015.
                            "
            >
              <InfoIcon mx="1" w={3} bottom="3" position="relative" />
            </Tooltip>
            .
          </Text>

          <Text fontSize="2xl" mb="5">
            SEO algorithm factors are often broken down into three main
            categories: trust, relevance, and authority
            <Tooltip
              label="
                                TRAPHAGEN, M. P.  The three pillars of SEO: Authority, relevance, and trust. Search Engine Journal. 2018.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . Search engines glean the trust, relevance, and authority of web
            pages and then match those pages with users’ search queries.
            Strategies for SEO are also often broken down into on-page versus
            off-page tactics. On-page optimization refers to optimizing aspects
            of the website itself, such as the use of anchor text, the inclusion
            of a page title, the application of metatags, and the use of
            keywords. Essentially, these are aspects the website owner or writer
            has control over on his or her own website. Off-page SEO, on the
            other hand, refers to “the digital signals outside of one’s own
            website” that can be influenced indirectly
            <Tooltip
              label="
                                MASTRI, T. What’s the difference between on-page and off-page SEO?. 2018.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . Off-page SEO factors can include back-links (hyperlinks from
            others’ websites to your own) and items such as social media shares.
          </Text>

          <Heading as="h2">Search Engine</Heading>

          <Text fontSize="2xl" mb="5">
            Search engines are the most popular information source for
            consumers, with 81 percent of them indicating that they look for
            product and service information online through search engines
            <Tooltip
              label="
                                CHAFFE, D. Search Engine Marketing Statistics: The Latest Search Usage and Adoption Data to Inform Your Strategies and Tactics. Smart Insights. 2020.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . Search engines have been used by consumers for searching product
            and service information since the 1990s, and the ways that consumers
            use search engines have remained largely the same as in the past.
            First, a user experiences the information needs, e.g., learning new
            features of a product before purchasing it. Second, the user
            formulates a query or finds online content with words and phrases.
            Third, a user query prompts search engines to retrieve information
            and return results that are ranked hierarchically. Search engines
            analyze web pages by titles, headings, and specific fields. The user
            may refine the query and perform additional searches until the
            result is satisfactory. Search engines aim to provide information
            relevant to keywords or phrases in a user query. Usually, the search
            engine determines the intent of the query to find out the most
            appropriate results relevant to the user’s information needs.
          </Text>

          <Heading as="h2">Google</Heading>

          <Text fontSize="2xl" mb="5">
            Google is the most popular search engine. Google handles more than
            90 percent of search queries from all around the world, whereas its
            closest rivals, such as Microsoft Bing and Yahoo!, process a
            fraction of Google’s volume. Google processes billions of searches
            on various devices, including desktop computers and mobile phones,
            in more than 120 languages daily. Google undoubtedly dominates the
            global search engine market, with 92.26 percent of the market share.
            In view of the second most popular search engine, Microsoft Bing, it
            only accounts for 2.83 percent of the global search engine market
            share
            <Tooltip
              label="
                                CHRIS, A. Search Engines in the World. ReliableSoft Digital Marketing Agency. 2021.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . To increase the quality of the search results, Google has used
            several sophisticated ranking algorithms. Google has continued to
            develop and improve ranking algorithms with the application of
            hundreds of factors aided by machine learning to search what users
            precisely expect on the website. Lately, Google has used RankBrain,
            which is a relatively new search engine algorithm, to collect usage
            information from its users and enhance features of its search
            results. With artificial intelligence, RankBrain assists Google in
            processing search results and provides the most suitable search
            results to users
            <Tooltip
              label="
                                TALARICO, D. Getting Your SEO Ready For AI: Artificial Intelligence and Search
                                Engine Optimization. Recruiting and Retaining Adult Learners. 20 (6): 3. 2018.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . In an experiment performed by Google, the effectiveness of
            RankBrain capability was measured, and it was found that RankBrain
            outperformed Google’s engineers. In a short period of time,
            RankBrain became the third most important ranking factor that
            determines the rank of a web page on search results, while the first
            and second most important ranking factors are the links pointing to
            the website and the content of the website, respectively.
          </Text>

          <Text fontSize="2xl" mb="5">
            Currently, marketing organizations enhance web traffic from the
            results on a search engine by two methods (Lee et al. 2016)
            <Tooltip
              label="
                                LEE, S.; JANG, W.; LEE, ,E; SAM G. OH. Search Engine Optimization:
                                A Case Study Using the Bibliographies of LG Science Land in Korea. Library Hi Tech.
                                2016.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . The first method involves paid marketing efforts, in which
            marketers buy online space for advertising, such as Google AdWords,
            Google shopping advertisements, social media advertisements, and so
            forth. For example, an online advertiser is required to design and
            identify keywords relevant to his/her website and pay a sponsorship
            fee to Google. When users search these keywords, Google will
            retrieve and place the sponsor’s website address on the top of the
            search result page to increase its opportunity of being visited by
            the search engine users.
          </Text>

          <Text fontSize="2xl" mb="5">
            The second method to enhance web traffic from the results is search
            engine optimization (SEO), that is, the process of optimizing the
            web page content in order to increase the opportunity of being
            indexed and then retrieved by the search engine
            <Tooltip
              label="
                                NABUT A.; NADIA; SKIERA, B. Return on Quality Improvements in Search Engine Marketing.
                                Journal of Interactive Marketing. 26 (3): 141–154. 2012.
                                BERMAN; RON; KATONA, Z. The Role of Search Engine Optimization in Search Marketing.
                                Marketing Science. 32 (4): 644–651. 2013.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . SEO is an important digital marketing tool for an online marketer
            to make its website more visible with higher traffic and more
            opportunities to convert prospects into customers. Also, SEO helps
            online marketers to create brand awareness, build and manage
            relationships with audiences and prospects, improve customer
            experience, and position themselves as an authoritative and
            trustworthy company in the field or product category. In short, SEO
            is a vital tool for an online marketer to grow and expand its
            business.
          </Text>

          <Text fontSize="2xl" mb="5">
            Although there are different tactics or practices for SEO, they are
            evolving rapidly as new technology emerges, as consumer and web-user
            behavior changes, and as a searching engine changes its algorithms.
            In particular, the algorithms used by search engines are changing
            from time to time. Google, for instance, has used RankBrain as a new
            search engine algorithm. There are also many Google updates each
            year, like Medic Update and the Chrome security warning in 2019
            (HubSpot, n.d.). Successful online marketers have to study the
            behaviors of search engines and examine how they work, so they can
            optimize their web titles, URLs, and other on- page SEO elements.
          </Text>

          <Text fontSize="2xl" mb="5">
            Online marketers should be empathetic and smart practitioners of
            SEO. In order to make websites more visible, online marketers are
            required to provide consumers with search results relevant to their
            queries (Bhandari and Bansal 2018; Khan and Mahmood 2018; Vadivel
            and Baskaran 2011).
            <Tooltip
              label="
                               BHANDARI, R. S.; BANSAL, A. Impact of Search Engine Optimization as a
                               Marketing Tool. Jindal Journal of Business Research. 7(1): 23–36. 2018.
                               KHAN, M. N. A.; MAHMOOD, A. A Distinctive Approach to Obtain Higher Page
                               Rank through Search Engine Optimization. Sādhanā. 43 (3): 1–12. 2018.
                               VADIVEL, R.; BASKARAN, K. Enrich the e-Publishing Community Website
                               with Search Engine Optimization Technique. International Journal of Computer
                               Science Issues. 8 (5): 404–409. 2011.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            In other words, it is essential for online marketers to understand
            the target audience and how they think about the search of brands,
            products, and services. Searching with a search engine is different
            from entering a website address, clicking on a hyperlink on a
            website, or using bookmarks. Search engines are driven by user
            intent toward content destinations. Users request specific
            information instead of landing on a website by chance. As such,
            search traffic is usually of higher value to marketing than other
            types of kinds of traffic on the web
            <Tooltip
              label="
                                 CHOUDHARI, K.; BHALLA, V. K. Video Search Engine Optimization Using
                                 Keyword and Feature Analysis.” Procedia Computer Science. vol. 58, 691-697, 2017.
                                 JASEVICIUTE, V. Automatic Planning of External Search Engine Optimization.
                                 Mokslas: Lietuvos Ateitis. 7(3): 04–308, 2015.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . This explains why search engines invest a lot of resources into
            comprehending how people search, thus enabling them to produce
            better results in terms of speed and relevance.
          </Text>

          <Text fontSize="2xl" mb="5">
            For commercial website designers and publishers, it is important to
            know how to improve the usability of company websites. People use
            search engines for various purposes. One popular usage is to locate,
            research, and purchase products (Ye, Aydin, and Hu 2014). There are
            about 1.3 billion online shoppers currently, and the global
            e-commerce sales in 2019 reached USD $29 trillion (United Nations
            2019). To build a practical and effective SEO strategy, a website
            should completely understand the target audience’s psychology and
            the way they use keywords and concepts to acquire information about
            the produces and services offered by online companies
            <Tooltip
              label="
                                ARLITSCH, K.; OBRIEN, P.; ROSSMANN, B. Managing Search Engine
                                Optimization: An Introduction for Library Administrators. Journal of Library
                                Administration. 53 (2-3): 177–188, 2013.
                                KILLORAN, J. How to Use Search Engine Optimization Techniques to Increase Website
                                Visibility. IEEE Transactions on Professional Communication. 56 (1): 50–66. 2013.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . When a company understands how target consumers write up queries
            to be processed by search engines, the company can reach and keep
            their target consumers effectively. Searching on the internet
            penetrates the global society and changes the way people work, play,
            share, shop, interact, and socialize. Organizations and individuals
            also have an internet presence, and they require search engines to
            generate exposure and enable engagement. While society is changing
            to an economy in which consumers are becoming more professional
            (i.e., prosumer), the ways in which people publish and find
            resources and information will continue to be of great significance
            <Tooltip
              label="
                                CIOLAC, C. E. A Benchmark for Banks’ Strategy in Online Presence: An
                                Innovative Approach Based on Elements of Search Engine Optimization (SEO) and
                                Machine Learning Techniques. Economia: Seria Management. 14 (1): 91–105. 2011.

                                GUDIVADA, V N; RAO, D; PARIS, J. nderstanding Search-Engine
                                Optimization. Computer. 48 (10): 43–52. 2015.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            .
          </Text>

          <Heading as="h3">How the search engine works</Heading>

          <Text fontSize="2xl" mb="5">
            Search engines put emphasis on the content of web pages because the
            content defines what the web pages are about. Search engines perform
            a detailed analysis of each web page during their crawling. All the
            words and phrases on a web page will be analyzed to build a semantic
            map that defines the relationships among concepts represented by
            these words and phrases
            <Tooltip
              label="
                                LUI, R. W. C.; AU, C. H. Establishing an Educational Game Development Model:
                                From the Experience of Teaching Search Engine Optimization. International Journal of
                                Game-Based Learning. 8 (1): 52–73. 2018.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . This map is helpful for the search engine to understand how to
            match the proper web pages with the search queries. Determining the
            unique web page content is an essential part of what a search engine
            does. It attempts to understand the unique content to determine if a
            search query is relevant to a web page. The search engine has to
            judge the value of content and draw some conclusions based on what
            is found on the web page.
          </Text>
          <Text fontSize="2xl" mb="5">
            Crawlers and indexing programs of search engines are software that
            analyze web page content and organize the information into databases
            that respond to search queries. There are limitations because the
            software is mechanical, and it understands only parts of most web
            pages. It mainly grabs and analyzes the raw HTML codes of a web
            page. When it processes the user- visible content of web pages, it
            largely ignores codes related to the navigation and the display
            format of web pages. Moreover, search engines read and analyze a
            page title, which is considered an important factor in ranking a web
            page. It is the text showing on the title bar of a browser. In
            addition, search engines examine the content of metatags, such as
            keywords and descriptions. These metatags are usually hidden from
            users because they are parts of the HTML codes of a web page.
            However, they play roles to tell what the web page is about.
            Therefore, the well-written metatag content has an influence on
            ranking and, thus, the click- through rate of the web pages found on
            the searching result.
          </Text>
          <Text fontSize="2xl" mb="5">
            Some types of content are invisible to a search engine. Search
            engines cannot tell whether an image is a picture of a dog, a car,
            or a boat, and so forth. Also, a search engine is unable to
            recognize the text rendered in the picture. Apart from pictures, a
            search engine cannot read the information in multimedia, such as
            Flash, audio, and video files. Moreover, a search engine cannot
            process programs, e.g., JavaScript, as it is unable to examine any
            content within a program.
          </Text>
          <Text fontSize="2xl" mb="5">
            In the analysis of a web page, a search engine examines whether it
            finds the search terms in the important parts of the web page, such
            as the title, the metatags, and the visible text body. Reliance on
            analysis of web pages alone may not be enough, as a search engine
            also considers semantic connectivity. Semantic connectivity refers
            to the words and phrases that are usually associated with each
            other. For instance, the word “computer” may associate with other
            words like “desktop” and “notebook.” Search engines actively
            construct the dictionary and thesaurus to assist in determining how
            topics and terms are related. Semantic connectivity measurement is
            based on which keyword phrases to target on a web page about a
            certain topic and the relationship with the content of other highly
            ranked web pages.
          </Text>
          <Text fontSize="2xl" mb="5">
            A search engine also measures the uniqueness and the quality of web
            page content
            <Tooltip
              label="
                                DOU, W.; ZHOU, N.; KAI, H. L.; CUI, N.; SU, C. Brand Positioning
                                Strategy Using Search Engine Marketing. MIS Quarterly. 34 (2): 261–279. 2010.
                                MISTRY, P.; MISTRY, D.; SHETH, J. nternet Marketing: Comparative
                                Analysis of Search Engine Optimization Applications on Various Parameters.
                                National Journal of System and Information Technology. 6 (1): 69–79. 2013.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . One way is to evaluate the web page itself. For example, if there
            are many grammatical and spelling errors, it indicates little
            editorial effort put into the web page. In addition, the number of
            words per sentence and the average word length determines the
            education level required to understand the sentence. If a web page
            about toys for children requires a high reading level, it is an
            indicator of a poor editorial effort. The actual user interaction
            can evaluate the quality of a web page. For example, when a lot of
            users visit a particular web page on the search result but return to
            the search engine immediately, this indicates poor quality of the
            web page.
          </Text>
          <Text fontSize="2xl" mb="5">
            A search engine measures what other web pages are linking to it,
            also known as link analysis
            <Tooltip
              label="
                                GUNJAN, V. K.; POOJA; KUMARI, M.; KUMAR, A.; Allam appa rao. Search
                                Engine Optimization with Google. International Journal of Computer Science Issues.
                                9(1): 206–214. 2012.
                                ZHANG, S.; CABAGE, N. Search Engine Optimization: Comparison of Link
                                Building and Social Sharing.” Journal of Computer Information Systems. 57(2): 148–
                                159. 2017.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            For example, when a user is interested in web pages about video
            games, a search engine uses semantic analysis to recognize a
            collection of web pages that relate to the topic of video games.
            Then, the search engine determines the ones with the most links from
            the set of web pages relevant to the topic. These web pages are
            likely to be more trustworthy than the others. PageRank is an
            algorithm used by Google to measure the significance of web pages by
            counting the quality and the number of hyperlinks to a web page.
            Links from other websites are important because they vote for the
            quality of a website.
          </Text>
          <Text fontSize="2xl" mb="5">
            The greatest challenge for search engines is disambiguation. A word
            may have two or more meanings. For example, the word “base” carries
            various meanings in different areas like mathematics, chemistry,
            sports, and the military. Another example is the word “fly,” which
            may be a verb and a noun. In other situations, it is difficult to
            determine the intent of a user. For example, when the query just
            contains the keyword “computer,” the user may want to buy a new
            computer, read reviews on computers, or learn about the latest
            computer technologies. The search engine may provide diverse results
            to respond or attempt to find additional clues from the previous
            queries.
          </Text>
          <Text fontSize="2xl" mb="5">
            In some situations, a search engine delivers results from sources
            that have existed for a longer time because they have stood the test
            of time
            <Tooltip
              label="
                                BAYE, M. R.; SANTOS, B. D.; WILDENBEEST, M. R.  esarch Engine
                                Optimization: What Drives Organic Traffic to Retail Sites?” Journal of Economics &
                                Management Strategy. 25 (1): 6–31. 2016.
                                LEE. P. T. Y.; LUI, R. W. C.; CHAU, M. How Does Competition Help
                                Future Learning in Serious Games?: An Exploratory Study in Learning Search Engine
                                Optimization. Journal of Information Systems Education. 30 (3): 167–177. 2019.
                                PALANISAMY, R.; LIU, Y. User Search Satisfaction in Search Engine
                                Optimization: An Empirical Analysis.” Journal of Services Research 18 (2): 83–120. 2016.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . A website that has been established for a long time can give
            support to rankings. An old website carries more weight because of
            its history and trust with an impact on its authority. However, when
            there is breaking news, the search engine has to retrieve the latest
            available information on the internet within a short period of time.
          </Text>

          <Text fontSize="2xl" mb="5">
            Although an image is not a kind of structural data like HTML
            content, image optimization helps search engines to decide what
            images are about. Small sentences and relevant keywords can be used
            on alternative tags and file names. This is important for Google
            Images, which is a kind of image-based search engine.
          </Text>

          <Text fontSize="2xl" mb="5">
            The usage of SEO-friendly URLs is a basic SEO technique. The name of
            an URL should be appropriate and meaningful. Most website designers
            use the keywords from the lead paragraphs for information
            consistency. Creating descriptive filenames and paths can help a
            website be better organized. A friendly URL is helpful for users who
            want to link to the web page content. Users may be intimidated by a
            long but meaningless URL with a lot of unrecognizable words. An URL
            with meaningful words relevant to the website structure and content
            is friendlier for users to navigate the website.
          </Text>

          <Text fontSize="2xl" mb="5">
            The site speed impacts search ranking and is taken into
            consideration by search engines. It refers to how fast a website
            reacts to requests from the web. Faster websites satisfy users with
            a better experience. Bounce rate is to measure single-page visits
            (i.e., visitors entering and leaving a website but not interacting
            within the site or viewing other pages). This kind of interaction
            metric is used to reflect user engagement.
          </Text>

          <Heading as="h4">Conclusion</Heading>

          <Text fontSize="2xl" mb="5">
            Search Engine Optimization has acquired a lot of boom and the value
            has increased further with the increased Internet offenders
            <Tooltip
              label="
                              KING, A. B.; Website Optimization.  O`Reilly Media. 2008.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . For a business, the optimization of search engines has several
            advantages: Both regionally and internationally, the axioms or
            primary restrictions outlined would encourage dominance in the
            viewer. For enterprises that run abroad, this would be very useful.
            When run with important and most appropriate axioms and key terms,
            the search engine would maximize the degree of traffic for the
            website of the specific company. The SEO aims to transform
            searchers' traffic to prospective customers and is therefore
            considered the best way to improve the business. After the
            optimization process, the visibility element of the company's
            website will begin. The customers are also aware of the exclusive
            services and goods of the business firm in question. The
            optimization of the search engine is found to be more functional and
            advantageous relative to any other form of traditional marketing.
            Compared to all other marketing types, the optimization of the
            search engine is successful in increasing immense earnings on
            investment returns. This would increase the company's revenue and
            earning (Kareem, 2009). The rating offered by the SEO would help to
            maintain the website of the firms for a very long time for
            comparison and is a very cheaper solution compared to other
            approaches
            <Tooltip
              label="
                                ABDALWAHID, S. M. J.; YOUSIF, R. Z.; KARREN, S. W. Enhancing approach using hybrid Pailler and RSA for
                                information security in BigData. Applied Computer Science. 15(4), 63–74. 2019.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . From the above discussion it can be understood that, the search
            engine optimization will provide lethal advantages to the businesses
            such as controlling the traffic volume, increased sales and
            revenues, high profits, more benefited way of advertising of the
            services and products of a company, cost effective, high range of
            visibility, global and local visibility, lesser capital for
            investment, etc
            <Tooltip
              label="
                                KAREEM, W. S.; YOUSIF, R. Z.; ABDALWAHID, S. M. J.a n approach for enhancing data confidentiality in
                                Hadoop. Indonesian Journal of Electrical Engineering and Computer Science. 20(3), 1547–1555. 2020.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            .
          </Text>

          <Text fontSize="2xl" mb="5">
            Search marketing is an important traffic driver that attracts a
            significant proportion of visitors to the website. Visitors who
            search for certain products or services would have a higher
            intention of purchase. By using SEO, there is no media cost for
            click-through and advertisement display. Costs are mainly for the
            optimization process. Search engine robots crawl the web pages
            regularly, and new content can be included relatively fast for the
            most popular websites. There are about two billion websites, and
            about 70 percent of all traffic originates from search engines
            <Tooltip
              label="
                              BACKLINK. SEO Fundamentals. Accessed. Jan. 2021
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . Google is the most commonly used search engine globally. SEO is
            frequently evolving as Google revises its algorithms 500 to 600
            times each year
            <Tooltip
              label="
                                DCM MEDIA. Time to Check Your SEO Strategy: Google Performs 500–600 Algorithm
                                Changes Each Year. Weekly Source. 2018.
                            "
            >
              <InfoIcon w={3} mx="1" bottom="3" position="relative" />
            </Tooltip>
            . It is inevitable for online marketers to optimize their web
            titles, URLs, and other on-page SEO elements to increase visibility,
            web traffic, and prospect conversion.
          </Text>

          <Text fontSize="2xl" mb="5">
            The benefit of search engine optimization is essentially that it
            increases your website popularity. Visibility is everything in
            modern business. People must be able to locate, because given the
            number of rivals, that is, others that choose to rank for the same
            keywords, this is not an easy task. commonly used software that can
            assist in various activities that are part of SEO, from from keyword
            research to website review. There are many of other apps, both free
            and paid, and the latest that are currently being created. like
            internet has become such an expansive and competitive virtual
            environment, a comprehensive and tactical environment and the effort
            required is to make the most of the potential that a search engine
            offers.
          </Text>

          <Text fontSize="2xl" mb="5">
            From the aforementioned discussion, it can be understood that the
            optimization of the search engine would provide firms with lethal
            benefits, such as traffic flow management, improved sales and
            earnings, high profits, more beneficial advertisement of a company's
            services and goods, cost-effective, high exposure range, global and
            local visibility, reduced venture capital, etc.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
