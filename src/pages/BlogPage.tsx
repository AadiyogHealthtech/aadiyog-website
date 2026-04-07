// import { ImageWithFallback } from "../components/figma/ImageWithFallback";
// import { Card } from "../components/ui/card";
// import { Calendar, Clock, User, ArrowRight } from "lucide-react";

// const featuredPost = {
//   title: "The Science Behind AI-Powered Yoga: How Technology Enhances Your Practice",
//   excerpt: "Discover how artificial intelligence is revolutionizing yoga practice with real-time posture correction, personalized recommendations, and data-driven insights.",
//   author: "Dr. Priya Sharma",
//   date: "January 15, 2025",
//   readTime: "8 min read",
//   category: "Technology",
//   image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjkwMDkxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
// };

// const blogPosts = [
//   {
//     title: "5 Morning Yoga Poses to Boost Your Energy",
//     excerpt: "Start your day right with these energizing yoga poses that take less than 10 minutes.",
//     author: "Ananya Patel",
//     date: "January 12, 2025",
//     readTime: "5 min read",
//     category: "Wellness",
//     image: "https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd2VsbG5lc3MlMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2OTA2OTU5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//   },
//   {
//     title: "Understanding the Connection Between Yoga and Mental Health",
//     excerpt: "Explore the profound impact of yoga on mental well-being and stress reduction.",
//     author: "Dr. Rahul Verma",
//     date: "January 10, 2025",
//     readTime: "7 min read",
//     category: "Health",
//     image: "https://images.unsplash.com/photo-1642645550550-c2a442d17e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzY4OTk1NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//   },
//   {
//     title: "Nutrition Tips for Yoga Practitioners",
//     excerpt: "Learn what to eat before and after your yoga practice for optimal performance.",
//     author: "Neha Gupta",
//     date: "January 8, 2025",
//     readTime: "6 min read",
//     category: "Nutrition",
//     image: "https://images.unsplash.com/photo-1758875568758-daad5146648c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBwcm9ncmVzcyUyMHRyYWNraW5nfGVufDF8fHx8MTc2OTA2OTU5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//   },
//   {
//     title: "Building a Sustainable Yoga Practice: Tips for Beginners",
//     excerpt: "Starting your yoga journey? Here's how to build a practice that lasts.",
//     author: "Vikram Singh",
//     date: "January 5, 2025",
//     readTime: "5 min read",
//     category: "Beginners",
//     image: "https://images.unsplash.com/photo-1758798458635-f01402b40919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29tbXVuaXR5JTIwZ3JvdXB8ZW58MXx8fHwxNzY5MDY5NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//   },
//   {
//     title: "Advanced Breathing Techniques for Better Performance",
//     excerpt: "Master pranayama techniques to enhance your yoga practice and overall well-being.",
//     author: "Ananya Patel",
//     date: "January 3, 2025",
//     readTime: "8 min read",
//     category: "Advanced",
//     image: "https://images.unsplash.com/photo-1758875568433-7b8301847439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGNvYWNoaW5nJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY5MDY5NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//   },
//   {
//     title: "How to Stay Motivated on Your Fitness Journey",
//     excerpt: "Practical strategies to maintain consistency and achieve your wellness goals.",
//     author: "Dr. Priya Sharma",
//     date: "January 1, 2025",
//     readTime: "6 min read",
//     category: "Motivation",
//     image: "https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3Njg5ODk3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//   }
// ];

// const categories = ["All", "Wellness", "Technology", "Health", "Nutrition", "Beginners", "Advanced", "Motivation"];

// export function BlogPage() {
//   return (
//     <div className="min-h-screen bg-background pt-20">
//       {/* Hero Section */}
//       <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto">
//             <div className="inline-block mb-4">
//               <span className="text-sm font-medium text-[#f37003] tracking-wide uppercase">
//                 Blog & Insights
//               </span>
//             </div>
//             <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
//               Wellness{" "}
//               <span className="text-[#f37003]">Knowledge Hub</span>
//             </h1>
//             <p className="text-lg text-foreground/60 leading-relaxed">
//               Expert insights, tips, and guides to help you on your wellness journey
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Post */}
//       <section className="py-12 bg-background">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-all bg-white">
//             <div className="grid lg:grid-cols-2 gap-0">
//               {/* Image */}
//               <div className="relative h-[300px] lg:h-auto">
//                 <ImageWithFallback
//                   src={featuredPost.image}
//                   alt={featuredPost.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="inline-block px-3 py-1 rounded-full bg-[#f37003] text-white text-xs font-medium">
//                     Featured
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-8 lg:p-12 flex flex-col justify-center">
//                 <div className="mb-4">
//                   <span className="inline-block px-3 py-1 rounded-full bg-[#f37003]/10 text-[#f37003] text-xs font-medium">
//                     {featuredPost.category}
//                   </span>
//                 </div>

//                 <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
//                   {featuredPost.title}
//                 </h2>

//                 <p className="text-foreground/60 leading-relaxed mb-6">
//                   {featuredPost.excerpt}
//                 </p>

//                 <div className="flex items-center gap-6 text-sm text-foreground/60 mb-6">
//                   <div className="flex items-center gap-2">
//                     <User className="h-4 w-4" />
//                     <span>{featuredPost.author}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Calendar className="h-4 w-4" />
//                     <span>{featuredPost.date}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Clock className="h-4 w-4" />
//                     <span>{featuredPost.readTime}</span>
//                   </div>
//                 </div>

//                 <a
//                   href="#"
//                   className="inline-flex items-center text-[#f37003] font-medium hover:text-[#d86302] transition-colors group"
//                 >
//                   Read full article
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </a>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </section>

//       {/* Categories Filter */}
//       <section className="py-12 bg-background">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex flex-wrap gap-3 justify-center">
//             {categories.map((category, index) => (
//               <button
//                 key={index}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                   index === 0
//                     ? 'bg-[#f37003] text-white'
//                     : 'bg-white border border-border hover:border-[#f37003]/30 text-foreground/70 hover:text-[#f37003]'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Blog Grid */}
//       <section className="py-12 pb-24 lg:pb-32 bg-background">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogPosts.map((post, index) => (
//               <Card
//                 key={index}
//                 className="group overflow-hidden border-border/50 hover:border-[#f37003]/30 hover:shadow-xl transition-all bg-white cursor-pointer"
//               >
//                 {/* Image */}
//                 <div className="relative h-48 overflow-hidden">
//                   <ImageWithFallback
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="inline-block px-3 py-1 rounded-full bg-[#f37003]/90 text-white text-xs font-medium">
//                       {post.category}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-[#f37003] transition-colors">
//                     {post.title}
//                   </h3>

//                   <p className="text-sm text-foreground/60 leading-relaxed mb-4">
//                     {post.excerpt}
//                   </p>

//                   <div className="flex items-center gap-4 text-xs text-foreground/60 mb-4">
//                     <div className="flex items-center gap-1">
//                       <User className="h-3 w-3" />
//                       <span>{post.author}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Clock className="h-3 w-3" />
//                       <span>{post.readTime}</span>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between pt-4 border-t border-border/50">
//                     <span className="text-xs text-foreground/60">{post.date}</span>
//                     <ArrowRight className="h-4 w-4 text-[#f37003] group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>

//           {/* Load More */}
//           <div className="text-center mt-12">
//             <button className="px-8 py-3 rounded-lg border border-border hover:border-[#f37003]/30 text-foreground font-medium transition-colors hover:bg-[#f37003]/5">
//               Load More Articles
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section className="py-24 bg-muted/30">
//         <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
//           <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
//             Stay Updated
//           </h2>
//           <p className="text-lg text-foreground/60 mb-8">
//             Subscribe to our newsletter for the latest wellness tips and insights
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-4 py-3 rounded-lg border border-border focus:border-[#f37003] focus:outline-none focus:ring-2 focus:ring-[#f37003]/20"
//             />
//             <button className="px-6 py-3 rounded-lg bg-[#f37003] hover:bg-[#d86302] text-white font-medium transition-colors whitespace-nowrap">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card } from "../components/ui/card";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const featuredPost = {
  title:
    "The Science Behind AI-Powered Yoga: How Technology Enhances Your Practice",
  excerpt:
    "Discover how artificial intelligence is revolutionizing yoga practice with real-time posture correction, personalized recommendations, and data-driven insights.",
  author: "Dr. Priya Sharma",
  date: "January 15, 2025",
  readTime: "8 min read",
  category: "Technology",
  image:
    "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjkwMDkxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
};

const blogPosts = [
  {
    title: "5 Morning Yoga Poses to Boost Your Energy",
    excerpt:
      "Start your day right with these energizing yoga poses that take less than 10 minutes.",
    author: "Ananya Patel",
    date: "January 12, 2025",
    readTime: "5 min read",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd2VsbG5lc3MlMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2OTA2OTU5MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title:
      "The Science Behind AI-Powered Yoga: How Technology Enhances Your Practice",
    excerpt:
      "Discover how artificial intelligence is revolutionizing yoga practice with real-time posture correction, personalized recommendations, and data-driven insights.",
    author: "Dr. Priya Sharma",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjkwMDkxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Understanding the Connection Between Yoga and Mental Health",
    excerpt:
      "Explore the profound impact of yoga on mental well-being and stress reduction.",
    author: "Dr. Rahul Verma",
    date: "January 10, 2025",
    readTime: "7 min read",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1642645550550-c2a442d17e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzY4OTk1NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Nutrition Tips for Yoga Practitioners",
    excerpt:
      "Learn what to eat before and after your yoga practice for optimal performance.",
    author: "Neha Gupta",
    date: "January 8, 2025",
    readTime: "6 min read",
    category: "Nutrition",
    image:
      "https://images.unsplash.com/photo-1758875568758-daad5146648c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBwcm9ncmVzcyUyMHRyYWNraW5nfGVufDF8fHx8MTc2OTA2OTU5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Building a Sustainable Yoga Practice: Tips for Beginners",
    excerpt:
      "Starting your yoga journey? Here's how to build a practice that lasts.",
    author: "Vikram Singh",
    date: "January 5, 2025",
    readTime: "5 min read",
    category: "Beginners",
    image:
      "https://images.unsplash.com/photo-1758798458635-f01402b40919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29tbXVuaXR5JTIwZ3JvdXB8ZW58MXx8fHwxNzY5MDY5NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Advanced Breathing Techniques for Better Performance",
    excerpt:
      "Master pranayama techniques to enhance your yoga practice and overall well-being.",
    author: "Ananya Patel",
    date: "January 3, 2025",
    readTime: "8 min read",
    category: "Advanced",
    image:
      "https://images.unsplash.com/photo-1758875568433-7b8301847439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGNvYWNoaW5nJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY5MDY5NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "How to Stay Motivated on Your Fitness Journey",
    excerpt:
      "Practical strategies to maintain consistency and achieve your wellness goals.",
    author: "Dr. Priya Sharma",
    date: "January 1, 2025",
    readTime: "6 min read",
    category: "Motivation",
    image:
      "https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3Njg5ODk3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const categories = [
  "All",
  "Wellness",
  "Technology",
  "Health",
  "Nutrition",
  "Beginners",
  "Advanced",
  "Motivation",
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-[#f37003] tracking-wide uppercase">
                Blog & Insights
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Wellness <span className="text-[#f37003]">Knowledge Hub</span>
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Expert insights, tips, and guides to help you on your wellness
              journey
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-all bg-white">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-[300px] lg:h-auto">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#f37003] text-white text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#f37003]/10 text-[#f37003] text-xs font-medium">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-foreground/60 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-foreground/60 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center text-[#f37003] font-medium hover:text-[#d86302] transition-colors group"
                  >
                    Read full article
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </section>
      }

      {/* Categories Filter */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-[#f37003] text-white"
                    : "bg-white border border-border hover:border-[#f37003]/30 text-foreground/70 hover:text-[#f37003]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 pb-24 lg:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-border/50 hover:border-[#f37003]/30 hover:shadow-xl transition-all bg-white cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#f37003]/90 text-white text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-[#f37003] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-foreground/60 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-xs text-foreground/60">
                        {post.date}
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#f37003] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="text-center py-24">
              <div className="text-5xl mb-4">🧘</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No articles yet
              </h3>
              <p className="text-foreground/50 mb-6">
                No posts found in the{" "}
                <span className="text-[#f37003] font-medium">
                  {activeCategory}
                </span>{" "}
                category.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="px-6 py-2 rounded-full bg-[#f37003] text-white text-sm font-medium hover:bg-[#d86302] transition-colors"
              >
                View all articles
              </button>
            </div>
          )}

          {/* Load More — only show when "All" is selected or there are multiple results */}
          {filteredPosts.length > 3 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 rounded-lg border border-border hover:border-[#f37003]/30 text-foreground font-medium transition-colors hover:bg-[#f37003]/5">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Subscribe to our newsletter for the latest wellness tips and
            insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border focus:border-[#f37003] focus:outline-none focus:ring-2 focus:ring-[#f37003]/20"
            />
            <button className="px-6 py-3 rounded-lg bg-[#f37003] hover:bg-[#d86302] text-white font-medium transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
