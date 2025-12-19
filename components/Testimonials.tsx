'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

// ============================================
// GOOGLE REVIEWS CONFIGURATION
// ============================================
// To use Google Reviews, you need:
// 1. Google Places API Key (get from Google Cloud Console)
// 2. Your business Place ID (find at: https://developers.google.com/maps/documentation/places/web-service/place-id)
//
// Set up instructions in: GOOGLE_REVIEWS_SETUP.md

// Your business location coordinates (used as fallback and for display)
const BUSINESS_LOCATION = {
  name: "LegalPro Law Firm", // Your business name
  address: "123 Legal Street, Suite 500, New York, NY 10001",
  latitude: 40.7128,  // Replace with your actual latitude
  longitude: -74.0060, // Replace with your actual longitude
};

// Google Places API configuration
const USE_GOOGLE_REVIEWS = false; // Set to true when you have API key configured
const GOOGLE_PLACES_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || '';
const GOOGLE_PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || '';
// ============================================

interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
  profilePhoto?: string;
}

interface GooglePlaceData {
  rating: number;
  user_ratings_total: number;
}

export default function Testimonials() {
  const { t } = useLanguage();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [placeData, setPlaceData] = useState<GooglePlaceData | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (USE_GOOGLE_REVIEWS && GOOGLE_PLACES_API_KEY && GOOGLE_PLACE_ID) {
      fetchGoogleReviews();
    } else {
      // Use local testimonials from translations
      const localReviews = t.testimonials.items.map((item) => ({
        author: item.name,
        rating: 5,
        text: item.text,
        time: item.position,
      }));
      setReviews(localReviews);
      // Set default place data for local reviews
      setPlaceData({
        rating: 5.0,
        user_ratings_total: localReviews.length,
      });
    }
  }, [t.testimonials.items]);

  const fetchGoogleReviews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/google-reviews?placeId=${GOOGLE_PLACE_ID}&apiKey=${GOOGLE_PLACES_API_KEY}`
      );
      const data = await response.json();

      if (data.result && data.result.reviews) {
        const googleReviews = data.result.reviews.map((review: any) => ({
          author: review.author_name,
          rating: review.rating,
          text: review.text,
          time: new Date(review.time * 1000).toLocaleDateString(),
          profilePhoto: review.profile_photo_url,
        }));
        setReviews(googleReviews);
        setPlaceData({
          rating: data.result.rating,
          user_ratings_total: data.result.user_ratings_total,
        });
      }
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      // Fallback to local testimonials
      const localReviews = t.testimonials.items.map((item) => ({
        author: item.name,
        rating: 5,
        text: item.text,
        time: item.position,
      }));
      setReviews(localReviews);
      setPlaceData({
        rating: 5.0,
        user_ratings_total: localReviews.length,
      });
    } finally {
      setLoading(false);
    }
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Truncate long review text
  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-primary-dark">
            {t.testimonials.title}
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Main Content: Score Card + Carousel */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-gold"></div>
            <p className="mt-4 text-gray-600">Loading reviews...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            {/* Left: Google Score Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-gray-100">
                {/* Excellence Badge */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">
                    Excellent
                  </h3>

                  {/* Star Rating */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-8 h-8 fill-primary-gold text-primary-gold"
                      />
                    ))}
                  </div>

                  {/* Based on text */}
                  <p className="text-gray-600 text-sm mb-6">
                    Basée sur <strong>{placeData?.user_ratings_total || reviews.length}</strong> avis
                  </p>

                  {/* Google Logo */}
                  <div className="flex justify-center">
                    <svg
                      className="h-10 w-auto"
                      viewBox="0 0 272 92"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="#4285F4" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                      <path fill="#EA4335" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                      <path fill="#FBBC05" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                      <path fill="#4285F4" d="M225 3v65h-9.5V3h9.5z"/>
                      <path fill="#34A853" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                      <path fill="#EA4335" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Carousel */}
            <div className="lg:col-span-8 relative">
              <div className="relative min-h-[400px] flex items-center">
                {/* Navigation Buttons */}
                <button
                  onClick={prev}
                  disabled={reviews.length <= 1}
                  className="absolute left-0 z-10 -translate-x-4 bg-white text-primary-dark p-3 rounded-full shadow-lg hover:bg-primary-gold hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={next}
                  disabled={reviews.length <= 1}
                  className="absolute right-0 z-10 translate-x-4 bg-white text-primary-dark p-3 rounded-full shadow-lg hover:bg-primary-gold hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Carousel Content */}
                <div className="w-full overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
                    >
                      {/* Header: Avatar + Name + Rating */}
                      <div className="flex items-start gap-4 mb-6">
                        {/* Avatar */}
                        {reviews[currentIndex]?.profilePhoto ? (
                          <img
                            src={reviews[currentIndex].profilePhoto}
                            alt={reviews[currentIndex].author}
                            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                          />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-gold to-primary-blue flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                            {reviews[currentIndex]?.author.charAt(0)}
                          </div>
                        )}

                        {/* Name and Rating */}
                        <div className="flex-1">
                          <h4 className="font-bold text-xl text-primary-dark mb-1">
                            {reviews[currentIndex]?.author}
                          </h4>
                          <div className="flex items-center gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${
                                  i < (reviews[currentIndex]?.rating || 5)
                                    ? 'fill-primary-gold text-primary-gold'
                                    : 'fill-gray-200 text-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-gray-500">{reviews[currentIndex]?.time}</p>
                        </div>
                      </div>

                      {/* Review Text */}
                      <div className="relative">
                        <div className="absolute -top-2 -left-2 text-6xl text-primary-gold opacity-20">
                          "
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed relative z-10 pl-6">
                          {truncateText(reviews[currentIndex]?.text || '')}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? 'w-8 bg-primary-gold' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
