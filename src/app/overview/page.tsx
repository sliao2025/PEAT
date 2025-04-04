"use client";
import { Card } from "@/components/Card";
import { DarkModeToggle } from "@/components/darkmodetoggle";
import Image from "next/image";

import { LineChart } from "@/components/LineChart";
export type PeriodValue = "previous-period" | "last-year" | "no-comparison";

const chartdata = [
  { date: "Jan 23", Depression: 6.2, Anxiety: 7.1 },
  { date: "Feb 23", Depression: 5.8, Anxiety: 6.5 },
  { date: "Mar 23", Depression: 6.5, Anxiety: 6.9 },
  { date: "Apr 23", Depression: 7.0, Anxiety: 6.8 },
  { date: "May 23", Depression: 6.9, Anxiety: 6.0 },
  { date: "Jun 23", Depression: 6.1, Anxiety: 5.6 },
  { date: "Jul 23", Depression: 7.2, Anxiety: 5.9 },
  { date: "Aug 23", Depression: 5.9, Anxiety: 6.1 },
  { date: "Sep 23", Depression: 5.4, Anxiety: 6.6 },
  { date: "Oct 23", Depression: 5.7, Anxiety: 7.0 },
  { date: "Nov 23", Depression: 6.0, Anxiety: 8.5 },
  { date: "Dec 23", Depression: 6.6, Anxiety: 8.2 },
];

export default function Home() {
  return (
    <div className="p-4 sm:px-6 sm:pb-10 sm:pt-10 lg:px-10 lg:pt-7 bg-white ">
      {/* <DarkModeToggle></DarkModeToggle> */}
      <section aria-labelledby="dashboard">
        <h1
          id="current-billing-cycle"
          className="scroll-mt-10 text-lg font-semibold text-black sm:text-xl "
        >
          Welcome <b>John Doe</b>
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-14 sm:mt-8 sm:grid-cols-2 lg:mt-10 xl:grid-cols-3">
          <Card className="mt-6 mx-auto max-w-lg">
            <Image
              src="/Patient Radar Diagram.png"
              alt="Patient Radar Diagram"
              width={1000}
              height={1000}
            />
          </Card>
          <Card className="mt-6">
            <Image
              src="/Depression Rating.png"
              alt="Patient Depression Rating"
              width={500}
              height={500}
            />
          </Card>
          <Card className="mt-6">
            <Image
              src="/Anxiety Rating.png"
              alt="Patient Anxiety Rating"
              width={500}
              height={500}
            />
          </Card>
        </div>
      </section>
      <section aria-labelledby="Visit Summaries">
        <h1
          id="Visit Summaries"
          className="mt-16 scroll-mt-10 text-lg font-semibold text-black sm:text-xl "
        >
          Visit Summaries
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-14 sm:mt-8 sm:grid-cols-2 lg:mt-10 xl:grid-cols-2">
          <LineChart
            className="h-80"
            data={chartdata}
            index="date"
            categories={["Depression", "Anxiety"]}
            valueFormatter={(number: number) =>
              `${Intl.NumberFormat("us").format(number).toString()}`
            }
            onValueChange={(v) => console.log(v)}
            xAxisLabel="Month"
            yAxisLabel="Trait"
            colors={["amber", "pink"]}
          />
          <LineChart
            className="h-80"
            data={chartdata}
            index="date"
            categories={["Depression", "Anxiety"]}
            valueFormatter={(number: number) =>
              `${Intl.NumberFormat("us").format(number).toString()}`
            }
            onValueChange={(v) => console.log(v)}
            xAxisLabel="Month"
            yAxisLabel="Trait"
            colors={["amber", "pink"]}
          />
        </div>
      </section>
    </div>
  );
}
