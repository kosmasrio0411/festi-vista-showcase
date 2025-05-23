
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import EventCard from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

const Events = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('date');

  const allEvents = [
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
    },
    {
      id: '4',
      title: 'Shakespeare in the Park',
      category: 'Theater',
      date: 'Dec 22, 2024',
      time: '6:30 PM',
      venue: 'Riverside Park Stage',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '35',
      capacity: '600',
      description: 'Classic Shakespeare performed in a beautiful outdoor setting with professional actors.'
    },
    {
      id: '5',
      title: 'Jazz & Blues Night',
      category: 'Music',
      date: 'Dec 25, 2024',
      time: '8:30 PM',
      venue: 'Blue Note Hall',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '55',
      capacity: '300',
      description: 'Smooth jazz and soulful blues from legendary artists in an intimate setting.'
    },
    {
      id: '6',
      title: 'Contemporary Art Exhibition',
      category: 'Art',
      date: 'Dec 28, 2024',
      time: '10:00 AM',
      venue: 'Modern Art Gallery',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '25',
      capacity: '200',
      description: 'Explore cutting-edge contemporary art from emerging and established artists.'
    }
  ];

  const categories = ['all', 'Music', 'Theater', 'Comedy', 'Dance', 'Art'];

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-festival-primary to-festival-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All Events
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover amazing performances and cultural experiences happening at our festival
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full"
              />
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5 text-gray-400" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="title">Title</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or browse all categories
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              variant="outline"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
