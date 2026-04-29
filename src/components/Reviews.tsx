import { Star, StarHalf } from "lucide-react";
const reviews = [
  {
    name: "Vaishali Chaudhary",
    text: "Dr parth narula is very good doctor. He did my mother knee replacement surgery. My mother had very good recovery and she started walking next day only. Sir is very soft spoken and he is very good ortho surgeon. Highly recommended to everyone.",
  },
  {
    name: "Sudesh Kadyan",
    text: "Dr Parth Narula is a dedicated and knowledgable doctor who takes care of knowing the reason behind your ailment before jumping to a hurried conclusion. Cheerful and smiling, very politely starts his task with his observations and set of questions to get into the root cause of the problem- which could be as simple as selecting your shoes for walk very carefully. Must visit him for expert suggestions and treatment. Booking online facility also available for convenience",
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
          href="https://www.google.com/maps/place/Narula+Ortho+%26+Physio+Centre/@28.6769803,77.2787863,17z/data=!4m8!3m7!1s0x390cfdf4d747b331:0x923edc950143c0b0!8m2!3d28.6769756!4d77.2813666!9m1!1b1!16s%2Fg%2F11myn6b_8c?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="inline-block mt-8 text-blue-600"
        >
          View all reviews on Google Reviews
        </a>

      </div>
    </section>
  );
};

export default Reviews;