
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Ticket, Heart, Settings, Calendar, MapPin, Download, Star } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const userProfile = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'Los Angeles, CA',
    memberSince: 'January 2022',
    totalEvents: 47,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9c0e1d3?w=150&h=150&fit=crop&crop=face'
  };

  const purchasedTickets = [
    {
      id: '1',
      event: 'Symphony Under the Stars',
      date: 'Dec 15, 2024',
      time: '8:00 PM',
      venue: 'Grand Amphitheater',
      ticketType: 'VIP',
      quantity: 2,
      total: 300,
      status: 'confirmed'
    },
    {
      id: '2',
      event: 'Comedy Night Extravaganza',
      date: 'Dec 18, 2024',
      time: '7:30 PM',
      venue: 'Festival Comedy Club',
      ticketType: 'Standard',
      quantity: 1,
      total: 45,
      status: 'confirmed'
    },
    {
      id: '3',
      event: 'Jazz & Blues Night',
      date: 'Nov 20, 2024',
      time: '8:30 PM',
      venue: 'Blue Note Hall',
      ticketType: 'Premium',
      quantity: 2,
      total: 120,
      status: 'attended'
    }
  ];

  const favoriteEvents = [
    {
      id: '1',
      title: 'Modern Dance Spectacular',
      date: 'Dec 20, 2024',
      venue: 'Cultural Center Stage',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop'
    },
    {
      id: '2',
      title: 'Shakespeare in the Park',
      date: 'Dec 22, 2024',
      venue: 'Riverside Park Stage',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=300&h=200&fit=crop'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      confirmed: { label: 'Confirmed', variant: 'default' as const, color: 'bg-green-500' },
      attended: { label: 'Attended', variant: 'secondary' as const, color: 'bg-blue-500' },
      cancelled: { label: 'Cancelled', variant: 'destructive' as const, color: 'bg-red-500' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.confirmed;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-festival-primary to-festival-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
              <AvatarFallback className="text-2xl">SJ</AvatarFallback>
            </Avatar>
            <div className="text-white">
              <h1 className="text-3xl font-bold">{userProfile.name}</h1>
              <p className="text-gray-200 mt-1">Festival enthusiast since {userProfile.memberSince}</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center">
                  <Ticket className="h-4 w-4 mr-1" />
                  <span className="text-sm">{userProfile.totalEvents} events attended</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{userProfile.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="tickets" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tickets" className="flex items-center">
              <Ticket className="h-4 w-4 mr-2" />
              My Tickets
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center">
              <Heart className="h-4 w-4 mr-2" />
              Favorites
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* My Tickets */}
          <TabsContent value="tickets" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {purchasedTickets.map((ticket) => (
                    <Card key={ticket.id} className="bg-gray-50">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-semibold">{ticket.event}</h3>
                              {getStatusBadge(ticket.status)}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                {ticket.date} at {ticket.time}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                {ticket.venue}
                              </div>
                              <div className="flex items-center">
                                <Ticket className="h-4 w-4 mr-2" />
                                {ticket.quantity}x {ticket.ticketType}
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xl font-bold text-festival-primary">
                                ${ticket.total}
                              </span>
                              <div className="flex space-x-2">
                                {ticket.status === 'confirmed' && (
                                  <>
                                    <Button variant="outline" size="sm">
                                      <Download className="h-4 w-4 mr-2" />
                                      Download
                                    </Button>
                                    <Button size="sm">View Details</Button>
                                  </>
                                )}
                                {ticket.status === 'attended' && (
                                  <Button variant="outline" size="sm">
                                    <Star className="h-4 w-4 mr-2" />
                                    Rate Event
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favorites */}
          <TabsContent value="favorites" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Favorite Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {favoriteEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{event.title}</h3>
                        <div className="flex items-center text-sm text-gray-600 mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-4">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.venue}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">Buy Tickets</Button>
                          <Button variant="outline" size="sm">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Profile Information</CardTitle>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      value={userProfile.name} 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={userProfile.email} 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      value={userProfile.phone} 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location" 
                      value={userProfile.location} 
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                
                {isEditing && (
                  <div className="flex space-x-4">
                    <Button className="bg-festival-primary hover:bg-festival-primary/90">
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Email notifications for new events</span>
                      <Button variant="outline" size="sm">Enable</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>SMS reminders for upcoming events</span>
                      <Button variant="outline" size="sm">Enable</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Marketing communications</span>
                      <Button variant="outline" size="sm">Disable</Button>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Privacy</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Make profile public</span>
                      <Button variant="outline" size="sm">Enable</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Share attendance history</span>
                      <Button variant="outline" size="sm">Disable</Button>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Account</h4>
                  <div className="space-y-3">
                    <Button variant="outline">Change Password</Button>
                    <Button variant="outline">Download My Data</Button>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
