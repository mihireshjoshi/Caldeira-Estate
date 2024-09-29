"use client";

import { useState } from "react";

export default function Quote() {

  const [header, setHeader] = useState<string>('An exclusive retreat nestled in the heart of Livermore wine country located on the outskirts of the Bay Area.');

    return (
      <section className="flex flex-col items-center">
        <div>
          <p className="sm:w-1/2 text-center">{header}</p>
        </div>
        <div>

        </div>
      </section>
    );
  }
  