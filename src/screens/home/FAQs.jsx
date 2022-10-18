import React from "react";
import { Accordion, AccordionButton } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

const FAQs = () => {
  const faqsData1 = [
    {
      title: "What exactly is thunderboltJS?",
      data: "ThunderboltJS is a framework, a compiler that improves your core web vitals, resulting in your site loading superfast. A new way of rendering websites.",
    },
    {
      title: "Why thunderboltJS?",
      data: "If you engage in digital marketing or work towards getting discovered on Google via SEO, €75/month (YES!) will be a very small investment when looking at the bigger picture. Your CEO will thank you.",
    },
    {
      title: "What are core web vitals?",
      data: "Core web vitals are the 4 parameters, namely accessibility, performance, SEO, and best practices (mobile first etc), by which your site is ranked by Google & other search engines. You can check your core web vitals here",
    },
    {
      title: "What is a ‘pay monthly’ website?",
      data: "The thunderboltJS pay monthly website is an alternative way to own and benefit from a modern business website. Instead of using a web design agency to build a high upfront cost website that probably uses a CMS and requires you to make updates and content changes, we will build a pay-per-month website on a subscription and make all updates for you. The cost of the website also includes hosting, support, and maintenance.",
    },
    {
      title: "How quickly can I get my website up and running?",
      data: "Once the design is approved, sites with no CMS and less than 10-15 pages take less than 5 days. Sites with CMS & at least 10-15 pages take approximately 15 days including testing & deployment. Factors that usually lengthen the timeline are design revisions or client delays in approval.",
    },
    {
      title: "I already have a website, what can I do?",
      data: "If you are happy with your design, simply dump your HTML via a zip file or add us to your GitLab/GitHub for us to convert it to a lightning-fast dot com. Still confused? You can contact our solution experts.",
    },
    {
      title: "Can I change my website content anytime?",
      data: "All our plans include unlimited content changes, however, we also offer custom Strapi CMS for an additional cost.",
    },
    {
      title: "What about hosting & deployment?",
      data: "We use a combination of services like thunderboltJS, AWS, Gatsby cloud, Fastly to host & deploy your website and CMS. ",
    },
    {
      title: "Can I use my hosting?",
      data: "You will need to use thunderboltJS as your hosting provider. We provide hosting services to all our customers. No hidden costs.",
    },
  ];

  const faqsData2 = [
    {
      title: "Will I own my website?",
      data: "Yes, after an initial period of 24 months, you will have access to everything deployed with us, including all updates delivered via GitLab/GitHub. We put great effort into your business and break payments into affordable monthly payments. This means our website comes with a 24-month contract which is agreed upon purchase.",
    },
    {
      title: "I have my test link, how should we take the website LIVE?",
      data: "Once your site is ready, our team will send you domains to be pointed out in simple, easy-to-understand, and secure steps. Don't worry, our customer success team will be with you every step of the way.",
    },
    {
      title: "Can I cancel anytime?",
      data: "Yes, you can cancel anytime.",
    },
    {
      title: "Can I upgrade my plan?",
      data: "Yes. All websites and marketing services can be upgraded to the next plan at any time. Websites can only be downgraded at the end of the new 24-month term. Other add-on services are provided on a monthly basis and can be downgraded or cancelled at any time.",
    },
    {
      title: "How are payments taken?",
      data: "We will generate an invoice each month for any services with us which will be available from your thunderboltJS account. All payments are processed through Stripe.",
    },
    {
      title: "What if I cancel my subscription or default on a payment?",
      data: "Our customer support team will reach out to you to update your payment information. We usually allow a period of 45 days for billing errors and payment defaults. If no action is taken, the subscription will expire, which might cause your website to become unreachable.",
    },
    {
      title: "Is there an upfront cost?",
      data: "Only the first month's payment for your website. There is no additional setup cost or hidden charges.",
    },
    {
      title: "What is a managed hosting subscription? ",
      data: "Managed hosting subscription is when you have an existing website and only need support to get the website; Live for users, including 24x7 maintenance, more than 99% uptime guarantee, protection against cyber threats, and more!",
    },
    {
      title: "Once I purchase web hosting services, can I cancel them later?",
      data: "Of course. Our web hosting services are designed to meet the needs of our customers and this means that we simply require 7 working days’ notice from clients who wish to cancel the service.",
    },
  ];

  return (
    <section className="faq-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="frequently-asked-title">
              Frequently asked questions
            </h1>
            <div className="accordin-container">
              <div className="about-accoudian">
                <Accordion className="accordin-flex" defaultActiveKey={"0"}>
                  <div className="row">
                    <div className="col-md-6">
                      {faqsData1.map((faq, i) => {
                        return (
                          <Accordion.Item eventKey={i}>
                            <AccordionButton id={`heading${i}`}>
                              {faq.title}
                            </AccordionButton>

                            <AccordionBody>
                              <p>{faq.data}</p>
                            </AccordionBody>
                          </Accordion.Item>
                        );
                      })}
                    </div>
                    <div className="col-md-6">
                      {faqsData2.map((faq, i) => {
                        return (
                          <Accordion.Item eventKey={i + 10}>
                            <AccordionButton id={`heading${i + 10}`}>
                              {faq.title}
                            </AccordionButton>

                            <AccordionBody>
                              <p>{faq.data}</p>
                            </AccordionBody>
                          </Accordion.Item>
                        );
                      })}
                    </div>
                  </div>
                </Accordion>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
