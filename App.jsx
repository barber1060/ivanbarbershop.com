export default function App() {
  const services = [
    { name: 'Haircut', price: '$20' },
    { name: 'Beard Trim', price: '$10' },
    { name: 'Haircut + Beard', price: '$28' },
    { name: 'Skin Fade', price: '$25' },
  ];

  const hours = ['09:00','10:00','11:00','12:00','14:00','15:00','16:00','17:00'];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center px-8 py-5 border-b border-zinc-800">
        <h1 className="text-3xl font-bold text-yellow-500">Barber Ivan</h1>
        <div className="flex gap-5">
          <a href="#services">Services</a>
          <a href="#booking">Booking</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="grid md:grid-cols-2 gap-10 px-8 py-20 items-center">
        <div>
          <h2 className="text-6xl font-bold mb-6">
            Fresh Cuts <span className="text-yellow-500">Clean Fades</span>
          </h2>
          <p className="text-zinc-400 mb-8">
            Book your haircut with Barber Ivan today.
          </p>
          <a
            href="#booking"
            className="bg-yellow-500 text-black px-6 py-4 rounded-xl font-bold"
          >
            Book Appointment
          </a>
        </div>

        <img
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop"
          className="rounded-3xl h-[500px] object-cover w-full"
        />
      </section>

      <section id="services" className="px-8 py-20">
        <h3 className="text-4xl font-bold text-center mb-12">Services</h3>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800"
            >
              <div className="text-5xl mb-4">✂️</div>
              <h4 className="text-2xl font-bold mb-2">{service.name}</h4>
              <p className="text-yellow-500 text-xl">{service.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="px-8 py-20 bg-zinc-950">
        <h3 className="text-4xl font-bold text-center mb-12">
          Book Appointment
        </h3>

        <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-3xl">
          <div className="grid gap-5">
            <input type="date" className="bg-black p-4 rounded-xl border border-zinc-700" />
            <input type="text" placeholder="Your Name" className="bg-black p-4 rounded-xl border border-zinc-700" />
            <input type="tel" placeholder="Phone Number" className="bg-black p-4 rounded-xl border border-zinc-700" />

            <select className="bg-black p-4 rounded-xl border border-zinc-700">
              <option>Select Service</option>
              {services.map((service) => (
                <option key={service.name}>{service.name}</option>
              ))}
            </select>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hours.map((hour) => (
                <button
                  key={hour}
                  className="border border-zinc-700 rounded-xl py-3 hover:border-yellow-500"
                >
                  {hour}
                </button>
              ))}
            </div>

            <button className="bg-yellow-500 text-black py-4 rounded-xl font-bold">
              Confirm Booking
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="px-8 py-20 text-center">
        <h3 className="text-4xl font-bold mb-8">Contact</h3>
        <div className="space-y-3 text-zinc-400">
          <p>📞 +389 70 123 456</p>
          <p>📍 Main Street 25</p>
          <p>📸 @barberivan</p>
        </div>
      </section>
    </div>
  )
}
