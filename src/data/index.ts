
// Demo data for the Om Electricals website

// Categories
export const categories = [
  {
    id: "lighting",
    name: "Lighting",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1000",
    productCount: 48
  },
  {
    id: "switches",
    name: "Switches & Sockets",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000",
    productCount: 32
  },
  {
    id: "breakers",
    name: "Circuit Breakers",
    image: "https://images.unsplash.com/photo-1616626625323-af604c3d90ff?auto=format&fit=crop&q=80&w=1000",
    productCount: 24
  },
  {
    id: "wires",
    name: "Wires & Cables",
    image: "https://images.unsplash.com/photo-1601829534265-dc81ca888b63?auto=format&fit=crop&q=80&w=1000",
    productCount: 18
  },
  {
    id: "smart-home",
    name: "Smart Home Devices",
    image: "https://images.unsplash.com/photo-1558002038-a8a6d95cf2fb?auto=format&fit=crop&q=80&w=1000",
    productCount: 15
  }
];

// Brands
export const brands = [
  {
    id: "havells",
    name: "Havells",
    logo: "https://cdn.pixabay.com/photo/2022/05/26/08/41/havells-7222553_1280.png",
    description: "Leading electrical equipment manufacturer known for high-quality switches, fans, and appliances."
  },
  {
    id: "crompton",
    name: "Crompton",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Crompton_Greaves_Logo.svg/2048px-Crompton_Greaves_Logo.svg.png",
    description: "A century-old brand offering reliable electrical solutions including fans, lighting and pumps."
  },
  {
    id: "philips",
    name: "Philips",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Philips_logo_new.svg/2560px-Philips_logo_new.svg.png",
    description: "Global leader in lighting technology and smart home solutions with energy-efficient products."
  },
  {
    id: "anchor",
    name: "Anchor by Panasonic",
    logo: "https://seeklogo.com/images/P/panasonic-logo-42B39BE9FE-seeklogo.com.png",
    description: "Premium switches, sockets and electrical accessories with Japanese technology and design."
  },
  {
    id: "legrand",
    name: "Legrand",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Legrand_logo.svg/2560px-Legrand_logo.svg.png",
    description: "Specializing in electrical and digital infrastructure offering innovative wiring devices."
  },
  {
    id: "schneider",
    name: "Schneider Electric",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Schneider_Electric_logo.svg/2560px-Schneider_Electric_logo.svg.png",
    description: "Global specialist in energy management and automation with sustainable solutions."
  }
];

// Sample Products
export const products = [
  {
    id: "led-bulb-1",
    name: "Ultra Bright LED Bulb - 9W",
    price: 299,
    salePrice: 249,
    isOnSale: true,
    image: "https://images.unsplash.com/photo-1504284401809-041df42a355a?auto=format&fit=crop&q=80&w=500",
    category: "lighting",
    brand: "philips",
    rating: 4.8,
    isFeatured: true
  },
  {
    id: "smart-switch-1",
    name: "WiFi Smart Switch Panel",
    price: 2499,
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&q=80&w=500",
    category: "switches",
    brand: "legrand",
    rating: 4.6,
    isFeatured: true
  },
  {
    id: "circuit-breaker-1",
    name: "40A Double Pole MCB",
    price: 599,
    image: "https://images.unsplash.com/photo-1616626625323-af604c3d90ff?auto=format&fit=crop&q=80&w=500",
    category: "breakers",
    brand: "havells",
    rating: 4.7
  },
  {
    id: "copper-wire-1",
    name: "Flame Retardant Copper Wire - 1.5 sq mm",
    price: 1850,
    salePrice: 1699,
    isOnSale: true,
    image: "https://images.unsplash.com/photo-1601829534265-dc81ca888b63?auto=format&fit=crop&q=80&w=500",
    category: "wires",
    brand: "havells",
    rating: 4.9
  },
  {
    id: "smart-doorbell-1",
    name: "Smart Video Doorbell",
    price: 5999,
    image: "https://images.unsplash.com/photo-1558002038-a8a6d95cf2fb?auto=format&fit=crop&q=80&w=500",
    category: "smart-home",
    brand: "schneider",
    rating: 4.4,
    isFeatured: true
  },
  {
    id: "led-panel-1",
    name: "LED Panel Light - 24W Square",
    price: 899,
    image: "https://images.unsplash.com/photo-1611323259592-c27c747199c0?auto=format&fit=crop&q=80&w=500",
    category: "lighting",
    brand: "crompton",
    rating: 4.5
  },
  {
    id: "socket-outlet-1",
    name: "Modular 6A Socket Outlet - Pack of 5",
    price: 499,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=500",
    category: "switches",
    brand: "anchor",
    rating: 4.3
  },
  {
    id: "inverter-1",
    name: "1100VA Home Inverter with Battery",
    price: 14999,
    salePrice: 12999,
    isOnSale: true,
    image: "https://media.istockphoto.com/id/1397778674/photo/hybrid-solar-inverter.jpg?s=1024x1024&w=is&k=20&c=c6QpDMDC19R5O9DkvbReJYQcy6TD887e65JMS5v9pDg=",
    category: "smart-home",
    brand: "luminous",
    rating: 4.7,
    isFeatured: true
  }
];

// Testimonials
export const testimonials = [
  {
    id: "1",
    name: "Raj Sharma",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Homeowner",
    content: "I've been purchasing all my electrical supplies from Om Electricals for the last 3 years. Their product quality and customer service is unmatched!"
  },
  {
    id: "2",
    name: "Priya Patel",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "Interior Designer",
    content: "As an interior designer, I always recommend Om Electricals to my clients. Their range of decorative lighting options is simply amazing."
  },
  {
    id: "3",
    name: "Vikram Singh",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    role: "Electrical Contractor",
    content: "For bulk orders and project supplies, Om Electricals has been my go-to shop. Their prompt delivery and competitive pricing help me complete projects on time."
  }
];

// Team Members
export const team = [
  {
    id: "1",
    name: "Om Prakash Sharma",
    role: "Founder & CEO",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    bio: "Started Om Electricals in 1995 with a small shop, now serving thousands of customers across the region."
  },
  {
    id: "2",
    name: "Rohit Sharma",
    role: "Technical Director",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    bio: "Electrical engineering expert ensuring all products meet safety standards and technical specifications."
  },
  {
    id: "3",
    name: "Anjali Verma",
    role: "Customer Relations Manager",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    bio: "Dedicated to providing exceptional customer service and support for all client needs."
  }
];

// Stats for About Us page
export const stats = [
  {
    label: "Years in Business",
    value: 28
  },
  {
    label: "Products Available",
    value: 2500
  },
  {
    label: "Happy Customers",
    value: 15000
  },
  {
    label: "Brands Partnered",
    value: 45
  }
];

// User roles
export const USER_ROLES = {
  CUSTOMER: "customer",
  ADMIN: "admin"
};
