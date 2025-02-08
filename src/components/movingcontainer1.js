function MovingContainer() {
    const sectionRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        if (sectionRef.current) {
          const sectionTop = sectionRef.current.offsetTop;
          const sectionHeight = sectionRef.current.clientHeight;
          const scrollY = window.scrollY;
  
          const progress = Math.min(Math.max((scrollY - sectionTop) / sectionHeight, 0), 1);
          setScrollProgress(progress);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div ref={sectionRef} className="moving-section">
        <h2 className="section-title">Heading of The Images</h2>
        <div style={{ height: "10vh" }}></div>
        <motion.div
          className="moving-container"
          animate={{
            x: -scrollProgress * 700, // Moves left within section
            y: -scrollProgress * 800, // Moves up within section
          }}
          transition={{ type: "tween", ease: "linear" }}
        >
          <img src={Image1} alt="Image 1" className="image" />
          <img src={Image2} alt="Image 2" className="image" />
          <img src={Image3} alt="Image 3" className="image" />
        </motion.div>
  
        <p className="end-message">Ending Message........</p>
      </div>
    );
  }
  