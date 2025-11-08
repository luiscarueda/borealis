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
        text:'updates and new features',
        imgUrl:images.photo04,
       },
       { title:'POST HISTORIAL',
       text:'ALL OUR POST LAST YEAR',
       imgUrl:images.photo05,
      },       
       { title:'CONTACT',
        text:'All the Borealis News',
        imgUrl:images.photo06,
       },
    ] ; 

  export const ABOUT = [
      { title: 'STORY',
        text:'In a deep search for a more meaningful life, I discovered an ancient but simple idea: living on purpose—the intersection of what we love, what we’re skilled at, and how we can serve others. ',
        text2:'Dance, music, and culture have been passions of mine since my mother first taught me at the age of fifteen. Since then, I’ve continued learning, performing, and training in dance studios across Colombia, Edmonton, and Vancouver.',
        text3:'Bringing that passion to Kelowna, I created a space where people can experience the same connection, joy, and cultural exchange that dance has always given me.',
        imgUrl: images.photo07,
       },

       { title:'MISION',
       text:'Our mission is to improve the health and well-being of our community through dance. Focusing on the physical, mental, and emotional connection it brings.',
       text2:'We believe movement strengthens the body, rhythm sharpens the mind, and human connection nourishes the heart.',
       text3:' By merging Latino culture with the spirit of inclusivity in Canada, we create a welcoming environment where everyone can express themselves, grow, and connect through the universal language of dance.',
       imgUrl:images.photo08,
       },

     { title:'VISION',
        text:'Our vision is to unite Latino and Canadian cultures through the universal language of dance. ',
        text2:'We strive to create a place that nurtures well-being, fosters joy, and encourages people to live healthier, more connected lives.',
        text3:'',
        imgUrl:images.photo09,
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
        title: "full membership",
        info: "Access to all courses from your level or below  (4 weeks each) ",
        price: '$150 CAD'        
    },
    {
        title: "2 courses",
        info: "Access  to 2 courses   (2 class per week, for 4 weeks each)  ",
        price: '$110 CAD'        
    },   
   ]
  
   export const DROPIN= [    
    {
        title: "DROP-IN",
        info: "Access to 1 class (Upon request)",
        price: '$20 CAD'        
    },
     {
        title: "DROP-IN NIGHT",
        info: "Access to 2 classes in one night",
        price: '$30 CAD'        
    },
    {
        title: "PRIVATE CLASS",
        info: "Access to 1 hr of a private class",
        price: '$70 CAD'        
    },   
   ]

  export const FAQS = [
    {
      question: "Do I need to bring a partner?",
      answer: "Partners are not required for our group classes — you are welcome to come solo or with a partner!We rotate partners throughout the class so everyone gets a chance to dance, connect, and learn from each other.",
      answer2:"It’s also a great way to build confidence and make new friends.If you come with your own partner and prefer to stay together, just let the instructor and the group know.",
    },
    {      
      question: "Which classes are best for beginners?",
      answer: "All classes marked as Level 1 are perfect for beginners. You’ll learn the fundamentals of rhythm, steps, leading and following dynamics in a supportive and fun environment.",
      answer2:"If you’ve never done partner dancing before, our beginner classes are the best place to start.",
    },
    {     
      question: "When can I start taking classes?",
      answer: "Our classes run in monthly cycles, restarting on the first week of every month.",
      answer2:"If you’d like to join mid-month, we recommend booking a private class to catch up, or waiting for the next cycle to start fresh with the group.This helps everyone progress together — so you can learn at the right pace without feeling overwhelmed or lost.",
    },
    {      
      question: "What should I wear to class?",
      answer: "Wear something comfortable that lets you move freely — think breathable clothing that allows movement and keeps you cool.",
      answer2:"Some students like to dress up a bit, others keep it casual. There is no dress code — just wear what makes you feel confident and ready to move!",
    }, 
    {      
      question: "What type of shoes should I wear?",
      answer: "You don’t need special shoes to start dancing! Clean sneakers or smooth-soled shoes work just fine.",
      answer2:"Once you start dancing more regularly, we recommend investing in dance shoes with suede soles — they make turns smoother and help protect your joints. Avoid heavy boots, flip-flops, or high stilettos — your feet will thank you later.",
    },
    {      
      question: "How many times should I take each level?",
      answer: "Every dancer progresses at their own pace. What matters most is practice and consistency, not speed.",
      answer2:"You’ll know you’re ready for the next level when you feel confident, comfortable, and can apply what you’ve learned with different partners and music tempos.",
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