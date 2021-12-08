var config = {
  style: "mapbox://styles/vadenvmapkyiv/ckwbmy83m06ke14oc5cr54iez",
  accessToken:
    "pk.eyJ1IjoidmFkZW52bWFwa3lpdiIsImEiOiJja2RwczBzcXYwMjgzMnprdWVxMTB2aWU0In0.OBDKIqeo6YDnxaEZR4bdIA",
  showMarkers: false,
  theme: "light",
  use3dTerrain: true,

  title: "Мирноград",
  subtitle: "<img src='photos/two_settlements_hist.jpg'/></br>",
  byline: "",
  footer:
    "Місто Мирноград потребує змін, потребує трансформації! Справжня трансформація завжди відбувається одразу на кількох взаємопов’язаних рівнях. Ми виділяємо 5 важливих рівнів: рівень громади/спільноти, малі та середні ініціативи, масштабні ініціативи, громадські послуги (public services?) та закони і інші регуляторних механізми”  Gorka Espiau із Agirre Lehendakaria Center. Нам важливо побачити загальну ситуацію, тому важливо ідентифікувати і візуалізувати всі елементи на різних рівнях трансформації. Тут нам в нагоді стає метод системного картографування  —  спрямованого на створення мапи всіх учасників і ініціатив трансформаційних змін в місті. Ми вже створили такі Системні мапи для Мирнограду та пропонуємо всім охочим розглянути їх детальніше та доповнити тими елементами, яких ми ще не виявили. Лишень завдяки спільним зусиллям ми отримаємо найбільш повну та реальну картину міста! Тому долучайтесь! <a href='https://embed.kumu.io/28999a62554a6f9b26a01eb4a7ea86d2'>Системна мапа Трансформації</a></br>Автори: Несук Вадим,Оксана Удовик, Аліса Баньковська",
  chapters: [
    {
      id: "precity",
      alignment: "left",
      title: "",
      image: "photos/two_settlements_hist.jpg",
      description:
        "Місто Мирноград утворилося з двох частин - Новоекономічного та Гродівського рудників.",
      location: {
        center: { lon: 37.25289, lat: 48.30304 },
        zoom: 10.8,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "precity",
          opacity: 0.7
        },
        {
          layer: "railwayl",
          opacity: 0
        },
        {
          layer: "river-bassin",
          opacity: 0
        },
        {
          layer: "river-bassin-label",
          opacity: 0
        },
        {
          layer: "road",
          opacity: 0
        },
        {
          layer: "pzf_all_ua",
          opacity: 0
        },
        {
          layer: "problems-human-security",
          opacity: 0
        },
        {
          layer: "mineshaft-myrnohrad_labels",
          opacity: 0
        },
        {
          layer: "mineshaft-myrnohrad",
          opacity: 0
        },
        {
          layer: "tericon",
          opacity: 0
        },
        {
          layer: "myrnohrad-air-station",
          opacity: 0
        },
        {
          layer: "myrnohrad",
          opacity: 0
        },
        {
          layer: "myrnohrad_label",
          opacity: 0
        }
      ],
      onChapterExit: [
        {
          layer: "precity",
          opacity: 0
        }
      ]
    },
    {
      id: "mineshafts",
      alignment: "left",
      title: "",
      image: "",
      description:
        "З 1911 р. було розроблено шахти № 1, 2, 3, 4, що призвело до створення одного з найбільших центрів видобутку вугілля на Донбасі - шахти «Новоекономічний» (сьогодні це шахта «Центральна»).Важливим також є функціонування шахти 5/6, яка була відкрита 1916 року.",
      location: {
        center: { lon: 37.25289, lat: 48.30304 },
        zoom: 12.34,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "mineshaft-myrnohrad_labels",
          opacity: 1
        },
        {
          layer: "mineshaft-myrnohrad",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "mineshaft-myrnohrad_labels",
          opacity: 0
        }
      ]
    },
    {
      id: "capitalna_mineshaft",
      alignment: "left",
      title: "",
      image: "",
      description:
        "1965 року почалося будівництво найбільшої в Донецькій області шахти «Червоноармійська-Капітальна». Ця подія стала ключовою в ідеї об'єднання міст Новоекономічного та Димитрова.",
      location: {
        center: { lon: 37.30704, lat: 48.32722 },
        zoom: 14.92,
        pitch: 56.5,
        bearing: -16.8
      },
      onChapterEnter: [
        {
          layer: "mineshaft-myrnohrad",
          opacity: 0.5
        },
        {
          layer: "mineshaft-myrnohrad_labels",
          opacity: 0.7
        }
      ],
      onChapterExit: [
        {
          layer: "mineshaft-myrnohrad",
          opacity: 0
        },
        {
          layer: "mineshaft-myrnohrad_labels",
          opacity: 0
        }
      ]
    },
    {
      id: "dymytrov_step",
      alignment: "left",
      title: "",
      image: "photos/metelyk-storymap-04.png",
      description: "",
      location: {
        center: { lon: 37.25289, lat: 48.30304 },
        zoom: 12.36,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "myrnohrad",
          opacity: 0.5
        },
        {
          layer: "myrnohrad_label",
          opacity: 0.7
        }
      ],
      onChapterExit: [
        {
          layer: "myrnohrad",
          opacity: 0
        },
        {
          layer: "myrnohrad_label",
          opacity: 0
        }
      ]
    },
    {
      id: "people_block_start",
      alignment: "fully",
      title: "Люди Мирнограду",
      image: "photos/myrnohrad-people-block.png",
      description:
        "<iframe width='560' height='315' src='https://www.youtube.com/embed/GU1CBx6A7sc?controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      location: {
        center: { lon: 37.25289, lat: 48.30304 },
        zoom: 12.36,
        pitch: 0.0,
        bearing: 0.0
      }
    },
    {
      id: "population",
      alignment: "fully",
      title: "",
      image: "photos/myrnohrad-population-visual.png",
      description: "",
      location: {
        center: { lon: 37.25289, lat: 48.30304 },
        zoom: 12.36,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "auto_routes",
      alignment: "right",
      title: "Автомобільні дороги",
      image: "",
      description:
        "Центральною частиною міста проходить автодорога державного значення Покровськ—Костянтинівка Н-32 та дорога місцевого значення Мирноград - Гродівка (О0544). Можна доїхати до Краматорська (80км), Дніпра (до 200 км), Запоріжжя (до 210 км)",
      location: {
        center: { lon: 37.25289, lat: 48.30304 },
        zoom: 8.16,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "road",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "road",
          opacity: 0
        }
      ]
    },
    {
      id: "railways",
      alignment: "left",
      title: "Залізниця",
      image: "",
      description:
        "Основна гілка - Дніпро - Донецьк проходить по південній межі міста, інша лінія - Покровськ-Мирноград. Пасажирського залізничного вокзалу в місті немає, найближчий - в місті Покровськ (20 хв автомобілем від міста). Від Покровська дібратися можна до Києва, Дніпра, також курсують приміські потяги.",
      location: {
        center: { lon: 34.05389, lat: 49.20938 },
        zoom: 6.71,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "railwayl",
          opacity: 1
        },
        {
          layer: "myrnohrad",
          opacity: 1
        },
        {
          layer: "myrnohrad_label",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "railwayl",
          opacity: 0
        },
        {
          layer: "myrnohrad",
          opacity: 0
        },
        {
          layer: "myrnohrad_label",
          opacity: 0
        }
      ]
    },
    {
      id: "human_problems",
      alignment: "left",
      title: "Основні проблеми міста",
      image: "",
      description:
        "1. Закинуті або недобудовані будівлі. </br>2. Небезпечні ділянки дороги</br>3. Недоступні простори для маломобільних людей",
      location: {
        center: { lon: 37.25289, lat: 48.30304 },
        zoom: 12.36,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "problems-human-security",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "problems-human-security",
          opacity: 0
        }
      ]
    },
    {
      id: "nature_block_start",
      alignment: "fully",
      title: "",
      image: "photos/myrnohrad-nature-block.png",
      description: "",
      location: {
        center: { lon: 37.25289, lat: 48.30304 },
        zoom: 9.36,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "air_pollution",
      alignment: "left",
      title: "Якість повітря",
      image: "photos/4418448.png",
      description:
        "Головні забруднювачі повітря: пил і важкі метали (Ti, Fe, Zn, Pb, and Cd, Cr, Ni, V) теж через видобування вугілля. Значення показників фіксувалося вище нормативів Директиви 2008/50/ЄС ГДК за вмістом Пилу РМ2.5 (ГДК 3,12), РМ10.0 (ГДК 1,84) в районі вул. Центральна, 77. В районі між вул. Горького та провулком Шкільний, 2 на СЗЗ  породного відвалу ДП «Мирноградвугілля» ВП Шахта «5/6». </br><a class='a_url' href='https://myrnograd-rada.gov.ua/news/2177-informaciya-pro-stan-navkolishnogo-prirodnogo' target='_blank'>Детальніше</a>",
      location: {
        center: { lon: 37.26554, lat: 48.28434 },
        zoom: 12.88,
        pitch: 30.0,
        bearing: -0.51
      },
      onChapterEnter: [
        {
          layer: "myrnohrad-air-station",
          opacity: 0.95
        }
      ],
      onChapterExit: [
        {
          layer: "myrnohrad-air-station",
          opacity: 0
        }
      ]
    },
    {
      id: "rivers",
      alignment: "right",
      title: "",
      image: "",
      description:
        "Поблизу міста проходить вододіл між річками басейнів Дніпра та Дону. КП 'КОМПАНIЯ ВОДА ДОНБАСУ' МИРНОГРАДСЬКЕ ВУВКГ М.МИРНОГРАД - cтаном на 2018 рік, це підприємство є 3 в Донецькій області та 14 серед усіх водних підприємств в Україні за кількістю викидів <b>забруднених вод</b> - цей показник становив 3,657 млн куб.",
      location: {
        center: { lon: 37.25289, lat: 48.30304 },
        zoom: 9.36,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "river-bassin",
          opacity: 1
        },
        {
          layer: "river-bassin-label",
          opacity: 1
        },
        {
          layer: "myrnohrad",
          opacity: 1
        },
        {
          layer: "myrnohrad_label",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "river-bassin",
          opacity: 0
        },
        {
          layer: "river-bassin-label",
          opacity: 0
        },
        {
          layer: "myrnohrad",
          opacity: 0
        },
        {
          layer: "myrnohrad_label",
          opacity: 0
        }
      ]
    },
    {
      id: "pzf",
      alignment: "left",
      title: "Природно-заповідний фонд",
      image: "",
      description:
        "На території Мирноградської територіальної громади не розташований жоден об'єкт природно-заповідного фонду - найближчий об'єкт розташований за 15 км від міста Мирноград - Ботанічний заказник місцевого значення <a href='https://pzf.mepr.gov.ua/additional-info/2643032771802432530' target='_blank'>«Гектова балка»</a>",
      location: {
        center: { lon: 37.26265, lat: 48.42575 },
        zoom: 13.57,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "pzf_all_ua",
          opacity: 0.75
        }
      ],
      onChapterExit: [
        {
          layer: "pzf_all_ua",
          opacity: 0
        }
      ]
    },
    {
      id: "water_in_mineshaft",
      alignment: "left",
      title: "Затоплення шахтними водами",
      image: "",
      description:
        "Найбільша екологічна проблема Мирнограду - це ризик затоплення шахтними водами. Зі створенням шахт - копаючи глибоко -  ми втручаємося в систему підземних вод, які тепер постійно будуть виходити назовні. Шахти в Мирнограді мають постійний водоприплив від 200 до 600 м3 за годину. Тобто кожну годину потрібно відкачувати 200 до 600 м3 води! Якщо ми постійно не відкачуємо воду, шахти можуть неконтрольовано затоплюватися підземними водами і виникає високий ризик просідань і навіть провалів ґрунтів, затоплення значних поверхневих площ, виходу метану на поверхню і забруднення води токсичними шахтними водами. А це може стати причиною вибухів, руйнувань  в місті та отруєння населення, а ще цілої низки інших загроз. </br><a href='https://www.youtube.com/watch?v=fT_8xHLgFzQ' target='_blank'>Детальніше - у відео</a>",
      location: {
        center: { lon: 37.25289, lat: 48.30304 },
        zoom: 9.36,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "",
          opacity: 0.25
        }
      ],
      onChapterExit: [
        {
          layer: "",
          opacity: 0
        }
      ]
    },
    {
      id: "metan",
      alignment: "left",
      title: "Метан",
      image: "",
      description:
        "Також небезпеку становлять і шахтні гази, адже при затопленні шахт метан та радіоактивний радон піднімається на поверхню. Накопичення цих газів спричинює обвали, зумовлює небезпеку вибухів і може дістатись до підвалів споруд. А це величезна небезпека для людей.",
      location: {
        center: { lon: 37.25289, lat: 48.30304 },
        zoom: 9.36,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "",
          opacity: 0
        }
      ]
    },
    {
      id: "tericons",
      alignment: "left",
      title: "Терикони",
      image: "",
      description:
        "Одна з причин, чому жити поблизу шахт є небезпечним — це тління териконів. Коли вони горять, то відбуваються викиди парникового газу та інших небезпечних сполук  -Сірчана кіслота, сірководень, аміак, оксид вуглецю які шкодять здоров’ю людей та додають проблем до глобальної зміни клімату.</br><a href='https://www.youtube.com/watch?v=YVon-5bYQGc&list=PL4uW9l0qYDuLMbFofQFfcyzZifvqxLV4J&index=15' target='_blank'>Детальніше перегляньте у відео</a>",
      location: {
        center: { lon: 37.25289, lat: 48.30304 },
        zoom: 9.36,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "tericon",
          opacity: 1
        },
        {
          layer: "myrnohrad_label",
          opacity: 1
        },
        {
          layer: "myrnohrad",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "tericon",
          opacity: 0
        },
        {
          layer: "myrnohrad_label",
          opacity: 0
        },
        {
          layer: "myrnohrad",
          opacity: 0
        }
      ]
    }
  ]
};
