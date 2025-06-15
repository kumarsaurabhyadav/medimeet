'use client'

import React from 'react'
import { Card, CardContent } from './ui/card'
import { PricingTable } from '@clerk/nextjs'

function Pricing() {
  return (
    <Card className="rounded-xl bg-gradient-to-b from-emerald-950/30 to-transparent border border-zinc-700 shadow-lg text-white">
      <CardContent className="p-6 md:p-10 flex justify-center items-center">
        <PricingTable
          checkoutProps={{
            appearance: {
              elements: {
                drawerRoot: {
                  zIndex: 200,
                },
              },
            },
          }}
        />
      </CardContent>
    </Card>
  )
}

export default Pricing