
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Calendar, Award, Heart, Globe, Music, Theater } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500K+', label: 'Annual Visitors' },
    { icon: Calendar, value: '200+', label: 'Events Per Year' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
    { icon: Award, value: '50+', label: 'International Awards' }
  ];

  const timeline = [
    {
      year: '1999',
      title: 'Festival Founded',
      description: 'FestiVista was born from a vision to bring world-class arts to everyone'
    },
    {
      year: '2005',
      title: 'International Recognition',
      description: 'Received first UNESCO recognition for cultural contribution'
    },
    {
      year: '2010',
      title: 'Digital Innovation',
      description: 'Pioneered online ticketing and virtual event experiences'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Extended reach to 50+ cities worldwide through hybrid events'
    },
    {
      year: '2024',
      title: 'Future Forward',
      description: 'Leading the industry in sustainable and inclusive cultural events'
    }
  ];

  const team = [
    {
      name: 'Elena Rodriguez',
      role: 'Festival Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9c0e1d3?w=300&h=300&fit=crop&crop=face',
      bio: '20+ years in cultural programming'
    },
    {
      name: 'Marcus Chen',
      role: 'Artistic Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Award-winning composer and curator'
    },
    {
      name: 'Aria Thompson',
      role: 'Community Outreach',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Passionate about accessibility in arts'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Arts',
      description: 'We believe in the transformative power of artistic expression and its ability to unite communities.'
    },
    {
      icon: Globe,
      title: 'Global Inclusivity',
      description: 'Celebrating diverse voices and creating spaces where all cultures can share their stories.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building lasting relationships with artists, audiences, and local communities worldwide.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in curation, production, and visitor experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-festival-dark/90 to-festival-primary/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About FestiVista
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            For over 25 years, we've been creating extraordinary cultural experiences that inspire, 
            challenge, and unite people through the universal language of arts.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-festival-primary/10 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-festival-primary" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  FestiVista began as a small community gathering in 1999, born from the belief that 
                  exceptional art should be accessible to everyone. What started as a weekend celebration 
                  has evolved into one of the world's most prestigious cultural festivals.
                </p>
                <p>
                  Today, we present over 200 events annually, featuring everything from intimate chamber 
                  music concerts to large-scale theatrical productions. Our programming spans classical 
                  and contemporary works, showcasing both emerging talents and established masters.
                </p>
                <p>
                  We're proud to be more than just a festival – we're a catalyst for cultural exchange, 
                  education, and community building. Through our year-round programming, educational 
                  initiatives, and community partnerships, we continue to make the arts a vital part 
                  of everyday life.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Festival performance"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-festival-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that have shaped FestiVista into the world-renowned festival it is today
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-festival-primary h-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`flex-1 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  } ml-12 md:ml-0`}>
                    <Card className="bg-white shadow-lg">
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-festival-primary">{item.year}</Badge>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-festival-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-festival-primary/10 rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-festival-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate individuals who bring FestiVista to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-festival-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-festival-primary to-festival-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Cultural Community
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Be part of something extraordinary. Experience the magic of live performance and 
            connect with fellow arts enthusiasts from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-festival-accent hover:bg-festival-accent/90 text-festival-dark font-semibold px-8 py-4">
              <Music className="mr-2 h-5 w-5" />
              Explore Events
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-festival-dark font-semibold px-8 py-4">
              <Theater className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
