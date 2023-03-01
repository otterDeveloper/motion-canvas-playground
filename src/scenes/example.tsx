import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, waitFor } from "@motion-canvas/core/lib/flow";
import { createRef } from "@motion-canvas/core/lib/utils";
import { Circle } from "@motion-canvas/2d/lib/components";

export default makeScene2D(function* (view) {
  // Create your animations here
  const myCircle = createRef<Circle>();
  view.add(
    <Circle ref={myCircle} x={-300} width={240} height={240} fill="#e13238" />
  );
  yield* all(
    myCircle().position.x(300, 1).to(-300, 1),
    myCircle().fill("#e6a700", 1).to("#e13238", 1)
  );
});
