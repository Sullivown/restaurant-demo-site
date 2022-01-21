const home = function() {
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

    const render = () => {
        const contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = '';

        const homeDiv =  document.createElement('div');
        homeDiv.setAttribute('id', 'home');
        homeDiv.classList.add('page-content');

        contentDiv.appendChild(homeDiv);

        const homeContentDiv = document.createElement('div');

        const title = document.createElement('div');
        title.classList.add('content-section');
        const h1 = document.createElement('h1');
        h1.textContent = `Jimmy's Burgers`;
        title.appendChild(h1);

        homeContentDiv.appendChild(title);

        const openingTimes = document.createElement('div');
        openingTimes.classList.add('content-section');
        for (const day in openingTimesArr) {
            const div = document.createElement('div');
            div.textContent = `${openingTimesArr[day].days}: ${openingTimesArr[day].times}`
            openingTimes.appendChild(div);
        }
        homeContentDiv.appendChild(openingTimes);

        const location = document.createElement('div');
        location.classList.add('content-section');
        location.textContent = `123 place, Nicetown, County, Postcode`;
        homeContentDiv.appendChild(location);

        homeDiv.appendChild(homeContentDiv);
        
    }
    
    return {
        render,
    };
};

export default home;