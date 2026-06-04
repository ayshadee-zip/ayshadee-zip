/* ============================================================================
   📋  YOUR RESOURCES LIVE HERE  —  this is the only file you need to edit!
   ============================================================================

   To ADD a new resource, copy one block like this...

       {
         title: "The name of the thing",
         description: "One friendly sentence about why it's great.",
         url: "https://the-link-goes-here.com",
         source: "Where it's from (e.g. NPR, Etsy, a blog)",
       },

   ...and paste it inside the [ square brackets ] of the right category below.
   Keep the comma at the end. Save the file and refresh the page — done! 🎉

   Tips:
   • The "source" line is the little tag shown on the card (optional — you can
     delete that line if you like).
   • To REMOVE a resource, just delete its { ... } block (and its comma).
   • To reorder, drag blocks up or down.
   ========================================================================== */

const resourceData = [
  /* ----------------------------- PODCASTS ------------------------------- */
  {
    id: "podcasts",
    icon: "🎧",
    title: "Podcasts for Kids",
    blurb: "Brilliant listens for car rides, quiet time and curious minds.",
    items: [
      {
        title: "Wow in the World",
        description:
          "Two playful hosts whisk kids off on giggly adventures into science, nature and the human body.",
        url: "https://www.npr.org/podcasts/510321/wow-in-the-world",
        source: "NPR",
      },
      {
        title: "Brains On!",
        description:
          "A kid-co-hosted science show that answers the big questions little ones love to ask.",
        url: "https://www.brainson.org/",
        source: "APM",
      },
      {
        title: "Story Pirates",
        description:
          "Comedians and musicians turn stories written by real kids into hilarious sketches and songs.",
        url: "https://www.storypirates.com/podcasts",
        source: "Story Pirates",
      },
      {
        title: "But Why: A Podcast for Curious Kids",
        description:
          "Kids ask the questions and experts answer them — from black holes to why we hiccup.",
        url: "https://www.vermontpublic.org/programs/but-why-a-podcast-for-curious-kids",
        source: "Vermont Public",
      },
      {
        title: "Circle Round",
        description:
          "Beautifully produced folktales from around the world, perfect for ages 4–10.",
        url: "https://www.wbur.org/circleround",
        source: "WBUR",
      },
    ],
  },

  /* ---------------------------- WORKSHEETS ------------------------------ */
  {
    id: "worksheets",
    icon: "✏️",
    title: "Educational Worksheets",
    blurb: "Printables to keep little brains busy — reading, maths and more.",
    items: [
      {
        title: "Khan Academy Kids",
        description:
          "Completely free activities, books and printables for ages 2–8, made by educators.",
        url: "https://www.khanacademy.org/kids",
        source: "Khan Academy",
      },
      {
        title: "Education.com Worksheets",
        description:
          "A huge library of printable worksheets sorted by grade and subject.",
        url: "https://www.education.com/worksheets/",
        source: "Education.com",
      },
      {
        title: "K5 Learning — Free Worksheets",
        description:
          "Reading and maths worksheets for kindergarten through grade 5.",
        url: "https://www.k5learning.com/free-worksheets-for-kids",
        source: "K5 Learning",
      },
      {
        title: "Super Teacher Worksheets",
        description:
          "Printables across every subject, plus puzzles and seasonal activity pages.",
        url: "https://www.superteacherworksheets.com/",
        source: "Super Teacher",
      },
    ],
  },

  /* ---------------------------- PRODUCTS -------------------------------- */
  {
    id: "products",
    icon: "🧸",
    title: "Lovely Products for Kids",
    blurb: "Toys, printables and bits and bobs worth a look.",
    items: [
      {
        title: "BlogPixie Printables",
        description:
          "Bright, cheerful printable charts, planners and activity packs for family life.",
        url: "https://www.etsy.com/au/shop/BlogPixie",
        source: "Etsy",
      },
      {
        title: "Lakeshore Learning",
        description:
          "Teacher-trusted educational toys and hands-on learning kits for every age.",
        url: "https://www.lakeshorelearning.com/",
        source: "Lakeshore",
      },
      {
        title: "Melissa & Doug",
        description:
          "Classic wooden toys, puzzles and craft sets that encourage open-ended play.",
        url: "https://www.melissaanddoug.com/",
        source: "Melissa & Doug",
      },
    ],
  },

  /* ------------------------ SCREEN-FREE SUMMER -------------------------- */
  {
    id: "summer",
    icon: "☀️",
    title: "Screen-Free Summer Fun",
    blurb: "Ideas to fill the holidays with making, moving and imagining.",
    items: [
      {
        title: "100 Screen-Free Summer Activities",
        description:
          "A big, printable bucket-list of low-prep ideas to beat the 'I'm bored' blues.",
        url: "https://www.thedatingdivas.com/screen-free-summer-activities-for-kids/",
        source: "Activity blog",
      },
      {
        title: "Backyard & Nature Play Ideas",
        description:
          "Mud kitchens, scavenger hunts and sensory bins to get kids outdoors.",
        url: "https://www.daysoutwiththekids.co.uk/blog/outdoor-activities-for-kids",
        source: "Activity blog",
      },
      {
        title: "Easy Kids' Craft Projects",
        description:
          "Simple, low-mess crafts using things you already have at home.",
        url: "https://www.thebestideasforkids.com/kids-crafts/",
        source: "Crafts blog",
      },
    ],
  },
];
