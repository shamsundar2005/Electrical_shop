import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import AnimatedSection from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient"; // adjust path as needed
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  User, 
  Heart, 
  ShoppingBag, 
  Clock,
  Eye,
  XCircle,
  Settings,
  LogOut
} from "lucide-react";

// Mock data for customer dashboard
const recentlyViewed = [
  { id: 1, name: 'LED Bulb 9W', category: 'Lighting', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&w=200&q=80', price: 249 },
  { id: 2, name: 'Smart Switch', category: 'Switches', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&w=200&q=80', price: 599 },
  { id: 3, name: 'Copper Wire 1.5mm', category: 'Wires', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&w=200&q=80', price: 1299 },
];

interface UserInfo {
  full_name: string;
  email: string;
  phone?: string;
  address?: string;
  joined_at?: string;
}

const wishlistItems = [
  { id: 4, name: 'Smart Home Hub', category: 'Smart Home', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&w=200&q=80', price: 2499 },
  { id: 5, name: 'Ceiling Fan', category: 'Fans', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&w=200&q=80', price: 1899 },
];

const inquiryHistory = [
  { id: 1, subject: 'Smart Home Installation Query', date: '2023-05-15', status: 'Responded' },
  { id: 2, subject: 'Product Availability Check', date: '2023-04-28', status: 'Closed' },
];

const CustomerDashboard = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (user && user.id) {
        const { data, error } = await supabase
          .from("profiles")
          .select("full_name, email, phone, address, joined_at")
          .eq("id", user.id)
          .single();

        if (data) {
          setUserInfo(data);
        }

        if (error) {
          console.error("Error fetching profile data:", error.message);
        }
      } else if (userError) {
        console.error("Error fetching user:", userError.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-electric-blue-dark">My Account</h1>
            <p className="text-gray-600">Welcome back, {userInfo?.full_name || "Guest"}</p>
          </motion.div>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Account Settings
            </Button>
            <Button variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="viewed">Recently Viewed</TabsTrigger>
            <TabsTrigger value="inquiries">My Inquiries</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                      <User className="h-12 w-12 text-gray-500" />
                    </div>
                    <h3 className="text-xl font-bold">{userInfo?.full_name || "Guest"}</h3>
                    <p className="text-gray-600">Customer since May 2022</p>
                    
                    <div className="mt-6 space-y-2 text-left">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span>{userInfo?.email || "N/A"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phone:</span>
                        <span>{userInfo?.phone || "N/A"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Address:</span>
                        <span className="text-right">{userInfo?.address || "N/A"}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Edit Profile
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Account Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Heart className="h-8 w-8 mx-auto mb-2 text-red-500" />
                        <h4 className="text-2xl font-bold">{wishlistItems.length}</h4>
                        <p className="text-gray-600">Wishlist Items</p>
                      </div>
                      
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <ShoppingBag className="h-8 w-8 mx-auto mb-2 text-green-500" />
                        <h4 className="text-2xl font-bold">8</h4>
                        <p className="text-gray-600">Orders Placed</p>
                      </div>
                      
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Clock className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                        <h4 className="text-2xl font-bold">{recentlyViewed.length}</h4>
                        <p className="text-gray-600">Recently Viewed</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold">Recent Activity</h3>
                      
                      <div className="border-l-4 border-electric-blue pl-4 py-2">
                        <h4 className="font-medium">Added 2 items to wishlist</h4>
                        <p className="text-sm text-gray-600">Yesterday at 2:30 PM</p>
                      </div>
                      
                      <div className="border-l-4 border-electric-blue pl-4 py-2">
                        <h4 className="font-medium">Viewed Smart Switch product</h4>
                        <p className="text-sm text-gray-600">2 days ago at 11:15 AM</p>
                      </div>
                      
                      <div className="border-l-4 border-electric-blue pl-4 py-2">
                        <h4 className="font-medium">Sent inquiry about Smart Home Installation</h4>
                        <p className="text-sm text-gray-600">1 week ago at 4:45 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </TabsContent>
          
          <TabsContent value="wishlist">
            <Card>
              <CardHeader>
                <CardTitle>My Wishlist</CardTitle>
                <CardDescription>Products you've saved for later</CardDescription>
              </CardHeader>
              <CardContent>
                {wishlistItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden relative group">
                        <button className="absolute top-2 right-2 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <XCircle className="h-5 w-5 text-red-500" />
                        </button>
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.category}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="font-bold">₹{item.price}</span>
                            <Button size="sm">Add to Cart</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Heart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
                    <p className="text-gray-600 mb-4">Browse our products and add items to your wishlist</p>
                    <Button>Browse Products</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="viewed">
            <Card>
              <CardHeader>
                <CardTitle>Recently Viewed Products</CardTitle>
                <CardDescription>Products you've viewed recently</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recentlyViewed.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="relative h-48">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        <div className="absolute top-0 right-0 bg-black/70 text-white text-xs px-2 py-1 rounded-bl-lg">
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            <span>Viewed 2d ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.category}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-bold">₹{product.price}</span>
                          <Button size="sm" variant="outline">
                            <Heart className="h-4 w-4 mr-1" />
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="inquiries">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>My Inquiries</CardTitle>
                  <Button>New Inquiry</Button>
                </div>
                <CardDescription>Your past inquiries and messages</CardDescription>
              </CardHeader>
              <CardContent>
                {inquiryHistory.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inquiryHistory.map((inquiry) => (
                        <TableRow key={inquiry.id}>
                          <TableCell className="font-medium">{inquiry.subject}</TableCell>
                          <TableCell>{inquiry.date}</TableCell>
                          <TableCell>
                            <Badge 
                              variant="outline" 
                              className={inquiry.status === 'Responded' ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700'}
                            >
                              {inquiry.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">View</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600">You haven't made any inquiries yet.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CustomerDashboard;