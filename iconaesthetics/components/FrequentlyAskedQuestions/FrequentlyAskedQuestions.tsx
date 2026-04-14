import FAQ from "../ui/FAQ/FAQ";
import { Italiana } from "next/font/google";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });

const FrequentlyAskedQuestions = () => {
  return (
    <div className="bg-(--primary) px-32">
        <div className="flex items-start p-20 mx-auto">
            <div className="flex flex-col">
                <div className={`${italiana.className} text-4xl mb-10`}>
                    <h1>Have Questions?</h1>
                    <h1>We&apos;re Here to Help</h1>
                </div>
                <div className="flex flex-col gap-4 font-thin w-3/4 h-1/2">
                    <p>At Beautiva, informed decisions lead to better results. We’ve gathered answers to common questions about our services and care process.</p>
                    <p>Still have questions? Feel free to contact our team—we’re happy to assist you.</p>
                </div>
            </div>

            <div>
                <FAQ />
            </div>
        </div>
    </div>
  )
}

export default FrequentlyAskedQuestions;