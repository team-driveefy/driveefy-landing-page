"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { TESTIMONIALS } from "../../shared/constant";

import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4 font-heading">
          What They Say About Us
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Dynamically initiate market positioning total linkage with
          clicks-and-mortar technology compelling data for cutting-edge markets.
        </p>

        <div className="relative">
          <div className="flex overflow-hidden">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 transition-transform duration-300 transform ${
                  index === currentSlide ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                Math.min(TESTIMONIALS.length - 1, prev + 1)
              )
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
