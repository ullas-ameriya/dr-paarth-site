import { Star, StarHalf } from "lucide-react";
const reviews = [
  {
    name: "Akshay Yadav",
    text: "Best surgeon i have seen in Delhi. He replaced both my hips and knees, I have become more younger than I was 🙌🙌",
  },
  {
    name: "Trips Anshul",
    text: "I got my knee replaced by him. I was running a marathon next day 🔥🔥",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Patient Reviews
        </h2>

        <div className="flex items-center justify-center gap-3 mt-2 mb-10">
        <span className="text-xl font-semibold">4.5</span>

        <div className="flex items-center text-green-500">
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <StarHalf fill="currentColor" size={20} />
        </div>

        <span className="text-sm text-gray-500">
            (Based on patient reviews)
        </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600">"{r.text}"</p>
              <p className="mt-4 font-semibold">{r.name}</p>
            </div>
          ))}
        </div>

        <a
          href="https://www.practo.com/bangalore/doctor/dr-thimmappa-hegde-neurosurgeon"
          target="_blank"
          className="inline-block mt-8 text-blue-600"
        >
          View all reviews on Practo
        </a>

      </div>
    </section>
  );
};

export default Reviews;