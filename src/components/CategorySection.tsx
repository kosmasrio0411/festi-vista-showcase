
import { Link } from 'react-router-dom';
import { Music, Theater, Smile, Palette, Users, Calendar } from 'lucide-react';

const CategorySection = () => {
  const categories = [
    {
      id: 'music',
      name: 'Music',
      icon: Music,
      description: 'From classical symphonies to contemporary hits',
      count: '15 Events',
      gradient: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'theater',
      name: 'Theater',
      icon: Theater,
      description: 'Dramatic performances that move the soul',
      count: '8 Events',
      gradient: 'from-purple-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'comedy',
      name: 'Comedy',
      icon: Smile,
      description: 'Laughter is the best medicine',
      count: '6 Events',
      gradient: 'from-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'art',
      name: 'Visual Arts',
      icon: Palette,
      description: 'Exhibitions and installations',
      count: '12 Events',
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'dance',
      name: 'Dance',
      icon: Users,
      description: 'Movement that speaks to the heart',
      count: '10 Events',
      gradient: 'from-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'workshops',
      name: 'Workshops',
      icon: Calendar,
      description: 'Learn from the masters',
      count: '5 Events',
      gradient: 'from-red-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a diverse range of artistic expressions and cultural experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                to={`/events?category=${category.id}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80`}></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm text-white/90">{category.count}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{category.description}</p>
                  
                  <div className="mt-4 flex items-center text-festival-primary font-medium">
                    <span>Explore {category.name}</span>
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
