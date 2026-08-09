export const CATEROGIES = {
  GENERAL: "General",
  TECHNOLOGY: "Technology",
  GYM: "Gym",
  PERSONAL_GROWTH: "Personal Growth",
};

export const blogsPosts = [
  {
    id: 1,
    title: "React: A Powerful JavaScript Library.",
    category: CATEROGIES.TECHNOLOGY,
    image: "./assets/images/blog1.avif",
    date: "2026-01-15",
    sumary:
      "React can be used to create all kinds of web and mobile applications, interfaces, and much more.",
    content: [
      "React is a JavaScript library for building user interfaces.",
      "It was developed by Facebook and is maintained by a community of developers.",
      "React allows developers to create reusable UI components.",
      "It uses a virtual DOM to efficiently update and render components.",
      "React can be used for both web and mobile app development (React Native).",
      "React follows a unidirectional data flow, making it easier to manage",
      "React can be used to create all kinds of web and mobile applications, interfaces, and much more.",
    ],
  },
  {
    id: 2,
    title: "The Importance of Regular Exercise.",
    category: CATEROGIES.GYM,
    image: "./assets/images/gym1.jpg",
    date: "2026-08-06",
    sumary:
      "Regular exercise is essential for maintaining physical and mental health.",
    content: [
      "Exercise helps to improve cardiovascular health.",
      "It can aid in weight management and fat loss.",
      "Regular physical activity can boost mood and reduce stress.",
      "Exercise strengthens muscles and bones.",
      "It can improve sleep quality and energy levels.",
      "Engaging in regular exercise can reduce the risk of chronic diseases.",
      "Exercise can enhance cognitive function and memory.",
    ],
  },
];
