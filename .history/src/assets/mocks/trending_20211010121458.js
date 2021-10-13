import moment from 'moment'

const trending = [
    {
        title: 'Do you want to code?',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Beginning your journey'],
        link: '#',
        image: 'journey.jpg'
    },
    {
        title: 'Using AWS S3 for Storing Blog Images',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Cloud'],
        link: '#',
        image: 'cloud.jpg'
    },
    {
        title: 'Highest paying Programming Languages in 2020',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Tech Culture', 'Tech News'],
        link: '#',
        image: 'Tech.jpg'
    },
    {
        title: 'Brain Hacks For getting enough rest',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Brain Health'],
        link: '#',
        image: 'Brain.jpg'
    },
    {
        title: 'How to manage time while you Program',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Time Management'],
        link: '#',
        image: 'Time.jpg'
    },
]

export default trending;