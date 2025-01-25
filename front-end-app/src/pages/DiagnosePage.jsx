import { useState } from "react";
import InputField from "../components/InputField";
import Label from "../components/Label";
import assets from "../assets/imgs";
import Button from "../components/Button";

function DiagnosePage({onChatBot}) {
  let [fields, setFields] = useState({
    age: 0,
    gender: 0,
    HRBeat: 0,
    qrsDuration: 0,
    qtQTc: "",
    PRTAxis: "",
  });
  let [missingFields, setMissing] = useState({
    age: true,
    HRBeat: true,
    qrsDuration: true,
    qtQTc: true,
    PRTAxis: true,
  });
  const showResult = (response) => {
    document.getElementById("diagnose-page").style.filter = "blur(3px)"
    document.getElementById("result-card").style.display = "block";
    document.getElementById("result").innerText = response.prediction.prediction4 +"/"+ response.prediction.prediction12;
    document.getElementById("recommendation").innerText = response.recommendation.parts;
  };
  const closeResult = () => {
    document.getElementById("diagnose-page").style.filter = "none";
    document.getElementById("result-card").style.display = "none";
  };
  return (
    <div id="diagnose-service">
      <main id="diagnose-page">
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
                            age: true,
                          };
                        });
                      } else {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            age: false,
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
                    required={true}
                  />
                  {missingFields.age && (
                    <p className="missing-field-warning">
                      please fill the patient's age
                    </p>
                  )}
                </div>
                <fieldset className="input-set">
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
                            HRBeat: true,
                          };
                        });
                      } else {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            HRBeat: false,
                          };
                        });
                      }
                    }}
                    onInput={(e) => {
                      setFields((prev) => {
                        return { ...prev, HRBeat: e };
                      });
                    }}
                    required={true}
                  />
                  {missingFields.HRBeat ? (
                    <p className="missing-field-warning">
                      please fill the patient's heart beat{" "}
                    </p>
                  ) : null}
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
                            qrsDuration: true,
                          };
                        });
                      } else {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            qrsDuration: false,
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
                    required={true}
                  />
                  {missingFields.qrsDuration && (
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
                            qtQTc: true,
                          };
                        });
                      } else {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            qtQTc: false,
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
                    required={true}
                  />
                  {missingFields.qtQTc && (
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
                            PRTAxis: true,
                          };
                        });
                      } else {
                        setMissing((prev) => {
                          return {
                            ...prev,
                            PRTAxis: false,
                          };
                        });
                      }
                    }}
                    type="text"
                    label="P/QRS/T"
                    val={fields.PRTAxis}
                    required={true}
                    onInput={(e) => {
                      setFields((prev) => {
                        return { ...prev, PRTAxis: e };
                      });
                    }}
                  />
                  {missingFields.PRTAxis && (
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
                  console.log(
                    "~~~~~~~~~~~~&&& data sent for diagnose~~~~~~~~~~`",
                    data
                  );
                  const result = await fetch("/diagnose", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ patient_ecg: data }),
                  }).then((response) => response.json());
                  console.log(result);
                  showResult(result);
                  e.stopPropagation();
                  document.getElementById('diagnose-service').addEventListener('click', ()=>{
                    (document.getElementById('result-card').style.display !== 'none') && closeResult()});
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
      <div id="result-card" className="result-card">
        <div className="result-header">
          <h2 className="result-title">Result</h2>
          <span className="close-result-btn btn" onClick={closeResult}>
            X
          </span>
        </div>
        <p id="result"></p>
        <p id="recommendation"></p>
        <div className="ask-bot">If any further clarification needed ask <Button classes="ask-bot-btn" text="Chat Bot" sendRequest={onChatBot} /></div>
      </div>
    </div>
  );
}

export default DiagnosePage;
