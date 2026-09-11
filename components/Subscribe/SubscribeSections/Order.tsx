"use client";

import { useEffect, useState } from "react";
import QuestionModel from "../SubscribeModels/QuestionModel";
import OrderSummary from "../SubscribeModels/OrderSummary";
import CreateMyPlanBtn from "../SubscribeModels/CreateMyPlanBtn";
import OrderNavigation from "../SubscribeModels/OrderNavigation";
import OrderSummaryWindow from "../SubscribeModels/OrderSummaryWindow";
import { AnimatePresence } from "framer-motion";

export default function Order() {
  const summaryInitial = {
    preferences: null as string | null,
    beanType: null as string | null,
    quantity: null as string | null,
    grind: null as string | null,
    deliveries: null as string | null,
  };

  const visibilitiesInitial = {
    preferences: true as boolean,
    beanType: true as boolean,
    quantity: true as boolean,
    grind: true as boolean,
    deliveries: true as boolean,
  };

  const [summary, setSummary] = useState(summaryInitial);
  const [visibilities, setVisibilites] = useState(visibilitiesInitial);
  const [summaryWindowVis, setSummaryWindowVis] = useState(false);

  useEffect(() => {
    if (summaryWindowVis) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [summaryWindowVis]);

  function handleOnClickAnswer(questionIndex: number, answerTitle: string) {
    const keys: (keyof typeof summaryInitial)[] = [
      "preferences",
      "beanType",
      "quantity",
      "grind",
      "deliveries",
    ];

    const currentKey = keys[questionIndex];
    setSummary((prev) => ({
      ...prev,
      [currentKey]: prev[currentKey] === answerTitle ? null : answerTitle,
    }));
  }

  function handleOnChangeVis(questionIndex: number, status:boolean) {
    const keys: (keyof typeof visibilitiesInitial)[] = [
      "preferences",
      "beanType",
      "quantity",
      "grind",
      "deliveries",
    ];

    const currentKey = keys[questionIndex];
    setVisibilites((prev) => ({
      ...prev,
      [currentKey]: status,
    }));
  }

  const keys: (keyof typeof summaryInitial)[] = [
    "preferences",
    "beanType",
    "quantity",
    "grind",
    "deliveries",
  ];

  const questions = [
    {

      key: "Preferences",
      title: "How do you drink your coffee?",
      answers: [
        {
          title: "Capsule",
          desc: "Compatible with Nespresso systems and similar brewers",
        },
        {
          title: "Filter",
          desc: "Compatible with Nespresso systems and similar brewers",
        },
        {
          title: "Espresso",
          desc: "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    {
  
      key: "Bean Type",
      title: "What type of coffee?",
      answers: [
        {
          title: "Single Origin",
          desc: "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          title: "Decaf",
          desc: "Just like regular coffee, except the caffeine has been removed",
        },
        {
          title: "Blended",
          desc: "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    {
      key: "Quantity",
      title: "How much would you like?",
      answers: [
        {
          title: "250g",
          desc: "Perfect for the solo drinker. Yields about 12 delicious cups.",
        },
        {
          title: "500g",
          desc: "Perfect option for a couple. Yields about 40 delectable cups.",
        },
        {
          title: "1000g",
          desc: "Perfect for offices and events. Yields about 90 delightful cups.",
        },
      ],
    },
    {
  
      key: "Grind Option",
      title: "Want us to grind them?",
      answers: [
        {
          title: "Wholebean",
          desc: "Best choice if you cherish the full sensory experience",
        },
        {
          title: "Filter",
          desc: "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          title: "Cafetiére",
          desc: " Course ground beans specially suited for french press coffee",
        },
      ],
    },
    {

      key: "Deliveries",
      title: "How often should we deliver?",
      answers: [
        {
          title: "Every week",
          desc: "$7.20 per shipment. Includes free first-class shipping.",
        },
        {
          title: "Every 2 weeks",
          desc: "$9.60 per shipment. Includes free priority shipping.",
        },
        {
          title: "Every month",
          desc: "$12.00 per shipment. Includes free priority shipping.",
        },
      ],
    },
  ];

  function onClickFun() {
    if (
      summary.preferences &&
      summary.beanType &&
      summary.deliveries &&
      summary.grind &&
      summary.quantity
    ) {
      setSummaryWindowVis(true);
    }
  }
  return (
    <>
      <section className="relative flex flex-col gap-30 md:gap-36 xl:flex-row xl:px-21.25 xl:justify-between xl:items-start">
        <OrderNavigation questions={questions} handleOnChangeVis={handleOnChangeVis}/>

        <div className="flex flex-col gap-30 md:gap-36 xl:gap-22">
          {questions.map((question, index) => (
            <QuestionModel
              key={index}
              id={`question-${index}`}
              question={question}
              handleOnClickAnswer={(answerTitle: string) =>
                handleOnClickAnswer(index, answerTitle)
              }
              handleOnChangeVis={(status:boolean) => handleOnChangeVis(index, status)}
              selectedAnswer={summary[keys[index]]}
              visibility={visibilities[keys[index]]}
            />
          ))}
          <div className="flex flex-col items-center gap-14 md:gap-10 xl:items-end">
            <OrderSummary summary={summary} />
            <div>
              <CreateMyPlanBtn onClickFun={onClickFun} />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {summaryWindowVis && (
            <OrderSummaryWindow
              setSummaryWindowVis={setSummaryWindowVis}
              summary={summary}
            />
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
