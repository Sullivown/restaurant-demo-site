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
        homeDiv.setAttribute('id', 'home-div');
        homeDiv.classList.add('page-content');

        const h1 = document.createElement('h1');
        h1.textContent = `Welcome to Jimmy's Restaurant`
        homeDiv.appendChild(h1);

        const about = document.createElement('div');
        about.textContent = `Jimmy's is a swell place for nice people. We have food here that you can put in your mouth. It is good.`;
        homeDiv.appendChild(about);

        const openingTimes = document.createElement('div');
        for (const day in openingTimesArr) {
            const div = document.createElement('div');
            div.textContent = `${openingTimesArr[day].days}: ${openingTimesArr[day].times}`
            openingTimes.appendChild(div);
        }
        homeDiv.appendChild(openingTimes);

        const location = document.createElement('div');
        location.textContent = `123 place, Nicetown, County, Postcode`;
        homeDiv.appendChild(location);

        contentDiv.appendChild(homeDiv);
    }
    
    return {
        render,
    };
};

export default home;