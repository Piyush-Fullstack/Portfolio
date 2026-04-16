import { HERO_CONTENT } from '../constants';

import profilepic from '../assets/piyushvermaprofile.png';

import { motion } from 'framer-motion';



const Hero = () => {

  return (

    <div className="border-b border-neutral-900 pb-4 lg:mb-35">

      <div className="flex flex-wrap">

        {/* Left Side */}

        <motion.div

          className="w-full lg:w-1/2"

          initial={{ x: -100, opacity: 0 }}

          animate={{ x: 0, opacity: 1 }}

          transition={{ duration: 0.8 }}

        >

          <div className="flex flex-col items-center lg:items-start">

            <motion.h1

              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"

              initial={{ opacity: 0 }}

              animate={{ opacity: 1 }}

              transition={{ delay: 0.3, duration: 1 }}

            >

              Piyush Verma

            </motion.h1>



            <motion.span

              whileHover={{ scale: 1.2 }}

              whileTap={{ scale: 1.1 }}

              drag="x"

              dragConstraints={{ left: -100, right: 100 }}

              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"

            >

              Mern Stack developer

            </motion.span>



            <motion.p

              className="my-2 max-w-xl py-6 font-light tracking-tighter"

              initial={{ y: 20, opacity: 0 }}

              animate={{ y: 0, opacity: 1 }}

              transition={{ delay: 0.6, duration: 0.8 }}

            >

              {HERO_CONTENT}

            </motion.p>

          </div>

        </motion.div>



        {/* Right Side */}

        <motion.div

          className="w-full lg:w-1/2 lg:p-8"

          initial={{ scale: 0.8, opacity: 0 }}

          animate={{ scale: 1, opacity: 1 }}

          transition={{ delay: 0.5, duration: 0.8 }}

        >

          <div className="flex justify-center">

            <motion.img

              src={profilepic}

              alt="profile"

              whileHover={{ scale: 1.05 }}

              className="rounded-full shadow-lg h-100"

            />

          </div>

        </motion.div>

      </div>

    </div>

  );

};



export default Hero; 
