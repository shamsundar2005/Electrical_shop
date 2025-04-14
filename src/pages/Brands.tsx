
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import AnimatedSection from "@/components/ui/animated-section";
import BrandCard, { Brand } from "@/components/ui/brand-card";

// Mock brands data
const brands: Brand[] = [
  {
    id: "havells",
    name: "Havells",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "Leading Indian electrical equipment manufacturer with a wide range of products including fans, lights, switches, and home appliances."
  },
  {
    id: "philips",
    name: "Philips",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "Global leader in lighting solutions, from conventional bulbs to smart LED lighting systems for homes and businesses."
  },
  {
    id: "crompton",
    name: "Crompton",
    logo: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "One of India's oldest and most trusted electrical brands, known for fans, lights, pumps, and appliances."
  },
  {
    id: "legrand",
    name: "Legrand",
    logo: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "Premium French brand specializing in electrical and digital infrastructure, offering high-end switches, sockets, and home automation."
  },
  {
    id: "anchor",
    name: "Anchor by Panasonic",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "A Panasonic company offering affordable switches, sockets, fans, and lighting solutions for the Indian market."
  },
  {
    id: "bajaj",
    name: "Bajaj Electricals",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "A trusted Indian brand with a diverse range of consumer electrical products including fans, lighting, appliances, and more."
  }
];

const Brands = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <AnimatedSection>
          <SectionHeading
            title="Our Partner Brands"
            subtitle="We partner with leading electrical brands to bring you quality products"
          />
        </AnimatedSection>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {brands.map((brand) => (
            <BrandCard 
              key={brand.id} 
              brand={brand}
            />
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Brands;
