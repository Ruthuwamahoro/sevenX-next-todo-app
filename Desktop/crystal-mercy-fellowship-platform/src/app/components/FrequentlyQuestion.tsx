import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <div className="p-8 rounded-xl  w-full mx-auto">
      <h4 className="text-2xl font-semibold text-black mb-6">
        Frequently Asked Questions
      </h4>
      <Accordion type="single" collapsible className="w-full text-white">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-gray-800 bg-white rounded-xl p-4">
            How can I make a donation to support children’s education?
          </AccordionTrigger>
          <AccordionContent className="bg-gradient-to-br from-white to-gray-100 text-gray-500 p-4 rounded-b-md">
            Donations can be made through our website by clicking the &rdquo;Donate&rdquo; button on the homepage. We accept various payment methods, including credit cards, bank transfers, and PayPal. Every contribution helps us provide educational resources and opportunities for children in need.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-gray-800 bg-white rounded-xl p-4">
            Is my donation tax-deductible?
          </AccordionTrigger>
          <AccordionContent className="bg-gradient-to-br from-white to-gray-100 text-gray-500 p-4 rounded-b-md">
            Yes, donations to our organization are tax-deductible. We are a registered nonprofit organization, and we provide receipts for all contributions that you can use for tax purposes.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-gray-800 bg-white rounded-xl p-4">
            How do I know where my donation is going?
          </AccordionTrigger>
          <AccordionContent className="bg-gradient-to-br from-white to-gray-100 text-gray-500 p-4 rounded-b-md">
            We are committed to transparency. Detailed reports on how donations are used are available on our website under the &rdquo;Impact&rdquo; section. You can see how funds are allocated to various educational programs and outreach initiatives.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-gray-800 bg-white rounded-xl p-4">
            Can I donate in honor or memory of someone?
          </AccordionTrigger>
          <AccordionContent className="bg-gradient-to-br from-white to-gray-100 text-gray-500 p-4 rounded-b-md">
            Absolutely. When making a donation, you can choose to make it in honor or memory of a loved one. We will acknowledge your contribution with a personalized message to the recipient or their family.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-gray-800 bg-white rounded-xl p-4">
            Are there other ways I can support the cause besides donating?
          </AccordionTrigger>
          <AccordionContent className="bg-gradient-to-br from-white to-gray-100 text-gray-500 p-4 rounded-b-md">
            Yes, there are several ways to get involved. You can volunteer your time, participate in fundraising events, or help spread the word about our mission. Visit our &rdquo;Get Involved&rdquo; page to learn more about other opportunities.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
          <AccordionTrigger className="text-gray-800 bg-white rounded-xl p-4">
            What is your organization’s mission and vision?
          </AccordionTrigger>
          <AccordionContent className="bg-gradient-to-br from-white to-gray-100 text-gray-500 p-4 rounded-b-md">
            Our mission is to support children’s education and provide spiritual guidance through preaching. We aim to empower children with the knowledge and tools they need to succeed academically and to inspire individuals through spiritual growth.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10">
          <AccordionTrigger className="text-gray-800 bg-white rounded-xl p-4">
            How can I contact your organization for further inquiries?
          </AccordionTrigger>
          <AccordionContent className="bg-gradient-to-br from-white to-gray-100 text-gray-500 p-4 rounded-b-md">
            For any further inquiries, you can reach us via the contact form on our website, email us at [support@example.com](mailto:support@example.com), or call us at (123) 456-7890. We’re here to assist you and answer any questions you may have.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
