import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import imageList from "./utils/imageCarousel.json";

export function ImageCarousel() {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current !== null) {
      const fullWidth = carousel.current.scrollWidth;
      const currentWidth = carousel.current.offsetWidth;
      setWidth(fullWidth - currentWidth);
    }
  }, []);

  return (
    <>
      <motion.div className="carousel" ref={carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {imageList.map((image) => (
            <motion.div key={image.id} className="carousel-item">
              {" "}
              <img alt={image.alt} src={image.url} />{" "}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <p style={{ textAlign: "right", color: "white", marginRight: "1%" }}>
        More Photos →
      </p>
    </>
  );
}
