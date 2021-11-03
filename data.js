const textNodes = [
    {
      id: 1,
      text: '',
      options: [
        {
          text: 'Click Here to Begin',
          nextText: 2
        } 
      ],
      hasTimer: false,
    },
    {
      id: 2,
      text: 'Help Lizzie navigate a day at Human Person Store. Make sure you do normal human person things before the timer runs out or risk going to jail.',
      options: [
        {
          text: 'Continue',
          nextText: 4
        }
      ],
      hasTimer:false
    },
    {
      id: 3, //fail screen 
      text: 'Human Person Store has discovered your true identity. GAME OVER.',
      options: [
        {
          text: 'Restart',
          nextText: 1
        }
      ]
    },
    {
      id: 4,
      text: 'You co-worker Kelly asks you `Did you have a good weekend?` How do you respond?',
      options: [
        {
          text: 'Eat Kelly',
          nextText: 5
        },
        {
          text: 'Nod',
          nextText: 8
        },
        {
          text: 'Say Yes',
          nextText: 7
        },
        {
          text: 'Say no',
          nextText: 7
        }
        
      ], 
      hasTimer: true,
      timerMessages: ["You look around nervously", "Kelly seems confused at your long pause", "Kelly seems offended"] //Timer fail 6
    },
    {
      id: 5,
      text: 'Kelly tastes delicous but everyone around flees in terror',
      options: [
        {
          text: 'continue',
          nextText: 3
        }
      ] //Timer false
    },
    {
      id: 6,
      text: 'Kelly suspects something is not right. She  flees to alert the authorities.',
      options: [
        {
          text: 'continue',
          nextText: 5
        }
      ] //Timer false
    },
    {
    id: 7,
      text: 'You try to speak but all that comes out is a loud hiss. Kelly seems confused but goes about her day',
      options: [
        {
          text: 'continue',
          nextText: 9
        }
      ] //Timer false
    },
    {
    id: 8,
      text: 'You shake your head. Kelly seems happy to know you had a good weekend.',
      options: [
        {
          text: 'continue',
          nextText: 9
        }
      ] //Timer false
    },
    {
      id: 9,
      text: 'The customer wants to know which keyboard you reccomend. What do you do?',
      options: [
        {
          text: 'Eat the customer',
          nextText: 10 
        },
        {
          text: 'Say "this one"',
          nextText: 12
        },
        {
          text: 'Point',
          nextText: 13
        },
        {
          text: 'Hand keyboard',
          nextText: 14
        }
        
      ], 
      hasTimer: true,
      timerMessages: ["You look around nervously", "Kelly seems confused at your long pause", "Kelly seems offended"] //Timer fail 6
    }, //fail timer node 11
    {
    id: 10,
      text: 'You are very satisfied with your meal but your manager seems angry.',
        options: [
          {
            text: 'continue',
            nextText: 3
          }
        ] //Timer false
      },
      {
      id: 11,
        text: 'The customer gets upsets and asks to speak with the manager',
        options: [
          {
            text: 'Do nothing',
            nextText: 3
          },
          {
            text: 'Eat the customer',
            nextText: 10
          }
        ] //Timer fail and Timer False
      },
      {
      id: 12,
        text: 'You try to speak but all that comes out is a croak. The customer is perplexed but alerts no one.',
        options: [
          {
            text: 'continue',
            nextText: 15
          }
        ] //Timer false
      },
        {
        id: 13,
        text: 'You point at the keyboard. The customer picks it up and thanks you.',
        options: [
          {
            text: 'continue',
            nextText: 15
          }
        ] //Timer false
      },
      {
        id: 14,
        text: 'You try to pick up the keyboard but it explodes due to your reptilian strength. The customer flees in terror but alerts no one.',
        options: [
          {
            text: 'continue',
            nextText: 15
          }
        ] //Timer false
      },
      {
        id: 15,
        text: 'Time for the big presentation with the manager. He asks if you are ready',
        options: [
          {
            text: 'Eat the manager',
            nextText: 16 
          },
          {
            text: 'Introduce the topic',
            nextText: 18
          },
          {
            text: 'Nod',
            nextText: 19
          
          },
          {
            text: 'Yell that you are not ready',
            nextText: 20
          }
          
        ], 
        hasTimer: true,
        timerMessages: ["The manager seems annoyed", "The manager gets ready to leave."] //Timer fail 6
      }, //fail timer node 17',
      {
        id: 16,
        text: 'The meal sits poorly and the janitor is horrified by the cleanup.',
        options: [
          {
            text: 'continue',
            nextText: 3
          }
        ] //Timer false
        
      },
      {
        id: 17,
        text: 'The manager notices your skin seems slimy.',
        options: [
          {
            text: 'continue',
            nextText: 3
          }
        ] //Timer false
      },//Timer fail 
      {
      id: 18,
      text: 'You give out a confident ribbit. Oddly the manger seems fluent in Frog and tells you to start.',
      options: [
        {
          text: 'continue',
          nextText: 21
        }
      ] //Timer false
    },
    {
      id: 19,
      text: 'The manager seems please and tells you to go ahead.',
      options: [
        {
          text: 'continue',
          nextText: 21
        }
      ] //Timer false
    },
    {
      id: 20,
      text: 'You hiss loudly but the manager dimisses any excuses and makes you start.',
      options: [
        {
          text: 'continue',
          nextText: 21
        }
      ] //Timer false
    },
    {
      id: 21,
      text: 'The manager whats to know what the most important takeaway from your presentation.',
      options: [
        {
          text: 'Eat the manager',
          nextText: 16 
        },
        {
          text: 'Point',
          nextText: 22
        },
        {
          text: 'Explain interdimensional marketing strategy',
          nextText: 23
        
        },
        {
          text: 'Tell him you laid eggs with his wife',
          nextText: 23
        }
        
      ], 
      hasTimer: true,
      timerMessages: ["The manager seems annoyed", "The manager gets ready to leave."] //Timer fail 6
    }, //fail timer node 17',    
    {
      id: 22,
      text: 'The manager responds "I see. Very interesting."',
      options: [
        {
          text: 'continue',
          nextText: 24
        }
      ] //Timer false
    },
    {
      id: 23,
      text: 'The manager rolls his eyes like you made a stupid comment',
      options: [
        {
          text: 'continue',
          nextText: 24
        }
      ] //Timer false
    },
    {
      id: 24,
      text: 'The manager says "Well Lizzie I can tell your a just a regular human salesperson but I cannot have an employee with such terrible communication skills."',
      options: [
        {
          text: 'Eat the manager',
          nextText: 27 
        },
        {
          text: `Say speech disability discrimination is illegal`,
          nextText: 25
        },
        {
          text: 'Slither out of the room in disgust',
          nextText: 26
        
        },
        {
          text: 'Cloak yourself to hide your dissapointment',
          nextText: 26
        }
        
      ], 
      hasTimer: true,
      timerMessages: ["The manager seems annoyed", "The manager gets ready to leave."] //Timer fail 6
    }, //fail timer node 17,  
    {
      id: 25,
      text: 'The manager seems unphased by your protest and fires you.',
      options: [
        {
          text: 'continue',
          nextText: 28
        }
      ] //Timer false
      },
      {
      id: 26,
      text: 'The manager is happy to be rid of you and terminates your contract',
      options: [
        {
          text: 'continue',
          nextText: 28
        }
      ] //Timer false
      },
      {
        id: 27,
        text: `Normal Person Store's corprate office is impressed with your passion for your work. You are promoted to manager.`,
        options: [
          {
            text: 'continue',
            nextText: 29
          }
        ] //Timer false
        },
        {
          id: 28,
          text: `You may have lost your job, but at least you passed as a human. Good Job`,
          options: [
            {
              text: 'return to start',
              nextText: 1
            }
          ] //Timer false
          },
          {
            id: 29,
            text: `Congrats! You've passed as one of them and stayed employed. Great Job!`,
            options: [
              {
                text: 'continue',
                nextText: 29
              }
            ] //Timer false
            },
  
  ]