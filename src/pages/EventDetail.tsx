
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, MapPin, Users, Star, Heart, Share2, Ticket, Music, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();

  // Mock event data - in real app this would be fetched based on ID
  const event = {
    id: '1',
    title: 'Symphony Under the Stars',
    category: 'Music',
    date: 'December 15, 2024',
    time: '8:00 PM',
    venue: 'Grand Amphitheater',
    duration: '2 hours 30 minutes',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ],
    description: `Experience the magic of classical music under a canopy of stars with our world-renowned orchestra. This extraordinary evening features masterpieces from Beethoven, Mozart, and contemporary composers, performed in our stunning outdoor amphitheater.

    Join us for an unforgettable night where the beauty of classical music meets the wonder of the night sky. Our orchestra, led by internationally acclaimed conductor Marina Volkov, will take you on a journey through some of the most beloved pieces in classical repertoire.

    The evening begins with Mozart's sublime Piano Concerto No. 21, featuring the extraordinary pianist David Chen. After a brief intermission with complimentary refreshments, we'll present Beethoven's powerful Symphony No. 9, complete with our festival chorus performing the iconic "Ode to Joy."

    The natural acoustics of our amphitheater, combined with state-of-the-art sound technology, ensure every note reaches you with crystal clarity. As darkness falls, the stars above create a magical backdrop for this musical journey.`,
    
    performers: [
      { name: 'Marina Volkov', role: 'Conductor', bio: 'Grammy-winning conductor with 20+ years of experience' },
      { name: 'David Chen', role: 'Piano Soloist', bio: 'International virtuoso, winner of Van Cliburn Competition' },
      { name: 'Festival Symphony Orchestra', role: 'Orchestra', bio: '80-piece orchestra featuring world-class musicians' },
      { name: 'Festival Chorus', role: 'Choir', bio: 'Professional choir specializing in classical repertoire' }
    ],
    
    program: [
      { piece: 'Mozart Piano Concerto No. 21 in C major', duration: '35 minutes' },
      { piece: 'Intermission', duration: '20 minutes' },
      { piece: 'Beethoven Symphony No. 9 in D minor "Choral"', duration: '75 minutes' }
    ],
    
    ticketTypes: [
      { type: 'General Admission', price: 75, description: 'Open seating in main section', available: 500 },
      { type: 'VIP', price: 150, description: 'Premium seating, pre-show reception, complimentary drinks', available: 50 },
      { type: 'Premium', price: 200, description: 'Front section seating, meet & greet with artists, exclusive merchandise', available: 25 }
    ],
    
    venue: {
      name: 'Grand Amphitheater',
      address: '123 Festival Avenue, Arts District, CA 90028',
      capacity: '2,000 seats',
      description: 'Our flagship outdoor venue featuring natural acoustics and stunning city views',
      amenities: ['Accessible seating', 'Parking available', 'Food & beverage service', 'Gift shop']
    },
    
    rating: 4.8,
    reviews: 247,
    tags: ['Classical', 'Orchestra', 'Outdoor', 'Family-friendly'],
    ageRecommendation: 'All ages welcome'
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Music': 'bg-pink-500',
      'Theater': 'bg-purple-500',
      'Comedy': 'bg-yellow-500',
      'Dance': 'bg-green-500',
      'Art': 'bg-blue-500',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <Badge className={`mb-4 ${getCategoryColor(event.category)} text-white border-0`}>
                  {event.category}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {event.title}
                </h1>
                <div className="flex items-center text-white/90 space-x-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {event.venue.name}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
                  <Heart className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Info */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <span className="font-semibold">{event.rating}</span>
                      <span className="text-gray-500 ml-1">({event.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-1" />
                      {event.venue.capacity}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {event.description}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Program */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Music className="h-6 w-6 mr-2" />
                  Program
                </h3>
                <div className="space-y-4">
                  {event.program.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <span className="font-medium">{item.piece}</span>
                      <span className="text-gray-500">{item.duration}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performers */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  Featured Artists
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.performers.map((performer, index) => (
                    <div key={index} className="border-l-4 border-festival-primary pl-4">
                      <h4 className="font-semibold text-lg">{performer.name}</h4>
                      <p className="text-festival-primary font-medium mb-2">{performer.role}</p>
                      <p className="text-gray-600 text-sm">{performer.bio}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-2" />
                  Venue Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">{event.venue.name}</h4>
                    <p className="text-gray-600">{event.venue.address}</p>
                  </div>
                  <p className="text-gray-600">{event.venue.description}</p>
                  
                  <div>
                    <h5 className="font-medium mb-2">Amenities</h5>
                    <div className="flex flex-wrap gap-2">
                      {event.venue.amenities.map((amenity) => (
                        <Badge key={amenity} variant="outline">{amenity}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {event.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${event.title} gallery ${index + 1}`}
                      className="rounded-lg aspect-video object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ticket Booking */}
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Ticket className="h-5 w-5 mr-2" />
                  Select Tickets
                </h3>
                
                <div className="space-y-4 mb-6">
                  {event.ticketTypes.map((ticket) => (
                    <div key={ticket.type} className="border rounded-lg p-4 hover:border-festival-primary transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{ticket.type}</h4>
                          <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>
                          <p className="text-sm text-gray-500">{ticket.available} available</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-festival-primary">${ticket.price}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="mb-6" />

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Duration:</span>
                    <span>{event.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Age Recommendation:</span>
                    <span>{event.ageRecommendation}</span>
                  </div>
                </div>

                <Link to="/ticketing" className="block mt-6">
                  <Button className="w-full bg-festival-primary hover:bg-festival-primary/90 text-white py-3">
                    <Ticket className="h-5 w-5 mr-2" />
                    Buy Tickets
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Event Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-3 text-festival-primary" />
                    <div>
                      <span className="font-medium">Date & Time</span>
                      <p className="text-gray-600">{event.date} at {event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-3 text-festival-primary" />
                    <div>
                      <span className="font-medium">Venue</span>
                      <p className="text-gray-600">{event.venue.name}</p>
                      <p className="text-gray-500 text-xs">{event.venue.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-3 text-festival-primary" />
                    <div>
                      <span className="font-medium">Capacity</span>
                      <p className="text-gray-600">{event.venue.capacity}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
