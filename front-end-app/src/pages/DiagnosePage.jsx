import { useRef, useState } from "react";
import InputField from "../components/InputField";
import Label from "../components/Label";
import assets from "../assets/imgs";
import Button from "../components/Button";

function DiagnosePage({ onChatBot }) {
  let [fields, setFields] = useState({
    age: 0,
    gender: 0,
    HRBeat: 0,
    qrsDuration: 0,
    qtQTc: "",
    PRTAxis: "",
  });
  let [missingFields, setMissing] = useState({
    age: 0,
    HRBeat: 0,
    qrsDuration: 0,
    qtQTc: 0,
    PRTAxis: 0,
  });

  const [showingResult, setShowingResult] = useState(false);

  const result = useRef(null);
  const recommendation = useRef(null);
  const diagnosePage = useRef(null);

  const showResult = (response) => {
    result.current.innerText =
      response.prediction.prediction4 + "/" + response.prediction.prediction12;
    recommendation.innerText = response.recommendation.parts;
  };
  const closeResult = () => {
    diagnosePage.current.classes = "diagnose-page";
    setShowingResult(false);
  };
  return (
    <div id="diagnose-service">
      <main id="diagnose-page" ref={diagnosePage} className="diagnose-page">
        <h1 className="diagnose-title">Diagnose</h1>
        <p className="diagnose-instruction">
          First fill the form and hit <span>&quot;Check result&quot;</span>
          button to see result!
        </p>
        <div className="diagnose-container">
          <div className="form-container">
            <form>
              <div className="input-container">
                <div className="age">
                  <InputField
                    type="number"
                    onChange={(e) => {
                      if (
                        !e.target.value.trim() ||
                        parseInt(e.target.value) === 0
                      ) {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            age: 1,
                          };
                        });
                      } else {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            age: 2,
                          };
                        });
                      }
                    }}
                    label={"Age:"}
                    val={fields.age}
                    onInput={(e) => {
                      setFields((prev) => {
                        return { ...prev, age: e };
                      });
                    }}
                    required
                  />
                  {missingFields.age === 1 && (
                    <p className="missing-field-warning">
                      please fill the patient's age
                    </p>
                  )}
                </div>
                <fieldset
                  style={{ maxHeight: "fit-content" }}
                  className="input-set"
                >
                  <legend>Gender</legend>
                  <select
                    className="input"
                    value={fields.gender}
                    onChange={(e) => {
                      setFields((prev) => {
                        return { ...prev, gender: e.target.value };
                      });
                    }}
                  >
                    <option value={1}>Male</option>
                    <option value={0}>Female</option>
                  </select>
                </fieldset>
                <div className="heart-rate">
                  <InputField
                    val={fields.HRBeat}
                    label="Heart Beat"
                    type="number"
                    onChange={(e) => {
                      if (
                        !e.target.value.trim() ||
                        parseInt(e.target.value) === 0
                      ) {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            HRBeat: 1,
                          };
                        });
                      } else {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            HRBeat: 2,
                          };
                        });
                      }
                    }}
                    onInput={(e) => {
                      setFields((prev) => {
                        return { ...prev, HRBeat: e };
                      });
                    }}
                    required
                  />
                  {missingFields.HRBeat === 1 && (
                    <p className="missing-field-warning">
                      please fill the patient's heart beat{" "}
                    </p>
                  )}
                </div>
                <div className="qrs-duration">
                  <InputField
                    label={"QRS"}
                    onChange={(e) => {
                      if (
                        !e.target.value.trim() ||
                        parseInt(e.target.value) === 0
                      ) {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            qrsDuration: 1,
                          };
                        });
                      } else {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            qrsDuration: 2,
                          };
                        });
                      }
                    }}
                    type="number"
                    val={fields.qrsDuration}
                    onInput={(e) => {
                      setFields((prev) => {
                        return { ...prev, qrsDuration: e };
                      });
                    }}
                    required
                  />
                  {missingFields.qrsDuration === 1 && (
                    <p className="missing-field-warning">
                      please fill the QRS from the reading
                    </p>
                  )}
                </div>
                <div className="qt-qtc">
                  <InputField
                    label="QT/QTc"
                    onChange={(e) => {
                      if (
                        !e.target.value.trim() ||
                        parseInt(e.target.value) === 0
                      ) {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            qtQTc: 1,
                          };
                        });
                      } else {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            qtQTc: 2,
                          };
                        });
                      }
                    }}
                    type={"text"}
                    val={fields.qtQTc}
                    onInput={(e) => {
                      setFields((prev) => {
                        return { ...prev, qtQTc: e };
                      });
                    }}
                    required
                  />
                  {missingFields.qtQTc === 1 && (
                    <p className="missing-field-warning">
                      please fill the patient's QT/QTc
                    </p>
                  )}
                </div>
                <div className="prt-axis">
                  <InputField
                    onChange={(e) => {
                      if (
                        !e.target.value.trim() ||
                        parseInt(e.target.value) === 0
                      ) {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            PRTAxis: 1,
                          };
                        });
                      } else {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            PRTAxis: 2,
                          };
                        });
                      }
                    }}
                    type="text"
                    label="P/QRS/T"
                    val={fields.PRTAxis}
                    required
                    onInput={(e) => {
                      setFields((prev) => {
                        return { ...prev, PRTAxis: e };
                      });
                    }}
                  />
                  {missingFields.PRTAxis === 1 && (
                    <p className="missing-field-warning">
                      please fill the patient's P/QRS/T
                    </p>
                  )}
                </div>
              </div>
              <Button
                classes="btn submit-btn primary"
                text="Check Result"
                sendRequest={async (e) => {
                  const parseAxis = (t) => {
                    let axes = fields.PRTAxis.split("/");
                    return parseInt(axes[t]);
                  };
                  const parseQtQtc = (t) => {
                    let qtqc = fields.qtQTc.split("/");
                    return parseInt(qtqc[t]);
                  };
                  let data = {
                    age: parseInt(fields.age),
                    gender: parseInt(fields.gender),
                    heartRate: parseInt(fields.HRBeat),
                    qrsDuration: parseInt(fields.qrsDuration),
                    qt: parseQtQtc(0),
                    qtc: parseQtQtc(1),
                    rAxis: parseAxis(1),
                    tAxis: parseAxis(2),
                    qrsCount: Math.round(fields.HRBeat / 6),
                  };
                  const result = await fetch("/diagnose", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ patient_ecg: data }),
                  }).then((response) => response.json());
                  showResult(result);
                  e.stopPropagation();
                  diagnosePage.addEventListener("click", () => {
                    closeResult();
                  });
                }}
              />
            </form>
          </div>
          <div className="help-provider">
            <Label text="If you got trouble filling the form, see image below" />
            <img
              className="pointer-hand"
              src={assets.pointerHand}
              alt="pointer hand"
            />
          </div>
        </div>
      </main>
      {showingResult && (
        <div id="result-card" className="result-card">
          <div className="result-header">
            <h2 className="result-title">Result</h2>
            <span className="close-result-btn btn" onClick={closeResult}>
              X
            </span>
          </div>
          <p id="result" ref={result}></p>
          <p id="recommendation" ref={recommendation}></p>
          <div className="ask-bot">
            If any further clarification needed ask{" "}
            <Button
              classes="ask-bot-btn"
              text="Chat Bot"
              sendRequest={onChatBot}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DiagnosePage;
