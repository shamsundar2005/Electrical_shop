
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import AnimatedSection from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

// Mock product data structure
interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  inStock: boolean;
}

// Mock products data
const productsData: Product[] = [
  {
    id: "prod-1",
    name: "LED Bulb 9W",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80",
    category: "lighting",
    brand: "Philips",
    price: 249,
    rating: 4.5,
    inStock: true
  },
  {
    id: "prod-2",
    name: "Smart Switch",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80",
    category: "switches",
    brand: "Havells",
    price: 599,
    rating: 4.2,
    inStock: true
  },
  {
    id: "prod-3",
    name: "MCB Circuit Breaker",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80",
    category: "circuit-breakers",
    brand: "Legrand",
    price: 349,
    rating: 4.0,
    inStock: false
  },
  {
    id: "prod-4",
    name: "Copper Wire 1.5mm",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80",
    category: "wires-cables",
    brand: "Finolex",
    price: 1299,
    rating: 4.8,
    inStock: true
  }
];

const Products = () => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 2000]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <AnimatedSection>
          <SectionHeading
            title="Browse Our Products"
            subtitle="Quality electrical products for all your needs"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          {/* Filters */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            
            <div className="space-y-6">
              {/* Search */}
              <div>
                <Label htmlFor="search">Search</Label>
                <Input
                  id="search"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              {/* Category Filter */}
              <div>
                <Label htmlFor="category">Category</Label>
                <Select 
                  value={selectedCategory} 
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger id="category" className="mt-1">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-categories">All Categories</SelectItem>
                    <SelectItem value="lighting">Lighting</SelectItem>
                    <SelectItem value="switches">Switches & Sockets</SelectItem>
                    <SelectItem value="circuit-breakers">Circuit Breakers</SelectItem>
                    <SelectItem value="wires-cables">Wires & Cables</SelectItem>
                    <SelectItem value="smart-home">Smart Home</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Brand Filter */}
              <div>
                <Label htmlFor="brand">Brand</Label>
                <Select 
                  value={selectedBrand} 
                  onValueChange={setSelectedBrand}
                >
                  <SelectTrigger id="brand" className="mt-1">
                    <SelectValue placeholder="All Brands" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-brands">All Brands</SelectItem>
                    <SelectItem value="Philips">Philips</SelectItem>
                    <SelectItem value="Havells">Havells</SelectItem>
                    <SelectItem value="Crompton">Crompton</SelectItem>
                    <SelectItem value="Legrand">Legrand</SelectItem>
                    <SelectItem value="Anchor">Anchor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Price Range */}
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Price Range</Label>
                  <span className="text-sm">
                    ₹{priceRange[0]} - ₹{priceRange[1]}
                  </span>
                </div>
                <Slider
                  defaultValue={[0, 2000]}
                  max={5000}
                  step={100}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-2"
                />
              </div>
              
              {/* Apply Filters Button */}
              <Button className="w-full mt-4">
                Apply Filters
              </Button>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsData.map((product) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <p className="font-bold">₹{product.price}</p>
                      <p className="text-sm text-gray-600">{product.brand}</p>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-amber-500">★</span>
                        <span className="text-sm ml-1">{product.rating}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                    <Button className="w-full mt-3" variant="outline">
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
