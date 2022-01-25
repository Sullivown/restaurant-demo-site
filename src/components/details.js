const details = function() {
    const openingTimesArr = [
        {
            'days': 'Monday - Thursday',
            'times': '11am - 9pm'
        },
        {
            'days': 'Friday & Saturday',
            'times': '11am - 11pm'
        },
        {
            'days': 'Sunday',
            'times': '11am - 6pm'
        }
    ];

    // Generates and returns opening times div 
    const generateOpeningTimes = () => {
        const openingTimes = document.createElement('div');
        openingTimes.classList.add('content-section');
        for (const day in openingTimesArr) {
            const div = document.createElement('div');
            div.textContent = `${openingTimesArr[day].days}: ${openingTimesArr[day].times}`;
            openingTimes.appendChild(div);
        };
        return openingTimes;
    }

    // Generates and returns contact div
    const generateContact = () => {
        const contactDiv = document.createElement('div');
        const address = document.createElement('p');
        address.textContent= '123 Yummyroad, Flavourtown, Delicioushire, N0M N0M';
        const phone = document.createElement('p');
        phone.textContent = '0800 347347';
        const email = document.createElement('p');
        email.textContent = `hello@jimmysburgers.com`;
        
        contactDiv.appendChild(address);
        contactDiv.appendChild(phone);
        contactDiv.appendChild(email);

        return contactDiv;
    }

    return {
        generateOpeningTimes,
        generateContact,
    }
}

export default details;