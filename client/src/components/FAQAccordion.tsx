import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

export default function FAQAccordion() {
  const faqs = [
    {
      question: "What is your design process?",
      answer: "Our design process begins with understanding your vision and requirements. We conduct site analysis, create conceptual designs, develop detailed drawings, and provide construction documentation. Throughout the process, we maintain regular communication and incorporate your feedback."
    },
    {
      question: "What are typical project timelines?",
      answer: "Project timelines vary based on scope and complexity. Residential projects typically take 3-6 months for design and 8-18 months for construction. Commercial projects may take 6-12 months for design and 12-24 months for construction. We provide detailed schedules at project start."
    },
    {
      question: "Do you handle renovation projects?",
      answer: "Yes, we specialize in renovation and addition projects. Whether it's updating a single room or completely transforming a property, we provide comprehensive renovation services including structural modifications, interior redesign, and modernization."
    },
    {
      question: "How do you handle government approvals?",
      answer: "We assist with all necessary government approvals and permits. Our team is well-versed with local building codes, zoning regulations, and approval processes. We prepare and submit all required documentation and coordinate with relevant authorities."
    },
    {
      question: "What are your fee structures?",
      answer: "Our fees are based on project scope, size, and complexity. We offer transparent pricing with detailed proposals. For design services, we typically charge a percentage of construction cost or a fixed fee. We provide detailed cost breakdowns before project commencement."
    },
    {
      question: "Do you provide site supervision?",
      answer: "Yes, we provide comprehensive site supervision services. Our team conducts regular site visits, monitors construction quality, ensures adherence to designs, and coordinates with contractors. This ensures your project is executed according to specifications."
    },
    {
      question: "What makes DSK Architect different?",
      answer: "As a MSME certified and BAI registered firm, we bring government recognition and credibility. Our approach focuses on harmony, cultural sensitivity, and spiritual essence in design. We offer personalized service, transparent processes, and sustainable solutions."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and approach.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeInUp" delay={400}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index}
                  value={`item-${index}`} 
                  className="border border-border rounded-lg px-6"
                  data-testid={`faq-${index}`}
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}