import { useState, useRef } from "react";
import "../styles/FAQ.scss";
import { useLang } from "../scripts/LangContext.js";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);
  const { getLangText } = useLang();

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    if (contentRef.current && activeIndex === index) {
      setContentHeight(0);
    } else if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  };
  

  const accordionItems = [
    {
      title: getLangText("faq-q1-title"),
      content: getLangText("faq-q1-description"),
    },
    {
      title: getLangText("faq-q2-title"),
      content:getLangText("faq-q2-description"),
    },
    {
      title: getLangText("faq-q3-title"),
      content:getLangText("faq-q3-description"),
    },
    {
      title: getLangText("faq-q4-title"),
      content:getLangText("faq-q4-description"),
    },
    {
      title: getLangText("faq-q5-title"),
      content:getLangText("faq-q5-description"),
    },
  ];

  return (
    <section id="faq" className="faq section__mb">
      <div className="container">
        <h2 className="text-right lng-faq-title">{getLangText("faq-title")}</h2>
        <div className="faq__inner">
          <div className="accordion__inner">
            {accordionItems.map((item, index) => (
              <div className="accordion__item" key={index}>
                <h3
                  className="accordion__item-title"
                  onClick={() => handleAccordionClick(index)}
                >
                  {item.title}
                </h3>
                <div
                  className={`accordion__item-content ${
                    activeIndex === index ? "active" : ""
                  }`}
                  style={{
                    maxHeight: activeIndex === index ? contentHeight : 0,
                  }}
                  ref={contentRef}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
