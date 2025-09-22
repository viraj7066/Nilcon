import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden flex items-center justify-center bg-background">
          <div className="relative z-10 container mx-auto px-4 text-center flex items-center justify-center min-h-[60vh] md:min-h-[70vh]">
            <div className="p-4 md:p-8 max-w-2xl mx-auto">
              <h1 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
                Let's Create Together
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Transform your architectural dreams into reality. Reach out to us for a consultation and discover how we can bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

        {/* Interactive Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Find Us Here
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit our office at Yogesh Complex, conveniently located at Jhansi Rani Chowk in Dhule
              </p>
            </div>
            
            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.95010023362235!2d74.77469323537605!3d20.904207166008838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec5c1c32db851%3A0xfe82159c5e637bab!2s%22DSK%20Architect%22!5e0!3m2!1sen!2sin!4v1758523712194!5m2!1sen!2sin" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="DSK Architect Office Location - Interactive Map"
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Office Address</h3>
                <p className="text-muted-foreground text-sm">
                  1st Floor, Yogesh Complex<br />
                  Jhansi Rani Chowk, Lalbaug<br />
                  Dhule – 424001, Maharashtra
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Contact Number</h3>
                <p className="text-muted-foreground text-sm">
                  <a href="tel:9096939495" className="hover:text-primary transition-colors">
                    9096939495
                  </a>
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Monday - Saturday<br />
                  10:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}