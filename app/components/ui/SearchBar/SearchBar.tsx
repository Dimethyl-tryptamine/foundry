
'use client'

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={onChange} 
      placeholder="Search..." 
      className="bg-gray-800 text-white rounded-md h-10 px-3"
    />
  )
}
