import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section with Map Background */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20">
            {/* Google Maps Embed Placeholder */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <p className="text-lg">Interactive Google Maps will be embedded here</p>
                <p className="text-sm">Showing: Yogesh Complex, Jhansi Rani Chowk, Dhule</p>
              </div>
            </div>
          </div>
          
          <div className="relative container mx-auto px-4 text-center">
            <div className="bg-background/90 backdrop-blur-md rounded-lg p-8 max-w-2xl mx-auto">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Let's Create Together
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform your architectural dreams into reality. Reach out to us for a consultation and discover how we can bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}