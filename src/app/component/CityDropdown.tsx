// components/CityDropdown.tsx
'use client';

import { LoadScript, Autocomplete } from '@react-google-maps/api';
import { useRef } from 'react';

const libraries: ("places")[] = ['places'];

export default function CityDropdown({
  onCitySelect,
}: {
  onCitySelect: (city: string) => void;
}) {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const handleLoad = (autocomplete: google.maps.places.Autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const handlePlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      const city = place.formatted_address || place.name || '';
      onCitySelect(city);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      libraries={libraries}
    >
      <Autocomplete
        onLoad={handleLoad}
        onPlaceChanged={handlePlaceChanged}
        options={{
          types: ['(cities)'],
          fields: ['formatted_address', 'name'],
          componentRestrictions: { country: [] }, // Empty = allow all countries
        }}
      >
        <input
          type="text"
          placeholder="Enter a city"
          className="p-2 border rounded w-full"
        />
      </Autocomplete>
    </LoadScript>
  );
}
