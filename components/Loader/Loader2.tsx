// import React, { useState, useEffect } from "react";
// import logoText from "@/public/logo.svg";
// import logoIcon from "@/public/logo-icon.svg";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Loader2 = () => {
//   return (
//     <div className="h-screen w-screen flex justify-center items-center bg-gray-5/40 fixed top-0 left-0 z-[999]">
//       <div className="flex justify-center items-center">
//         <motion.img
//           initial={{ scale: 0 }}
//           animate={{
//             scale: [1, 2, 2, 1, 0],
//             transition: {
//               type: "tween",
//               stiffness: 600,
//               damping: 15,
//               mass: 1,
//               duration: 1,
//               repeat: Infinity,
//               repeatDelay: 1,
//             },
//           }}
//           src={logoText.src}
//           width={100}
//           height={100}
//           alt="logo"
//         />

//         <motion.img
//           initial={{ scale: 0 }}
//           animate={{
//             scale: [0, 1, 2, 2, 1, 0],
//             transition: {
//               type: "tween",
//               stiffness: 600,
//               damping: 15,
//               mass: 1,
//               delay: 1,
//               duration: 1,
//               repeat: Infinity,
//               repeatDelay: 1,
//             },
//           }}
//           src={logoIcon.src}
//           width={100}
//           height={100}
//           alt="logo"
//         />
//       </div>
//     </div>
//   );
// };

// export default Loader2;
