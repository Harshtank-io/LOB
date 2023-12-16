import Scrollbar from "smooth-scrollbar";

import { useEffect } from "react";

var options = {
  damping: 0.1,
};

function Scroll() {
  useEffect(() => {
    Scrollbar.init(document.body, options);
  }, []);
}
export default Scroll;
