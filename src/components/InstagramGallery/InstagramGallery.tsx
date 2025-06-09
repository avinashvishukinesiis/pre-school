import { Star } from "lucide-react"
import Link from "next/link"

export default function InstagramGallery() {
  const instagramPosts = [
    {
      image: "/photo/11.jpg",
      alt: "Child in red shirt playing",
      link: "https://instagram.com/p/example1",
    },
    {
      image: "/photo/18.jpg",
      alt: "Child with curly hair in orange jacket",
      link: "https://instagram.com/p/example2",
    },
    {
      image: "/photo/20.jpg",
      alt: "Two children sitting on yellow couch",
      link: "https://instagram.com/p/example3",
    },
    {
      image: "/photo/24.jpg",
      alt: "Adults and children doing crafts",
      link: "https://instagram.com/p/example4",
    },
    {
      image: "/photo/25.jpg",
      alt: "Child playing with colorful blocks",
      link: "https://instagram.com/p/example5",
    },
  ]

  return (
    <section className="py-16 bg-white relative">
      {/* Decorative element */}
      <div className="absolute top-10 right-10 opacity-20">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 0C30 10 10 15 0 40C10 60 30 70 40 80C50 70 70 60 80 40C70 15 50 10 40 0Z" fill="#A8D5D0" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Star className="w-10 h-10 text-yellow-400 mr-4" fill="currentColor" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Follow Instagram</h2>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Cuddle&apos;s mission is to provide affordable, high-quality early education and childcare services for
            working families to ensure every child.
          </p>
        </div>

        {/* Instagram Feed */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {instagramPosts.map((post, index) => (
            <Link
              href={post.link}
              key={index}
              className="block rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative p-1 border-2 border-dashed border-yellow-400 rounded-2xl">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img src={post.image || "/placeholder.svg"} alt={post.alt} className="w-full h-full object-cover" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Instagram Button */}
        <div className="text-center mt-10">
          <Link
            href="https://instagram.com/cuddle"
            className="inline-flex items-center px-6 py-3 bg-yellow-400 text-gray-800 rounded-full font-medium hover:bg-yellow-500 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow us on Instagram
          </Link>
        </div>
      </div>
    </section>
  )
}
