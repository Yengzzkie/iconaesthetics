import FaqAccordion from "../ui/FaqAccordion/FaqAccordion";
import PrimaryButton from "../ui/Button/Button";
import { Italiana } from "next/font/google";
import questions from "@/data/questions.json";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });

const FrequentlyAskedQuestions = () => {
  return (
    <div id="faq" className="bg-(--primary) px-8 py-12 lg:px-32 lg:py-0">
      <div className="flex flex-col lg:flex-row items-start lg:p-20 mx-auto">
        <div className="flex flex-col mb-4">
          <div className={`${italiana.className} text-4xl mb-10`}>
            <h1>Have Questions?</h1>
            <h1>We&apos;re Here to Help</h1>
          </div>
          <div className="flex flex-col gap-4 font-thin lg:w-3/4 h-1/2">
            <p>
              At Icon Esthetics, we believe clarity builds confidence. Below are answers to the most common questions about our treatments and services.
            </p>
            <p>
              Still have questions? Feel free to contact our team—we’re happy to
              assist you.
            </p>
          </div>

          <PrimaryButton label="GET IN TOUCH" variant="secondary" className="self-start mt-6 w-full lg:w-fit" />
        </div>

        <div>
          {questions.map(
            (q: { question: string; answer: string }, index: number) => (
              <FaqAccordion
                question={q.question}
                answer={q.answer}
                key={index}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
