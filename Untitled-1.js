import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const sections = [
  { id: "hero", title: "Welcome!", content: "This is my portfolio homepage." },
  { id: "about", title: "About Me", content: "I'm a passionate developer..." },
  { id: "projects", title: "Projects", content: "Check out my latest work." },
  { id: "contact", title: "Contact", content: "Let's get in touch!" },
];

export default function Home() {
  return (
    <div>
      {sections.map((section) => (
        <motion.section
          key={section.id}
          id={section.id}
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          style={{
            minHeight: "80vh",
            margin: "60px 0",
            padding: "40px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}
        >
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </motion.section>
      ))}
      <style jsx>{`
        body {
          background: #f5f7fa;
        }
        .section {
          max-width: 700px;
          margin: 0 auto 60px auto;
        }
      `}</style>
    </div>
  );
}