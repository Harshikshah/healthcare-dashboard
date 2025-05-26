// src/data/healthData.js

export const healthStatusData = [
  {
    id: 'lungs',
    title: 'Lungs',
    status: 'Healthy',
    value: 85,
    lastChecked: '24 May 2025',
    icon: '/lungs.svg', // Updated to direct path
    color: '#22C55E', // Green for Healthy (tailwind: green-500)
    bgColor: '#ECFDF5', // Light green background (tailwind: bg-green-50)
  },
  {
    id: 'teeth',
    title: 'Teeth',
    status: 'Cavity detected',
    value: 60,
    lastChecked: '20 May 2025',
    icon: '/teeth.svg', // Updated to direct path
    color: '#EF4444', // Red for Warning/Cavity (tailwind: red-500)
    bgColor: '#FEF2F2', // Light red background (tailwind: bg-red-50)
  },
  {
    id: 'bone',
    title: 'Bone',
    status: 'Good',
    value: 35,
    lastChecked: '15 May 2025',
    icon: '/bone.svg', // Updated to direct path
    color: '#22C55E', // Green for Good (tailwind: green-500)
    bgColor: '#ECFDF5', // Light green background (tailwind: bg-green-50)
  },
];
