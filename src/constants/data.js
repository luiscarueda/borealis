  import images from "./images";
  

  export const navlinksData = [
    { label: "Home", path: '/'},
    { label: "About",path: '/about'},    
    { label: "Plans",path: '/plans'},
    { label: "Gallery", path: '/Gallery'},
    { label: "Contact", path: '/contact'},   
   ];

   export const mainheaderData = [

    { hook: 'ABOUT US',
      title:'WELCOME TO BOREALIS ',
      text:'LATIN DANCE',
      imgUrl: images.photoMain,
    },
    ]


  export const headerData = [

      { title: 'ABOUT ME',
        text:'UNA BREVE HISTORIA DE MI',
        imgUrl: images.photo01,
       },

       { title:'PLANS',
       text:'lorem2',
       imgUrl:images.photo02,
     },

     { title:'GALLERY',
        text:'lorem3',
        imgUrl:images.photo03,
      },

      { title:'CONTACT',
        text:'Inscribete ya ',
        imgUrl:images.photo04,
      },      
    ] ; 

    export const aboutData = [

      { title: 'STORY',
        text:'Borealis Latin Dance, founded a year ago by a young Colombian in Canada, has quickly become a vibrant hub for Latin dance enthusiasts. Offering a fusion of passion, rhythm, and cultural exchange, the academy embodies the spirit of Latin America in the heart of Canada. Through dynamic classes and community events, Borealis Latin Dance introduces students to salsa, bachata, and more, fostering a welcoming atmosphere where everyone can connect through movement. With its commitment to excellence and inclusivity, Borealis Latin Dance is not just a dance studio but a celebration of diversity and joy, enriching the local cultural tapestry.',
        imgUrl: images.photo05,
       },

       { title:'MISION',
       text:'Our mission is to celebrate diversity and joy through dance, offering inclusive classes and community events that promote cultural exchange and excellence in Latin dance, creating a welcoming space where everyone can connect and express themselves through movement.',
       imgUrl:images.photo06,
     },

     { title:'VISION',
        text:'By 2030, Borealis Latin Dance envisions becoming a leading cultural hub in Canada, renowned for its excellence in Latin dance education and vibrant community engagement. We aspire to inspire thousands of individuals through our dynamic programs, fostering a deep appreciation for Latin culture and creating lasting connections through the universal language of dance.',
        imgUrl:images.photo07,
      },     
    ] ; 

    export const footerLinksData = [
      {
          title: "A",
          links: [
              { name: "B", link: "/" },
              { name: "C", link: "/" },
              { name: "D", link: "/" },
              { name: "E", link: "/" },         
       
          ],
      },
      {
          title: "F",
          links: [
              { name: "G", link: "/" },
              { name: "H", link: "/" },
              { name: "I", link: "/" },
              { name: "J", link: "/" },
              { name: "K", link: "/" },
          ],
      },
      {
          title: "Get in touch",
          links : [
             { name: "bailaborealis@gmail.com", link: "mailto:bailaborealis@gmail.com" },
             { name: "+1 587-566-0135", link: "tel:+1 587-566-0135" },
          ],
        }, 
      ];
      
  

  export const programsData = [
    {
        title: "1 course",
        info: "This is the day that the lord has made. We will rejoice!",
        price: '$70'
        
    },
    {
        title: "full membership",
        info: "This is the day that the lord has made. We will rejoice!",
        price: '$140'
        
    },

    {
        title: "2 courses",
        info: "This is the day that the lord has made. We will rejoice!",
        price: '$100'
        
    }
]

export const faqsData = [
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

 export const imagesData = [
  {
    original: images.photogallery01,
    thumbnail: "https://picsum.photos/250/150/",
  },
  {
    original: images.photogallery02,
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

