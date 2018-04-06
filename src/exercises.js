const exercises = [
  {
    id: 1,
    memberships: [
      {
        id: 1,
        status: 'ACTIVE',
        user: {
          id: 1
        }
      },
      {
        id: 2,
        status: 'ACTIVE',
        user: {
          id: 2
        }
      },
      {
        id: 3,
        status: 'INACTIVE',
        user: {
          id: 3
        }
      }
    ],
    submissions: [
      {
        id: 1,
        score: 100,
        user: {
          id: 1
        }
      },
      {
        id: 2,
        score: 80,
        user: {
          id: 2
        }
      },
      {
        id: 3,
        score: 70,
        user: {
          id: 3
        }
      }
    ]
  },
  {
    id: 2,
    memberships: [
      {
        id: 4,
        status: 'ACTIVE',
        user: {
          id: 1
        }
      },
      {
        id: 5,
        status: 'ACTIVE',
        user: {
          id: 2
        }
      },
      {
        id: 6,
        status: 'INACTIVE',
        user: {
          id: 3
        }
      },
      {
        id: 7,
        status: 'ACTIVE',
        user: {
          id: 4
        }
      }
    ],
    submissions: [
      {
        id: 4,
        score: 100,
        user: {
          id: 1
        }
      },
      {
        id: 5,
        score: 80,
        user: {
          id: 2
        }
      }
    ]
  }
];

export default exercises;
