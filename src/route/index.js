// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  }, 
  position:'Junior Fullstack JS Developer',
  salary:'600$ в місяц',
  address: "New York, West 46th Street",
};

var footer = {
  social:{
    email:{
      text:'ivanov@mail.com',
      href:'mailto:ivanov@mail.com',
    }, 
  phone:{
    text: " +380123456",
    href: " mailto:ivanov@mail.com",
    },  
  linkedin: {
    text: "linkedin",
    href: "https://wwww.linkedin.com",
   },      
  },
  firstname:"Ivan",
  lastname:"Ivanov",
  address:"New York, West 46th Street",
}; 


// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
}),

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
       title: "Resume | Summary",
    },
    header,
    main: {
      summary:{
        title:"Summary",
        text:`Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
          work on a new project I learn the domain and try to understand the idea of the project. Good team
          player, every colleague is a friend to me.`,
      },
      experience:{
        title:"Other experience",
        text:`Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer, 
  })
})

// ================================================================
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
       title: "Resume | Skills",
    },
    header,
    main: {
        skills: [
          {
            name: "HTML",
            point: 10,
            isTop: true,
          },
          {
            name: "Handlebars",
            point: 10,
            isTop: true,
          },
          {
            name: "VS code & NPML",
            point: 9,
            isTop: false,
          },
          {
            name: "Git & Terminal",
            point: 7,
          },
          {
            name: "Rect.JS",
            point: 0,
          },
          {
            name: "PHP",
            point: null,
          },
        ],
        hobbies:[
          {
            name: "Playing on guitar",
            isMain: true,
          },
          {
            name: "Reading",
            isMain: true,
          },
          {
            name: "Cycling",
            isMain: false,
          },
        ],
    },
    footer, 
  })
})
// ================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: "Resume | Educations",
   },
   header,
   main: {
      educations:[
        {
          name: "Harvord",
          isEnd: true,
        },
        {
          name: "Oxford",
          isEnd: true,
        },
        {
          name: "Cambridge",
          isEnd: false,
        },
     ],
      certificates:[
        {
          name: "HTML",
          id: 3100,
        },
        {
          name: "CSS",
          id: 2299,
        },
        {
          name: "JS",
          id: 1425,
        },
    ],
   },
   footer, 
 })
})
  // ================================================================
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: "big",
    page: {
      title: "Resume | Work",
   },
   header,
   main: {
    works: [
      {
      position: "Junior Fullstack Developer",
      company: {
        name:"IT Brains",
        url: "http://it-brains.com.ua/",
      },
      duration: {
        from: "10.10.22",
        to: null,
      },
      projectAmount: 15,
       
      projects: [
        {
        name: "Resume",
        url:"http://it-brains.com.ua/",
        about:"Hight-load aplication",
        stacks:[
          {
          name: "React JS"
        },
        {
          name: "HTML/CSS"
        },
        {
          name: "NodeJS"
        },
       ],
        stackAmount: 3,
      },
    ],
      awards: [
        
        {
        name:"Backgroung verification",
        },
        {
        name:"SEO optimisation",
        },
      ],
      awardAmount: 23,
      },
    ],
  },  
   footer, 
 })
}) 


// Підключаємо роутер до бек-енду
module.exports = router
