  import images from "./images";

  export const NAVLINKS = [
    { label: "About",      path: '/about'   },    
    { label: "Schedule",   path: '/schedule'},     
    { label: "Enroll",    path: '/fullclasses'},
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
     {  title:' WELCOME TO',
        hook: 'SALSA AND BACHATA CLASSES IN KELOWNA ',             
        imgUrl: images.photoMain,
     },
   ]

  export const HEADER = [
       { title: 'ABOUT',
        text:'your month',
        imgUrl: images.photo01,
       },
       { title:'SCHEDULE',
         text:'Monthly Memberships',
         imgUrl:images.photo02,
       },    
       { title:'ENROLL',
        text:'Come and Enjoy',
        imgUrl:images.photo03,
       },       
       { title:'LATEST POSTS',
        text:'Stay with us',
        imgUrl:images.photo04,
       },

       { title:'CONTACT',
        text:'All the Borealis News',
        imgUrl:images.photo05,
       },
    ] ; 

  export const ABOUT = [
      { title: 'STORY',
        text:'In a deep search for a more meaningful life, I discovered an ancient but simple idea: living on purpose—the intersection of what we love, what we’re skilled at, and how we can serve others. ',
        text2:'Dance, music, and culture have been passions of mine since my mother first taught me at the age of fifteen. Since then, I’ve continued learning, performing, and training in dance studios across Colombia, Edmonton, and Vancouver.',
        text3:'Bringing that passion to Kelowna, I created a space where people can experience the same connection, joy, and cultural exchange that dance has always given me.',
        imgUrl: images.photo06,
       },

       { title:'MISION',
       text:'Our mission is to improve the health and well-being of our community through dance. Focusing on the physical, mental, and emotional connection it brings.',
       text2:'We believe movement strengthens the body, rhythm sharpens the mind, and human connection nourishes the heart.',
       text3:' By merging Latino culture with the spirit of inclusivity in Canada, we create a welcoming environment where everyone can express themselves, grow, and connect through the universal language of dance.',
       imgUrl:images.photo07,
       },

     { title:'VISION',
        text:'Our vision is to unite Latino and Canadian cultures through the universal language of dance. ',
        text2:'We strive to create a place that nurtures well-being, fosters joy, and encourages people to live healthier, more connected lives.',
        text3:'',
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
             { name:  "1040 Richter St ,Second Floor, Kelowna", link: "tel:+1 236-457-5567" },
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