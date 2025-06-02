import { FileText, Lightbulb, Award, ThumbsUp, X } from "lucide-react"

export default function IncludedExcludedFeatures() {
  const includedItems = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "All Inclusive Report",
      description: "The amazing way to olor sit amet, consectetur",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "What makes your child unique",
      description: "The amazing way to olor sit amet, consectetur",
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Your child's inherent talents",
      description: "The amazing way to olor sit amet, consectetur",
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-purple-600" />,
      title: "Positive Parenting",
      description: "The amazing way to olor sit amet, consectetur",
    },
  ]

  const notIncludedItems = [
    {
      title: "Personal consultation is not included",
      description: "The amazing way to olor sit amet, consectetur",
    },
    {
      title: "Future forecasts are not included",
      description: "The amazing way to olor sit amet, consectetur",
    },
    {
      title: "We won't negatively label your child",
      description: "The amazing way to olor sit amet, consectetur",
    },
    {
      title: "No dosha, dasha analysis",
      description: "The amazing way to olor sit amet, consectetur",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 mb-12">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded mr-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">📋</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What&apos;s Included & What&apos;s not Included</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The LittleDino&apos;s mission is to provide affordable, high-quality early education and childcare services
            </p>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="border-2 border-dashed border-blue-300 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* What's Included Column */}
            <div className="space-y-6">
              {includedItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0">{item.icon}</div>
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
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg">
                  <div className="flex-shrink-0">
                    <X className="w-8 h-8 text-gray-500" />
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
