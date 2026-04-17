const AppointmentForm = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-8">
          Book Appointment
        </h2>

        <form className="grid gap-4">

          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-3 rounded"
          />

          <input
            type="date"
            className="border p-3 rounded"
          />

          <textarea
            placeholder="Describe your issue"
            className="border p-3 rounded"
          />

          <button className="bg-blue-600 text-white py-3 rounded">
            Submit
          </button>

        </form>

      </div>
    </section>
  );
};

export default AppointmentForm;