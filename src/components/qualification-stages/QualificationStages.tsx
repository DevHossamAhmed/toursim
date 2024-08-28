  import React from "react";
  import Container from "../Container";
  import QuestionOne from "../Accordion/QuestionOne";
import QuestionTwo from "../Accordion/QuestionTwo";

  const QualificatioStages = () => {
    return (
      <div id="QualificatioStages" className="w-full  py-9">
        <Container>
          <h2 className="text-center text-[32px] text-[#82D9Bf] font-medium">الأسئلة الشائعة</h2>
          <div className="flex  flex-col lg:flex-row  lg:gap-8">
            <QuestionOne/>
            <QuestionTwo/>
          </div>
        </Container>
      </div>
    );
  };

  export default QualificatioStages;
