import { CONTACT } from "../constants";

import { motion } from "framer-motion";

const Contact = () => {

  return (

    <motion.div

      className="border-b border-neutral-900 pb-20"

      initial={{ opacity: 0, y: 50 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true }}

      transition={{ duration: 0.6 }}

    >

      <motion.h1

        className="my-10 text-center text-4xl"

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: 0.2, duration: 0.6 }}

      >

        Get in Touch

      </motion.h1>



      <div className="text-center tracking-tighter">

        <motion.p

          className="my-4"

          initial={{ opacity: 0, x: -50 }}

          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ once: true }}

          transition={{ delay: 0.3, duration: 0.5 }}

        >

          {CONTACT.address}

        </motion.p>



        <motion.p

          className="my-4"

          initial={{ opacity: 0, x: 50 }}

          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ once: true }}

          transition={{ delay: 0.4, duration: 0.5 }}

        >

          {CONTACT.phoneNo}

        </motion.p>



        <motion.a

          href={`mailto:${CONTACT.email}`}

          className="underline decoration-purple-400 hover:text-purple-400"

          initial={{ scale: 0.8, opacity: 0 }}

          whileInView={{ scale: 1, opacity: 1 }}

          viewport={{ once: true }}

          transition={{ delay: 0.5, duration: 0.5, type: "spring" }}

        >

          {CONTACT.email}

        </motion.a>

      </div>

    </motion.div>

  );

};



export default Contact;
