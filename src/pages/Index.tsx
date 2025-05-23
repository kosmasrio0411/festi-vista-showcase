
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import EventCard from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Calendar, Award } from 'lucide-react';

const Index = () => {
  const featuredEvents = [
    {
      id: '1',
      title: 'Symphony Under the Stars',
      category: 'Music',
      date: 'Dec 15, 2024',
      time: '8:00 PM',
      venue: 'Grand Amphitheater',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '75',
      capacity: '2000',
      description: 'Experience the magic of classical music under a canopy of stars with our world-renowned orchestra.'
    },
    {
      id: '2',
      title: 'Comedy Night Extravaganza',
      category: 'Comedy',
      date: 'Dec 18, 2024',
      time: '7:30 PM',
      venue: 'Festival Comedy Club',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '45',
      capacity: '500',
      description: 'Get ready for a night of non-stop laughter with top comedians from around the world.'
    },
    {
      id: '3',
      title: 'Modern Dance Spectacular',
      category: 'Dance',
      date: 'Dec 20, 2024',
      time: '7:00 PM',
      venue: 'Cultural Center Stage',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '60',
      capacity: '800',
      description: 'A breathtaking fusion of contemporary dance styles that will leave you mesmerized.'
    }
  ];

  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Visitors' },
    { icon: Calendar, value: '200+', label: 'Annual Events' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
    { icon: Award, value: '25+', label: 'Years of Excellence' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-festival-primary/10 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-festival-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CategorySection />
      
      {/* Featured Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss these extraordinary performances handpicked by our curators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/events">
              <Button size="lg" className="bg-festival-primary hover:bg-festival-primary/90 px-8 py-4">
                View All Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-festival-primary to-festival-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get the latest updates on upcoming events and exclusive early access to tickets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-festival-accent"
            />
            <Button className="bg-festival-accent hover:bg-festival-accent/90 text-festival-dark font-semibold px-8 py-3 rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-festival-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-festival-accent to-yellow-300 bg-clip-text text-transparent">
                FestiVista
              </h3>
              <p className="text-gray-300">
                Bringing world-class arts and culture to your doorstep since 1999.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/events" className="hover:text-festival-accent transition-colors">Events</Link></li>
                <li><Link to="/ticketing" className="hover:text-festival-accent transition-colors">Tickets</Link></li>
                <li><Link to="/about" className="hover:text-festival-accent transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/events?category=music" className="hover:text-festival-accent transition-colors">Music</Link></li>
                <li><Link to="/events?category=theater" className="hover:text-festival-accent transition-colors">Theater</Link></li>
                <li><Link to="/events?category=comedy" className="hover:text-festival-accent transition-colors">Comedy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">
                123 Festival Avenue<br />
                Arts District, CA 90028<br />
                info@festivista.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 FestiVista. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
