// src/data/calendarData.js

// Data for the calendar grid
export const calendarGridData = {
    monthYear: 'October 2021',
    days: [
      // Each array represents a day, containing appointment times
      ['08:00', '09:00', '10:00'], // Mon 25
      ['08:00', '09:00', '10:00'], // Tues 26
      ['12:00', '13:00'], // Wed 27
      ['10:00', '11:00'], // Thurs 28
      ['14:00', '16:00'], // Fri 29
      ['12:00', '15:00'], // Sat 30
      ['09:00', '10:00', '11:00'], // Sun 31
    ],
    // Dates for the week (Mon-Sun)
    dates: [25, 26, 27, 28, 29, 30, 31],
    // Days of the week labels
    dayLabels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  };
  
  // Data for the large appointment cards below the calendar
  export const largeAppointmentCardsData = [
    {
      id: 'dentist',
      title: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      icon: '/icons/tooth.svg', // Updated to SVG path
      color: '#4F46E5', // Dark blue
      textColor: '#ffffff',
      defaultIcon: '🦷', // Emoji fallback
    },
    {
      id: 'physiotherapy',
      title: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr. Kevin Djones',
      icon: '/icons/dumbbell.svg', // Updated to SVG path
      color: '#DBEAFE', // Light blue
      textColor: '#1E40AF', // Darker blue
      defaultIcon: '🏋️', // Emoji fallback
    },
  ];
  
  // Data for the upcoming schedule simple appointment cards
  export const upcomingScheduleData = [
    {
      day: 'On Thursday',
      appointments: [
        {
          id: 'health-checkup',
          title: 'Health checkup complete',
          time: '11:00 AM',
          icon: '/icons/clipboard-check.svg', // Updated to SVG path
          bgColor: '#DBEAFE', // Light blue
          textColor: '#1E40AF',
          defaultIcon: '✅', // Emoji fallback
        },
        {
          id: 'ophthalmologist',
          title: 'Ophthalmologist',
          time: '14:00 PM',
          icon: '/icons/eye.svg', // Updated to SVG path
          bgColor: '#DBEAFE',
          textColor: '#1E40AF',
          defaultIcon: '👁️', // Emoji fallback
        },
      ],
    },
    {
      day: 'On Saturday',
      appointments: [
        {
          id: 'cardiologist',
          title: 'Cardiologist',
          time: '12:00 AM',
          icon: '/icons/heart.svg', // Updated to SVG path
          bgColor: '#DBEAFE',
          textColor: '#1E40AF',
          defaultIcon: '❤️', // Emoji fallback
        },
        {
          id: 'neurologist',
          title: 'Neurologist',
          time: '/icons/brain.svg', // Updated to SVG path
          icon: '/icons/brain.svg',
          bgColor: '#DBEAFE',
          textColor: '#1E40AF',
          defaultIcon: '🧠', // Emoji fallback
        },
      ],
    },
  ];
  