import useDelayedValue from "./hooks/useDelayedValue";
import usePointerPosition from "./hooks/usePointerPosition";

function DotsWrapper() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos4, 50);

  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

function Dot({ position, opacity }) {
  return (
    <div
      style={{
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: "skyblue",
        position: "absolute",
        transform: "translate(-25px, -25px)",
        top: position.y,
        left: position.x,
        opacity,
      }}
    ></div>
  );
}
