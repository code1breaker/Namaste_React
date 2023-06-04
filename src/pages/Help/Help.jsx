import React, { useState } from "react";
import "./Help.css";

const Faq = ({ ques, ans, isVisible, setIsVisible }) => {
  return (
    <div className="faq">
      <h3 className="txt-ques">{ques}</h3>
      {isVisible ? (
        <>
          <p className="txt-ans">{ans}</p>
          <button
            className="faq-btn"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Hide
          </button>
        </>
      ) : (
        <button
          className="faq-btn"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Help = () => {
  const [select, setSelect] = useState(0);
  return (
    <>
      <section className="container">
        <h1 className="text-center help-title">FAQ</h1>
        <Faq
          ques={"What is Contact Number?"}
          ans={
            "We value our customers time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy."
          }
          isVisible={select === 1}
          setIsVisible={(display) => {
            display ? setSelect(1) : setSelect(0);
          }}
        />
        <Faq
          ques={"Can I edit my order?"}
          ans={
            "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents"
          }
          isVisible={select === 2}
          setIsVisible={(display) => {
            display ? setSelect(2) : setSelect(0);
          }}
        />
        <Faq
          ques={"Do you charge for delivery?"}
          ans={
            "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. "
          }
          isVisible={select === 3}
          setIsVisible={(display) => {
            display ? setSelect(3) : setSelect(0);
          }}
        />
      </section>
    </>
  );
};

export default Help;
