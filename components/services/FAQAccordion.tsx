'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full divide-y divide-black/10">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border-none py-1">
          <AccordionTrigger
            className="text-base font-semibold text-left py-4 hover:no-underline"
            style={{ color: '#1C3A2A' }}
          >
            {faq.question}
          </AccordionTrigger>
          <AccordionContent
            className="text-sm leading-relaxed pb-4"
            style={{ color: '#6B6B6B' }}
          >
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
