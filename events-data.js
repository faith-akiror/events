function getInitialData() {
    // IMPORTANT:
    // This is the master list of all events and tickets.
    // When you add a new event or ticket, you must add it here.
    // This data will be loaded into the application.

    const events = [
         {
             id: 'evt-powerfm-2024',
             name: 'Power FM Love Family Fun Day',
             date: '2024-08-10',
             time: '10:00 AM',
             venue: 'Harare Gardens',
             description: 'A fun day for the whole family with music, games, and food. Hosted by Power FM.'
         },
        // This is the new event to be seeded.
        {
            id: 'evt-junelove-2024',
            name: 'June Love Family Fun Day',
            date: '2024-06-15',
            time: '10:00 AM',
            venue: 'Harare Gardens',
            description: 'A beautiful day out for the family with a flower theme.'
        }
    ];

    const tickets = [
        {
            id: 'tkt-001-powerfm',
            eventId: 'evt-powerfm-2024',
            names: ['John Doe'],
            checkedIn: false
        },
        {
            id: 'tkt-002-powerfm',
            eventId: 'evt-powerfm-2024',
            names: ['Jane Smith', 'Peter Pan'],
            checkedIn: true
        },
        // Sample tickets for the June Love Family Fun Day
        {
            id: 'tkt-001-junelove',
            eventId: 'evt-junelove-2024',
            names: ['Michael Scott'],
            checkedIn: false
        },
        {
            id: 'tkt-002-junelove',
            eventId: 'evt-junelove-2024',
            names: ['Dwight Schrute', 'Angela Martin'],
            checkedIn: false
        }
    ];

    return { events, tickets };
}