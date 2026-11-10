import { motion } from "framer-motion";

interface Interest {
  number: string;
  title: string;
  detail: string;
}

// Positioning: these are academic interests under active exploration —
// not claimed areas of professional expertise or research output.
const interests: Interest[] = [
  {
    number: "01",
    title: "Quantitative Research",
    detail: "Disciplined, evidence-based approaches to studying markets and financial systems.",
  },
  {
    number: "02",
    title: "Algorithmic Trading",
    detail: "Strategy logic, backtesting methodology, and the mechanics of systematic execution.",
  },
  {
    number: "03",
    title: "Financial Markets",
    detail: "How markets behave — structure, pricing, and the patterns that emerge from data.",
  },
  {
    number: "04",
    title: "FinTech & Digital Payments",
    detail: "How technology is reshaping payments, financial infrastructure, and access to finance.",
  },
  {
    number: "05",
    title: "Blockchain & Decentralized Finance",
    detail: "Fundamentals of distributed systems and their role in the future of financial systems.",
  },
];

const ResearchInterests = () => {
  return (
    <section className="min-h-screen bg-black text-white font-sans px-6 md:px-12 lg:px-16 py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 mb-16 md:mb-24"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Research Interests
          </h2>
          <p className="font-serif italic text-2xl md:text-4xl lg:text-5xl leading-tight max-w-3xl text-white">
            What I'm currently exploring — areas under active study, not finished work.
          </p>
        </motion.div>

        {/* Editorial Index */}
        <div className="flex flex-col">
          {interests.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_1.2fr] gap-x-5 md:gap-x-12 items-baseline py-6 md:py-8 border-t border-white/15 last:border-b hover:bg-white/[0.03] transition-colors duration-300 px-1 md:px-2"
            >
              <span className="text-xs font-mono tracking-widest text-white/45 w-8">
                {item.number}
              </span>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-300 ease-out">
                {item.title}
              </h3>
              <p className="col-start-2 md:col-start-3 text-sm md:text-base text-white/55 leading-relaxed max-w-xl normal-case font-normal">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
