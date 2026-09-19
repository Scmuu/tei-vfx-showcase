const petals = [
  { left: "4%", delay: "-7s", duration: "19s", size: "32px", drift: "72px" },
  { left: "13%", delay: "-16s", duration: "25s", size: "48px", drift: "-55px" },
  { left: "22%", delay: "-2s", duration: "22s", size: "38px", drift: "94px" },
  { left: "31%", delay: "-20s", duration: "28s", size: "54px", drift: "-82px" },
  { left: "41%", delay: "-11s", duration: "24s", size: "42px", drift: "68px" },
  { left: "52%", delay: "-4s", duration: "30s", size: "58px", drift: "-76px" },
  { left: "62%", delay: "-23s", duration: "27s", size: "35px", drift: "88px" },
  { left: "71%", delay: "-13s", duration: "21s", size: "50px", drift: "-64px" },
  { left: "81%", delay: "-6s", duration: "26s", size: "40px", drift: "78px" },
  { left: "91%", delay: "-18s", duration: "29s", size: "56px", drift: "-92px" },
  { left: "97%", delay: "-9s", duration: "23s", size: "36px", drift: "-70px" },
];

const PetalFall = () => (
  <div className="petal-fall" aria-hidden="true">
    {petals.map((petal, index) => (
      <span
        key={index}
        className="petal"
        style={{
          "--petal-left": petal.left,
          "--petal-delay": petal.delay,
          "--petal-duration": petal.duration,
          "--petal-size": petal.size,
          "--petal-drift": petal.drift,
        } as React.CSSProperties}
      />
    ))}
  </div>
);

export default PetalFall;