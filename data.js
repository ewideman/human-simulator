// every node requires hasTimer true or false
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
      imageUrls: [
        'Assets folder/(1)Intro screen - Copy/intro(1).gif',
      ],
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
      hasTimer: false,
      imageUrls: [
        'Assets folder/(2) Game Rules - Copy/gamer rule (1).gif',
      ],
      
    },
    {
      id: 3, //fail screen 
      text: 'Human Person Store has discovered your true identity. GAME OVER.',
      options: [
        {
          text: 'Restart',
          nextText: 1
        }
      ],
      hasTimer: false,
      imageUrls: [
        'Assets folder/(3) Game over Screen - Copy/gameover(1).gif',
      ],
    },
    {
      id: 4,
      text: 'You co-worker Kelly asks you "Did you have a good weekend?" How do you respond?',
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
      imageUrls: [
        'Assets folder/(4) Scenario 1 animations - Copy/Scenario1 full.gif',
      ],
    },
    {
      id: 5,
      text: 'Kelly tastes delicous but everyone around flees in terror',
      options: [
        {
          text: 'continue',
          nextText: 3
        }
      ], 
      imageUrls: [
        'Assets folder/(5) Eat Kelly Image - Copy/Eat kelly (1).gif',
      ],
    },
    {
      id: 6,
      text: 'Kelly suspects something is not right. She  flees to alert the authorities.',
      options: [
        {
          text: 'continue',
          nextText: 5
        }
      ], 
      hasTimer: false,
      imageUrls: [
        'Assets folder/(6) Kelly fail screen - Copy/kelly fail image.jpg',
      ],
    },
    {
    id: 7,
      text: 'You try to speak but all that comes out is a loud hiss. Kelly seems confused but goes about her day.',
      options: [
        {
          text: 'continue',
          nextText: 9
        }
      ], 
      hasTimer: false,
      imageUrls: [
        'Assets folder/(7,8) Return to scenario 1 animation - Copy/kELLY PASS (2).jpg',
      ],
    },
    {
    id: 8,
      text: 'You shake your head. Kelly seems happy to know you had a good weekend.',
      options: [
        {
          text: 'continue',
          nextText: 9
        }
      ], 
      hasTimer: false,
      imageUrls: [
        'Assets folder/(7,8) Return to scenario 1 animation - Copy/kELLY PASS (2).jpg'
      ],
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
          text: 'Hand her a keyboard',
          nextText: 14
        }
        
      ], 
      hasTimer: true,
      imageUrls: [
        'Assets folder/(9) Scenario 2 animations - Copy/Scenario2 full.gif',
      ],
    }, //fail timer node 11
    {
    id: 10,
      text: 'You are very satisfied with your meal but your manager seems angry.',
        options: [
          {
            text: 'continue',
            nextText: 3
          }
        ],
        hasTimer: false,
      imageUrls: [
        'Assets folder/(10) Eat Customer animation Copy/Eat customer (1).gif',
      ],
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
        ],
        hasTimer: false,
      imageUrls: [
        'Assets folder/(11) Customer gone - Copy/Customer gone (1).jpg',
      ],
      },
      {
      id: 12,
        text: 'You try to speak but all that comes out is a croak. The customer is perplexed but alerts no one.',
        options: [
          {
            text: 'continue',
            nextText: 15
          }
        ],
        hasTimer: false,
      imageUrls: [
        'Assets folder/(12) Talk to customer - Copy/Talk to customer.gif',
      ],
      },
        {
        id: 13,
        text: 'You point at the keyboard. The customer picks it up and thanks you.',
        options: [
          {
            text: 'continue',
            nextText: 15
          }
        ],
        hasTimer: false,
      imageUrls: [
        'Assets folder/(13) point - Copy/point (1).gif',
      ],
      },
      {
        id: 14,
        text: 'You try to pick up the keyboard but it explodes due to your reptilian strength. The customer flees in terror but alerts no one.',
        options: [
          {
            text: 'continue',
            nextText: 15
          }
        ],
        hasTimer: false,
      imageUrls: [
        'Assets folder/(14) hand keyboard - Copy/hand keyboard(1).gif',
      ],
      },
      {
        id: 15,
        text: 'Time for the big presentation with the manager. He asks if you are ready.',
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
      imageUrls: [
        'Assets folder/(15) Scenario 3 animations - Copy/Sc3 full.gif',
      ],
      }, //fail timer node 17',
      {
        id: 16,
        text: 'The meal sits poorly and the janitor is horrified by the cleanup.',
        options: [
          {
            text: 'continue',
            nextText: 3
          }
        ],
        hasTimer: false,
      imageUrls: [
        'Assets folder/(16) Eat manager - Copy/Eat manager.jpg',
      ],
        
      },
      {
        id: 17,
        text: 'Assets folder/(17) manager frown - Copy/Frown (1).jpg',
        options: [
          {
            text: 'continue',
            nextText: 3
          }
        ],
        hasTimer: false,
        imageUrls: [
        'Assets folder/(17) manager frown - Copy/Frown (1).jpg',
      ],
      },//Timer fail 
      {
      id: 18,
      text: 'You give out a confident ribbit. Oddly the manger seems fluent in Frog and tells you to start.',
      options: [
        {
          text: 'continue',
          nextText: 21
        }
      ], 
      hasTimer: false,
        imageUrls: [
        'Assets folder/(18,19,22) Return manager smile - Copy/Powerpoint template.jpg',
      ],
    },
    {
      id: 19,
      text: 'The manager seems please and tells you to go ahead.',
      options: [
        {
          text: 'continue',
          nextText: 21
        }
      ],
      hasTimer: false,
        imageUrls: [
        'Assets folder/(18,19,22) Return manager smile - Copy/Powerpoint template.jpg',
      ],
    },
    {
      id: 20,
      text: 'You hiss loudly but the manager dimisses any excuses and makes you start.',
      options: [
        {
          text: 'continue',
          nextText: 21
        }
      ],
      hasTimer: false,
        imageUrls: [
        'Assets folder/(20, 23) return manager frown - Copy/Frown (1).jpg',
      ],
    },
    {
      id: 21,
      text: 'The manager whats to know what is the most important takeaway from your presentation.',
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
        imageUrls: [
        'Assets folder/(21) Scenario 4 - Copy/sc4 full.gif',
        ],
    }, //fail timer node 17',    
    {
      id: 22,
      text: 'The manager responds "I see. Very interesting."',
      options: [
        {
          text: 'continue',
          nextText: 24
        }
      ],
      hasTimer: false,
        imageUrls: [
        'Assets folder/(22) Return - Copy/Return (1).jpg',
      ],
    },
    {
      id: 23,
      text: 'The manager rolls his eyes like you made a stupid comment',
      options: [
        {
          text: 'continue',
          nextText: 24
        }
      ],
      hasTimer: false,
        imageUrls: [
        'Assets folder/(20, 23) return manager frown - Copy/Frown (1).jpg',
      ],
    },
    {
      id: 24,
      text: `The manager says "Well Lizzie I can tell you're a just a regular human salesperson but I cannot have an employee with such terrible communication skills."`,
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
        imageUrls: [
        'Assets folder/(24) Scenario5 - Copy/SC5 FULL.gif',
      ],
    }, //fail timer node 17,  
    {
      id: 25,
      text: 'The manager seems unphased by your protest and fires you.',
      options: [
        {
          text: 'continue',
          nextText: 28
        }
      ],
      hasTimer: false,
        imageUrls: [
        'Assets folder/(25, 26) Manager Open mouth - Copy/Lizzie disapear 1.jpg',
      ],
      },
      {
      id: 26,
      text: 'The manager is happy to be rid of you and terminates your contract',
      options: [
        {
          text: 'continue',
          nextText: 28
        }
      ],
      hasTimer: false,
        imageUrls: [
        'Assets folder/(25, 26) Manager Open mouth - Copy/Lizzie disapear 1.jpg',
      ],
      },
      {
        id: 27,
        text: `Normal Person Store's corprate office is impressed with your passion for your work. You are promoted to manager.`,
        options: [
          {
            text: 'continue',
            nextText: 29
          }
        ],
        hasTimer: false,
        imageUrls: [
        'Assets folder/(27) Manager eat + lizard tounge - Copy/Eat manager victory (2).jpg',
      ],
        },
        {
          id: 28,
          text: `You may have lost your job, but at least you passed as a human. Good Job`,
          options: [
            {
              text: 'return to start',
              nextText: 1
            }
          ],
          hasTimer: false,
        imageUrls: [
        'Assets folder/(28) Victory Screen street background - Copy/Victory street (1).gif',
      ],
          },
          {
            id: 29,
            text: `Congrats! You've passed as one of them and stayed employed. Great Job!`,
            options: [
              {
                text: 'return to start',
                nextText: 1
              }
            ],
            hasTimer: false,
        imageUrls: [
        'Assets folder/(29) Victory screen city background - Copy/boss victory (1).gif',
      ],
          },
  
]


let = images [
  ['image2', 'age2']
  ['image2', 'age2']
  ['image2', 'age2']
  ['image2', 'age2']
]