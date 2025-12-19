import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Получаем сохраненный язык из localStorage или используем "az" по умолчанию
const savedLanguage = localStorage.getItem("lang") || "az";

i18n.use(initReactI18next).init({
  lng: savedLanguage, // Используем сохраненный язык или "az"
  fallbackLng: "az",

  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      translation: {
        nav: {
          about: "About",
          services: "Services",
          why: "Why Devera",
          projects: "Projects",
          contact: "Contact",
          start: "Start a Project",
        },
        hero: {
          badge: "Next-Gen IT Solutions",
          title1: "DEVERA",
          title2: "Digital Future.",
          description: "Building scalable digital solutions that empower businesses to thrive in the modern era. We specialize in high-end engineering and premium design.",
          ctaPrimary: "Get in Touch",
          ctaSecondary: "View Projects",
          stats: {
            growth: "Growth",
            safety: "Safety",
            scale: "Scale",
          }
        },
        about: {
          sectionTitle: "About DEVERA",
          mainTitle: "Engineering Excellence for the Digital Era",
          description1: "DEVERA is a technology-first IT company specializing in high-performance software development. We don't just write code; we build digital foundations for the world's most ambitious companies.",
          description2: "Our mission is to bridge the gap between complex business needs and elegant technical solutions, ensuring our clients stay competitive in an ever-evolving landscape.",
          values: {
            reliability: {
              title: "Reliability",
              desc: "We build robust systems that stand the test of time and scale with your growth."
            },
            innovation: {
              title: "Innovation",
              desc: "Staying ahead of the curve with the latest technologies and engineering practices."
            },
            expertise: {
              title: "Expertise",
              desc: "A team of senior engineers dedicated to solving complex business challenges."
            }
          },
          stats: {
            projects: "Projects",
            years: "Years"
          }
        },
        services: {
          sectionTitle: "Our Services",
          mainTitle: "Solutions for Every Challenge",
          learnMore: "Learn More",
          items: {
            web: {
              title: "Web Development",
              desc: "High-performance web applications built with React, Next.js, and modern stacks.",
            },
            mobile: {
              title: "Mobile Applications",
              desc: "Native and cross-platform mobile solutions for iOS and Android devices.",
            },
            design: {
              title: "UI/UX Design",
              desc: "User-centric design that combines aesthetics with seamless functionality.",
            },
            cloud: {
              title: "Cloud & Backend",
              desc: "Scalable cloud infrastructure and robust backend systems for complex data.",
            },
            consulting: {
              title: "IT Consulting",
              desc: "Strategic technology advice to help you navigate the digital landscape.",
            },
          }
        },
        whyDevera: {
          sectionTitle: "Why Choose Us",
          mainTitle: "The DEVERA Advantage: Where Quality Meets Innovation",
          description: "We don't just build software; we build partnerships. Our approach is rooted in deep technical expertise and a commitment to your business success.",
          cta: "Learn More About Us",
          benefits: {
            seniorTeam: {
              title: "Senior-Only Team",
              desc: "Your project is handled by experienced engineers, not juniors.",
            },
            globalStandards: {
              title: "Global Standards",
              desc: "We follow international best practices in security and performance.",
            },
            qualityFirst: {
              title: "Quality First",
              desc: "Rigorous testing and code reviews are part of our DNA.",
            },
            transparentProcess: {
              title: "Transparent Process",
              desc: "Real-time updates and clear communication at every stage.",
            },
          }
        },
        projects: {
          sectionTitle: "Our Portfolio",
          mainTitle: "Our selected projects",
          viewAll: "View All Case Studies",
          items: {
            fintech: {
              title: "FinTech Dashboard",
              category: "Web Application",
              desc: "A comprehensive financial analytics platform for real-time market tracking.",
            },
            healthtrack: {
              title: "HealthTrack AI",
              category: "Mobile App",
              desc: "AI-powered health monitoring application with predictive diagnostics.",
            },
            ecocommerce: {
              title: "EcoCommerce",
              category: "E-commerce",
              desc: "Sustainable marketplace platform with integrated carbon footprint tracking.",
            },
            cloudsync: {
              title: "CloudSync Pro",
              category: "SaaS",
              desc: "Enterprise-grade cloud synchronization and collaboration tool.",
            },
          }
        },
        contact: {
          sectionTitle: "Contact Us",
          mainTitle: "Let's Build Something Extraordinary Together",
          description: "Have a project in mind? Or just want to say hello? We're always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
          contactInfo: {
            email: {
              label: "Email us at",
              value: "hello@devera.tech"
            },
            phone: {
              label: "Call us at",
              value: "+1 (555) 000-DEVERA"
            },
            address: {
              label: "Visit our office",
              value: "Tech Plaza, Silicon Valley, CA"
            }
          },
          form: {
            name: {
              label: "Full Name",
              placeholder: "John Doe",
              error: {
                required: "Name is required"
              }
            },
            email: {
              label: "Email Address",
              placeholder: "john@example.com",
              error: {
                required: "Email is required",
                invalid: "Invalid email"
              }
            },
            projectType: {
              label: "Project Type",
              options: {
                web: "Web Development",
                mobile: "Mobile Application",
                design: "UI/UX Design",
                cloud: "Cloud Solutions",
                other: "Other"
              }
            },
            message: {
              label: "Your Message",
              placeholder: "Tell us about your project...",
              error: {
                required: "Message is required"
              }
            },
            submit: "Send Message",
            submitting: "Sending...",
            successMessage: "Message sent successfully! We'll get back to you soon."
          },
          social: {
            linkedin: "LinkedIn",
            instagram: "Instagram",
            tiktok: "TikTok"
          }
        },
        footer: {
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          cookies: "Cookie Policy",
          copyright: "© {{year}} DEVERA IT Solutions. All rights reserved."
        }
      },
    },
    ru: {
      translation: {
        nav: {
          about: "О нас",
          services: "Услуги",
          why: "Почему Devera",
          projects: "Проекты",
          contact: "Контакты",
          start: "Начать проект",
        },
        hero: {
          badge: "ИТ-решения нового поколения",
          title1: "DEVERA",
          title2: "Цифровое будущее.",
          description: "Создаем цифровые решения, помогаем бизнесу процветать в современную эпоху. Специализируемся на высококачественной инженерии и премиальном дизайне.",
          ctaPrimary: "Связаться",
          ctaSecondary: "Посмотреть проекты",
          stats: {
            growth: "Рост",
            safety: "Безопасность",
            scale: "Масштаб",
          }
        },
        about: {
          sectionTitle: "О DEVERA",
          mainTitle: "Инженерное превосходство для цифровой эпохи",
          description1: "DEVERA — это IT-компания, ориентированная на технологии и специализирующаяся на разработке высокопроизводительного программного обеспечения. Мы не просто пишем код; мы создаем цифровую основу для самых амбициозных компаний мира.",
          description2: "Наша миссия — преодолеть разрыв между сложными бизнес-задачами и элегантными техническими решениями, гарантируя, что наши клиенты остаются конкурентоспособными в постоянно меняющемся ландшафте.",
          values: {
            reliability: {
              title: "Надежность",
              desc: "Мы создаем надежные системы, которые выдерживают испытание временем и масштабируются вместе с вашим ростом."
            },
            innovation: {
              title: "Инновации",
              desc: "Остаемся на шаг впереди с использованием новейших технологий и инженерных практик."
            },
            expertise: {
              title: "Экспертиза",
              desc: "Команда старших инженеров, посвятивших себя решению сложных бизнес-задач."
            }
          },
          stats: {
            projects: "Проектов",
            years: "Лет"
          }
        },
        services: {
          sectionTitle: "Наши услуги",
          mainTitle: "Решения для любой задачи",
          learnMore: "Подробнее",
          items: {
            web: {
              title: "Веб-разработка",
              desc: "Высокопроизводительные веб-приложения на React, Next.js и современных технологиях.",
            },
            mobile: {
              title: "Мобильные приложения",
              desc: "Нативные и кроссплатформенные мобильные решения для iOS и Android.",
            },
            design: {
              title: "UI/UX дизайн",
              desc: "Пользовательский дизайн, сочетающий эстетику с бесшовной функциональностью.",
            },
            cloud: {
              title: "Облако и Backend",
              desc: "Масштабируемая облачная инфраструктура и надежные бэкенд-системы для сложных данных.",
            },
            consulting: {
              title: "IT консалтинг",
              desc: "Стратегические технологические консультации для навигации в цифровом ландшафте.",
            },
          }
        },
        whyDevera: {
          sectionTitle: "Почему выбирают нас",
          mainTitle: "Преимущество DEVERA: где качество встречает инновации",
          description: "Мы не просто создаем программное обеспечение; мы строим партнерства. Наш подход основан на глубоких технических знаниях и приверженности вашему бизнес-успеху.",
          cta: "Узнать больше о нас",
          benefits: {
            seniorTeam: {
              title: "Команда только сеньоров",
              desc: "Вашим проектом занимаются опытные инженеры, а не джуны.",
            },
            globalStandards: {
              title: "Международные стандарты",
              desc: "Мы следуем международным лучшим практикам в области безопасности и производительности.",
            },
            qualityFirst: {
              title: "Качество прежде всего",
              desc: "Тщательное тестирование и код-ревью — часть нашей ДНК.",
            },
            transparentProcess: {
              title: "Прозрачный процесс",
              desc: "Обновления в реальном времени и четкая коммуникация на каждом этапе.",
            },
          }
        },
        projects: {
          sectionTitle: "Наше портфолио",
          mainTitle: "Наши избранные проекты",
          viewAll: "Посмотреть все кейсы",
          items: {
            fintech: {
              title: "FinTech Dashboard",
              category: "Веб-приложение",
              desc: "Комплексная платформа финансовой аналитики для отслеживания рынка в реальном времени.",
            },
            healthtrack: {
              title: "HealthTrack AI",
              category: "Мобильное приложение",
              desc: "Мониторинг здоровья на основе ИИ с прогностической диагностикой.",
            },
            ecocommerce: {
              title: "EcoCommerce",
              category: "E-commerce",
              desc: "Платформа устойчивой торговли с отслеживанием углеродного следа.",
            },
            cloudsync: {
              title: "CloudSync Pro",
              category: "SaaS",
              desc: "Корпоративный инструмент облачной синхронизации и совместной работы.",
            },
          }
        },
        contact: {
          sectionTitle: "Контакты",
          mainTitle: "Давайте вместе Создадим Что-То Экстраординарное",
          description: "Есть идея для проекта? Или просто хотите поздороваться? Мы всегда открыты для обсуждения новых проектов, творческих идей или возможностей стать частью ваших видений.",
          contactInfo: {
            email: {
              label: "Напишите нам на",
              value: "hello@devera.tech"
            },
            phone: {
              label: "Позвоните нам по номеру",
              value: "+1 (555) 000-DEVERA"
            },
            address: {
              label: "Посетите наш офис",
              value: "Тех Плаза, Кремниевая долина, Калифорния"
            }
          },
          form: {
            name: {
              label: "Полное имя",
              placeholder: "Иван Иванов",
              error: {
                required: "Имя обязательно"
              }
            },
            email: {
              label: "Электронная почта",
              placeholder: "ivan@example.com",
              error: {
                required: "Электронная почта обязательна",
                invalid: "Некорректный email"
              }
            },
            projectType: {
              label: "Тип проекта",
              options: {
                web: "Веб-разработка",
                mobile: "Мобильное приложение",
                design: "UI/UX дизайн",
                cloud: "Облачные решения",
                other: "Другое"
              }
            },
            message: {
              label: "Ваше сообщение",
              placeholder: "Расскажите нам о вашем проекте...",
              error: {
                required: "Сообщение обязательно"
              }
            },
            submit: "Отправить сообщение",
            submitting: "Отправка...",
            successMessage: "Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время."
          },
          social: {
            linkedin: "LinkedIn",
            instagram: "Instagram",
            tiktok: "TikTok"
          }
        },
        footer: {
          privacy: "Политика конфиденциальности",
          terms: "Условия использования",
          cookies: "Политика использования файлов cookie",
          copyright: "© {{year}} DEVERA IT Solutions. Все права защищены."
        }
      },
    },
    az: {
      translation: {
        nav: {
          about: "Haqqımızda",
          services: "Xidmətlər",
          why: "Niyə Devera",
          projects: "Layihələr",
          contact: "Əlaqə",
          start: "Layihəyə başla",
        },
        hero: {
          badge: "Növbəti nəsil IT Həlləri",
          title1: "DEVERA",
          title2: "Rəqəmsal Gələcək.",
          description: "Müasir dövrdə biznesin inkişaf etməsinə kömək edən miqyaslı rəqəmsal həllər qururuq. Biz yüksək keyfiyyətli mühəndislik və premium dizayn üzrə ixtisaslaşmışıq.",
          ctaPrimary: "Əlaqə saxla",
          ctaSecondary: "Layihələrə bax",
          stats: {
            growth: "Artım",
            safety: "Təhlükəsizlik",
            scale: "Miqyas",
          }
        },
        about: {
          sectionTitle: "DEVERA Haqqında",
          mainTitle: "Rəqəmsal Dövr üçün Mühəndislik Mükəmməlliyi",
          description1: "DEVERA yüksək performanslı proqram təminatı hazırlanması üzrə ixtisaslaşmış, texnologiyalara üstünlük verən bir IT şirkətidir. Biz sadəcə kod yazmırıq; dünyanın ən ambisiyalı şirkətləri üçün rəqəmsal təməl qururuq.",
          description2: "Bizim missiyamız mürəkkəb biznes ehtiyacları ilə zərif texniki həllər arasındakı boşluğu aradan qaldırmaq və müştərilərimizin daim dəyişən mühitdə rəqabət qabiliyyətini qorumağını təmin etməkdir.",
          values: {
            reliability: {
              title: "Etibarlılıq",
              desc: "Biz sizin böyümənizlə birlikdə miqyaslı olan və zamanın sınağından çıxan möhkəm sistemlər qururuq."
            },
            innovation: {
              title: "Yenilik",
              desc: "Ən son texnologiyalar və mühəndislik təcrübələri ilə dəyişikliklərdən bir addım öndə olmaq."
            },
            expertise: {
              title: "Ekspertizə",
              desc: "Mürəkkəb biznes problemlərini həll etməyə həsr olunmuş baş mühəndislərdən ibarət komanda."
            }
          },
          stats: {
            projects: "Layihə",
            years: "İl"
          }
        },
        services: {
          sectionTitle: "Xidmətlərimiz",
          mainTitle: "Hər çətinliyə uyğun həllər",
          learnMore: "Ətraflı",
          items: {
            web: {
              title: "Veb inkişaf",
              desc: "React, Next.js və müasir texnologiyalar ilə qurulmuş yüksək performanslı veb tətbiqlər.",
            },
            mobile: {
              title: "Mobil Tətbiqlər",
              desc: "iOS və Android cihazları üçün nativ və çarpaz platformalı mobil həllər.",
            },
            design: {
              title: "UI/UX Dizayn",
              desc: "Estetikani qüsursuz funksionallıqla birləşdirən istifadəçi mərkəzli dizayn.",
            },
            cloud: {
              title: "Bulud və Backend",
              desc: "Mürəkkəb məlumatlar üçün miqyaslı bulud infrastrukturu və möhkəm arxa plan sistemləri.",
            },
            consulting: {
              title: "IT Məsləhətçilik",
              desc: "Rəqəmsal mühitdə naviqasiya etməyinizə kömək edəcək strategiya texnologiya məsləhətləri.",
            },
          }
        },
        whyDevera: {
          sectionTitle: "Niyə biz?",
          mainTitle: "DEVERA üstünlüyü: keyfiyyətin innovasiya ilə görüşdüyü yer",
          description: "Biz sadəcə proqram təminatı yaratmırıq; biz tərəfdaşlıq qururuq. Bizim yanaşmamız dərin texniki bilik və biznes uğurunuza sadiqliyə əsaslanır.",
          cta: "Haqqımızda daha çox öyrən",
          benefits: {
            seniorTeam: {
              title: "Yalnız baş mühəndislər",
              desc: "Layihəniz yalnız təcrübəli mühəndislər tərəfindən idarə olunur, yoxsa yenibaşlayanlar.",
            },
            globalStandards: {
              title: "Qlobal standartlar",
              desc: "Təhlükəsizlik və performansda beynəlxalq ən yaxşı təcrübələrə əməl edirik.",
            },
            qualityFirst: {
              title: "Keyfiyyət birinci",
              desc: "Ciddi testlər və kod nəzərdən keçirmələr bizim DNT-mizin bir hissəsidir.",
            },
            transparentProcess: {
              title: "Şəffaf proses",
              desc: "Hər mərhələdə real vaxt yeniləmələri və aydın kommunikasiya.",
            },
          }
        },
        projects: {
          sectionTitle: "Portfoliolarımız",
          mainTitle: "Seçilmiş layihələrimiz",
          viewAll: "Bütün halları gör",
          items: {
            fintech: {
              title: "FinTech Dashboard",
              category: "Veb Tətbiq",
              desc: "Bazarın real vaxt rejimində izlənməsi üçün hərtərəfli maliyyə analitika platforması.",
            },
            healthtrack: {
              title: "HealthTrack AI",
              category: "Mobil Tətbiq",
              desc: "Proqnoz diaqnostikası ilə süni intellekt əsaslı sağlamlıq monitorinqi tətbiqi.",
            },
            ecocommerce: {
              title: "EcoCommerce",
              category: "E-commerce",
              desc: "Karbon izinin inteqrasiya edilmiş izlənməsi ilə davamlı ticarət platforması.",
            },
            cloudsync: {
              title: "CloudSync Pro",
              category: "SaaS",
              desc: "Korporativ səviyyəli bulud sinxronizasiyası və əməkdaşlıq aləti.",
            },
          }
        },
        contact: {
          sectionTitle: "Əlaqə",
          mainTitle: "Gəlin birlikdə qeyri adi bir şey yaradaq",
          description: "Ağlınızda bir layihə varmı? Yoxsa sadəcə salam demək istəyirsiniz? Biz həmişə yeni layihələri, yaradıcı fikirləri və ya vizyonlarınızın bir hissəsi olmaq imkanlarını müzakirə etməyə açığıq.",
          contactInfo: {
            email: {
              label: "Bizə e-poçt göndərin",
              value: "hello@devera.tech"
            },
            phone: {
              label: "Bizə zəng edin",
              value: "+1 (555) 000-DEVERA"
            },
            address: {
              label: "Ofisimizi ziyarət edin",
              value: "Tex Plaza, Silikon Vadisi, Kaliforniya"
            }
          },
          form: {
            name: {
              label: "Tam ad",
              placeholder: "Əli Əliyev",
              error: {
                required: "Ad tələb olunur"
              }
            },
            email: {
              label: "E-poçt ünvanı",
              placeholder: "eli@example.com",
              error: {
                required: "E-poçt tələb olunur",
                invalid: "Yanlış e-poçt ünvanı"
              }
            },
            projectType: {
              label: "Layihə növü",
              options: {
                web: "Veb inkişaf",
                mobile: "Mobil tətbiq",
                design: "UI/UX Dizayn",
                cloud: "Bulud həlləri",
                other: "Digər"
              }
            },
            message: {
              label: "Mesajınız",
              placeholder: "Layihəniz haqqında bizə məlumat verin...",
              error: {
                required: "Mesaj tələb olunur"
              }
            },
            submit: "Mesaj göndər",
            submitting: "Göndərilir...",
            successMessage: "Mesaj uğurla göndərildi! Biz sizinlə əlaqə saxlayacağıq."
          },
          social: {
            linkedin: "LinkedIn",
            instagram: "Instagram",
            tiktok: "TikTok"
          }
        },
        footer: {
          privacy: "Məxfilik Siyasəti",
          terms: "Xidmət Şərtləri",
          cookies: "Cookie Siyasəti",
          copyright: "© {{year}} DEVERA IT Solutions. Bütün hüquqlar qorunur."
        }
      },
    },
  },
});

export default i18n;