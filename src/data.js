// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from "react-icons/fa";
// import images
import AboutImg from "../src/assets/img/about/plate.png";
import ModelWhiteImg from "../src/assets/img/model-white.png";
import ModelBlackImg from "../src/assets/img/model-black.png";
import MenuImg1 from "../src/assets/img/menu/1.png";
import MenuImg2 from "../src/assets/img/menu/2.png";
import MenuImg3 from "../src/assets/img/menu/3.png";
import MenuImg4 from "../src/assets/img/menu/4.png";
import SignatureImg from "../src/assets/img/team/signature.png";
import ChefImg from "../src/assets/img/team/chef.png";
import Avatar1 from "../src/assets/img/testimonial/avatar1.png";
import Avatar2 from "../src/assets/img/testimonial/avatar2.png";
import Avatar3 from "../src/assets/img/testimonial/avatar3.png";

export const navData = [
  { href: "/", name: "home" },
  { href: "About", name: "about" },
  { href: "Menu", name: "menu" },
  { href: "Team", name: "team" },
  { href: "Testimonial", name: "testimonials" },
  { href: "Reservation", name: "book a table" },
  { href: "Reservation", name: "contact" },
];

export const heroData = {
  pretitle: "Nothing brings together like",
  title: "Bistro Brussels",
  subtitle: "Experience the taste of Belgium at Bistro Brussels. ",
  btnText: "Find out more",
};

export const socialData = [
  { href: "https://www.youtube.com", icon: <FaYoutube /> },
  { href: "https://www.facebook.com", icon: <FaFacebookF /> },
  { href: "https://www.instagram.com", icon: <FaInstagram /> },
  { href: "https://www.pinterest.com", icon: <FaPinterestP /> },
  { href: "https://www.discord.com", icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: "our story",
  title: "who we are",
  subtitle:
    "We are a cozy and authentic Belgian restaurant located in the heart of Brussels. Our menu features a wide range of traditional Belgian dishes, including moules-frites, waterzooi, and waffles, as well as an impressive selection of Belgian beers. Our team is passionate about creating a warm and welcoming atmosphere for our guests, and we strive to make every visit to Bistro Brussels a memorable one. Whether you're looking for a quick bite to eat or a leisurely dinner with friends, we've got you covered. We hope to see you at Bistro Brussels soon!",
  btnText: "find out more",
  image: AboutImg,
};

export const menuData = {
  title: "delicious flavour of winter",
  subtitle: "view all menu for tasty meal today",
  modelImg: ModelWhiteImg,
  btnText: "view complete menu",
  menuItems: [
    {
      image: MenuImg1,
      name: "Fruits Cake",
      price: "7.99 €",
      description:
        "A moist vanilla cake layered with fresh and seasonal fruit, topped with creamy frosting. The perfect fruity dessert for any occasion.",
    },
    {
      image: MenuImg2,
      name: "Veggie Burger",
      price: "9.49 €",
      description:
        "A flavorful and nutritious plant-based burger served on a toasty bun with all the fixings. Perfect for vegetarians and anyone looking to add more vegetables to their diet.",
    },
    {
      image: MenuImg3,
      name: "King Burger",
      price: "8.50 €",
      description:
        "A juicy beef patty topped with lettuce, tomato, and special sauce, served on a toasty bun. The perfect meal for any appetite.",
    },
    {
      image: MenuImg4,
      name: "Mexican Burger",
      price: "9.99 €",
      description:
        "A spicy beef patty topped with salsa, cheese, and tortilla chips, served on a toasty bun. Perfect for those who crave bold flavor.",
    },
  ],
};

export const teamData = {
  pretitle: "our team",
  title: "meet our chef",
  sub1: " Meet our talented head chef, Albert Donat! With over 9 years of experience in the culinary industry, Chef Albert brings a wealth of knowledge and skill to the kitchen at Bistro Brussels. He has a passion for using fresh, local ingredients to create delicious Belgian dishes that are sure to delight our guests.",
  sub2: "In addition to his expertise in traditional Belgian cuisine, Chef Albert is always experimenting with new flavors and techniques to bring a modern twist to our menu. We are proud to have him as a key member of the Bistro Brussels team.",
  name: " Albert Donat",
  occupation: "executive chef",
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: "1500+ statisfied clients",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "I recently dined at Bistro Brussels and was blown away by the delicious food and friendly service. The moules-frites were the best I've ever had, and the atmosphere was cozy and welcoming. I'll definitely be returning to Bistro Brussels soon!",
      image: Avatar1,
      name: "Rick Thompson",
      occupation: "Tasteful Ventures LLC",
    },
    {
      message:
        "As a Belgian expat, I was thrilled to find a restaurant that serves authentic Belgian food in [city]. Bistro Brussels did not disappoint! The waffles were light and fluffy, and the selection of Belgian beers was impressive. The staff were all so welcoming and made our dinner a truly enjoyable experience. I can't wait to come back and try more items on the menu.",
      image: Avatar2,
      name: "John Doe",
      occupation: "Flavor Fusion Inc",
    },
    {
      message:
        "We came to Bistro Brussels for our anniversary dinner, and it was the perfect choice. The waterzooi was rich and flavorful, and the ambiance was romantic and intimate. The staff went above and beyond to make our evening special, and we left feeling completely satisfied. Thank you, Bistro Brussels!",
      image: Avatar3,
      name: "Henry A.",
      occupation: "Dine-A-Mate Corp",
    },
  ],
};

export const reservationData = {
  title: "booking form",
  subtitle:
    "Call (+32) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.",
  modelImg: ModelBlackImg,
  btnText: "make a reservation",
};

export const newsletterData = {
  title: "join our newsletter",
  subtitle: "Get latest news & updates in your inbox.",
  placeholder: "Subscribe our delicious dishes",
  btnText: "subscribe now",
};

export const footerData = {
  contact: {
    title: "contact location",
    address: "Boulevard Anspach 400, Brussels, 1000",
    phone: "(+32)256-3689",
  },
  hours: {
    title: "working hours",
    program: [
      {
        days: "monday - friday",
        hours: "09:00 AM - 10:00 PM",
      },
      {
        days: "saturday - sunday",
        hours: "09:00 AM - 11:00 PM",
      },
    ],
  },
  social: {
    title: "social network",
    icons: [
      { href: "https://www.youtube.com", icon: <FaYoutube /> },
      { href: "https://www.facebook.com", icon: <FaFacebookF /> },
      { href: "https://www.instagram.com", icon: <FaInstagram /> },
      { href: "https://www.pinterest.com", icon: <FaPinterestP /> },
      { href: "https://www.discord.com", icon: <FaDiscord /> },
    ],
  },
};
