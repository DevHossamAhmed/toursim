"use client"
import About from "@/components/about/About";
import BackUpPage from "@/components/BackUpPage";
import Main from "@/components/home/Main";
import Programs from "@/components/programs/Programs";
import QualificatioStages from "@/components/qualification-stages/QualificationStages";
import TermsAndPolicies from "@/components/Terms-and-policies/TermsAndPolicies";

export default function Home() {
  return (
    <main >
      <Main/>
      <About/>
      <TermsAndPolicies/>
      <QualificatioStages/>
      <Programs/>
    </main>
  );
}
