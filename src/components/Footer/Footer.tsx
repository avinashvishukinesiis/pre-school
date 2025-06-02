import Link from "next/link"
import { Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-16 relative overflow-hidden mt-[-20px] ">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="10,10"
          />
          <path
            d="M0,0 C50,50 50,50 100,0 M0,100 C50,50 50,50 100,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center">
              <h2 className="text-3xl font-bold">
                <span className="text-pink-400">C</span>
                <span className="text-orange-400">u</span>
                <span className="text-yellow-400">d</span>
                <span className="text-green-400">d</span>
                <span className="text-blue-400">l</span>
                <span className="text-purple-400">e</span>
                <span className="text-pink-400">s</span>
              </h2>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Come visit The Little Dino Center for yourself
              <br />
              so you can tour the rooms and
              <br />
              meet some of our educators.
              <br />
              We offer high Quality early education.
            </p>

            <div className="flex items-center">
              <div className="bg-pink-400 rounded-full p-2 mr-3">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-medium">+1 800 777 000</span>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Useful Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="text-gray-300 hover:text-white transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-gray-300 hover:text-white transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-gray-300 hover:text-white transition-colors">
                  Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-medium mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-pink-400 mb-1">Address::</p>
                <p className="text-gray-300">Germany – 785 15h Street, Office 478 Berlin, De 81566</p>
              </div>
              <div>
                <p className="text-pink-400 mb-1">Mail Us::</p>
                <a href="mailto:Blippi@example.com" className="text-gray-300 hover:text-white transition-colors">
                  Blippi@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-xl font-medium mb-6">Branches</h3>
            <ul className="space-y-4">
              <li className="text-gray-300">Nagpur</li>
              <li className="text-gray-300">Pune</li>
              <li className="text-gray-300">Bengaluru</li>
              <li className="text-gray-300">Mumbai</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-indigo-800 my-12"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">Like-themes © All Rights Reserved - 2025</div>
      </div>
    </footer>
  )
}
