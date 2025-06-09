import { ImCross } from "react-icons/im";

export default function IncludedExcludedFeatures() {
  const includedItems = [
  {
    icon: "/includeExcludeFeature/report.jpg",
    title: "All-Inclusive Child Progress Report",
    description:
      "Get detailed insights into your child's developmental milestones, learning styles, and social-emotional growth.",
  },
  {
    icon: "/includeExcludeFeature/bulb.jpg",
    title: "What Makes Your Child Unique",
    description:
      "Understand your child's personality, strengths, and preferences through compassionate observation and engagement.",
  },
  {
    icon: "/includeExcludeFeature/medal.jpg",
    title: "Recognizing Inherent Talents",
    description:
      "We celebrate your child’s natural talents—whether creative, logical, social, or physical—to help them shine confidently.",
  },
  {
    icon: "/includeExcludeFeature/thumbsup.jpg",
    title: "Positive Parenting Guidance",
    description:
      "Practical, uplifting advice to support your parenting journey with love, patience, and mindful communication.",
  },
]


  const notIncludedItems = [
  {
    title: "No Personal Consultation Included",
    description: "Our service is observational and curriculum-based without one-on-one therapist consultation.",
  },
  {
    title: "No Future Predictions or Forecasts",
    description: "We focus on nurturing potential, not predicting future career paths or destinies.",
  },
  {
    title: "No Negative Labelling of Any Child",
    description: "Every child is unique—we do not use terms that limit or define children negatively.",
  },
  {
    title: "No Dosha, Dasha or Astrological Analysis",
    description: "We believe in child development through education, love, and discovery—not astrology.",
  },
]


  return (
    <section className="py-16 bg-gray-50 relative flex items-center justify-center">

      <div className="container mx-auto px-4 md:w-[90%]">
        {/* Header Section */}
        <div className=" rounded-lg p-8 mb-12">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded mr-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">📋</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What&apos;s Included & What&apos;s not Included</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cuddle&apos;s mission is to provide affordable, high-quality early education and childcare services
            </p>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className=" rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* What's Included Column */}
            <div className="space-y-6">
              {includedItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0"> <img src={item.icon} alt={item.icon} /> </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What's Not Included Column */}
            <div className="space-y-6">
              {notIncludedItems.map((item, index) => (
                <div key={index} className="flex justify-center items-center space-x-4 p-4 bg-gray-100 rounded-lg ">
                  <div className="flex-shrink-0 h-[100%] flex justify-center items-center">
                    <ImCross size={"22px"} className="text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Small decorative element in bottom right */}
        {/* <div className="flex justify-end mt-4">
          <div className="w-8 h-8 border-2 border-dashed border-blue-300 rounded"></div>
        </div> */}
      </div>
    </section>
  )
}
