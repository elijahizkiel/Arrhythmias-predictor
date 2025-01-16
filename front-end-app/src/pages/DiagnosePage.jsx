import { useState } from "react";
import InputField from "../components/InputField";
import Label from "../components/Label";
import UserAvatar from "../components/UserAvatar";
import assets from "../assets/imgs";
import Button from "../components/Button";

function DiagnosePage({ onHome }) {
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
    ecg_duration: true,
  });
  return (
    <div>
      <header>
        <Label text="We care" classes="logo" onClick={onHome} />
        <UserAvatar imgSource={"../assets/list-bullet.png"} />
      </header>
      <main>
        <Label
          text="First fill the form and hit Check result button to see result!"
          classes="diagnose-instruction"
        />
        <div style={{ display:"flex", flexDirection:"row" }}>
          <div>
          <Label text="If you got trouble filling the form, play video below" />
          <img
            className="pointer_hand"
            style={{ width: "15vw", rotate: "180deg" }}
            src={assets.pointerHand}
            alt="pointer hand"
          />
          <div style={{ backgroundColor:"red", height:"95vh" }}></div>
        </div>
        <div >
          <form>
          <InputField
            type="number"
            onChange={(e) => {
              if (e.target.value.trim === "" || e.target.value === 0) {
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
            children={
              missingFields.age && (
                <p style={{ color: "red" }}>please fill the patient's age</p>
              )
            }
          />
          <fieldset className="input-set">
            <legend>Gender</legend>
            <select
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
          <InputField
            val={fields.HRBeat}
            label="Heart Beat"
            type="number"
            onInput={(e) => {
              setFields((prev) => {
                return { ...prev, HRBeat: e };
              });
              if (e.trim === "" || e === 0) {
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
            children={
              missingFields.HRBeat ? (
                <p style={{ color: "red" }}>
                  please fill the patient's heart beat{" "}
                </p>
              ) : null
            }
          />

          <InputField
            label={"QRS"}
            onChange={(e) => {
              if (e.target.value.trim === "" || e.target.value === 0) {
                setMissing((prev) => {
                  return {
                    ...prev,
                    qrsDuration: true,
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
            children={
              missingFields.qrsDuration && (
                <p style={{ color: "red" }}>
                  please fill the QRS from the reading
                </p>
              )
            }
          />
          <InputField
            label="QT/QTc"
            onChange={(e) => {
              if (e.target.value.trim === "" || e.target.value === 0) {
                setMissing((prev) => {
                  return {
                    ...prev,
                    age: true,
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
            children={
              missingFields.qtQTc && (
                <p style={{ color: "red" }}>please fill the patient's QT/QTc</p>
              )
            }
          />
          <InputField
            onChange={(e) => {
              if (e.target.value.trim === "" || e.target.value === 0) {
                setMissing((prev) => {
                  return {
                    ...prev,
                    PRTAxis: true,
                  };
                });
              }
            }}
            type="text"
            label="P/QRS/T"
            val={fields.PRTAxis}
            onInput={(e) => {
              setFields((prev) => {
                return { ...prev, PRTAxis: e };
              });
            }}
          />
          <Button
            classes="btn submit-btn primary"
            text="Check Result"
            sendRequest={async () => {
              const parseAxis = (t) =>{
                let axes = fields.PRTAxis.split("/")
                return parseInt(axes[t])
              }
              const parseQtQtc = (t) => {
                let qtqc = fields.qtQTc.split("/");
                return parseInt(qtqc[t]);
              }
              let data = {
                age: parseInt(fields.age),
                gender: parseInt(fields.gender),
                heartRate: parseInt(fields.HRBeat),
                qrsDuration: parseInt(fields.qrsDuration),
                qt: parseQtQtc(0),
                qtc:parseQtQtc(1), 
                rAxis:parseAxis(1),
                tAxis:parseAxis(2),
                qrsCount:Math.round(fields.HRBeat/6)
              };
              console.log("~~~~~~~~~~~~&&& data sent for diagnose~~~~~~~~~~`", data)
              const result = await fetch("/diagnose", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({patient_ecg:data}),
              }).then((response) => response.json());
              console.log(result);
            }}
          />
        </form>
        </div></div>
      </main>
    </div>
  );
}

export default DiagnosePage;