
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  price: string;
  capacity: string;
  description: string;
}

const EventCard = ({ 
  id, 
  title, 
  category, 
  date, 
  time, 
  venue, 
  image, 
  price, 
  capacity, 
  description 
}: EventCardProps) => {
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
    <Card className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <Badge className={`absolute top-4 left-4 ${getCategoryColor(category)} text-white border-0`}>
          {category}
        </Badge>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
        </div>
      </div>
      
      <CardContent className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2 text-festival-primary" />
            {date}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-2 text-festival-primary" />
            {time}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2 text-festival-primary" />
            {venue}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-2 text-festival-primary" />
            {capacity} capacity
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-festival-primary">${price}</span>
            <span className="text-sm text-gray-500 ml-1">/ person</span>
          </div>
          <div className="space-x-2">
            <Link to={`/event/${id}`}>
              <Button variant="outline" size="sm">
                Details
              </Button>
            </Link>
            <Link to="/ticketing">
              <Button size="sm" className="bg-festival-primary hover:bg-festival-primary/90">
                Buy Ticket
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
