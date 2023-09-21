const chat = {
    1: {
        text: 'Hi! Welcome to TARUMT Chatbot. <br> Please select the topic that u have interested',
        options: [
            {
                text: 'When can I apply for financial aid in TAR UMT? ',
                next: 2
            },
            {
                text: 'I applied for financial aid last year and was not offered any aid. Can I apply this year?',
                next: 3
            },
            {
                text: 'How can I check my financial aid application status?',
                next: 4
            },
            {
                text: 'I am in financial difficulty but the financial aid application deadline is over. What should I do?',
                next: 5
            },
            {
                text: 'The deadline for payment of fees is drawing near, and I still have not received my loan/scholarship payment. What should I do?',
                next: 6
            }
        ]
    },
    2: {
        text: 'At the beginning of Intake year. Please check the Tunku Abdul Rahman University of Management and Technology’s website for the details.',
        next: 7
    },
    3: {
        text: 'Yes, as long as you are currently not holding any other financial aid',
        next: 7
    },
    4: {
        text: 'You can check your financial aid application status from Student Financial Aid Unit (DSA, KL Main Campus), the Student Affairs Office (Branch Campus) or from the respective loans or scholarship providers websites.',
        next: 7
    },
    5: {
        text: 'You can approach the Financial Aid unit at the Department of Student Affairs and speak to the officers in charge for assistance.',
        next: 7
    },
    6: {
        text: 'You can write a letter to explain your reason(s) to request for a delay in your payment of University fees, through your respective Faculty’s office. Please check with your respective Faculty’s office on the procedures and deadlines to delay your payment of University fees.',
        next: 7
    },
    7:{
        text: 'Do you have any other questions?',
        options: [
            {
                text: 'Yes',
                next: 1
            },
            {
                text: 'No',
                next: 8
            }
        ]
    },
    8:{
        text: 'Thank you for using TARUMT Chatbot. Have a nice day!',
        options: [
            {
                text: 'Restart',
                next: 1
            }
        ]
    }
};