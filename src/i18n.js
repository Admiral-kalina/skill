import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    header: {
                        text1: 'Main',
                        text2: 'Relocation',
                        text3: 'Startup visa',
                        text4: 'Orientation year',
                        text5: 'Funding',
                        text6: 'Cases',
                        text7: 'Courses and workshops',
                        text8: 'Startup tools',
                        text9: 'About us',
                        text10: 'Contacts',
                        text11: 'Blog',
                    },
                    home: {
                        title: 'Relocating businesses and individuals to the Netherlands.',
                        btn1: 'Register for consultation ',
                        btn2:'Watch programs',
                        btn3:'More details',
                        btn4:'About the Netherlands',
                        why:'Why the Netherlands?',
                        textComf:'Even more!',
                        subtitle: {
                            part1: 'All types of',
                            part2: 'residence permits Immigration support for startups and businesses',
                        },
                        block2: {
                            title: 'How we can help',
                            item1: 'Residence permits based on startup and self-employed visas  ',
                            item2: 'Student visa and orientation year for university graduates',
                            item3: 'Business relocation, moving with your family to Europe',
                            item4: 'Online workshops and courses to prepare for startup visa application',
                            item5: 'Grant and subsidy applications for your project',
                        },
                        block3: {
                            title: 'Business in the Netherlands',
                            description: {
                                item1: 'The Netherlands',
                                item2: 'ranks 1st',
                                item3: 'in the world in terms of the quality of life index.',
                                item4: 'The most competitive economy in Europe, the absence of bureaucracy and corruption, a perfect educational system and tolerance and stability in all areas. All this makes moving to this country a cherished and very real dream.',
                            },
                            description2: 'And as a bonus, you get stunning landscapes, the longest life expectancy in Europe, the happiest children in the world, a harmonious combination of antiquity and modern innovation.',
                            description3: {
                                item1: 'And if you are thinking about the possibility of opening your own business in the Netherlands, we, Skilltostart, know how to help you with this.',
                                item2: 'And trust us, it\'s a lot easier than you think!'
                            }
                        },
                        block4: {
                            title: 'Our results for the past 12 months',
                            box1: {
                                text1: 'more than 40 startups',
                                text2: 'received individual assistance from our team in obtaining a residence permit on a start-up visa, grants and investments.',
                            },
                            box2: {
                                text1: 'attracted over €350,000',
                                text2: 'in funding through grants to early stage start-ups.\n',
                            },
                            box3: {
                                text1: 'Over 5 years of experience',
                                text2: 'innovative start-ups from an idea to registering a company, obtaining grants and subsidies, obtaining international patents, participating in international acceleration programs',
                            },
                            box4: {
                                text1: '90% of our clients get a positive result.',
                                text2: 'We receive consistent positive response to start-up visa applications to the Netherlands and relocate existing businesses and start-up teams.',
                            },
                            comforter: 'Start now'
                        },
                        block5: {
                            title: 'Our products',
                            link1: 'More information',
                            box1: {
                                text1: 'RELOCATION to the Netherlands without stress',
                                text2: 'Individual support for startup and self-employed visa. For those who want a quick result. Turnkey support and soft landing! For teams and individuals.',
                            },
                            box2: {
                                text1: 'Efficient online startup visa course STARTUP TOOLS',
                                text2: 'Do you want to launch a startup in the EU and move, but not sure where to start and how to proceed and what documents you need? During the course, in 6 weeks we will teach you how to prepare a successful application for a start-up visa in Europe.',
                            },
                            box3: {
                                text1: 'INDIVIDUAL CONSULTATIONS',
                                text2: 'Ideas for business in the Netherlands, Dutch visas, startup visa, startup pitch deck, application for a residence permit, grants for business in the Netherlands, relocation and immigration support',
                            },
                            box4: {
                                text1: 'MASTER CLASSES',
                                text2: 'Master classes: how to prepare for a successful startup visa application and present your project to European investors. How to attract grants in Europe. Online master class to prepare a business plan for your startup + BONUS: Working templates and required  forms',
                            },
                            box5: {
                                text1: 'Teams',
                                text2: 'Individual clients',
                            },
                        },
                        block6: {
                            title: 'We are happy to help',
                            box1: {
                                text1: 'Creative thinking people with an entrepreneurial streak. Even if you don\'t have an idea and a team yet - here we are for you!',
                                text2: '"So I decided to move - the easiest option is a start-up visa, which means I need a project that I will join and that needs European expansion. So where do you get it? If you want to find theatergoers, what do you do? Go to the theatre. Looking for an interesting project? Hang out where there are startups. I found a partner and a project on a Startup Visa online course. So you understand, right? I first came and signed up for the course, and then, "on the way" and the project was found :)." Taisiya K.',
                            },
                            box2: {
                                text1: 'Early stage startups and entrepreneurs with innovative ideas. Entry into the European market.',
                                text2: '"The course helped to formulate the concept of a startup from abstract ideas. " Andrey D.',
                            },
                            box3: {
                                text1: 'Entrepreneurs with a working business and top managers with an idea for a business. Scaling to the EU market.',
                                text2: '"The teachers helped not only to prepare the documents correctly, but in fact to come up with a start-up, to twist from those ideas that are." Pavel G.',
                            },
                        },
                        block7: {
                            title: 'Skilltostart YouTube channel',
                            conduit: 'Check it out',
                        },
                        block8: {
                            title: 'Why the Netherlands',
                            box1: {
                                text1: 'Investments',
                                text2: 'The most competitive economy in Europe according to the WEF Competitiveness Index and one of the best countries for business investment',
                            },
                            box2: {
                                text1: 'Gateway to Europe',
                                text2: 'The Netherlands is located in continental Europe and has access to 170 million customers within 500 km and 244 million customers within 1000 km',
                            },
                            box3: {
                                text1: 'Innovation',
                                text2: 'A leader in digital technology. According to the Global Innovation Index (GII) 2021, the Netherlands holds 6th place in the world and is number 3 in Europe.\n',
                            },
                            box4: {
                                text1: 'Life',
                                text2: 'One of the longest average life expectancies in the world : 78 years (men) and 82 years (women).',
                            },
                            box5: {
                                text1: 'Happiness level',
                                text2: 'Quite happy - 55% of the population Very happy - 40% of the population',
                            },
                            box6: {
                                text1: 'Communication',
                                text2: '90% of the Dutch population is fluent in English',
                            },
                        },
                    },
                    about: {
                        hero: {
                            text1: 'is an official partner of the World Startup facilitator. This is one of the largest and most experienced facilitators in the Netherlands. The facilitator\'s focus is wide and includes healthtech, fintech, digital, social impact, sustainability projects. Since June 1, 2023, the Skilltostart team has been leading the Soft Landing module at the World Startup facilitation program. Skilltostart also participates in the selection of startups for the program. Besides that we cooperate with 23 other Dutch facilitators.',
                            text2: 'Skilltostart is a team of entrepreneurs who moved with their families to the Netherlands on a start-up visa before and during the pandemic and joined forces to help people from different countries launch a new business or project in Europe. We have got over 4 years of experience in the field of European innovative start-ups from an idea to registering a company, receiving grants and subsidies, obtaining international patents, participating in international acceleration programs. We are founders of startups and cooperate with Dutch and German facilitators. We provide only up-to-date information and recommendations, tested on our own experience. Skilltostart helps to create a step by step plan and implement the project, going all the way from idea to registering a company.',
                            text3: 'Please check our website and Telegram channel',
                            text4: 'for information about available support measures, business news, networking and useful courses'
                        },
                        passport: {
                            text1: 'The ability to pass the selection in an accelerated mode, bypassing the scouts and avoiding an accidental or poorly motivated refusal, we show projects directly to the program director',
                            text2: 'Reducing the time of reviewing your application by the facilitator',
                            text3: 'Confidence that we know exactly which projects and in what format the facilitators select',
                        },
                        team: {
                            box1: {
                                text1: 'Nina Rybchak',
                                text2: 'Founder and CEO of Elibitec b.v. , a start-up for innovative fire-resistant materials, Co-founder of Skilltostart.  Entrepreneurial manager with 20+ years of experience in international projects facilitation including multinational teams from the US, EU and Asia.\ Author of the Startup Tools course for preparing an application for a startup visa. Expert of World Startup facilitator’s program',
                            },
                            box2: {
                                text1: 'Natalya Lips',
                                text2: 'MSc. Founder and CTO of bioplastic startup Nettle TOC b.v.\n' +
                                    'Co-founder of Skilltostart. A specialist with 10+ years of experience in the development and management of technological projects. More than 5 years of experience in innovative business incubators and over 4 years of successful fundraising in the Netherlands.',
                            },
                            box3: {
                                text1: 'Mikhail Sidakov',
                                text2: 'Co-Founder of',
                                text3: 'Venture partner of ',
                                text4: '(incl. Seedrs). Specialist with 9+ years of experience in strategic consulting (BCG), corporate innovation (Beam Ventures, Snapchat\'s Yellow Bootcamp & Accelerator) and entrepreneurship (2 times founder with investments).',
                            },
                        },
                        facts: {
                            title: {
                                text1: 'Why Netherlands is the best.',
                                text2: '11 objective facts.',
                            },
                            text1: 'The most competitive economy in Europe according to the WEF Competitiveness Index and one of the best countries for business investment.',
                            text2: 'Based on the results of 2022, the Netherlands ranks 1st in the world in terms of the Quality of Life index. Three Dutch cities are in the top 5 best cities to live in the world.',
                            text3: 'Strategically located in continental Europe, access to 170 million consumers within 500 km and 244 million consumers within 1000 km.',
                            text4: 'Digital leader. 👨‍💻 Highest per capita broadband penetration in the world.',
                            text5: 'According to the results of the Global Innovation Index, the Netherlands is ranked 6th in the world and 3rd in Europe for innovation (after Switzerland and Sweden)',
                            text6: 'Dutch children are the happiest in the world according to the children themselves (UNICEF Report 2021)',
                            text7: 'More than 90% of the population is fluent in English (the highest percentage outside the UK, USA.)',
                            text8: 'Optimal business conditions Competitive corporate income tax rate: €0 - €395,000: 15% €395,000 and over: 25.8% A special tax rate of 9% applies to profits derived from (patented) intangible assets (Innovation Box)',
                            text9: 'Optimal business conditions Competitive corporate income tax rate: €0 - €395,000: 15% €395,000 and over: 25.8% A special tax rate of 9% applies to profits derived from (patented) intangible assets (Innovation Box) ',
                            text10: 'Contrary to popular belief that it is rainy and cloudy in Holland, according to statistics in the country 125 days a year without a drop of rain',
                            text11: 'Dutch drinking water is of exceptional quality and goes through about 20 stages of purification before reaching the faucet.',
                            text12: 'In the Netherlands, favorable conditions for doing business, employment, obtaining a competitive education, a happy, safe and healthy physical and psychological life in general are optimally combined.',
                        },
                    },
                    cases: {
                        textComf1:'Read it',
                        textComf2:'Look!',
                        textComf3:'Be inspired!',
                        title: 'CASES',
                        case: {
                            title: 'case 1.',
                            text1: 'How a business from Kaliningrad became a startup in the Netherlands. About how useful it is to look at your project from a different angle. The fact that a startup visa works great for projects with a social impact.',
                            text2: 'A couple from Kaliningrad, an engineer and designer, with a small calligraphy business and an online store of handicrafts for an elegant hobby, reached out to us for help. We liked the team and the project very much. The guys are pros, talents and pedants in their field; there are sales, including sales in Europe. In general, the author\'s business, own developments, the creative industry.',
                            text3: 'The challenge was to figure out how to make a startup out of this.',
                            text4: 'The basic idea is that this hobby can be compared to meditation because it has a beneficial effect on brain activity.',
                            text5: 'HealthTech, Europe is aging, and everything that can help delay dementia must be in demand by the market and will appeal to facilitators (the selection is competitive).',
                            text6: 'We add IT, but we need evidence of the effectiveness of the very method. The guys are persistent, on our advice they contact  a Japanese guru professor who has a series of articles confirming that the method works.'
                        },
                        box1: {
                            text1: 'And, voila! - the professor not only answers, but even sends a letter of support.',
                            text2: 'It is clear that such a speed and result of correspondence is good luck, but here all the participants are fans of the same hobby, and therefore the principle “a fisherman sees a fisherman from afar” works.',
                            text3: 'We reformatted the project with the team, supported it with the necessary letters,  selected facilitators suitable for the profile, sent the pitch deck out.',
                            text4: 'World Startup showed interest, but requested a motivation letter (done, it explained why the Netherlands).',
                            text5: 'A week later, I received an invitation to an online interview. Then the final interview with another representative who is responsible for scaling startups',
                            text6: 'The team got a confirmation that they are accepted to the program, which would be compiled individually for their project!',
                        },
                        box2: {
                            text1: 'We are very grateful to the guys for their trust and for not arguing, but following our advice and doing everything that was necessary, as needed and on time - and now, the result is obvious. The full interview is available on the ',
                            text2: 'channel at'
                        },
                        box3: {
                            text1: "Check your chances of getting a startup visa at a free consultation with experts from Skilltostart. Sign up here or in Telegram @Nina_Ryb",
                            text2: 'Case 2.',
                            text3: 'One more client received the approval of the facilitator, signed the contract and is preparing to receive a residence permit. A team from the Republic of Belarus (citizenship of the Republic of Belarus) with a working business in the field of medical equipment applied with a request to obtain a residence permit in the Netherlands in order to register a company, start operations in the EU and scale the business to the European market.',
                            text4: 'The Skilltostart team analyzed the current business, identified innovative points, after discussion with the client, added an innovative sustainable development component in the most relevant area for the Netherlands, outlined the path for research development for the 1st year of startup development, conducted an analysis of the Dutch market, including a comparative analysis of competitors, prepared a presentation for the facilitator.',
                            text5: 'Also, in agreement with the client, letters of support were received from European partners and potential clients. We also used feedback from current clients on completed projects.',
                            text6: 'From the beginning of the preparation of the application to the signing of the contract with the facilitator, the process took 5 weeks. At the same time, the facilitator to whom we sent the startup presentation responded positively on the same day, and after 3 days an online interview was scheduled. We sent the presentation directly to the program director, who by the way has a specialized medical education, and this significantly reduced the time for consideration and selection.',
                            text7: 'At the online interview, the facilitator confirmed his interest in the startup and his willingness to sign an agreement with them. That is, the approval of the facilitator to sign the contract and visa support was received in record time - 4 days.',
                        },
                        box4: {
                            text1: 'The full interview is available',
                            text2: 'on the',
                            text3: 'channel at',
                            text4: 'Skilltostart opens up new opportunities for your business in the Netherlands and directions you didn\'t know existed. Contact us!',
                            text5: 'Case 3.',
                            text6: 'We had a team of two people come to our course on preparing a startup visa application.',
                            text7: 'The guys already had an existing IT company with their own innovations in supply chain optimization, logistics, marketing and loyalty programs.',
                            text8: 'The course request from the team was as follows: Applied for a startup visa and found an investor for a joint startup. They immediately got involved in the course, did all the assignments and as a result, by the end of the course they had an excellent presentation of the startup project for the Netherlands. The guys sent out their application and received a positive response from one of the largest and most reliable facilitators, which also includes a venture capital fund. ',
                            text9: 'We are very happy that the course helped two families (7 people) to get a residence permit in the Netherlands and move.',
                            text10: 'Testimonial from a client:',
                            text11: '"Thank you to my colleagues at Skilltostart for the excellent training course on preparing a startup visa application for the Netherlands. It is concise, focused, detailed and exactly what is needed for the application. Of course, to get what you want, you have to get involved right away and not be lazy to do your homework. In my case, the result fully coincided with expectations, because by the end of the course I had all the necessary materials and information to submit several applications for a startup visa at once. Moreover, my colleagues from Skilltostart also consulted and helped me individually on many nuances after the course. All in all, I am very satisfied. I\'m starting to learn Dutch) Vartan "Altmacros"',
                        },
                    },
                    relocation: {
                        program: {
                            title: 'Relocation programs',
                            text1: 'Based on our personal experience and the cases of our clients, we offer several relocation programs. All programs are customised and implemented on a turnkey basis: From preparing primary documents to soft adaptation and integration after arrival.',
                        },
                        startup: {
                            title: 'STARTUP VISA',
                            text1: 'In case you are thinking about the possibility of establishing a business in Europe, a start-up visa could be the best option. Today, the start-up visa mechanism is one of the few working options for obtaining a residence permit for the entire family of an entrepreneur (including spouses, partners and children under 18).',
                            text2: 'Are you a non-EU citizen and would like to work in the Netherlands as a beginner/startup entrepreneur? For this you need a residence permit.',
                            text3: 'Our company provides assistance in filling out an application, preparing startup documents, coaching, finding a facilitator, as well as a full support during the entire process.',
                            btn1: 'More details',
                            btn2: 'Download startup guide',
                        },
                        business: {
                            title: 'BUSINESS VISA',
                            text1: 'If you plan to open your business in the Netherlands, then you can apply for a business type visa, the so called self-employed visa. To get it, you will have to work hard: prepare your entrepreneurial dossier and write a serious business plan. These documents will have to convince the migration service of the viability of your business idea and the ability to generate income, create jobs, bring innovation and novelty to the Dutch market and benefits to the economy.',
                            text2: 'Skilltostart provides assistance in filling out an application, preparing all required evidence and documents, writing a business plan as well as a full support for the entire process.  We can file an application for you if needed',
                            btn1: 'Fill in request for consultation'
                        },
                        orientation: {
                            title: 'ORIENTATION YEAR',
                            text1: 'Few people know that in the Netherlands there is a “zoekjaar” residence permit (residence permit for orientation year) - residence permit Orientation year, which gives the right to recent university graduates to live and work in the Netherlands without any restrictions for 1 year. With this visa, you can work in paid employment, as well as a freelancer or entrepreneur. You can bring your partner and kids to the Netherlands.  The partner receives the same employement rights as the main applicant.',
                            text2: 'This orientation year visa can be applied for within 3 years upon completing an undergraduate or graduate/postgraduate program at a Dutch university, or after completing a master\'s/doctorate/post-doctorate program at one of the top 200 universities in at least 2 recognized world university rankings.',
                            btn1: 'Check details',
                        },
                        individual: {
                            title: 'NDIVIDUAL CONSULTATION',
                            text1: 'We will ask you some questions in regards to your situation in advance. The more detailed information you send, the more useful and efficient the consultation will be.',
                            text2: 'Online Zoom meeting 60-90 minutes -  200 euros.',
                            text3: 'Please choose from the following topics :',
                            text4: 'How to make your project innovative so that it matches the startup format and passes for a startup visa?',
                            text5: 'Reformatting the growing presentation under the Dutch format of a startup pitch deck.',
                            text6: 'What kind of knowledge and tools are needed to obtain a start-up visa, an entrepreneurial and student visa, as well as an orientation year visa?',
                            text7: 'Individual support in the preparation of documents for various types of residence permits in the Netherlands.',
                            text8: 'Formatting a project for presentation to a European investor.',
                            text9: 'Specifics of the Dutch legislation, possible instruments for financing start-ups, investments.',
                            text10: 'Business culture of the Netherlands: features and differences from the rest of Europe',
                            text11: 'Everyday life issues regarding moving to Europe with your family. Briefly about the most urgent - housing, medicine, banks, schools, universities',
                            btn1: 'Register for consultation',
                        },
                    },
                    startup: {
                        title: 'STARTUP VISA IN THE NETHERLANDS 2023',
                        subtitle: 'If you are thinking about starting a business in Europe, we advise you to take a closer look at a start-up visa in the Netherlands.',
                        box1: {
                            text1: 'The Netherlands has a well-developed start-up ecosystem with 10 leading innovation hubs where start-ups benefit from world-class business incubators and research centers. In addition, the state offers incentive programs and grants for various sectors of the economy.\n',
                            text2: 'Those include programs for preferential lending to small and medium-sized businesses, grants to support innovation, investments to improve working conditions, incentives for entrepreneurs to buy equipment that does not pollute the environment.',
                            text3: 'The Netherlands also has a flexible taxation system, a progressive income tax scale, and several additional programs for start-ups that provide tax deductions.',
                        },
                        box2: {
                            text1: 'The most important about start-up visas.',
                            text2: 'Not only IT, much wider. There are also topics: creativity, technology, production, logistics.',
                            text3: 'The least expensive option to start a business and register a company in Europe with minimal investment.',
                            text4: 'An Opportunity to immigrate to the Netherlands, develop a project and do business in Europe, taking advantage of tax incentives, bonuses and receiving maximum support in the form of grants and subsidies. You can apply for a startup from any country and have any status (including under temporary protection)',
                            text5: 'To register a start-up company, it is not required that 1 of the shareholders of the company or the director be a citizen of the Netherlands.',
                            text6: 'Minimum charter capital. For example, 100 euros is enough.',
                            text7: 'Within the framework of one startup project, it is possible to obtain a residence permit in Europe and move several families to the Netherlands.',
                        },
                        box3: {
                            text1: 'A start-up visa in the Netherlands (or a self-employed start-up residence permit) is issued for 2 years to the applicant, his spouse, partner and children under 18 years of age. This requires a contract signed with one of the accredited facilitators.',
                            text2: 'More and more facilitators are interested not only in IT projects, but in projects with social impact as well',
                            text3: 'The most important document for a facilitator is your pitch deck/ startup presentation',
                            text4: 'After approval by the facilitator and signing an agreement with them, you can apply for a start-up visa at the Dutch consulate at the place of residence (not necessarily in the country of citizenship), as well as come to the Netherlands on a Schengen visa and send a package of documents to the immigration service by mail and wait for the issuance of a residence permit in the Netherlands.',
                            text5: 'It is necessary to provide proof of income of the founder and show income / savings at the rate of 1508 euro per month, that is, 18.096 euro per year. IMPORTANT! These funds are not blocked in the account. You can live on them.',
                            text6: 'Please register for a free online consultation where we will answer questions about your specific situation and help you decide on the best strategy for obtaining a residence permit in the Netherlands.',
                            btn1: 'Register for consultation '
                        },
                        box4: {
                            title: 'The list of documents for startup visa application',
                            text1: 'The Netherlands today is the best country for moving.',
                            text2: 'The country, which ranks 1st in the world in terms of the quality of life index and is one of the five most competitive economies in the world, is also one of the most tolerant.',
                            text3: 'There are no problems with opening a bank account for citizens of the Russian Federation,the Republic of Belarus, Iran or other and citizenship can be obtained already after 5 years of residence.',
                        },
                        box5: {
                            text1: 'If you are thinking about the possibility of setting up a business in Europe, then a start-up visa may be the best option. Today, the startup visa mechanism is one of the few working options for obtaining a residence permit for the entire family of the entrepreneur (including spouses, partners\ and children under 18).',
                            text2: 'Residence permit as a "startup" gives ambitious newcomers in business one year to create an innovative company in the Netherlands. One of the conditions for this type of residence is that a start-up shall be supervised by  a trusted authorized mentor (facilitator) in the Netherlands. That is, first, you need to be selected by the accredited by the Dutch government facilitators, get approval from one of them and sign an agreement for 1 year. Having such an agreement from an accredited facilitator, you can apply for a start-up visa.',
                            text3: 'Good to know that the company will need to be registered with the Dutch Chamber of Commerce and Industry within the first year. It means that it is not necessary to register it in advance, as you can mistakenly understand from the startup visa application form.',
                        },
                        box6: {
                            title: 'Along with the filled in visa application form you should provide the following documents:',
                            text1: 'a copy of the passport (page spread + all pages with stamps)',
                            text2: 'apostilled birth certificate.',
                            text3: 'an agreement with the facilitator, a letter of support from the facilitator, a declaration of registration of the future company in the Chamber of Commerce of the Netherlands',
                            text4: 'printed out pitch deck',
                            text5: 'short business plan',
                            text6: 'confirmation of financial solvency (17,200 euros per year for the applicant, 25,100 euros per year for the applicant and spouse)',
                        },
                        box7: {
                            text1: 'If you are planning to move with your family, then you must also prepare an apostilled birth certificate and marriage certificate for your spouse and children. Apostilled certificates must be accompanied by a notarized translation into English, Dutch, German or French with an apostille. It is also possible to provide a translation from a Dutch sworn translator.',
                            text2: 'Skilltostart provides a service for preparing the required documents, translating with a sworn translator (2-3 days), filling out forms for the applicant, partner and children, as well as relocation support and soft landing, including obtaining a BSN number, opening a bank account, selecting schools, finding a house, transporting a car, medical insurance, legal and tax advice etc. We offer a customized solution for every client.',
                            text3: 'How exactly is the process of applying for a start-up visa arranged?',
                            text4: 'Documents for a visa can only be submitted in person at the Consulate / Embassy of the Netherlands in the country of citizenship or in the country of temporary registration (if you have a residence permit in it). If you do not have a residence permit in the country of temporary residence, we ask the immigration service about the possibility of applying for a visa from the country of temporary residence, and the IND - immigration service coordinates this with the embassy of the country where you actually reside',
                            text5: 'It is also possible to apply for a visa from within the Netherlands if you have a valid Schengen visa and you legally entered the country based on it. In this case, you can arrange with the facilitator to submit your application online.\n',
                            text6: 'Attention! Visa application forms are different for applying within the Netherlands and from outside. ',
                            text7: 'The official visa application processing time is 90 days, but for a start-up visa, as well as for a student visa, there is an accelerated procedure.',
                            text8: 'The cost of the official fee for a start-up visa is 350 euros for the main applicant, 210 euros for a spouse and 210 euros for a child.',
                        }
                    },
                    visa: {
                        textComf:'Start now!',
                        title: 'Visa Orientation Year',
                        subtitle: 'Zoekjaar visa – residence permit for orientation year in the Netherlands',
                        box1: {
                            text1: 'Residence permit Orientation year, entitles recent university graduates to move to the Netherlands and look for work without any restrictions for 1 year. With this visa, you can easily find a job as an employee, as well as a freelancer or entrepreneur. You can bring a partner or family and get a residence permit in the Netherlands. The partner has the same rights to work as the main applicant.',
                            text2: "This orientation year visa can be applied for within 3 years of completing an undergraduate or graduate/postgraduate program at a Dutch university, or after completing a master's/doctorate/post-doctorate program at one of the top 200 universities in at least 2 recognized world university rankings. What rankings are recognized by a Dutch government?"
                        },
                        box2: {
                            text1: 'For the Dutch Immigration Authorities these are 3 rankings, namely:',
                            text2: 'Times Higher Education: ',
                            text3: 'Quacquarelli Symonds: ',
                            text4: 'ShanghaiRanking Consultancy:',
                            text5: 'It is important to remember that your institution or program must be in the top 200 of these rankings on the date you completed your program, not the year you applied for your visa.',
                            text6: 'There is a separate requirement for the level of English proficiency. A certificate with a score of at least 6.0 in IELTS must be attached to the visa application. The good news is that both of the existing two versions of IELTS are accepted: Academic and General Training. You can also provide another certificate - TOEFL, TOEIC or Cambridge English grades & scale, which are included in the ',
                            text7: 'with a minimum score of 6.0.',
                            text8: 'And of course, if your university program was in English or Dutch, then you do not need to provide anything.'
                        },
                        box3: {
                            text1: 'Bonuses and advantages',
                            text2: 'No need to show income and/or prove financial solvency',
                            text3: 'The visa holder is entitled to housing subsidies (huursubsidie) and partial reimbursement of medical expenses. insurance (zorgtoeslag).',
                            text4: 'With such a residence permit in the Netherlands, it is easier to find a job, since there are no special requirements for the salary level like a highly skilled migrant visa. Moreover, if during this year you find a job as a highly skilled migrant (KM / kennismigrant), you are entitled to a reduced salary (reduced salary criterion). And this is good! Because it is more profitable for the employer to hire you than to transport an employee from another country and pay him the full salary of the CM.',
                            text5: 'During the period of validity of the residence permit orientation year, you can safely travel and leave the Netherlands many times.',
                            text6: 'Skilltostart will help you evaluate your chances, prepare a package of documents and fill out an application for a residence permit in the Netherlands, based on your background. We will tell you in detail about all the details of the residence permit orientation year or student visa. We will gladly answer everyday questions about relocation to the Netherlands.',
                            btn1: 'Send request',
                        }
                    },
                    skills: {
                        title: 'NEW SKILLS',
                        btn: 'launch soon',
                        btnAdd: 'Add to basket',
                        box1: {
                            text1: 'You have moved outside your country or are just preparing to move. The key fear, and for some even a serious brake when moving, is the fear of losing one\'s status. Go down a few steps in your career or even completely abandon your previous experience and become a nanny, a nurse, a cleaner.',
                            text2: 'It\'s time to think about how to make money in a new country, what skills are in demand and where to start. Perhaps you did not even think about the existence of some interesting professional lines or did not know about them. Now you have time and energy to think about what to do.',
                            text3: 'For inspiration, watch video interviews with those who found themselves professionally in another country.',
                        },
                        box2: {
                            text1: 'Online course Tools for Startups',
                            text2: 'Briefly about the most important and relevant things for startup entrepreneurs in the Netherlands.',
                            text3: 'You will learn how to prepare an application for a startup visa on your own. 12 sessions of 2 hours in minigroups + 1 individual session: practicing the pitch deck in English\n',
                            btn1: 'Get details'
                        },
                        box3: {
                            text1: 'Space Organizer',
                            text2: 'A specialist who, with advice and practice, helps other people to qualitatively change the living environment - to make it convenient, comfortable, orderly. Suitable for self-employment.',
                            text3: 'Start soon',
                        },
                        box4: {
                            text1: 'WORKSHOPS',
                            text2: 'You-Tube chanel',
                            text3: 'You can find more inspirational videos on our YouTube channel',
                        }

                    },
                    start: {
                        bonusBtn:'Fill in request form',
                        courseTitle:'COURSE PROGRAM',
                        feedTitle:'Alumni about the course',
                        payment:{
                            text1:'The course is held in the form of an online workshop 2 times a week for 1.5 hours + 1 individual session.',
                            text2:'The format of training - webinars, video lectures, practical assignments.We use ZOOM platform and provide access to recordings for 6 months.',
                            text3:'If you still have questions, write to',
                            text4:'In doubt? Read our ',
                            text5:'Telegram channel.',
                            text6:'Participation fee - ',
                            text7:'Special Price',
                            btn1:'PAY COURSE'
                        },
                        box1: {
                            text1: 'HOW TO LAUNCH A STARTUP IN THE NETHERLANDS IN 12 Lessons',
                            text2: 'The result is a ready application for a startup visa and an understanding of all processes.',
                            text3: '12 online interactive lessons in a minigroup + 1 individual as a bonus: practicing a pitch deck in English',
                            btn1: 'Fill in request form',
                            btn2: 'Buy the course',
                        },
                        box2: {
                            text1: 'Startup tools',
                            text2: 'Knowledge and skills',
                            text3: 'how to start a srtartup',
                            text4: 'where and how to get grants and subsidies and find investors',
                            text5: 'how to legally minimize business  and personal expenses of the founders through specific state startup support schemes',
                            text6: 'Required Skills',
                            text7: 'how to prepare a successful pitch dec - presentation of a startup and present your idea so that investors fight for the project.',
                            text8: 'how to write a startup business plan, value proposition and 1 minute pitch.',
                            text9: 'how to find relevant financial support and apply for a timely grant application in Europe.',
                            text10: 'a complete package of documents for a successful application for a start-up visa and obtaining a residence permit in the Netherlands',
                        },
                        box3: {
                            text1: 'BONUS',
                            text2: 'analysis of a personal profile on LinkedIn',
                            text3: 'LinkedIn is the main business social network in Europe, which allows you to tell about your project as efficiently as possible, find employees/partners, form a relevant network of contacts for cooperation and promotion of your product/services',
                        },
                        box4: {
                            text1: {
                                span1: 'Dutch Startup ecosystem.',
                                text1: 'How does it work? What is good in the Netherlands for business in general and for startups in particular?  How to choose the right acceleration program?',
                            },
                            text2: {
                                text1: 'Dutch mentality and business culture.  ',
                                text2: 'to an acceleration program. Life hacks. LinkedIn as the main business social network.',
                                span1: 'Structure and algorithm of the application',
                            },
                            text3: {
                                text1: 'Basic business tools to apply for a startup program, part 1: participants receive templates of a',
                                text2: 'Use of templates on specific real life examples.',
                                span1: 'business model canvas, value chain.',
                            },
                            text4: {
                                text1: 'Основные бизнес-инструменты, часть 2: шаблон для составления pitch deck. Анализ и формулировка слайда 2: Problems.',
                                span1: 'Практика.',
                            },
                            text5: {
                                text1: 'Basic business tools,',
                                span1: 'Practising session.',
                                span2: 'Value Proposition ',
                            },
                            text6: {
                                text1: 'Algorithm of the oral pitch, features; live examples. Slide: solution',
                                span1: 'Pitch deck – the main startup presentation.',
                            },
                            text7: {
                                text1: 'Pitch deck - analysis of participants\' cases, development of presentation skills. Slides 1-6.',
                                span1: 'Practising session.',
                            },
                            text8: {
                                text1: 'Structure, content, design. Startup pre-seed business plan template. Discussing specific cases of the course participants.',
                                span1: 'Business plan for a startup',
                            },
                            text9: {
                                text1: 'Presenting Value proposition.',
                                span1: '1 minute pitch/ elevator pitch.',
                            },
                            text10: {
                                text1: 'How to get them? What documents will I need to provide? Underwater rocks. What is not written in the official announcements of the programs?',
                                span1: 'Grants, subsidies, investments. ',
                            },
                            text11: {
                                text1: 'Full Pitch deck - final presentations of the participants.',
                                span1: 'Practising session.',
                            },
                            text12: {
                                text1: 'Which? What for? Expenses?',
                                text2: 'для стартапа, варианты льгот, пособий.',
                                span1: 'Intellectual Property Rights.',
                                span2: 'Special financial terms and conditions for a startup.',
                            },
                        },
                        box5: {
                            text1: 'The most complete practical course on launching startups',
                            text2: 'step-by-step instructions and ready-made templates for pitch deck, business plan and grant applications',
                            text3: 'questions and answers at each lesson',
                            text4: 'only useful information that can be put into practice',
                            text5: 'feedback on all practical tasks.',
                            text6: 'all tips and tricks are tested on our own experience',
                        },
                        box6: {
                            text1: 'Why the Netherlands',
                            text2: 'The Netherlands has an excellent start-up support system with 10 major innovation hubs where start-ups receive support from world-class business incubators/accelerators and R&D centres. ',
                            text3: 'According to the Global Innovation Index (GII) 2021, the country ranks 6th in the world and 3rd in Europe (after Switzerland and Sweden) for innovation.',
                        },
                        box7: {
                            text1: {
                                span1: 'Transparent and logical tax system.',
                                text1: 'Startup friendly tax schemes during the first 5 years of operation.'
                            },
                            text2: {
                                span1: 'Smooth and easy  Access',
                                text1: 'to public services'
                            },
                            text3: {
                                text1: 'The Dutch government offers special programs, ',
                                text2: 'for companies in the top economy sectors.',
                                span1: 'subsidies and grants ',
                            },
                            text4: {
                                text1: 'Excellent transport infrastructure, convenient',
                                text2: 'One of the fastest and most reliable in the world digital infrastructure.',
                                span1: 'ports and airports.',
                            },
                            text5: {
                                text1: 'for startups. Stable and sustainable economics, politics, finance, interaction with neighbours.',
                                span1: 'Minimum costs ',
                            },
                        },
                        box8: {
                            text1: 'WHO IS THE COURSE SUITABLE FOR?',
                            text2: 'This is a unique opportunity to acquire relevant skills to set up an innovative business in the Netherlands, get a startup visa and move your family and team to Europe in a short period of time',
                            text3: 'Creative thinking people with an entrepreneurial streak.',
                            text4: 'Entrepreneurs with an innovative idea',
                            text5: 'Early stage startups',
                            text6: 'Entrepreneurs with a working business',
                        },
                        box9: {
                            text1: 'Skill To Start team',
                            text2: 'We are Skill To Start, a team of Dutch entrepreneurs and innovative startups that understands how difficult it is for entrepreneurs to understand the intricacies of relocating and registering a company in Europe, as well as launching and developing startups. All our tips and advice are tried and tested from our own experience.',
                            text3: 'Founder and CEO of HTSM startup Elibitec b.v.',
                            text4: 'Co-founder of Metanomi.io; Venture Partner at ',
                            text5: 'Founder of a bioplastics startup Nettle TOC b.v.',
                            text6: 'Please contact us if you still have any questions about the course, and beyond',
                            btn1: 'CONTACTS',
                        },
                        box10: {
                            text1: 'DETAILS',
                            text2: 'Start now!',
                        },
                    },
                    funding: {
                        box1: {
                            text1: 'Funding for startups and small enterprises in the Netherlands',
                            text2: 'The Netherlands has a very strong support system for small and medium-sized businesses',
                            text3: 'The Skill To Start team has over 4 years experience in fundraising and obtaining grants in the Netherlands and can explain in detail how to find grants, subsidies and investments in Europe. We will help you choose a financing program, fill out an application and prepare the necessary turnkey documents. You can also purchase a video master class with a detailed analysis of applications for ',
                            text4: 'funding in the Netherlands'
                        },
                        box2: {
                            text1: 'Types of business finance in the Netherlands',
                            text2: {
                                span1: 'Grants',
                                text1: 'are money given by the state for a specific purpose. Grant financing can help both at the initial stage, when you are just thinking about starting a business in the Netherlands, and at the development stage. 95% of grant programs are directed to ideas and projects related to the green economy, solving social problems and reforming enterprises in accordance with the sustainable development goals of the Netherlands and the European Union.',
                            },
                            text3: {
                                span1: 'Subsidies',
                                text1: 'reduce the costs of companies.',
                                text2: 'There are a number of narrowly targeted subsidies depending on your type of business or current need. For example, energy subsidies, subsidies related to business impacts after the coronavirus, and subsidies related to export/import issues due to the Russia-Ukraine conflict. And a number of others. As a rule, applications for grants are submitted by the organization involved in your accounting department or a hired accountant.For some grants, you can apply on your own or through an agent. These are often subsidies related to green technologies (installation of solar panels, transition to green energy, investment in sustainable ideas and projects).'

                            },
                            text4: {
                                text1: 'If you are doing research or IT development, creating a prototype or producing an innovative product, then you need to understand the ',
                                span1: 'WBSO subsidies.',
                                text2: 'This subsidy in the Netherlands reduces the cost of paying employees involved in research and development.And also, in the future, to receive a significant discount on taxes on income from the sale of innovative products. It is important to note that the subsidy is suitable not only for physical innovation projects, but also applicable to many types of IT.',
                            },

                            text5: {
                                span1: 'Investments - ',
                                text1: 'financing attracted from private investors, venture funds, banks. Such financing assumes the equity participation of the investor in your business. With regard to investments, the Netherlands adheres to a conservative scenario, so it will be much easier to attract financing for scaling up an operating business than at the idea stage. Therefore, this format of financing should be considered primarily for small and medium-sized businesses.',
                            },
                            text6: {
                                span1: 'funding',
                                text1: 'For initial',
                                text2: 'of startups, you should look at Accelerators and Incubators. Along with the money, you will also receive a serious support package in the form of networking, marketing and leads.',
                                text3: 'Skilltostart provides consultations on how and where to find money for your project in Europe, how to properly present your project, how to get a grant or subsidy in the Netherlands and where to find an investor.',
                            },
                            btn1: 'Register to check fundraising options',
                            btn2: 'Online workshop Grants and Subsidies',
                            conduit: 'Look!'
                        }
                    },
                    checkout: {
                        text1: 'Your order',
                        text2: 'Name*',
                        text3: 'Phone*',
                        text4: 'Address*',
                        text5: 'Email*',
                        text6: 'Goods in the cart:',
                        text7: 'Total amount:',
                        btn1: 'Pay',
                        btn2: 'Cancel'
                    },
                    footer: {
                        text1: 'Contacts',
                        text2: 'Write your e-mail...',
                        text3: 'Send',
                    },
                    contacts: {
                        title: 'Contacts',
                        text1: 'For advice on relocation, types of residence permits in the Netherlands, startup visas, strategies for moving to the Netherlands, starting a business.',
                    }
                }
            },//mayak
            ru: {
                translation: {
                    header: {
                        text1: 'Главная ',
                        text2: 'Релокация',
                        text3: 'Стартап виза',
                        text4: 'Виза - ориентационный год',
                        text5: 'Финансирование',
                        text6: 'Кейсы',
                        text7: 'Курсы и мастер-классы',
                        text8: 'Инструменты для стартапа',
                        text9: 'Про нас',
                        text10: 'Контакты',
                        text11: 'Блог',
                    },
                    home: {
                        btn1: 'Записаться на  консультацию',
                        btn2:'Посмотреть программы',
                        btn3:'Подробнее',
                        btn4:'Информация о Нидерландах',
                        title: 'Релокация в Нидерланды',
                        why:'Почему Нидерланды?',
                        textComf:'Еще больше!',
                        subtitle: {
                            part1: 'Все виды внж',
                            part2: 'сопровождение стартапов и бизнеса',
                        },
                        block2: {
                            title: 'Что мы можем?',
                            item1: 'внж по стартап и предпринимательской визе',
                            item2: 'студенческая виза, ориентационный год',
                            item3: 'релокация бизнеса и эмиграция с семьей в Европу',
                            item4: 'мастер классы и онлайн курсы по подготовке заявки на стартап визу',
                            item5: 'получение европейских грантов на бизнесv',
                        },
                        block3: {
                            title: 'Бизнес в Нидерландах',
                            description: {
                                item1: 'Нидерланды занимают ',
                                item2: '1 место ',
                                item3: 'в мире по индексу качества жизни.',
                                item4: 'Самая конкурентноспособная экономика Европы, отсутствие бюрократии и коррупции, совершенная образовательная система и толерантность и стабильность во всех сферах. Все это делает переезд в эту страну заветной и вполне реальной мечтой.'
                            },
                            description2: 'А в качестве бонуса вы получаете потрясающие ландшафты, самую большую продолжительность жизни в Европе, самых счастливых детей в мире, гармоничное сочетание старины и современных инноваций.',
                            description3: {
                                item1: 'И если вы задумываетесь о возможности открыть свой бизнес в Нидерландах – мы, компания Skill to Start, знаем, как вам в этом помочь.',
                                item2: 'И поверьте, сделать это намного проще, чем может показаться!'
                            }
                        },
                        block4: {
                            title: 'Наши результаты за последний год',
                            box1: {
                                text1: 'более 40 стартапов ',
                                text2: 'получили индивидуальную помощь от нашей команды по вопросам получения внж в Нидерландах по стартап визе, грантов и инвестиций.',
                            },
                            box2: {
                                text1: 'привлекли финансирование',
                                text2: 'на сумму более 350.000 евро через гранты в Нидерландах в стартапы на ранней стадии.',
                            },
                            box3: {
                                text1: 'Более 5 лет опыта ',
                                text2: 'от идеи до регистрации компании, получения грантов и субсидий, оформления международных патентов, участия в международных акселлерационных программах.',
                            },
                            box4: {
                                text1: '90% наших клиентов получают положительный результат.',
                                text2: 'Успешно оформляем стартап-визы в Нидерланды, перевозим действующие бизнесы и стартап-команды. ',
                            },
                            comforter: 'Начни сейчас'
                        },
                        block5: {
                            title: 'Наши продукты',
                            link1: 'Подробнее',
                            box1: {
                                text1: 'РЕЛОКАЦИЯ в Нидерланды без стресса',
                                text2: 'Индивидуальное сопровождение по стартап и бизнес визе в Нидерланды. Помогаем перевезти семью в безопасную стабильную страну. Для тех, кому нужно все и сразу. Мы сделаем все за вас! Для команд и одиночек.',
                            },
                            box2: {
                                text1: 'Эффективный онлайн курс по стартап визе - ИНСТРУМЕНТЫ ДЛЯ СТАРТАПА',
                                text2: 'Хотите открыть бизнес в ЕС и переехать, но не знаете как подготовить заявку и какие документы вложить? На курсе за 6 недель научим готовить успешную заявку для стартап визы в Нидерланды.',
                            },
                            box3: {
                                text1: 'ИНДИВИДУАЛЬНЫЕ КОНСУЛЬТАЦИИ',
                                text2: 'Идеи для бизнеса в Нидерландах, виды внж в Нидерландах, как получить внж , стартап виза, презентация стартапа, переезд в Европу, релокация бизнеса, гранты в Нидерландах и инвестиции, сопровождение иммиграции в Нидерланды.',
                            },
                            box4: {
                                text1: 'Авторские онлайн МАСТЕР-КЛАССЫ',
                                text2: 'Мастер-классы: как подготовиться к подаче на стартап визу и презентации стартап проекта европейским инвесторам.\n' +
                                    'Как привлечь гранты в Европе на развитие бизнеса. Мастер класс по составлению бизнес плана для стартапа. БОНУС: Рабочие шаблоны и формы к каждому мастер-классу.',
                            },
                            box5: {
                                text1: 'Большие команды',
                                text2: 'Индивидуальные клиенты',
                            },
                        },
                        block6: {
                            title: 'Для кого',
                            box1: {
                                text1: 'Креативно мыслящие люди с предпринимательской жилкой. Даже если у вас еще нет идеи и команды - приходите к нам!',
                                text2: 'Вот решила переехать- самый простой вариент стартап виза, значит нужен проект, к которому присоединюсь и которому нужна европейская экспансия. Так вот где его взять? Если вы хотите найти театралов, то что вы делаете? Идете в театр. Хотите найти интересный проект? Тусите там, где есть стартапы. Я нашла партнера и проект на курсе по Стартап визе в Голландию. То есть понимаете, да? Я сначала пришла и записалась на курс, а потом уже, "по дороге" и проект нашелся:) ." Таисия К.',
                            },
                            box2: {
                                text1: 'Cтартапы на ранней стадии и  предприниматели с  инновационной идеей. Выход на европейский рынок.',
                                text2: 'Курс помог сформулировать концепцию стартапа из абстрактных идей. Андрей Д.',
                            },
                            box3: {
                                text1: 'Предприниматели с работающим бизнесом и топ менеджеры с идеей для бизнеса. Масштабирование на рынок ЕС.',
                                text2: '"Преподаватели помогали не просто правильно подготовить документы, а по сути придумать стартап, докрутить из тех идей, что есть." Павел Г.',
                            },
                        },
                        block7: {
                            title: 'Наш YouTube канал',
                            conduit: 'Переходи',
                        },
                        block8: {
                            title: 'Почему Нидерланды?',
                            box1: {
                                text1: 'Инвестиции',
                                text2: 'Самая конкурентоспособная экономика в Европе в соответствии с WEF Competitiveness Index и одна из лучших стран для инвестиций в бизнес',
                            },
                            box2: {
                                text1: 'Ворота в Европу',
                                text2: 'Нидерланды расположены в континентальной Европе и имеют доступ к 170 миллионам потребителей в пределах 500 км и 244 миллионам потребителей в пределах 1000 км',
                            },
                            box3: {
                                text1: 'Инновации',
                                text2: 'Лидер в области цифровых технологий. Согласно Глобальному инновационному индексу (GII) 2021 года, Нидерланды занимают 6 место в мире по инновациям.\n',
                            },
                            box4: {
                                text1: 'Жизнь',
                                text2: 'Одна из самых длинных средних продолжительностей жизни в мире - 78 лет (мужчины) и 82 года (женщины).',
                            },
                            box5: {
                                text1: 'Уровень счастья',
                                text2: 'Вполне счастлив - 55% населения Очень счастлив - 40% населения',
                            },
                            box6: {
                                text1: 'Коммуникация',
                                text2: '90% населения Нидерландов свободно говорит по-английски',
                            },
                        },
                    },
                    about: {
                        hero: {
                            text1: 'является официальным партнером фасилитатора World Startup. Это один из самых крупных и опытных фасилитаторов в Нидерландах. Фокус фасилитатора широкий и включает healthtech, fintech, digital, social impact, sustainability projects. С 1 июня 2023 г команда  Skilltostart ведет модуль Soft Landing на программе фасилитации World Startup. Также Skilltostart участвует в отборе стартапов на программу. Помимо этого мы сотрудничаем с 23 другими фасилитаторами.',
                            text2: 'Skilltostart – команда предпринимателей, которые переехали с семьями в Нидерланды по стартап-визе до и во время пандемии и объединили свои усилия, чтобы помочь русскоговорящим людям из разных стран запустить в Европе новый бизнес или проект. Более 5 лет опыта в сфере европейских инновационных стартапов от идеи до регистрации компании, получения грантов и субсидий, оформления международных патентов, участия в международных акселерационных программах. Мы являемся основателями стартапов, сотрудничаем напрямую с голландскими и немецкими фасилитаторами, даем только актуальную информацию и рекомендации, опробованные на собственном опыте.  Помогаем составить пошаговый план и реализовать проект, пройдя весь путь от идеи до регистрации бизнеса',
                            text3: 'На нашем сайте и в канале Телеграмм ',
                            text4: 'размещается информация о доступных мерах поддержки, деловых новостях и нетворкинге, полезных курсах.'
                        },
                        passport: {
                            text1: 'Возможность пройти отбор в ускоренном режиме, минуя скаутов и избежать случайного или плохо мотивированного отказа, показываем проекты напрямую директору программы',
                            text2: 'Сокращение времени рассмотрения заявки фасилитатором',
                            text3: 'Уверенность в том, что мы точно знаем, какие проекты и в каком формате отбирают фасилитаторы',
                        },
                        team: {
                            box1: {
                                text1: 'Нина Рыбчак',
                                text2: 'Основатель и генеральный директор Elibitec b.v. , стартапа по инновационным огнестойким материалам, со-основатель Skilltostart. Специалист с 20+ летним опытом управления международными проектами с командами из США, ЕС и Азии. Автор курса Инструменты для стартапа по подготовке заявки на стартап визу. Эксперт на программе фасилитации в World Startup.',
                            },
                            box2: {
                                text1: 'Наталья Липс',
                                text2: 'MSc. Основатель стартапа по производству биопластика Nettle TOC b.v. со-основатель Skilltostart Специалист с 10+ летним опытом развития и управления технологическими проектами. Более 5 лет опыта в инновационных бизнес инкубаторах. Более 4 лет успешного опыта фандрайзинга в Нидерландах.',
                            },
                            box3: {
                                text1: 'Михаил Сидаков',
                                text2: 'Со-основатель',
                                text3: 'венчурный партнер в',
                                text4: 'Специалист с 9+ летним опытом в стратегическом консалтинге (BCG), корпоративных инновациях ((Beam Ventures, Snapchat\'s Yellow Bootcamp & Accelerator) и предпринимательстве (основатель двух стартапов с поднятыми инвестициями)',
                            },
                        },
                        facts: {
                            title: {
                                text1: '11 объективных фактов',
                                text2: 'в пользу Нидерландов.',
                            },
                            text1: 'Cамая конкурентоспособная экономика в Европе в соответствии с WEF Competitiveness Index и одна из лучших стран для инвестиций в бизнес. ',
                            text2: 'По результатам 2022 г Нидерланды занимают 1 место в мире по индексу Качества Жизни/ quality of life index. 3 голландских города входят в топ 5 лучших городов для жизни в мире',
                            text3: 'стратегически расположены в континентальной Европе, доступ к 170 млн потребителей в пределах 500 км и 244 миллионам потребителей в пределах 1000 км.',
                            text4: 'Лидер в области цифровых технологий.👨‍💻 Самый высокий уровень распространённости широкополосного доступа на душу населения в мире. ',
                            text5: 'По результатам Global Innovation Index Нидерланды занимают 6 место в мире и 3 место в Европе по инновациям (после Швейцарии и Швеции) ',
                            text6: 'Голландские дети - самые счастливые в мире по мнению самих детей (Отчет UNICEF 2021г.)',
                            text7: 'Более 90% населения  свободно говорит по-английски (самый высокий процент вне UK, USA.)',
                            text8: 'Оптимальные условия для бизнеса Конкурентоспособная ставка корпоративного подоходного налога: € 0 - € 395 000: 15% 395 000 евро и более: 25,8% Специальная налоговая ставка 9% применяется для прибыли, полученной от (запатентованных) нематериальных активов (Innovation Box) ',
                            text9: 'Получение пмж и/или гражданства уже через 5 лет проживания. ',
                            text10: 'Вопреки распространенному  мнению о том, что в Голландии дождливо и пасмурно, по статистике в стране 125 дней в году без капли дождя',
                            text11: 'Голландская питьевая вода имеет исключительное качество и проходит около 20 ступеней очистки, прежде чем попасть в кран.',
                            text12: 'В Нидерландах оптимально сочетаются благоприятные условия для ведения бизнеса, работы по найму, получения конкурентноспособного образования, счастливой, безопасной и здоровой физически и психологически жизни в целом. ',
                        },
                    },
                    cases: {
                        textComf1:'Читай!',
                        textComf2:'Смотри!',
                        textComf3:'Вдохновляйся!',
                        title: 'КЕЙСЫ',
                        case: {
                            title: 'Кейс 1.',
                            text1: 'Как бизнес из Калининграда стал стартапом в Нидерландах. О том, как полезно бывает посмотреть на свой проект под другим углом. О том, что стартап виза отлично работает на проекты с social impact.',
                            text2: 'Пара из Калининграда, инженер и дизайнер, с небольшим бизнесом по производству изделий для каллиграфии и интернет-магазином авторских изделий для элегантного хобби, обратились к нам за помощью. И команда, и проект нам очень понравились. Ребята - профи, таланты и педанты в своем деле; есть продажи, в том числе в Европе. В общем, авторский бизнес, свои разработки, креативная индустрия.',
                            text3: 'Осталось докрутить, как из этого сделать стартап. ',
                            text4: 'Базовая идея - это хобби можно сравнить с медитацией, полезно влияет на мозговую активность.',
                            text5: 'HealthTech, Европа стареет, и все, что может помочь отложить деменцию - должно быть востребовано рынком и понравится фасилитаторам (отбор-то конкурсный).',
                            text6: 'Добавляем IT, но нужны доказательства эффективности самого метода. Ребята настойчивые, списываются с японским гуру-профессором, у которого есть серия статей, подтверждающих, что метод работает.'
                        },
                        box1: {
                            text1: 'И, вуаля! - профессор не просто отвечает, но даже шлет письмо поддержки. ',
                            text2: 'Понятно, что такая скорость и результат переписки - удача, но тут все участники - фанаты одного хобби и поэтому работает принцип “рыбак рыбака видит издалека”.',
                            text3: 'Переформатировали с командой проект, подкрепили его необходимыми письмами и подобрали подходящих по профилю фасилитаторов, разослали.',
                            text4: 'World Startup проявил интерес, но запросил мотивационное письмо (сделали, в нем объяснили почему именно Нидерланды).',
                            text5: 'Еще через неделю пришло приглашение на онлайн-собеседование. Потом финальное собеседование с еще одним представителем, который отвечает за масштабирующиеся стартапы.',
                            text6: 'Команде подтвердили, что их точно берут на программу, которая будет составлена индивидуально под их проект!',
                        },
                        box2: {
                            text1: 'Мы очень благодарны ребятам за доверие и за то, что не спорили, а следовали нашим советам и делали все, что нужно, как нужно и вовремя - и вот, результат налицо. Полное интервью можно посмотреть на канале',
                            text2: 'по ссылке '
                        },
                        box3: {
                            text1: "Оценить свои шансы на получение стартап визы можно на бесплатной консультации с экспертами из Skilltostart. Записывайтесь здесь или в Телеграм @Nina_Ryb",
                            text2: 'Кейс 2.',
                            text3: 'Еще 1 клиент получил одобрение фасилитатора, подписал договор и готовится к получению внж. Команда из Республики Беларусь (гражданство РБ) с работающим бизнесом в сфере медицинского оборудования обратилась с запросом получить внж в Нидерландах, чтобы зарегистрировать компанию, начать операционную деятельность в ЕС и масштабировать бизнес на европейский рынок.',
                            text4: 'Команда Skilltostart проанализировала текущий бизнес, выявила инновационные моменты, после обсуждения с клиентом добавила инновационную составляющую по устойчивому развитию в наиболее актуальной для Нидерландов сфере, наметила пути для исследовательских разработок на 1й год развития стартапа, провела анализ рынка Нидерландов, включая сравнительный анализ конкурентов, подготовила презентацию для фасилитатора. ',
                            text5: 'Также по согласованию с клиентом были получены письма поддержки от европейских партнеров и потенциальных клиентов. Мы также использовали отзывы текущих клиентов по реализованным проектам.',
                            text6: 'От начала подготовки заявки до подписания договора с фасилитатором процесс занял 5 недель. При этом фасилитатор, которому мы отправили презентацию стартапа ответил положительно в тот же день и уже через 3 дня было назначено онлайн собеседование. Мы отправляли презентацию напрямую директору программы, у которого кстати профильное медицинское образование, и это значительно сократило время рассмотрения и отбора.',
                            text7: 'На онлайн собеседовании фасилитатор подтвердил свой интерес в стартапе и готовность подписать с ними договор. То есть одобрение фасилитатора на подписание договора и визовую поддержку было получено в рекордные сроки – 4 дня.',
                        },
                        box4: {
                            text1: 'Полное интервью можно посмотреть',
                            text2: 'на канале',
                            text3: 'по ссылке',
                            text4: 'Skilltostart открывает новые возможности для вашего бизнеса в Нидерландах и направления, о которых вы не подозревали.',
                            text5: 'Кейс 3.',
                            text6: 'К нам на курс по подготовке заявки на стартап визу пришла команда из двух человек.',
                            text7: 'У ребят уже была действующая IT компания с собственными инновационными разработками в области оптимизации цепочек поставок, логистики, маркетинга и программ лояльности.',
                            text8: 'Запрос на курс от команды был следующий: Поданная заявка на стартап визу и найденный инвестор под совместный стартап. На курсе они сразу включились в работу, выполняли все задания и в результате к концу курса была готова отличная презентация стартап проекта для Нидерландов. Ребята разослали свою заявку и получили положительный ответ от одного из самых крупных и надежных фасилитаторов, который включает еще и венчурный инвестиционный фонд.',
                            text9: 'Мы очень рады, что курс помог двум семьям (7 человек) получить внж в Нидерландах и переехать.',
                            text10: 'Отзыв от клиента:',
                            text11: '"Благодарю коллег из Skilltostart за отменный обучающий курс по подготовке заявки на стартап визу Нидерландов. Сжато, сконцентрировано, достаточно подробно и ровно то, что нужно для подачи заявки. Разумеется, чтобы получить желаемое надо сразу включаться в работу и не лениться делать домашние задания. В моем случае результат полностью совпал с ожиданиями, т. к. к концу курса имел на руках все необходимые материалы и информацию, чтобы подать сразу несколько заявок на стартап визу. Больше того, коллеги из Skilltostart еще и консультировали и помогали индивидуально по многим нюансам уже после прохождения курса. В общем я очень доволен. Начинаю учить голландский) Вартан "Altmacros"'
                        },
                    },

                    relocation: {
                        program: {
                            title: 'Программы релокации',
                            text1: 'Опираясь на свой личный опыт, и кейсы наших клиентов мы предлагаем несколько программ переезда с семьей и релокации бизнеса по разным видам внж в Нидерландах. Все программы иммиграции составляются индивидуально под каждый тип виз голландии и  могут быть реализованы под ключ: от подготовки документов для подачи до мягкой адаптации уже на месте.',
                        },
                        startup: {
                            title: 'СТАРТАП ВИЗА',
                            text1: 'Если Вы задумываетесь о возможности организации бизнеса в Европе, то стартап виза может стать оптимальным вариантом. Механизм стартап визы на сегодняшний день – один из немногих работающих вариантов получения внж для всей семьи предпринимателя (включая супругов, партнеров и детей до 18 лет).',
                            text2: 'Вы – не гражданин ЕС и хотите работать в Нидерландах в качестве начинающего/стартап предпринимателя? Для этого вам нужен вид на жительство.',
                            text3: 'Наша компания предоставляет помощь в оформлении заявки, подготовке документов на стартап визу, поиске фасилитатора, а также оказывает полное сопровождение всего процесса переезда в Европу.',
                            btn1: 'Подробнее',
                            btn2: 'Скачать стартап гид',
                        },
                        business: {
                            title: 'БИЗНЕС ВИЗА',
                            text1: 'Если планируете открыть в Нидерландах свой бизнес, то вы  можете претендовать на получение визы предпринимателя или, как ее еще называют, бизнес-визы. Для ее получения вам придется серьезно потрудиться: подготовить ваше предпринимательское досье и составить серьезный бизнес-план. Эти документы должны будут убедить миграционную службу в жизнеспособности вашей бизнес-идеи и способности приносить доход не только вам, но и экономике страны.',
                            text2: 'Наша компания предоставляет помощь в оформлении заявки, подготовки документов, написании бизнес-плана для получения внж в Нидерландах по визе самозанятого, а также оказывает полное сопровождение всего процесса релокации бизнеса и семьи, и при необходимости, помогает с подачей аппеляции',
                            btn1: 'Запись на консультацию'
                        },
                        orientation: {
                            title: 'ВИЗА ОРИЕНТАЦИОННЫЙ ГОД',
                            text1: 'Мало кто знает, что в Нидерландах существует вид на жительство «zoekjaar» (residence permit for orientation year) - ВНЖ Ориентационный год, дающий право недавним выпускникам ВУЗов жить и работать в Нидерландах без каких-либо ограничений в течение 1 года. По этой визе можно работать как наемный сотрудник, а также фрилансер или предприниматель. Можно привезти партнера или семью. Партнер при этом получает такие же права на работу, как и основной заявитель',
                            text2: 'Такую визу ориентационный год можно запросить в течение 3 лет после окончания программ бакалавриата или магистратуры/ аспирантуры в ВУЗе Нидерландов или после магистратуры/докторантуры/пост докторантуры в одном из топ 200 ВУЗов, входящих как минимум в 2 признанных мировых рейтинга университетов.',
                            btn1: 'Подробнее',
                        },
                        individual: {
                            title: 'ИНДИВИДУАЛЬНАЯ КОНСУЛЬТАЦИЯ',
                            text1: 'Консультация проводится на основе заранее отправленной информации. Чем более подробную информацию вы пришлете, тем более полезной и содержательной получится консультация.',
                            text2: 'Консультация 60-90 минут 200 евро.',
                            text3: 'Темы консультаций :',
                            text4: 'Как сделать свой проект инновационным, чтобы он соответствовал формату стартапа и прошел на стартап визу?',
                            text5: 'Переформатирование рос презентации под нидерландский формат стартап питч дека.',
                            text6: 'Какие именно знания и инструменты необходимы для получения стартап визы, предпринимательской и студенческой визы, а также визы ориентационный год?',
                            text7: 'Индивидуальное сопровождение в подготовке документов на разные виды внж в Нидерландах.',
                            text8: 'Форматирование проекта для презентации европейскому инвестору.',
                            text9: 'Особенности голландского законодательства, возможные инструменты финансирования стартапов, инвестиции.',
                            text10: 'Бизнес культура Нидерландов: особенности и отличия от остальной Европы',
                            text11: 'Бытовые вопросы для переезда в Европу с семьей. Коротко о самом насущном – жилье, медицина, банки, школы, ВУЗы',
                            btn1: 'Запись на консультацию',
                        },

                    },
                    startup: {
                        title: 'СТАРТАП ВИЗА в Нидерландах 2023',
                        subtitle: 'Если Вы думаете о том, как открыть бизнес в Европе, советуем присмотреться к стартап визе в Нидерландах. ',
                        box1: {
                            text1: 'В Нидерландах существует отлично развитая экосистема для развития стартапов: в стране функционируют 10 ведущих центров инноваций, где стартапы получают помощь от бизнес-инкубаторов мирового класса и научно-исследовательских центров. Помимо этого государство предлагает поощрительные программы и гранты для различных секторов экономики.',
                            text2: 'Среди них есть программы по льготному кредитованию малого и среднего бизнеса, гранты на поддержку инноваций, получение инвестиций на улучшение условий труда, стимуляция предпринимателей по покупке оборудования, что не загрязняет окружающую среду.',
                            text3: 'Также в Нидерландах гибкая система налогообложения, применяется прогрессивная шкала подоходного налога, а для стартапов работает несколько дополнительных программ, обеспечивающих налоговые вычеты.',
                        },
                        box2: {
                            text1: 'Самое главное о стартап визах.',
                            text2: 'Не только IT, гораздо шире. Также проходят темы: креатив, технологии, производство, логистика.',
                            text3: 'Самый бюджетный вариант запустить бизнес и зарегистрировать компанию в Европе с минимальными вложениями.',
                            text4: 'Возможность иммигрировать в Нидерланды, развивать проект и вести бизнес в Европе, пользуясь налоговыми льготами, бонусами и получать максимальную поддержку в виде грантов и субсидий. Заявку на стартап можно подать из любой страны и имея любой статус (в т.ч. под временной защитой)',
                            text5: 'Для регистрации стартап компании не требуется, чтобы 1 из акционеров компании или директор был гражданином Нидерландов.',
                            text6: 'Минимальный уставной капитал. Например, 100 евро – это нормально.',
                            text7: 'В рамках одного стартап проекта возможно получить внж в Европе и  перевезти в Нидерланды несколько семей.',
                        },
                        box3: {
                            text1: 'Стартап виза в Нидерландах (или внж самозанятого по типу стартапа) выдается на 2 года заявителю, его супруге/у, партнеру и детям до 18 лет. Для этого нужен договор, подписанный с одним из аккредитованных фасилитаторов.',
                            text2: 'Все больше фасилитаторов заинтересованы не только в IT проектах, но и with social impact',
                            text3: 'самый главный документ для фасилитатора - это питч дек или презентация стартапа.',
                            text4: 'После одобрения фасилитатором и подписания договора с ним можно подать заявление на стартап визу в консульстве Нидерландов по месту проживания (не обязательно в стране гражданства), а также приехать в Нидерланды по Шенгенской визе и отправить пакет документов в иммиграционную службу по почте и ожидать выдачи residence permit/внж уже внутри Нидерландов.',
                            text5: 'Необходимо доказать финансовую состоятельность учредителя и показать доход/накопления из рассчета 1508 евро в месяц, то есть 18.096 евро на год. ВАЖНО! Эти средства не замораживаются на счете. На них можно жить.',
                            text6: 'Ждем вас на бесплатной консультации, чтобы ответить на вопросы по вашей конкретной ситуации и помочь определиться с оптимальной стратегией по получению внж в Нидерландах.',
                            btn1: 'Записаться на консультацию'
                        },
                        box4: {
                            title: 'Документы, которые нужно собрать для заявки на стартап визу',
                            text1: 'Нидерланды на сегодня - оптимальная страна для переезда. ',
                            text2: 'Страна, которая занимает 1 место в мире по индексу качества жизни и входит в пятерку самых конкурентноспособных экономик мира, является также одной из самых толерантных.',
                            text3: 'Здесь нет проблем с открытием счета в банке для граждан РФ и РБ и гражданство можно получить уже через 5 лет проживания',
                        },
                        box5: {
                            text1: 'Если Вы задумываетесь о возможности организации бизнеса в Европе, то стартап виза может стать оптимальным вариантом. Механизм стартап визы на сегодняшний день – один из немногих работающих вариантов получения вида на жительство для всей семьи предпринимателя (включая супругов, партнеров и детей до 18 лет).',
                            text2: 'Вид на жительство в качестве «стартапа» дает амбициозным новичка в бизнесе один год на создание инновационной компании  Нидерландах. Одно из условий такого вида на жительства - стартап находится под контролем надежного авторизованного наставник (фасилитатора) в Нидерландах. То есть сначала, нужно пройти отбор у фасилитаторов, получить одобрение у одного из них и подписать с ним договор. Имея такой договор от аккредитованного фасилитатора, можно подавать заявку на стартап визу.',
                            text3: 'Важно, что компанию необходимо будет зарегистрировать в Торгово-промышленной палате Нидерландов в течение первого года. То есть не надо ее регистрировать заранее, как можно ошибочно понять из анкеты.',
                        },
                        box6: {
                            title: 'К визовой анкете необходимо приложить:',
                            text1: 'копию паспорта (разворот + все страницы со штампами) ',
                            text2: 'апостилированное свидетельство о рождении. ',
                            text3: 'договор с фасилитатором, письмо поддержки от фасилитатора, декларацию о регистрации будущей компании в Торгово-промышленной палате Нидерландов',
                            text4: 'распечатанный питч дек',
                            text5: 'короткий бизнес-план ',
                            text6: 'подтверждение финансовой состоятельности (17 200 евро на год на заявителя, 25 100 евро на год на заявителя и супругу/а)',
                        },
                        box7: {
                            text1: 'Если вы планируете переезд с семьей, то на супругу/а и детей необходимо также подготовить апостилированное свидетельство о рождении и свидетельство о браке. На апостилированные свидетельства должен быть сделан нотариально заверенный перевод на английский, голландский, немецкий или французский языки с апостилем. Также можно предоставить перевод от присяжного переводчика Нидерландов. ',
                            text2: 'Skilltostart предоставляет услугу по подготовке документов, переводу у присяжного переводчика (2-3 дня), заполнению анкет на заявителя, партнера и детей, а также сопровождение по переезду, включая получение BSN номера, открытие счета в банке, подбор школ, аренда жилья, перевоз автомобиля, оформление медицинской страховки, консультация налогового консультанта, юриста и др.',
                            text3: 'Как именно устроен процесс подачи документов на стартап визу?',
                            text4: 'Документы на визу можно подать только лично в Консульстве/Посольстве Нидерландов или в стране гражданства или в стране временной регистрации (при наличии внж в ней). Если у вас нет внж в стране временного проживания, мы запрашиваем иммиграционную службу о возможности подать заявку на визу из страны временного проживания, и IND – иммиграционная служба согласовывает это с посольством страны, где вы фактически находитесь.',
                            text5: 'Также есть возможность подать документы на визу внутри Нидерландов, если у вас есть действующая Шенген виза и вы заехали в страну по ней.  В этом случае можно договориться с фасилитатором, чтобы он отправил вашу заявку онлайн',
                            text6: 'Внимание! Анкеты на визу отличаются для подачи внутри Нидерландов и извне.',
                            text7: 'Официальный срок рассмотрения визовой заявки 90 дней, но для стартап визы, так же как и для студенческой, действует ускоренная процедура.',
                            text8: 'Стоимость официальной пошлины за стартап визу 350 евро для основного заявителя, 210 евро на супругу/а и 210 евро для ребенка.',
                        }
                    },
                    visa: {
                        textComf:'Начни сейчас!',
                        title: 'Виза Ориентационный Год',
                        subtitle: 'Виза «zoekjaar» (residence permit for orientation year) - ВНЖ ориентационный год в Нидерландах',
                        box1: {
                            text1: 'ВНЖ Ориентационный год, дает право недавним выпускникам ВУЗов переехать в Нидерланды и искать работу без каких-либо ограничений в течение 1 года. По этой визе можно без проблем найти работу как наемный сотрудник, а также фрилансер или предприниматель. Можно привезти партнера или семью и получить внж в Нидерландах. Партнер при этом имеет такие же права на работу, как и основной заявитель.',
                            text2: 'Такую визу ориентационный год можно запросить в течение 3 лет после окончания программ бакалавриата или магистратуры/ аспирантуры в ВУЗе Нидерландов или после магистратуры/докторантуры/пост докторантуры в одном из топ 200 ВУЗов, входящих как минимум в 2 признанных мировых рейтинга университетов. Какие рейтинги считаются признанными?'
                        },
                        box2: {
                            text1: 'Для иммиграционной службы Нидерландов это 3 рейтинга, а именно',
                            text2: 'Times Higher Education: ',
                            text3: 'Quacquarelli Symonds: ',
                            text4: 'ShanghaiRanking Consultancy:',
                            text5: 'Важно помнить, что ваш ВУЗ или программа должен входить в число 200 лучших в этих рейтингах на дату завершения вами учебной программы, а не на год подачи заявки на визу.',
                            text6: 'Есть отдельное требование по уровню владения английским языком. К заявлению на визу необходимо приложить сертификат с результатом минимум 6.0 по IELTS. Хорошая новость – принимаются обе из существующих двух версий IELTS: Academic and General Training. Также можно предоставить и другой сертификат - TOEFL, TOEIC или Cambridge English grades & scale, которые включены ',
                            text7: 'с минимальным результатом 6.0.',
                            text8: 'Ну и конечно, если ваша университетская программа была на английском или голландском языке, то вам ничего предоставлять не надо.'
                        },
                        box3: {
                            text1: 'Бонусы и преимущества',
                            text2: 'Нет необходимости показывать доходы и/или доказывать свою финансовую состоятельность',
                            text3: 'Держатель визы имеет право на субсидии по аренде жилья (huursubsidie) и частичное возвращение расходов на мед. страховку (zorgtoeslag).',
                            text4: 'С таким внж в Нидерландах легче найти работу, поскольку нет специальных требований к уровню зарплаты как у визы высококвалифицированного мигранта. Мало того, если в течение этого года вы найдете работу как высококвалифицированный мигрант (КМ/kennismigrant), то имеете право на пониженную зарплату (reduced salary criterion). И это хорошо! Потому что работодателю выгоднее нанять вас, чем перевозить сотрудника из другой страны и платить ему полную зарплату КМ.',
                            text5: 'В течение срока действия внж ориентационный год можно спокойно путешествовать и многократно выезжать из Нидерландов.',
                            text6: 'Skilltostart поможет Вам оценить свои шансы, подготовить пакет документов и заполнить заявку на внж в Нидерландах, исходя из Вашего бэкграунда. Детально расскажем про все особенности внж ориентационный год или студенческая виза.',
                            btn1: 'запись на консультацию',
                        }
                    },
                    skills: {
                        title: 'НОВЫЕ НАВЫКИ',
                        btn: 'Cкоро старт',
                        btnAdd: 'Добавить в корзину',
                        box1: {
                            text1: 'Вы переехали за пределы свой страны или только готовитесь к переезду. Ключевой страх, а для некторых даже серьезный тормоз при переезде - это боязнь потерять свой статус. Спуститься по карьере на несколько ступеней ниже или даже совсем отказаться от своего предыдущего опыта и стать няней, сиделкой, уборщицей.',
                            text2: 'Пора задуматься о том, как зарабатывать в новой стране, какие навыки востребованы и с чего можно начать. Возможно о существовании каких-то интересных профессиональных линий вы даже не задумывались или не знали про них. Сейчас у вас есть время и силы подумать о том, чем заниматься.',
                            text3: 'Для вдохновения посмотрите видео интервью с теми, кто нашел себя профессионально в другой стране.',
                        },
                        box2: {
                            text1: 'Инструменты Для Старатапов',
                            text2: 'Коротко о самом актуальном для стартап предпринимателей в Нидерландах.',
                            text3: 'Учим готовить заявку на стартап визу самостоятельно. 12 занятий по 2 часа в минигруппах + 1 индивидуальное занятие: отработка питч дека на английском языке\n',
                            btn1: 'Подробней'
                        },
                        box3: {
                            text1: 'Организатор пространства',
                            text2: 'Cпециалист, который советами и на практике помогает другим людям качественно изменить жизненную среду – сделать ее удобной, комфортной, Подходит для самозанятости.',
                            btn1: 'Скоро старт',
                        },
                        box4: {
                            text1: 'МАСТЕР КЛАССЫ',
                            text2: 'You-Tube канал',
                            text3: 'На нашем YouTube канале вы найдете больше вдохновляющих видео',
                        }

                    },
                    start: {
                        bonusBtn:'Оставить Заявку',
                        courseTitle:'Программа курса',
                        feedTitle:'Выпускники о курсе',
                        payment:{
                          text1:'Курс проходит в форме онлайн - практикума 2 раза в неделю по 1,5 часа + 1 индивидуальное занятие.',
                          text2:'Формат обучения - вебинары, видеолекции, практические задания.Мы используем платформу ZOOM и предоставляем доступ к записям на 6 месяцев.',
                          text3:'Если остались вопросы, пишите на',
                          text4:'Сомневаетесь? Почитайте наш ',
                          text5:'Телеграм канал.',
                          text6:'Стоимость участия — ',
                          text7:'Специальная цена',
                          btn1:'ОПЛАТИТЬ КУРС'
                        },

                        box1: {
                            text1: 'КАК ЗАПУСТИТЬ СТАРТАП В  ЕВРОПЕ ЗА 12 занятий',
                            text2: 'Результат - готовая заявка на стартап визу и понимание всех процессов.',
                            text3: '12 онлайн интерактивных занятий в минигруппе + 1 индивидуальное в подарок: отработка презентации на англ.яз',
                            btn1: 'Оставить заявку',
                            btn2: 'Оплатить курс',
                        },
                        box2: {
                            text1: 'Инструменты для старатапов',
                            text2: 'Конкретные знания',
                            text3: 'как получить стартап визу и открыть бизнес в Нидерландах',
                            text4: 'где и как получить гранты и субсидии на стартап и найти инвесторов',
                            text5: 'как легально минимизировать налоги для бизнеса и расходы учредителей через особые гос.схемы поддержки стартапов',
                            text6: 'Необходимые навыки',
                            text7: 'как подготовить успешный питч дек - презентацию стартапа и представить свою идею так, чтобы инвесторы боролись за проект.',
                            text8: 'как написать бизнес-план стартапа, составить ценностное предложение и 1 минутный питч.',
                            text9: 'как найти релевантную финансовую поддержку и подать своевременную проходную заявку на грант в Европе.',
                            text10: 'полный пакет документов для успешной заявки на стартап визу и получение внж в Нидерландах.',
                        },
                        box3: {
                            text1: 'БОНУС',
                            text2: 'разбор персонального профиля в LinkedIn',
                            text3: 'LinkedIn – основная бизнес соцсеть в Европе, которая позволяет максимально эффективно рассказать о своем проекте, найти сотрудников/партнеров, сформировать релевантную сеть контактов для сотрудничества и продвижения своего продукта/услуг',
                        },
                        box4: {
                            text1: {
                                span1: 'Стартап экосистема',
                                text1: 'в Нидерландах. Как она работает? Что хорошего в Нидерландах для бизнеса в целом и для стартапов в частности?  Как правильно выбрать программу акселерации?',
                            },
                            text2: {
                                text1: 'Особенности голландского менталитета и бизнес культуры.',
                                text2: 'на программу акселерации.  Лайфхаки по подаче заявки.LinkedIn как основная бизнес соцсеть.',
                                span1: 'Структура и алгоритм заявки',
                            },
                            text3: {
                                text1: 'Основные бизнес-инструменты для подачи заявки на стартап программу, часть 1: участники получают шаблоны ',
                                text2: 'Разбор и отработка использования шаблонов на конкретных примерах.',
                                span1: 'business model canvas, value chain.',
                            },
                            text4: {
                                text1: 'Основные бизнес-инструменты, часть 2: шаблон для составления pitch deck. Анализ и формулировка слайда 2: Problems.',
                                span1: 'Практика.',
                            },
                            text5: {
                                text1: 'Основные бизнес-инструменты,',
                                span1: 'Практика.',
                                span2: 'Value Proposition ',
                            },
                            text6: {
                                text1: 'Алгоритм устной части, особенности; живые примеры. Слайд: Solution ',
                                span1: 'Pitch deck – главная презентация стартапа. ',
                            },
                            text7: {
                                text1: 'Pitch deck – разбор кейсов участников и отработка презентационных навыков. Слайды 1-6.',
                                span1: 'Практика.',
                            },
                            text8: {
                                text1: 'Структура, содержание, оформление. Шаблон бизнес-плана для стартапа. Обсуждение на примерах участников.',
                                span1: 'Бизнес-план для стартапа',
                            },
                            text9: {
                                text1: 'Презентация value proposition.',
                                span1: '1 минутный питч/ питч в лифте. ',
                            },
                            text10: {
                                text1: '– как их получить? Какие документы я должен буду предоставить? Подводные камни. О чем не пишут в официальных анонсах программ.',
                                span1: 'Гранты, субсидии, инвестиции ',
                            },
                            text11: {
                                text1: 'Полный Pitch deck – финальные презентации участников.',
                                span1: 'Практика. ',
                            },
                            text12: {
                                text1: 'Какие? Зачем? Затраты?',
                                text2: 'для стартапа, варианты льгот, пособий.',
                                span1: 'Права интеллектуальной собственности.',
                                span2: 'Особые финансовые условия',
                            },
                        },
                        box5: {
                            text1: 'Максимально полный практический курс по запуску стартапов ',
                            text2: 'пошаговые инструкции и готовые шаблоны для питч дека, бизнес плана и заявки на гранты',
                            text3: 'вопросы-ответы на каждом занятии',
                            text4: 'только полезная информация, которую можно применить на практике',
                            text5: 'обратная связь по всем практическим заданиям.',
                            text6: 'все советы и рекомендации опробованы на собственном опыте',
                        },
                        box6: {
                            text1: 'Почему Нидерланды',
                            text2: 'В Нидерландах существует отлично развитая система поддержки стартапов: 10 крупных центров инноваций, где стартапы получают помощь от бизнес-инкубаторов/акселераторов и научно-исследовательских центров мирового уровня. Согласно Глобальному инновационному индексу (GII) 2021 года, страна занимает 6 место в мире и 3 место в Европе (после Швейцарии и Швеции) по инновациям.',
                            text3: 'Согласно Глобальному инновационному индексу (GII) 2021 года, страна занимает 6 место в мире и 3 место в Европе (после Швейцарии и Швеции) по инновациям.',
                        },
                        box7: {
                            text1: {
                                span1: 'Прозрачная и логичная система налогообложения.',
                                text1: ' Льготные условия для стартапов в течение 5 лет.'
                            },
                            text2: {
                                span1: 'Упрощённый доступ',
                                text1: ' к государственным услугам'
                            },
                            text3: {
                                text1: 'Государство предлагает специальные программы, ',
                                text2: 'для компаний в ведущих экономики.',
                                span1: 'субсидии и гранты',
                            },
                            text4: {
                                text1: 'Отличная транспортная и железнодорожная инфраструктура, порты и аэропорты. Цифровая',
                                text2: ' — одна из самых быстрых и надежных в мире.',
                                span1: 'инфраструктура',
                            },
                            text5: {
                                text1: 'для стартапов Стабильность во всех сферах жизни: экономика, политика, финансы, взаимодействия с соседями.',
                                span1: 'Минимальные затраты',
                            },
                        },
                        box8: {
                            text1: 'ДЛЯ КОГО ПОДОЙДЕТ КУРС?',
                            text2: 'Это уникальная возможность в сжатые сроки приобрести актуальные навыки для организации инновационного бизнеса в Нидерландах, получить стартап визу и перевезти семью и команду в Европу',
                            text3: 'Креативно мыслящие люди с предпринимательской жилкой',
                            text4: 'Предприниматели с инновационной идеей',
                            text5: 'Стартапы на ранней стадии',
                            text6: 'Предприниматели с работающим бизнесом',
                        },
                        box9: {
                            text1: 'Команда Skill To Start',
                            text2: 'Мы - команда нидерландских предпринимателей и инновационных стартапов Skill To Start, которая понимает как сложно предпринимателям разобраться в тонкостях релокации и регистрации компании в Европе, а также запуске и развитии стартапов. Все наши советы и рекомендации опробованы на собственном опыте.',
                            text3: 'Основатель и генеральный директор HTSM стартапа Elibitec b.v.',
                            text4: 'Со-основатель Metanomi.io; венчурный партнер в ',
                            text5: 'Основатель стартапа по производству биопластика Nettle TOC b.v.',
                            text6: 'Пожалуйста, свяжитесь с нами если у вас остались вопросы по курсу, и не только',
                            btn1: 'КОНТАКТЫ',
                        },
                        box10: {
                            text1: 'ДЕТАЛИ',
                            text2: 'Начни сейчас!',
                        },
                    },
                    funding: {
                        box1: {
                            text1: 'Финансирование малого бизнеса в Нидерландах',
                            text2: 'В Нидерландах очень сильная система поддержки малого и среднего бизнеса.',
                            text3: 'Команда Skill To Start имеет опыт в фандрайзинге и получении грантов в Нидерландах более 4х лет и может подробно объяснить, как найти гранты, субсидии и инвестиции в Европе.  Мы поможем вам подобрать программу финансирования, заполнить заявку и подготовить необходимые документы под ключ. Также можно приобрести видео мастер-класс с подробным разбором заявок на',
                            text4: 'финансирование в Нидерландах.'
                        },
                        box2: {
                            text1: 'Типы финансирования бизнеса в Нидерландах',
                            text2: {
                                span1: 'Гранты – ',
                                text1: 'это деньги, которые выдаются государством под определённую задачу. Грантовое финансирование может помочь как на первоначальном этапе, когда вы только задумываетесь о об открытии бизнеса в Нидерландах, так и на этапе развития. 95% грантовых программ направлено на идеи и проекты связанные с зеленой экономикой, решение социальных проблем и реформирование предприятий согласно целям устойчивого развития Нидерландов и Евросоюза.',
                            },
                            text3: {
                                span1: 'Субсидии',
                                text1: 'сокращают издержки компаний.',
                                text2: 'Существует ряд узко направленных субсидий в зависимости от вида вашей деятельности или текущей потребности. Например, энергетические субсидии, субсидии, связанные с последствиями для бизнеса после коронавируса, а также субсидии, связанные с проблемами экспорта/импорта из-за конфликта Россия-Украина. И ряд других. Как правило, заявки на субсидии подает организация, занимающаяся вашей бухгалтерией, или наемный бухгалтер. На некоторые субсидии вы можете подать заявку самостоятельно или через агента. Это часто субсидии, связанные с зелеными технологиями (установка солнечных панелей, переход на зеленую энергетику, инвестиции в устойчивые идеи и проекты).\n'

                            },
                            text4: {
                                text1: 'Если вы ведете научные или ИТ разработки, создаете прототип или производите инновационный продукт, то вам необходимо разобраться в субсидии',
                                span1: 'WBSO.',
                                text2: 'Эта субсидия в Нидерландах позволяет сократить издержки на оплату сотрудников, занятых в научных исследованиях и конструкторских разработках. А также, в дальнейшем получить существенную скидку на налоги с доходов от продажи инновационной продукции. Важно отметить, что субсидия подходит не только для физических инноваций-проектов, но и применима для многих типов ИТ.',
                            },

                            text5: {
                                span1: 'Инвестиции - ',
                                text1: 'финансирование, привлеченное от частных инвесторов, венчурных фондов, банков. Такое финансирование предполагает долевое участие инвестора в вашем бизнесе. В отношении инвестиций Нидерланды придерживаются консервативного сценария, поэтому привлечь финансирование на масштабирование работающего бизнеса будет в разы легче, чем на этапе идеи. Поэтому этот формат финансирования стоит рассматривать в первую очередь малому и среднему бизнесу. ',
                            },
                            text6: {
                                span1: 'финансирования',
                                text1: 'Для начального',
                                text2: 'стартапов следует присмотреться к Акселераторам и Инкубаторам. Вместе с деньгами вы получите ещё и серьезный пакет поддержки в виде нетворкинга, маркетинга и потенциальных клиентов.',
                                text3: 'Skilltostart проводит консультации о том, как и где найти деньги на свой проект в Европе, как правильно презентовать свой проект, как получить грант или субсидию в Нидерландах и где найти инвестора.',
                            },
                            btn1: 'Подбор финансирования',
                            btn2: 'Мастер класс Гранты и Субсидии',
                            conduit: 'Смотри!'
                        }
                    },
                    checkout: {
                        text1: 'Оформить заказ',
                        text2: 'Имя*',
                        text3: 'Телефон*',
                        text4: 'Адрес*',
                        text5: 'Электронная почта*',
                        text6: 'Товар в корзине:',
                        text7: 'Сумма',
                        text8: '',
                        btn1: 'Оплатить',
                        btn2: 'Отменить'
                    },
                    footer: {
                        text1: 'Контакты',
                        text2: 'Напиши свою почту...',
                        text3: 'Отправить',
                    },
                    contacts: {
                        title: 'Контакты',
                        text1: 'Для консультаций по релокации, видам внж в Нидерландах, стартап визам, стратегии переезда в Нидерланды, запуску бизнеса.',
                    }
                }
            },
        } //mayak
    });

//     text1:'',
//     text2:'',
//     text3:'',
//     text4:'',
//     text5:'',
//     text6:'',
//     text7:'',
//     text8:'',

export default i18n;