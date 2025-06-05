import React from 'react'

type Props = {}

export const ConsultationHeading = (props: Props) => {
  return (
    <h1 className="mt-15 mb-8 px-2 md:px-0 text-foreground text-[20px] md:text-[40px] font-light text-center uppercase tracking-tight">
      <strong className="font-semibold"> Запишіться на консультацію</strong> уже сьогодні
    </h1>
  )
}