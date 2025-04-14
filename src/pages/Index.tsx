
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import AnimatedSection from "@/components/ui/animated-section";
import AnimatedText from "@/components/ui/animated-text";
import ProductCard from "@/components/ui/product-card";
import BrandCard from "@/components/ui/brand-card";
import CategoryCard from "@/components/ui/category-card";
import { Button } from "@/components/ui/button";
import { products, categories, brands, testimonials } from "@/data";

// Featured products - just take first 4
const featuredProducts = products.filter(product => product.isFeatured).slice(0, 4);
// Featured categories - take first 5
const featuredCategories = categories.slice(0, 5);
// Featured brands - take first 3
const featuredBrands = brands.slice(0, 3);

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-electric-blue to-electric-blue-dark text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-electric-yellow/20 rounded-full -top-20 -right-20 blur-3xl"></div>
          <div className="absolute w-96 h-96 bg-electric-blue-light/20 rounded-full -bottom-20 -left-20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <AnimatedText text="Powering Homes," />
                  <br />
                  <AnimatedText 
                    text="Brightening Lives" 
                    className="text-electric-yellow" 
                    delayOffset={0.5} 
                  />
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-lg md:text-xl mb-8 text-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Premium electrical products for modern homes and businesses. Quality, safety, and innovation in every connection.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link to="/products">
                  <Button className="bg-white text-electric-blue hover:bg-gray-100">
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/categories">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Explore Categories
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-t-4 border-l-2 border-r-2 border-electric-yellow opacity-30"
                ></motion.div>
                <img 
                  src="https://images.unsplash.com/photo-1504284401809-041df42a355a?auto=format&fit=crop&q=80&w=800"
                  alt="Illuminating Bulb" 
                  className="rounded-lg z-10 relative animate-float shadow-2xl"
                />
                <motion.div
                  animate={{ 
                    boxShadow: ["0 0 15px rgba(251, 191, 36, 0.5)", "0 0 30px rgba(251, 191, 36, 0.8)", "0 0 15px rgba(251, 191, 36, 0.5)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-lg"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Shop by Category" 
            subtitle="Explore our wide range of electrical products by category"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/categories">
              <Button className="bg-electric-blue hover:bg-electric-blue-dark">
                View All Categories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Products" 
            subtitle="Our hand-picked selection of premium electrical products"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/products">
              <Button className="bg-electric-blue hover:bg-electric-blue-dark">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-electric-blue text-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose Us" 
            subtitle="We stand apart with our commitment to quality and service excellence"
            titleClassName="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <AnimatedSection delay={0.1} className="bg-white/10 backdrop-blur p-8 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-electric-yellow rounded-full mb-6">
                  <Lightbulb className="h-8 w-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Quality Products</h3>
                <p className="text-gray-200">
                  We source only the highest quality electrical products from trusted brands and manufacturers
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="bg-white/10 backdrop-blur p-8 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-electric-yellow rounded-full mb-6">
                  <Zap className="h-8 w-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Advice</h3>
                <p className="text-gray-200">
                  Our team of electrical experts is always ready to assist with your product selection
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5} className="bg-white/10 backdrop-blur p-8 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-electric-yellow rounded-full mb-6">
                  <Sparkles className="h-8 w-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Reliable Service</h3>
                <p className="text-gray-200">
                  Prompt delivery, reliable after-sales support, and customer satisfaction guaranteed
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Trusted Brands" 
            subtitle="We partner with leading electrical brands to bring you the best products"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/brands">
              <Button className="bg-electric-blue hover:bg-electric-blue-dark">
                View All Brands
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Customers Say" 
            subtitle="Don't just take our word for it - hear from our satisfied customers"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.2} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.304 0.463989C5.068 4.00399 0.532 10.83 0.532 19.284C0.532 26.504 5.852 31.824 13.072 31.824C19.9 31.824 25.22 26.504 25.22 19.676C25.22 13.996 21.288 9.28399 16.36 8.10799C18.32 4.39599 22.252 1.63999 26.976 0.855989L22.644 0.0719888C19.12 0.855989 14.584 4.00399 11.304 0.463989ZM26.584 0.463989C20.348 4.00399 15.812 10.83 15.812 19.284C15.812 26.504 21.132 31.824 28.352 31.824C35.18 31.824 40.5 26.504 40.5 19.676C40.5 13.996 36.568 9.28399 31.64 8.10799C33.6 4.39599 37.532 1.63999 42.256 0.855989L37.924 0.0719888C34.4 0.855989 29.864 4.00399 26.584 0.463989Z" fill="#FBBF24"/>
                    </svg>
                  </div>
                  
                  <p className="text-gray-600 flex-grow">{testimonial.content}</p>
                  
                  <div className="flex items-center mt-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-electric-yellow-dark">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Light Up Your Space?</h2>
            <p className="text-lg text-white/90 mb-8">
              Visit our store or shop online for the best electrical products at competitive prices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products">
                <Button className="bg-white text-electric-blue-dark hover:bg-gray-100">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
