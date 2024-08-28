import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function QuestionOne() {
  return (
    <div className="mt-[20px]  text-white w-full">
      <Accordion className="mb-[15px] rounded-md mainAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-[#82D9Bf]" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="mainAccordion rounded-md"
        >
          <Typography className="flex flex-col text-[#82D9Bf] text-[19px] lg:text-[22px] font-medium">
            ما هي ألية التسجيل؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#123a39] text-white">
          <Typography className="text-[18px] font-medium">
            التسجيل من خلال الدخول على الموقع الخاص بالبرنامج التأهيلي للإرشاد
            السياحي بموقع وزارة السياحة وتعبئة طلب التقديم شرط توفير المتقدم على
            المعايير:
          </Typography>
          <span className="pb-[10px] block pr-[10px]  text-[18px] font-medium">
            - أن يكون المقدم سعودي الجنسية.{" "}
          </span>
          <span className="pb-[10px] block pr-[10px]  text-[18px] font-medium">
            - ألا يقل عمره عن 18 سنة.
          </span>
          <span className="pb-[10px] block pr-[10px]  text-[18px] font-medium">
            - عدم وجود حالات صحية تعيق تقديم الخدمة.
          </span>
          <span className="pb-[10px] block pr-[10px]  text-[18px] font-medium">
            يمر المتدرب خلال البرنامج التدريبي حسب ما هو موضح في رحلة المتدرب.
          </span>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-[15px] rounded-md mainAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-[#82D9Bf]" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="mainAccordion rounded-md"
        >
          <Typography className="flex flex-col text-[#82D9Bf] text-[19px] lg:text-[22px] font-medium">
            هل التسجيل في البرامج يعني القبول؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#123a39] text-white">
          <Typography className="text-[18px] font-medium">
            التسجيل في البرنامج لا يعني القبول النهائي، فبعد التسجيل تتم عملية
            الفرز والترشيح للمتقدمين.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-[15px] rounded-md mainAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-[#82D9Bf]" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="mainAccordion rounded-md"
        >
          <Typography className="flex flex-col text-[#82D9Bf] text-[19px] lg:text-[22px] font-medium">
            هل يحق للموظف في القطاع الخاص والحكومي الحصول على البرنامج التأهيلي
            للإرشاد السياحي؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#123a39] text-white">
          <Typography className="text-[18px] font-medium">
            نعم، يحق للموظف سواءاً في القطاع الحكومي او الخاص الالتحاق في
            البرنامج التأهيلي للإرشاد السياحي، والحصول على رخصة الإرشاد السياحي
            باعتبار ان مهنة الإرشاد السياحي مدرجة تحت وثيقة العمل الحر
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-[15px] rounded-md mainAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-[#82D9Bf]" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="mainAccordion rounded-md"
        >
          <Typography className="flex flex-col text-[#82D9Bf] text-[19px] lg:text-[22px] font-medium">
            هل قبولي في البرنامج يضمن الاستمرار في التدريب؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#123a39] text-white">
          <Typography className="text-[18px] font-medium">
            لا، فعليك إتمام حضور الأيام التدريبية المطلوبة حتى لا يتم استبعادك
            من البرنامج.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-[15px] rounded-md mainAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-[#82D9Bf]" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="mainAccordion rounded-md"
        >
          <Typography className="flex flex-col text-[#82D9Bf] text-[19px] lg:text-[22px] font-medium">
            كم المدة المتوقعة للانتهاء البرنامج التدريبي؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#123a39] text-white">
          <Typography className="text-[18px] font-medium">
            يكون التدريب حضوريا لمدة 7 أيام موزعة:
          </Typography>

          <span className="pb-[10px] block pr-[10px] text-[18px] font-medium">تدريب نظري: 4 أيام</span>
          <span className="pb-[10px] block pr-[10px] text-[18px] font-medium">تدريب تطبيقي: 2 يوم</span>
          <span className="pb-[10px] block pr-[10px] text-[18px] font-medium">
            اختبار نهائي للبرنامج: 1 يوم
          </span>
          <span className="pb-[10px] pt-[15px] block pr-[10px] text-[18px] font-medium">
            سياسة الغياب والحضور:
          </span>
          <span className="pb-[10px] block pr-[10px] text-[18px] font-medium">
            يتم الاستبعاد من البرنامج في حالة غياب 14% من مدة البرنامج او تأخير
            بإجمالي ساعة واحدة خلال مدة البرنامج كاملة
          </span>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-[15px] rounded-md mainAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-[#82D9Bf]" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="mainAccordion rounded-md"
        >
          <Typography className="flex flex-col text-[#82D9Bf] text-[19px] lg:text-[22px] font-medium">
            هل يتوجب دفع أي رسوم مالية للانضمام إلى البرنامج؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#123a39] text-white">
          <Typography className="text-[18px] font-medium">
            بعد تسجيلك بالموقع الخاص بالبرنامج التأهيلي للإرشاد السياحي بموقع
            وزارة السياحة وتعبئة طلب التقديم يمكنك تسجيل الدخول لبدأ الرحلة
            بالضغط على زر بدا الرحلة وكتابة رقم الهاتف المسجل به، كتابة تأكيد
            OTP وتبدأ رحلتك التدريبية.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
