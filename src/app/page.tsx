"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Video,
  Play,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  X,
  MessageCircle,
  Headphones,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { GetStartedButton } from "@/components/get-started-button";

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const features = [
    {
      icon: Users,
      title: "Client Management",
      description:
        "Kelola semua klien Anda dalam satu tempat dengan riwayat project lengkap",
    },
    {
      icon: Video,
      title: "Project Tracking",
      description:
        "Track status editing dari mulai hingga selesai dengan timeline yang jelas",
    },
    {
      icon: Clock,
      title: "Deadline Management",
      description: "Jangan pernah terlewat deadline dengan reminder otomatis",
    },
    {
      icon: DollarSign,
      title: "Payment Tracking",
      description:
        "Monitor pembayaran dan invoice dengan sistem yang terintegrasi",
    },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Freelance Video Editor",
      content:
        "EditFlow mengubah cara saya mengelola klien. Sekarang semua terorganisir dengan baik!",
      rating: 5,
      avatar: "AJ",
    },
    {
      name: "Sarah Wilson",
      role: "Creative Agency Owner",
      content:
        "Dengan EditFlow, tim saya bisa fokus pada editing tanpa khawatir kehilangan track project.",
      rating: 5,
      avatar: "SW",
    },
    {
      name: "Michael Chen",
      role: "YouTube Content Creator",
      content:
        "Fitur revision tracking-nya sangat membantu komunikasi dengan editor saya.",
      rating: 5,
      avatar: "MC",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar></Navbar>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-navy)] via-[var(--color-brand-purple)] to-[var(--color-brand-burgundy)]">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-brand-orange/20 text-brand-orange hover:bg-brand-orange/20 border-brand-orange/30">
              ✨ Trusted by 1000+ Video Editors
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Where your{" "}
              <span className="bg-gradient-to-r from-brand-orange to-brand-burgundy bg-clip-text text-transparent">
                editing projects
              </span>{" "}
              and clients coordinate seamlessly
            </h1>

            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              See how your editing workflow connects to client goals while
              managing projects, deadlines, and payments that understand your
              creative business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <GetStartedButton></GetStartedButton>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="dashboard-preview bg-white rounded-2xl shadow-2xl p-8 border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-60"></div>

              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>

              <div className="dashboard-preview-content relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-transparent to-[#AB4459]/10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#441752]/5 via-transparent to-brand-dark/5"></div>

                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-brand-orange to-brand-burgundy rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform duration-300 hover:scale-110">
                    <Video className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    EditFlow Dashboard
                  </h3>
                  <p className="text-gray-500">
                    Complete CRM for Video Editors
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-4 flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                {/* Enhanced floating dots animation */}
                <div className="floating-dot absolute top-4 left-4 w-2 h-2 bg-brand-orange rounded-full"></div>
                <div className="floating-dot absolute top-8 right-8 w-3 h-3 bg-[#AB4459] rounded-full"></div>
                <div className="floating-dot absolute bottom-6 left-8 w-2 h-2 bg-[#441752] rounded-full"></div>
                <div className="floating-dot absolute bottom-8 right-6 w-2 h-2 bg-brand-dark rounded-full"></div>

                {/* Additional decorative elements */}
                <div className="absolute top-1/2 left-4 w-1 h-8 bg-gradient-to-b from-brand-orange/30 to-transparent rounded-full"></div>
                <div className="absolute top-1/2 right-4 w-1 h-8 bg-gradient-to-b from-[#AB4459]/30 to-transparent rounded-full"></div>
              </div>
            </div>

            {/* Enhanced Floating Cards */}
            <Card className="floating-card floating-card-left absolute -left-4 top-1/4 w-72 shadow-lg hidden lg:block bg-white/95 backdrop-blur-sm border-0">
              <CardContent className="p-5">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      Project Completed
                    </p>
                    <p className="text-sm text-gray-600">
                      YouTube Tutorial Series
                    </p>
                    <div className="flex items-center mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">
                        Just now
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="floating-card floating-card-right absolute -right-4 top-1/3 w-72 shadow-lg hidden lg:block bg-white/95 backdrop-blur-sm border-0">
              <CardContent className="p-5">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-orange to-brand-burgundy rounded-full flex items-center justify-center shadow-lg">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      Payment Received
                    </p>
                    <p className="text-sm text-gray-600">Rp 1,250,000</p>
                    <div className="flex items-center mt-1">
                      <div className="w-2 h-2 bg-brand-orange rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs text-[#AB4459] font-medium">
                        2 min ago
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional floating card - bottom left */}
            <Card className="floating-card absolute -left-8 bottom-1/4 w-64 shadow-lg hidden xl:block bg-white/95 backdrop-blur-sm border-0">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">New Client</p>
                    <p className="text-sm text-gray-600">Sarah Wilson joined</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional floating card - top right */}
            <Card className="floating-card absolute -right-8 top-1/6 w-60 shadow-lg hidden xl:block bg-white/95 backdrop-blur-sm border-0">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Deadline Alert</p>
                    <p className="text-sm text-gray-600">
                      2 projects due today
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to manage your editing business
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From client onboarding to final payment, EditFlow streamlines your
              entire workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-brand-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by video editors worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our community has to say about EditFlow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-medium text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-burgundy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to streamline your editing workflow?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of video editors who trust EditFlow to manage their
            business
          </p>
          <Button
            size="lg"
            onClick={onGetStarted}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 text-lg"
          >
            Start free trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-orange to-brand-burgundy rounded-lg flex items-center justify-center">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EditFlow</span>
              </div>
              <p className="text-gray-400">
                The complete CRM solution for video editors and creative
                professionals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EditFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-2xl border z-50">
          <div className="bg-[#441752] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="font-medium">Can I help answer any questions?</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">
              We're standing by to chat now, or take your time browsing!
            </p>

            <div className="space-y-2">
              <Button className="w-full justify-start bg-brand-orange hover:bg-brand-orange/90">
                Chat now
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
              >
                I'm not ready to chat
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
              >
                <Headphones className="w-4 h-4 mr-2" />I am looking for support
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              In accordance with our privacy policy, this conversation may be
              recorded for training and quality assurance purposes.
            </p>
          </div>
        </div>
      )}

      {/* Chat Button */}
      {!isChatOpen && (
        <Button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-brand-orange hover:bg-brand-orange/90 shadow-lg z-40"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
}
