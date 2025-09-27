import {
  certifications,
  certificationStats,
  Certification, // ✅ import the type here
} from "@/components/sub/certifications";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Certifications & Achievements
        </h2>
        <p className="text-center text-gray-400 mb-12">
         Professional certifications that demonstrate my skills in software development, 
         programming fundamentals, and modern engineering practices.

        </p>

        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {certifications.map((cert: Certification, index: number) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20 rounded-2xl`}
              />

              <div className="relative z-10 justify-center items-center flex flex-col text-center">
                {cert.icon && (
                  <img
                    src={cert.icon}
                    alt={cert.title}
                    className="w-12 h-12 mb-4"
                  />
                )}

                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-300">{cert.provider}</p>
                <p className="text-xs text-gray-400 mt-2">📅 {cert.year}</p>

                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-white text-gray-900 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-200 transition"
                >
                  View Certificate ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 flex justify-center">
  <div className="flex flex-wrap justify-center gap-10">
    {certificationStats.map((stat, idx) => (
      <div
        key={idx}
        className="flex flex-col justify-center items-center text-center bg-gray-800 py-6 px-4 rounded-xl shadow-md w-40"
      >
        <p className="text-2xl font-bold">{stat.value}</p>
        <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
      </div>
    ))}
  </div>
</div>



      </div>
    </section>
  );
}
