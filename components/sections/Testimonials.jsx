"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        id: 1,
        name: "Ayesha Ahmed",
        location: "Dubai",
        text: "The craftsmanship at Metro Gold is unmatched. I bought my wedding set here and it was absolutely stunning. Highly recommended for their service.",
        avatar: "https://ui-avatars.com/api/?name=Ayesha+Ahmed&background=D4AF37&color=184252&size=128&bold=true"
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        location: "Abu Dhabi",
        text: "I love their custom design service. They brought my vision to life perfectly. The quality of diamonds is exceptional and certified.",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=D4AF37&color=184252&size=128&bold=true"
    },
    {
        id: 3,
        name: "Rahul Verma",
        location: "Sharjah",
        text: "Trustworthy and reliable. Their gold exchange policy is transparent and I got the best value. Been a customer for 10 years.",
        avatar: "https://ui-avatars.com/api/?name=Rahul+Verma&background=D4AF37&color=184252&size=128&bold=true"
    },
    {
        id: 4,
        name: "Priya Nair",
        location: "Dubai",
        text: "Beautiful collection of antique jewelry. Every piece tells a story. The staff is very knowledgeable and patient.",
        avatar: "https://ui-avatars.com/api/?name=Priya+Nair&background=D4AF37&color=184252&size=128&bold=true"
    },
];

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    };

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent text-sm font-bold uppercase tracking-widest">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-3 mb-4">What Our Customers Say</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Real experiences from our valued customers</p>
                </div>

                <div className="px-2">
                    <Slider {...settings} className="testimonial-slider">
                        {testimonials.map((t) => (
                            <div key={t.id} className="px-2">
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 min-h-[350px] flex flex-col hover:shadow-2xl transition-all duration-300 slick-center-scale">
                                    {/* User Avatar */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="w-16 h-16 rounded-full border-4 border-accent shadow-md"
                                        />
                                        <div>
                                            <h4 className="font-serif font-bold text-lg text-primary">{t.name}</h4>
                                            <span className="text-xs text-accent uppercase tracking-widest font-bold">{t.location}</span>
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className="flex-grow">
                                        <svg className="w-8 h-8 text-accent/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                        <p className="text-gray-600 leading-relaxed italic">{t.text}</p>
                                    </div>

                                    {/* Rating Stars */}
                                    <div className="flex gap-1 mt-6 pt-6 border-t border-gray-100">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
