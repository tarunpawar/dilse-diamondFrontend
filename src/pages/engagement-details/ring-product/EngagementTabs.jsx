import React, { useState } from "react";
import "../../diamond/index.css";
import { useLocation, useNavigate } from "react-router-dom";

const EngagementTabs = ({ diamond }) => {
  const navigate = useNavigate();
  const defaultSteps = [
    { id: 1, label: "CHOOSE A SETTING" },
    { id: 2, label: "CHOOSE A DIAMOND" },
    { id: 3, label: "COMPLETE YOUR RING" },
  ];

  const ringSteps = [
    { id: 1, label: "CHOOSE A DIAMOND" },
    { id: 2, label: "CHOOSE A SETTING" },
    { id: 3, label: "COMPLETE YOUR RING" },
  ];
  const steps = diamond ? ringSteps : defaultSteps;
  // const steps = defaultSteps;

  // Set initial active step
  const [currentStep, setCurrentStep] = useState(() => {
    if (diamond) {
      return 2; // "CHOOSE A SETTING" active on
    }
    return 1;
  });

  const handleStepClick = (step) => {
    setCurrentStep(step.id);
    if (step.label === "CHOOSE A SETTING") {
      navigate("/engagement-rings");
    }
    if (step.label === "CHOOSE A DIAMOND") {
      navigate("/diamond");
    }
  };

  return (
    <>
      <div className="diamond-ring-wrapper">
        <div className="step-container">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step ${currentStep === step.id ? "active" : ""} ${
                step.id === 3 ? "disabled" : ""
              }`}
              onClick={() => step.id !== 3 && handleStepClick(step)} // 🚫 Prevent click for step 3
            >
              <div>
                <span className="step-number">{step.id}</span>

                <span className="step-divider"></span>

                <span className="step-label">{step.label}</span>
              </div>
              <div>
                {diamond?.shape?.image && index === 0 && (
                  <div className="ring-preview">
                    <img
                      src={`/images/shapes/${diamond.shape.image}`}
                      alt={diamond.shape.name || "NA"}
                      className="ring-preview-img"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EngagementTabs;
