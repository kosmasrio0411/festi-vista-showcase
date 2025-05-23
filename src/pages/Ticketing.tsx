
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, CreditCard, Calendar, Clock, MapPin, Users, Plus, Minus, Ticket } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Ticketing = () => {
  const { toast } = useToast();
  const [selectedEvent, setSelectedEvent] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [step, setStep] = useState(1);

  const events = [
    {
      id: '1',
      title: 'Symphony Under the Stars',
      date: 'Dec 15, 2024',
      time: '8:00 PM',
      venue: 'Grand Amphitheater',
      ticketTypes: [
        { type: 'General Admission', price: 75, available: 500 },
        { type: 'VIP', price: 150, available: 50 },
        { type: 'Premium', price: 200, available: 25 }
      ]
    },
    {
      id: '2',
      title: 'Comedy Night Extravaganza',
      date: 'Dec 18, 2024',
      time: '7:30 PM',
      venue: 'Festival Comedy Club',
      ticketTypes: [
        { type: 'Standard', price: 45, available: 300 },
        { type: 'VIP Front Row', price: 85, available: 20 }
      ]
    },
    {
      id: '3',
      title: 'Modern Dance Spectacular',
      date: 'Dec 20, 2024',
      time: '7:00 PM',
      venue: 'Cultural Center Stage',
      ticketTypes: [
        { type: 'General', price: 60, available: 400 },
        { type: 'Premium', price: 120, available: 100 }
      ]
    }
  ];

  const selectedEventData = events.find(event => event.id === selectedEvent);
  const selectedTicketData = selectedEventData?.ticketTypes.find(ticket => ticket.type === ticketType);
  const subtotal = selectedTicketData ? selectedTicketData.price * quantity : 0;
  const fees = subtotal * 0.1;
  const total = subtotal + fees;

  const handlePurchase = () => {
    if (!selectedEvent || !ticketType || quantity < 1) {
      toast({
        title: "Please complete all fields",
        description: "Select an event, ticket type, and quantity to continue.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Tickets purchased successfully!",
      description: `You've purchased ${quantity} ${ticketType} ticket${quantity > 1 ? 's' : ''} for ${selectedEventData?.title}`,
    });

    // Reset form
    setSelectedEvent('');
    setTicketType('');
    setQuantity(1);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-festival-primary to-festival-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <Ticket className="inline-block mr-4 h-12 w-12" />
            Get Your Tickets
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Secure your spot at the most amazing cultural events of the year
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Purchase Tickets</CardTitle>
                <div className="flex items-center space-x-4 mt-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step >= num ? 'bg-festival-primary text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {num}
                      </div>
                      {num < 3 && (
                        <div className={`w-16 h-1 mx-2 ${
                          step > num ? 'bg-festival-primary' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex space-x-4 mt-2 text-sm text-gray-600">
                  <span className={step >= 1 ? 'text-festival-primary font-medium' : ''}>Select Event</span>
                  <span className={step >= 2 ? 'text-festival-primary font-medium' : ''}>Choose Tickets</span>
                  <span className={step >= 3 ? 'text-festival-primary font-medium' : ''}>Payment</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Select Event */}
                <div className="space-y-4">
                  <Label htmlFor="event">Select Event</Label>
                  <Select value={selectedEvent} onValueChange={(value) => {
                    setSelectedEvent(value);
                    setTicketType('');
                    setStep(Math.max(step, 1));
                  }}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an event" />
                    </SelectTrigger>
                    <SelectContent>
                      {events.map((event) => (
                        <SelectItem key={event.id} value={event.id}>
                          <div className="flex flex-col">
                            <span className="font-medium">{event.title}</span>
                            <span className="text-sm text-gray-500">{event.date} • {event.venue}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Event Details */}
                {selectedEventData && (
                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{selectedEventData.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-festival-primary" />
                          {selectedEventData.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-festival-primary" />
                          {selectedEventData.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-festival-primary" />
                          {selectedEventData.venue}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 2: Select Ticket Type */}
                {selectedEventData && (
                  <div className="space-y-4">
                    <Label>Select Ticket Type</Label>
                    <div className="grid gap-3">
                      {selectedEventData.ticketTypes.map((ticket) => (
                        <Card 
                          key={ticket.type}
                          className={`cursor-pointer transition-colors ${
                            ticketType === ticket.type 
                              ? 'ring-2 ring-festival-primary bg-festival-primary/5' 
                              : 'hover:bg-gray-50'
                          }`}
                          onClick={() => {
                            setTicketType(ticket.type);
                            setStep(Math.max(step, 2));
                          }}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-medium">{ticket.type}</h4>
                                <div className="flex items-center text-sm text-gray-500 mt-1">
                                  <Users className="h-4 w-4 mr-1" />
                                  {ticket.available} available
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-festival-primary">
                                  ${ticket.price}
                                </div>
                                <div className="text-sm text-gray-500">per ticket</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Quantity and Payment */}
                {ticketType && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label>Quantity</Label>
                      <div className="flex items-center space-x-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          disabled={quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setQuantity(Math.min(10, quantity + 1))}
                          disabled={quantity >= 10}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Payment Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="card">Card Number</Label>
                          <Input id="card" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedEventData && ticketType ? (
                  <>
                    <div>
                      <h3 className="font-medium">{selectedEventData.title}</h3>
                      <p className="text-sm text-gray-500">{selectedEventData.date} • {selectedEventData.time}</p>
                      <p className="text-sm text-gray-500">{selectedEventData.venue}</p>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>{ticketType} × {quantity}</span>
                        <span>${subtotal}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Service fees</span>
                        <span>${fees.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-festival-primary">${total.toFixed(2)}</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-festival-primary hover:bg-festival-primary/90 text-white"
                      size="lg"
                      onClick={handlePurchase}
                    >
                      <CreditCard className="h-5 w-5 mr-2" />
                      Complete Purchase
                    </Button>
                  </>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <Ticket className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Select an event and ticket type to see your order summary</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticketing;
