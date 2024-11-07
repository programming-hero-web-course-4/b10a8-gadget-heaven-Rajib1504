import { useEffect } from "react";
const Statistics = () => {
  useEffect(() => {
    document.title = `Statstics | Gadget-World`;
  }, []);
  return <div>Statstics</div>;
};

export default Statistics;
