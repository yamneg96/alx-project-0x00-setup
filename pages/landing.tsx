import Card from '@/components/Card'
import Button from '@/components/Button'
import React from 'react'

const Landing : React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <Card />

      <div className="flex flex-col space-y-4">\
            {/* Small Buttons */}
            <Button title="Small Rounded-SM" styles="text-sm rounded-sm" />
            <Button title="Small Rounded-MD" styles="text-sm rounded-md" />
            <Button title="Small Rounded-Full" styles="text-sm rounded-full" />
            {/* Medium Buttons */}
            <Button title="Medium Rounded-SM" styles="text-base rounded-sm" />
            <Button title="Medium Rounded-MD" styles="text-base rounded-md" />
            <Button title="Medium Rounded-Full" styles="text-base rounded-full" />
            {/* Large Buttons */}
            <Button title="Large Rounded-SM" styles="text-lg rounded-sm" />
            <Button title="Large Rounded-MD" styles="text-lg rounded-md" />
            <Button title="Large Rounded-Full" styles="text-lg rounded-full" />
          </div>
    </div>
  )
}

export default Landing