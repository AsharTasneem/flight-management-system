'use client'

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import StepperNavbar from "../component/StepperNavbar"

export default function PassengerDetailsPage() {
  const steps = [
    'Search',
    'Choose flight',
    'Choose fare',
    'Passenger details',
    'Extra Services',
    'Payment',
  ];

  return (
    <div className="px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-10 max-w-7xl mx-auto">
      <StepperNavbar steps={steps} currentStep={3} />
      {/* Stepper Navbar */}
      

      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">London to Stockholm</h2>
      <h3 className="text-base sm:text-lg font-medium mb-4 sm:mb-6">Passenger Details</h3>

      {/* Form */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <Label>Email Address</Label>
            <Input placeholder="your@email.com" />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input placeholder="+(XX) XX XX XX XX" />
          </div>
          <div>
            <Label>Passenger Name</Label>
            <Input placeholder="Name Surname" />
          </div>
          <div>
            <Label>Date of Birth</Label>
            <Input type="date" />
          </div>
          <div>
            <Label>Nationality</Label>
            <Input placeholder="Nationality" />
          </div>
          <div>
            <Label>Gender</Label>
            <RadioGroup defaultValue="male" className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="prefer" id="prefer" />
                <Label htmlFor="prefer">Prefer not to say</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Travel Insurance */}
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
          <h4 className="font-semibold mb-1">Are you covered for your travels?</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Add your Smart Insurance for just extra <span className="text-[#009688] font-semibold">$30</span>.
          </p>
          <RadioGroup defaultValue="yes" className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes!</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No, thanks.</Label>
            </div>
          </RadioGroup>
        </div>

        <Button className="mt-6 bg-[#009688] hover:bg-[#00796b] w-full sm:w-auto">
          Continue
        </Button>
      </form>
    </div>
  );
}
