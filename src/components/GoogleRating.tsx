
import React, { useState, useEffect } from 'react';
import { Star, MapPin } from 'lucide-react';

const GoogleRating = () => {
  const [apiKey, setApiKey] = useState('');
  const [placeId, setPlaceId] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [totalReviews, setTotalReviews] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchGoogleRating = async () => {
    if (!apiKey || !placeId) {
      setError('Please enter both API Key and Place ID');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`
      );
      
      const data = await response.json();
      
      if (data.status === 'OK' && data.result) {
        setRating(data.result.rating);
        setTotalReviews(data.result.user_ratings_total);
        localStorage.setItem('google_api_key', apiKey);
        localStorage.setItem('google_place_id', placeId);
      } else {
        setError('Failed to fetch rating data');
      }
    } catch (err) {
      setError('Error connecting to Google Places API');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedApiKey = localStorage.getItem('google_api_key');
    const savedPlaceId = localStorage.getItem('google_place_id');
    
    if (savedApiKey && savedPlaceId) {
      setApiKey(savedApiKey);
      setPlaceId(savedPlaceId);
    }
  }, []);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={20} 
        className={`${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-brand-navy">Our Google Business Rating</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers say about us on Google Business Profile.
          </p>
        </div>

        {!rating ? (
          <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Connect Google Business Profile</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Google Places API Key</label>
                <input
                  type="text"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your Google Places API key"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Place ID</label>
                <input
                  type="text"
                  value={placeId}
                  onChange={(e) => setPlaceId(e.target.value)}
                  placeholder="Enter your Google Place ID"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>
              <button
                onClick={fetchGoogleRating}
                disabled={loading}
                className="w-full btn-primary disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Fetch Rating'}
              </button>
              {error && <p className="text-red-600 text-sm">{error}</p>}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-md mx-auto shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="text-brand-blue mr-2" size={24} />
                <span className="text-lg font-semibold text-brand-navy">Google Business Profile</span>
              </div>
              <div className="flex justify-center mb-2">
                {renderStars(rating)}
              </div>
              <div className="text-3xl font-bold text-brand-navy mb-2">{rating}/5</div>
              <div className="text-gray-600">Based on {totalReviews} reviews</div>
              <button
                onClick={() => {
                  setRating(null);
                  setTotalReviews(null);
                  localStorage.removeItem('google_api_key');
                  localStorage.removeItem('google_place_id');
                }}
                className="mt-4 text-sm text-brand-blue hover:underline"
              >
                Update Rating
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GoogleRating;
