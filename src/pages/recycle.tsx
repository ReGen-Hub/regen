import React, { useState } from 'react';
import DatePickerComp from '../components/DatePicer';
import RequestRecycle from '../components/RequestRecycle'
import ScrapeRates from '../components/ScrpaeRates';

const PurchaseFlow = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleStepClick = (stepNumber: React.SetStateAction<number>) => {
    setStep(stepNumber);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <RequestRecycle handleStepClick={handleStepClick}/>
          </div>
        );
      case 2:
        return (
          <div>
            <ScrapeRates handleStepClick={handleStepClick}/>
          </div>
        );
      case 3:
        return (
          <div>
            <DatePickerComp/>
          </div>
        );
      case 4:
        return (
          <div>
            Order placed successfully!
          </div>
        );
      default:
        return null;
    }
  };

  const placeOrder = () => {
    setStep(4);
  };

  return (
    <div className="relative">
        <div className="flex justify-between mx-auto px-12 lg:px-32 pt-12">
            <div>
                <button disabled={step === 1} onClick={prevStep}>Back</button>
            </div>
            <div>
                <button disabled={step === 4} onClick={nextStep}>Next</button>
            </div>
      </div>
      <div className="flex justify-around mx-auto px-12 lg:px-32 pt-8">
        <button onClick={() => handleStepClick(1)}>Step 1</button>
        <button onClick={() => handleStepClick(2)}>Step 2</button>
        <button onClick={() => handleStepClick(3)}>Step 3</button>
      </div>
      {renderStep()}
    </div>
  );
};

export default PurchaseFlow;
