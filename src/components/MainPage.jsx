import { useState, useEffect } from "react";
import "./styles/MainPage.css";
import PositionTeam from "./PositionTeam";

function MainPage() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("teamData"))
  );
  const [textRunLine, setTextRunLine] = useState(
    JSON.parse(localStorage.getItem("runLine"))
  );
  const leader =
    data && data.length > 0
      ? data
          .sort((a, b) => a.point - b.point)
          .reverse()
          .slice(0, 3)
      : [];

  useEffect(() => {
    setInterval(() => {
      setData(JSON.parse(localStorage.getItem("teamData")));
      setTextRunLine(JSON.parse(localStorage.getItem("runLine")));
    }, 500);
  }, []);

  return (
    <>
      <div className="runLine">
        {textRunLine && (
          <marquee id="textRunLine" scrollamount={textRunLine[0].speed}>
            {textRunLine[0].text}
          </marquee>
        )}
      </div>
      <div className="logo">
        <img className="sibLogo" src="/images/сиб лого.png" />
        <div className="rectangle">
          <div className="smallRectangle">ЛИДЕРЫ</div>
          <div className="leaders">
            <div className="leader">
              <div className="circle" style={{ backgroundColor: "#B0B7BA" }}>
                3
              </div>
              <div
                className="informLeaders leader3"
                style={{ backgroundColor: "#95999A" }}
              >
                <div
                  className="informLeadersInside"
                  style={{ backgroundColor: "#B0B7BA" }}
                >
                  <div className="leadersInsidelogoContainer">
                    <img
                      src="/images/Команда 1.webp"
                      className="leadersInsidelogo"
                    />
                  </div>
                  <div className="leadersInsideName">
                    {leader && leader.length > 2 && leader[2].name}
                  </div>
                  <div className="leadersInsidePoint">
                    {leader && leader.length > 2 && `${leader[2].point} баллов`}
                  </div>
                </div>
              </div>
            </div>
            <div className="leader">
              <div className="circle" style={{ backgroundColor: "#FBD300" }}>
                1
              </div>
              <div
                className="informLeaders leader1"
                style={{ backgroundColor: "#BB9F0A" }}
              >
                <div
                  className="informLeadersInside"
                  style={{ backgroundColor: "#FBD300" }}
                >
                  <div className="leadersInsidelogoContainer">
                    <img
                      src="/images/Команда 1.webp"
                      className="leadersInsidelogo"
                    />
                  </div>
                  <div className="leadersInsideName1">
                    {leader && leader.length > 2 && leader[0].name}
                  </div>
                  <div className="leadersInsidePoint1">
                    {leader && leader.length > 2 && `${leader[0].point} баллов`}
                  </div>
                </div>
              </div>
            </div>
            <div className="leader">
              <div className="circle" style={{ backgroundColor: "#D37B14" }}>
                2
              </div>
              <div
                className="informLeaders leader2"
                style={{ backgroundColor: "#A9610D" }}
              >
                <div
                  className="informLeadersInside"
                  style={{ backgroundColor: "#D37B14" }}
                >
                  <div className="leadersInsidelogoContainer">
                    <img
                      src="/images/Команда 1.webp"
                      className="leadersInsidelogo"
                    />
                  </div>
                  <div className="leadersInsideName">
                    {leader && leader.length > 2 && leader[1].name}
                  </div>
                  <div className="leadersInsidePoint">
                    {leader && leader.length > 2 && `${leader[1].point} баллов`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="nstuLogo" src="/images/нгту лого.png" />
      </div>
      <div className="containerTeam">
        {data &&
          data.length > 0 &&
          data
            .sort((a, b) => a.point - b.point)
            .reverse()
            .slice(3, data.length)
            .map((e, id) => (
              <PositionTeam
                id={e.id}
                pozition={id + 4}
                name={e.name}
                point={e.point}
              />
            ))}
      </div>
    </>
  );
}
export default MainPage;
