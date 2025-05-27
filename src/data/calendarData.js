export const calendarGridData = {
    monthYear: 'October 2021',
    days: [
      ['08:00', '09:00', '10:00'], 
      ['08:00', '09:00', '10:00'], 
      ['12:00', '13:00'],
      ['10:00', '11:00'], 
      ['14:00', '16:00'],
      ['12:00', '15:00'], 
      ['09:00', '10:00', '11:00'], 
    ],
   
    dates: [25, 26, 27, 28, 29, 30, 31],
   
    dayLabels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  };
  

  export const largeAppointmentCardsData = [
    {
      id: 'dentist',
      title: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      icon: '/icons/tooth.svg', 
      color: '#4F46E5', 
      textColor: '#ffffff',
      defaultIcon: '🦷', 
    },
    {
      id: 'physiotherapy',
      title: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr. Kevin Djones',
      icon: '/icons/dumbbell.svg', 
      color: '#DBEAFE', 
      textColor: '#1E40AF',
      defaultIcon: '🏋️',
    },
  ];
  

  export const upcomingScheduleData = [
    {
      day: 'On Thursday',
      appointments: [
        {
          id: 'health-checkup',
          title: 'Health checkup complete',
          time: '11:00 AM',
          icon: '/icons/clipboard-check.svg', 
          bgColor: '#DBEAFE',
          textColor: '#1E40AF',
          defaultIcon: '✅', 
        },
        {
          id: 'ophthalmologist',
          title: 'Ophthalmologist',
          time: '14:00 PM',
          icon: '/icons/eye.svg', 
          bgColor: '#DBEAFE',
          textColor: '#1E40AF',
          defaultIcon: '👁️', 
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
          icon: '/icons/heart.svg', 
          bgColor: '#DBEAFE',
          textColor: '#1E40AF',
          defaultIcon: '❤️', 
        },
        {
          id: 'neurologist',
          title: 'Neurologist',
          time: '/icons/brain.svg', 
          icon: '/icons/brain.svg',
          bgColor: '#DBEAFE',
          textColor: '#1E40AF',
          defaultIcon: '🧠', 
        },
      ],
    },
  ];
  