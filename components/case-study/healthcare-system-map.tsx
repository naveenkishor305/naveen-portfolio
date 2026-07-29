"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const domains = [
  {
    number: "01",
    label: "Patient Access & Front-of-House",
    purpose:
      "Converting physical arrivals into legally compliant, unique digital identities and routing them to the correct clinical or administrative pathway.",
    operations: [
      "Patient registration",
      "Appointment scheduling",
      "Identity verification (Aadhaar / ABHA via ABDM)",
      "Triage routing",
      "Queue management",
    ],
    actors: "Receptionists, Registration Clerks, Appointment Coordinators, Triage Nurses",
    intersections: "Feeds directly into Revenue Cycle Management and Outpatient/Inpatient Care.",
  },
  {
    number: "02",
    label: "Outpatient Care & Ambulatory Services",
    purpose:
      "Delivering episodic clinical care, diagnostic evaluations and minor procedures without admitting the patient to a ward.",
    operations: [
      "Doctor consultations",
      "Vitals recording",
      "e-Prescriptions",
      "Ordering lab / radiology tests",
      "Day-care clinics",
    ],
    actors: "Consulting Physicians, OPD Nurses, Medical Assistants",
    intersections: "Heavy dependency on Diagnostics for results and Pharmacy for dispensing.",
  },
  {
    number: "03",
    label: "Emergency & Trauma Services",
    purpose:
      "Immediate triage, stabilization and life-saving interventions for acute trauma and medical emergencies.",
    operations: [
      "Triage categorisation (Red / Yellow / Green)",
      "Trauma resuscitation",
      "Medico-legal case documentation",
      "Emergency admissions",
      "Ambulance coordination",
    ],
    actors: "Emergency Medical Officers, Trauma Surgeons, Triage Nurses, Paramedics",
    intersections: "Bypasses standard front-of-house flow; triggers urgent Diagnostics, Blood Bank and fast-tracked ICU admission.",
  },
  {
    number: "04",
    label: "Inpatient Care & Ward Management",
    purpose:
      "Managing the longitudinal care, physical accommodation and daily clinical monitoring of admitted patients.",
    operations: [
      "Admission, Discharge & Transfer (ADT)",
      "Bed allocation",
      "Nursing vitals tracking",
      "Medication administration (eMAR)",
      "Discharge planning",
    ],
    actors: "Duty Doctors, Ward Nurses, Ward Managers, Dieticians",
    intersections: "Constant interaction with Pharmacy, Diagnostics, Support Services and Revenue Cycle.",
  },
  {
    number: "05",
    label: "Surgical & Critical Care",
    purpose:
      "Executing complex surgical procedures and providing life-sustaining care for critically ill patients.",
    operations: [
      "OT scheduling",
      "Pre-anesthesia checkups",
      "Surgical consent management",
      "Post-op recovery tracking",
      "Ventilator management",
    ],
    actors: "Surgeons, Anesthesiologists, Intensivists, Scrub Nurses, Perfusionists",
    intersections: "Relies on Supply Chain for implants/consumables and Blood Bank for transfusions.",
  },
  {
    number: "06",
    label: "Clinical Diagnostics & Therapeutics",
    purpose:
      "Processing biological samples and performing imaging studies to diagnose physiological conditions.",
    operations: [
      "Sample collection & barcode tracking",
      "Laboratory analysis",
      "Radiological imaging (X-ray, MRI, CT)",
      "Report generation",
      "Critical value alerts",
    ],
    actors: "Pathologists, Radiologists, Lab Technicians, Radiographers",
    intersections: "Receives orders from OPD/IPD/ER; pushes results back to the EMR; triggers billing.",
  },
  {
    number: "07",
    label: "Pharmacy & Medical Dispensing",
    purpose:
      "Managing the procurement, storage, dispensing and tracking of pharmaceutical products.",
    operations: [
      "Outpatient dispensing",
      "Inpatient ward indenting",
      "Narcotic drug tracking",
      "Expiry management",
      "Drug-allergy interaction checks",
    ],
    actors: "Chief Pharmacists, Clinical Pharmacists, Dispensing Clerks",
    intersections: "Sits between Supply Chain and Clinical Care; a major contributor to hospital revenue.",
  },
  {
    number: "08",
    label: "Financial Operations & Revenue Cycle",
    purpose:
      "Capturing all billable events, managing payer relationships and ensuring timely conversion of services into cash.",
    operations: [
      "Outpatient cash billing",
      "Insurance pre-authorization",
      "TPA desk management",
      "Claims submission (PM-JAY, corporate)",
      "Payment reconciliation",
    ],
    actors: "Billing Executives, TPA Coordinators, Financial Controllers, Cashiers",
    intersections: "Touches every clinical domain; depends on accurate doctor/nurse documentation to avoid claim denials.",
  },
  {
    number: "09",
    label: "Supply Chain, Procurement & Inventory",
    purpose:
      "Sourcing, purchasing, storing and distributing materials while minimising wastage and stockouts.",
    operations: [
      "Vendor management",
      "Purchase Order creation",
      "Goods Receipt Note processing",
      "Inventory valuation",
      "Capital equipment procurement",
    ],
    actors: "Procurement Managers, Store Keepers, Inventory Analysts",
    intersections: "Dictates supply availability for Pharmacy, OT and wards; impacts Financial Operations.",
  },
  {
    number: "10",
    label: "Support & Ancillary Services",
    purpose:
      "Maintaining facility hygiene, patient nutrition, physical security and equipment functionality.",
    operations: [
      "Dietary meal planning",
      "Biomedical equipment maintenance",
      "Housekeeping & infection control",
      "Laundry services",
      "Bio-medical waste management",
    ],
    actors: "Facility Managers, Biomedical Engineers, Dieticians, Housekeeping Staff",
    intersections: "Essential for IPD/ward turnaround and OT sterilization.",
  },
  {
    number: "11",
    label: "Administration, Governance & Compliance",
    purpose:
      "Ensuring the hospital operates within legal frameworks, manages its workforce and maintains quality standards.",
    operations: [
      "HR management (rosters, payroll, credentialing)",
      "IT infrastructure management",
      "Medical records archiving",
      "Quality audits",
      "Executive analytics",
    ],
    actors: "CEO/Administrators, HR Managers, Medical Superintendents, IT Admins, Quality Officers",
    intersections: "Oversees every domain via executive dashboards and audit logs.",
  },
] as const;

export default function HealthcareSystemMap() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <p className="mb-4 text-xs uppercase tracking-[0.16em] text-black/40">
        Select a domain to see its operations, actors and dependencies
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {domains.map((domain, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={domain.label}
              type="button"
              onClick={() =>
                setActiveIndex((current) => (current === index ? null : index))
              }
              aria-expanded={isActive}
              className={[
                "w-full rounded-3xl border p-5 text-left transition-colors",
                isActive
                  ? "border-[#2f6b55] bg-[#2f6b55] text-white"
                  : "border-black/10 bg-white/65 hover:border-[#2f6b55]/40",
              ].join(" ")}
            >
              <span
                className={[
                  "font-mono text-[11px]",
                  isActive ? "text-white/60" : "text-black/40",
                ].join(" ")}
              >
                {domain.number}
              </span>

              <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight">
                {domain.label}
              </h3>

              <p
                className={[
                  "mt-3 text-sm leading-6",
                  isActive ? "text-white/70" : "text-black/55",
                ].join(" ")}
              >
                {domain.purpose}
              </p>
            </button>
          );
        })}
      </div>

      <AnimatePresence initial={false} mode="wait">
        {activeIndex !== null && (
          <motion.div
            key={activeIndex}
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <div className="mt-4 grid gap-4 rounded-3xl border border-black/10 bg-white/80 p-5 sm:grid-cols-3 sm:p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-black/40">
                  Key operations
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {domains[activeIndex].operations.map((operation) => (
                    <span
                      key={operation}
                      className="rounded-full border border-[#2f6b55]/25 bg-[#dce6df] px-3 py-1.5 text-xs font-medium text-[#2f6b55]"
                    >
                      {operation}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-black/40">
                  Primary actors
                </p>
                <p className="mt-3 text-sm leading-6 text-black/70">
                  {domains[activeIndex].actors}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-black/40">
                  Critical intersections
                </p>
                <p className="mt-3 text-sm leading-6 text-black/70">
                  {domains[activeIndex].intersections}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 rounded-3xl border border-dashed border-black/15 p-5 sm:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-black/40">
              11 operational domains, decomposed further
            </p>

            <p className="mt-2 text-sm font-medium sm:text-base">
              Each domain breaks down into departments (e.g. Patient Access →
              Registration, Scheduling, Admission Desk).
            </p>
          </div>

          <p className="max-w-md text-sm leading-6 text-black/50">
            A hospital coordinates roughly 42 departments across these 11
            domains — mapping them first is what makes a modular platform
            possible.
          </p>
        </div>
      </div>
    </div>
  );
}
