import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <div id="contact" className="pb-24 pt-10">
      <motion.div
        className="rounded-3xl border border-slate-800 bg-slate-900/50 p-12 text-center backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-10 text-4xl font-light">
          Let's <span className="text-cyan-500 italic">Connect</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12 text-lg">
          {/* Address */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col items-center gap-2"
          >
            <FiMapPin className="text-cyan-500 text-2xl" />
            <p className="text-slate-400">{CONTACT.address}</p>
          </motion.div>

          {/* Phone */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col items-center gap-2"
          >
            <FiPhone className="text-cyan-500 text-2xl" />
            <p className="text-slate-400">{CONTACT.phoneNo}</p>
          </motion.div>

          {/* Email */}
          <motion.a
            href={`mailto:${CONTACT.email}`}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center gap-2 group"
          >
            <FiMail className="text-cyan-500 text-2xl group-hover:scale-110 transition-transform" />
            <p className="text-slate-200 border-b border-cyan-500/0 group-hover:border-cyan-500 transition-all">
              {CONTACT.email}
            </p>
          </motion.a>
        </div>

        <p className="mt-16 text-sm text-slate-600 font-mono italic">
          &lt; Crafted with React & Tailwind by Piyush Verma /&gt;
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
