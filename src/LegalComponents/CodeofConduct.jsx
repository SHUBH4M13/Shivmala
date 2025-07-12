import React from 'react'
import { House } from "lucide-react"

export default function CodeofConduct() {
  return (
    <div className='flex flex-col gap-5 mb-10 '>

      <div className='font-extrabold text-3xl text-center'>
        <p>Code of Conduct</p>
      </div>

      <div className='flex flex-col items-center'>
        <div className='flex gap-4'>
          <House />
          <p className="font-semibold">Shivmala Home</p>
        </div>

        <div className="w-full max-w-5xl mx-auto px-4 mt-5">
          <p className="whitespace-normal text-center font-bold text-xl text-balance leading-relaxed text-gray-800">
            The American Society of Civil Engineers (SHIVMALA) offers a variety of meetings, events, and activities that provide opportunities to learn, grow professionally, and exchange ideas; and, where all participants can participate fully in an atmosphere that is free of harassment and discrimination based on any identity-based factors.
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 mt-8 space-y-4 text-gray-900 text-[17px] leading-relaxed">

        <p className='text-left text-xl font-semibold'>
          At all SHIVMALA events, we are committed to:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>
            Incorporating the highest standards of professional integrity, dignity, fairness, justice, and respect for everyone, regardless of identity.
          </li>
          <li>
            Ensuring a safe, affirming, and inclusive space for our event participants, staff, volunteers, and all other stakeholders.
          </li>
          <li>
            Ensuring that all participants treat each other with respect, dignity, and consideration to create a collegial and safe professional environment where harassment and discrimination is NEVER tolerated at events, or on social media or other online platforms.
          </li>
        </ul>

        <p>
          <strong>Harassment includes</strong> (but is not limited to): comments using demeaning, derogatory or discriminatory language; comments intended to cause offense or harm to others; deliberate intimidation, stalking, following, or harassing photography or recording; sustained disruption of talks or other events; inappropriate physical contact; and unwelcome attention.
        </p>

        <p>
          <strong>Respectful interactions</strong> among participants means interacting in an appropriate and professional manner that includes communication via email and online platforms associated with the event and social media.
        </p>

        <p>
          We expect all participants to follow this <strong>Behavior Code of Conduct</strong> at all SHIVMALA meetings, events, and activities, including the event venue, any external venue affiliated with SHIVMALA and/or SHIVMALA social events.
        </p>

      </div>
    </div>
  )
}
