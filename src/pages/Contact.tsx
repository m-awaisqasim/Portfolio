import { motion } from "framer-motion";

const channels = [
  {
    label: "Email",
    value: "sheikhawais2566@gmail.com",
    href: "mailto:sheikhawais2566@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/m-awaisqasim",
    href: "http://www.linkedin.com/in/m-awaisqasim",
  },
  {
    label: "GitHub",
    value: "github.com/AwaisQasim006",
    href: "https://github.com/AwaisQasim006",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const Contact = () => {
  return (
    <section className="h-screen w-full bg-white text-black font-sans px-4 md:px-8 lg:px-12 overflow-hidden flex items-center justify-center relative">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 max-w-[1400px] w-full mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full py-2">
          <motion.div variants={itemVariants} className="mb-8 lg:mb-0">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight text-left">
              Contact <br />
              Me <span className="inline-block ml-2">→</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 lg:mt-0">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-black/60">
              Research · Collaboration · Networking
            </h2>
            <p className="text-base md:text-lg font-normal leading-relaxed text-black/80 max-w-md text-left">
              Open to research discussions, collaborative projects, and connecting with people
              working in quantitative finance, systematic trading, and financial technology.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Channels */}
        <motion.div
          className="lg:col-span-5 flex flex-col justify-center"
          variants={itemVariants}
        >
          <div className="flex flex-col border-t border-black">
            {channels.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-6 py-8 border-b border-black hover:bg-black hover:text-white transition-colors duration-300 px-1 md:px-3"
              >
                <span className="text-2xl md:text-4xl font-black uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300 ease-out">
                  {label} <span className="opacity-70">↗</span>
                </span>
                <span className="text-xs font-mono tracking-widest text-black/60 group-hover:text-white/70 transition-colors duration-300 text-right">
                  {value}
                </span>
              </a>
            ))}
          </div>

          <motion.p
            variants={itemVariants}
            className="mt-10 text-xs font-bold uppercase tracking-widest text-black/50"
          >
            Awais Qasim — Rawalpindi, Pakistan
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
