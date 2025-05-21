  import images from "./images";  

  export const NAVLINKS = [
    { label: "About",      path: '/about'   },    
    { label: "Schedule",   path: '/schedule'},     
    { label: "Classes",    path: '/fullclasses'},
    { label: "Posts",      path: '/pagepost'},
    { label: "Contact",    path: '/contact' },            
   ];
  
  export const CLASSESDROPDOWN = [
    { label: "Salsa1",      path: '/classes'},
    { label: "Salsa2",      path: '/classes'},
    { label: "Salsa3",      path: '/classes' },  
    { label: "Bachata1",    path: '/classes'   },    
    { label: "Bachata2",    path: '/classes'}, 
    { label: "Bachata3",    path: '/classes'  },             
   ];

  export const MAINHEADER= [
     { hook: 'SALSA AND BACHATA CLASSES IN KELOWNA ',
       title:'WELCOME TO ',
       text:'BOREALIS LATIN DANCE',
       imgUrl: images.photoMain,
     },
   ]

  export const HEADER = [
       { title: 'ABOUT',
        text:'your month',
        imgUrl: images.photo01,
       },
       { title:'SCHEDULE',
         text:'MONTHLY MEMBERSHIPS',
         imgUrl:images.photo02,
       },    
       { title:'CLASSES',
        text:'From Beginner to Advanced',
        imgUrl:images.photo03,
       },
       { title:'POSTS',
        text:'All the Borealis News',
        imgUrl:images.photo04,
       },
       { title:'CONTACT',
        text:'All the Borealis News',
        imgUrl:images.photo05,
       },
    ] ; 

  export const ABOUT = [
      { title: 'STORY',
        text:'Borealis Latin Dance, founded a year ago by a young Colombian in Canada, has quickly become a vibrant hub for Latin dance enthusiasts. Offering a fusion of passion, rhythm, and cultural exchange, the academy embodies the spirit of Latin America in the heart of Canada. Through dynamic classes and community events, Borealis Latin Dance introduces students to salsa, bachata, and more. ',
        imgUrl: images.photo06,
       },

       { title:'MISION',
       text:'Our mission is to celebrate diversity and joy through dance, offering inclusive classes and community events that promote cultural exchange and excellence in Latin dance, creating a welcoming space where everyone can connect and express themselves through movement.',
       imgUrl:images.photo07,
     },

     { title:'VISION',
        text:'By 2030, Borealis Latin Dance envisions becoming a leading cultural hub in Canada, renowned for its excellence in Latin dance education and vibrant community engagement. We aspire to inspire thousands of individuals through our dynamic programs, fostering a deep appreciation for Latin culture and creating lasting connections through the universal language of dance.',
        imgUrl:images.photo08,
      },     
    ] ; 

  export const FOOTERLINKS= [
       {
          title: "ACADEMY",
          links: [
              { name: "story", link: "/about" },
              { name: "mision", link: "/about" },
              { name: "vision", link: "/about" },                     
          ],
      },
      {
          title: "SERVICES",
          links: [
              { name: "programs", link: "/about" },
              { name: "FAQs", link: "/about" },
              { name: "gallery", link: "/Gallery" },             
          ],
      },
      {
          title: "Get in touch",
          links : [
             { name: "bailaborealis@gmail.com", link: "mailto:bailaborealis@gmail.com" },
             { name: "+1 236-457-5567", link: "tel:+1 236-457-5567" },
             { name: "Second Floor 1040 Richter St, Kelowna", link: "tel:+1 236-457-5567" },
          ],
        }, 
      ];     
  
  export const PROGRAMS= [    
    {
        title: "1 Course",
        info: "Access to 1 course (1 class per week,for 4 weeks)",
        price: '$65 CAD'        
    },
    {
        title: "2 courses",
        info: "Access  to 2 courses   (2 class per week, for 4 weeks each)  ",
        price: '$110 CAD'        
    },
    {
        title: "full membership",
        info: "Access to all courses from your level or below  (4 weeks each) ",
        price: '$150 CAD'        
    },
   ]

  export const FAQS = [
    {
      question: "What dance styles does Borealis Latin Dance offer?",
      answer: "We offer classes in salsa, bachata, and other Latin dance styles."
    },
    {      
      question: "Do I need prior experience to join the classes?",
      answer: "No, our classes are designed for all levels, from beginners to advanced dancers."
    },
    {     
      question: "How can I sign up for a class?",
      answer: "You can sign up for our classes through our website or by visiting our academy."
    },
    {      
      question: "Do you offer private lessons in addition to group classes?",
      answer: "Yes, we offer private lessons for those seeking more personalized attention."
    }, 
    {      
      question: "Do you organize community or social events?",
      answer: "Yes, we regularly organize community and social events to foster interaction and cultural exchange."
    },
    {      
      question: "What should I bring to a dance class?",
      answer: "We recommend wearing comfortable clothing and appropriate dance shoes. Also, bring your enthusiasm and willingness to learn."
    },  
   ]
  export const IMAGES = [
   {
    original: images.photogallery02,
    thumbnail: "https://picsum.photos/250/150/",
   },
   {
    original: images.photogallery01,
    thumbnail: "https://picsum.photos/id/115/1010/250/150/",
   },
   {
    original: images.photogallery03,
    thumbnail: "https://picsum.photos/id/1012/250/150/",
   },
   {
    original: images.photogallery04,
    thumbnail: "https://picsum.photos/id/1013/250/150/",
   },
   {
    original: images.photogallery05,
    thumbnail: "https://picsum.photos/id/1014/250/150/",
   },
   {
    original: images.photogallery06,
    thumbnail: "https://picsum.photos/id/1015/250/150/",
   },
   ]; 