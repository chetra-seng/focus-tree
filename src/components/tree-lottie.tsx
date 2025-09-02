"use client";

import { useEffect, useRef } from "react";
import treeLottie from "../app/tree.json";
import Lottie from "lottie-react";

export default function TreeLottie() {
  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current?.setSpeed(0.7);
  }, []);

  return <Lottie lottieRef={ref} animationData={treeLottie} />;
}
