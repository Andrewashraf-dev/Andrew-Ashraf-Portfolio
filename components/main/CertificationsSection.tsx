import {
  certifications,
  certificationStats,
  Certification,
} from "@/components/sub/certifications";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
<h2 className="text-[30px] font-bold text-center text-white underline underline-offset-4 decoration-blue-500"
    >
      Certificates 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        {" "} & {" "}
      </span>
      Achievements
</h2>

        <p className="text-center text-gray-400 mb-12">
          Professional certifications that demonstrate my skills in software development,{" "}
          programming fundamentals, and modern engineering practices.
        </p>

        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {certifications.map((cert: Certification, index: number) => (
            <div
              key={index}
              className="relative group rounded-2xl p-5 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden bg-gray-800/60"
            >
              {/* Gradient Background with hover opacity change */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl pointer-events-none`}
              />

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 rounded-t-md pointer-events-none
                  opacity-50 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-r ${cert.color}`}
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                {cert.icon && (
                  <img src={cert.icon} alt={cert.title} className="w-12 h-12 mb-4" />
                )}

                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-300">{cert.provider}</p>
                <p className="text-xs text-gray-400 mt-2">📅 {cert.year}</p>

                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mt-4 inline-block bg-gradient-to-r ${cert.color} text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-md flex items-center gap-2`}
                  style={{ userSelect: "none" }}
                >
                  View Certificate
                  <ArrowTopRightOnSquareIcon
  className="
    w-4 h-4 
    animate-wiggleRotate
    transition-transform duration-300 
    group-hover:scale-125
  "
/>

                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-wrap justify-center gap-10">
            {certificationStats.map(
              (stat: { value: string; label: string }, idx: number) => (
                <div
                  key={idx}
                  className="relative group rounded-2xl p-5 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden bg-gray-800/60 flex flex-col justify-center items-center text-center w-40"
                >
                  {/* Background gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl pointer-events-none"
                  />

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-1 rounded-t-md pointer-events-none opacity-50 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-r from-blue-500 to-cyan-400"
                  />

                  <div className="relative z-10">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
