import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function QuestionTwo() {
  return (
    <div className="mt-[20px] text-white w-full">
      <Accordion className="mb-[15px] mainAccordion rounded-md">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-[#82D9Bf]" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="mainAccordion rounded-md"
        >
          <Typography className="flex flex-col text-[19px] text-[#82D9Bf] lg:text-[22px] font-medium">
            ما هو اختبار السمات الشخصية؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#123a39] text-white">
          <Typography className="text-[18px] font-medium">
            اختبار لقياس السمات وهو عبارة عن 10 اسئلة يؤهلك للمرحلة التالية وهي
            المقابلة الشخصية.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-[15px] mainAccordion rounded-md">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-[#82D9Bf]" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="mainAccordion rounded-md"
        >
          <Typography className="flex flex-col text-[19px] text-[#82D9Bf] lg:text-[22px] font-medium">
            متى يمكنني حجز موعد للمقابلة الشخصية؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#123a39] text-white">
          <Typography className="text-[18px] font-medium">
            بعد القبول في اختبار السمات الشخصية يتاح لك حجز المقابلة الشخصية من
            خلال اختيار أحد التواريخ المتاحة بالصفحة.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-[15px] mainAccordion rounded-md">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-[#82D9Bf]" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="mainAccordion rounded-md"
        >
          <Typography className="flex flex-col text-[19px] text-[#82D9Bf] lg:text-[22px] font-medium">
            ماهي آلية المقابلة الشخصية؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#123a39] text-white">
          <span className="pb-[10px] block pr-[10px] text-[18px] font-medium">
            ارتداء الزي الرسمي الوطني
          </span>
          <span className="pb-[10px] block pr-[10px] text-[18px] font-medium">
            التجهيز والاستعداد الكامل للمقابلة الشخصية
          </span>
          <span className="pb-[10px] block pr-[10px] text-[18px] font-medium">
            الحضور في الموعد المحدد
          </span>
          <span className="pb-[10px] block pr-[10px] text-[18px] font-medium">
            تشغيل الصوت والصورة اثناء اجراء المقابلة الشخصية
          </span>
          <span className="pb-[10px] block pr-[10px] text-[18px] font-medium">
            تعقد المقابلة الشخصية عبر برنامج ZOOM
          </span>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-[15px] mainAccordion rounded-md">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-[#82D9Bf]" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="mainAccordion rounded-md"
        >
          <Typography className="flex flex-col text-[19px] text-[#82D9Bf] lg:text-[22px] font-medium">
            كيف يمكنني معرفة نتيجة الترشيح؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#123a39] text-white">
          <Typography className="text-[18px] font-medium">
            بعد الانتهاء من مرحلة المقابلة الشخصية مباشرةً تظهر لك نتيجة
            الترشيح، في حال قبولك.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-[15px] mainAccordion rounded-md">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-[#82D9Bf]" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="mainAccordion rounded-md"
        >
          <Typography className="flex flex-col text-[19px] text-[#82D9Bf] lg:text-[22px] font-medium">
            نتيجة الترشيح مقبول او مستبعد، ما الاجراء التالي؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#123a39] text-white">
          <span className="pb-[10px] block pr-[10px] text-[18px] font-medium">
            في حالة الاستبعاد: نعتذر عن قبولكم بالبرنامج التدريبي للإرشاد
            السياحي وذلك لعدم اجتيازكم المقابلة الشخصية
          </span>
          <span className="pb-[10px] block pr-[10px] text-[18px] font-medium">
            في حالة القبول: بقبولك ترشيحك في البرنامج التأهيلي للإرشاد السياحي
            يتم تزويدك برابط حجز يحتوي على جميع التواريخ المتاحة للتدريب مصنفة
            حسب المدن
          </span>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
