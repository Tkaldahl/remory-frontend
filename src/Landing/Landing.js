import React from 'react'
import { Link } from 'react-router-dom'
import MemorySquare from '../MemorySquare/MemorySquare'
import './Landing.css'

class Landing extends React.Component {
  render () {
    // Before rendering the page we use a for loop to create an array of memories which is full of MemorySquares.
    let memories = []
    let sampleMemories = [
      {
        'authorName': [
          '5b46316d18429a8c9392b943'
        ],
        'comments': [],
        '_id': '5b46316e18429a8c9392b946',
        'title': 'First Day of Class',
        'postString': "Today was my first day at GA, I met my instructors and a lot of nice classmates I'm really excited to start working on my projects!",
        'createdAt': '2018-07-11T16:33:50.230Z',
        'imageURL': 'https://images.pexels.com/photos/373488/pexels-photo-373488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        '__v': 0
      },
      {
        'authorName': [
          '5b46316d18429a8c9392b943'
        ],
        'comments': [],
        '_id': '5b46316e18429a8c9392b947',
        'title': 'Stuck on Javascript',
        'postString': "I have no idea how Javascript works, I'm so stuck!",
        'createdAt': '2018-07-11T16:33:50.231Z',
        'imageURL': 'https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        '__v': 0
      },
      {
        'authorName': [
          '5b46316d18429a8c9392b943'
        ],
        'comments': [],
        '_id': '5b46316e18429a8c9392b948',
        'title': 'Group Project',
        'postString': "We just started our group project a few days ago! We're building a memory app and it's going to be a ton of fun",
        'createdAt': '2018-07-11T16:33:50.231Z',
        'imageURL': 'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        '__v': 0
      },
      {
        'authorName': [
          '5b46316e18429a8c9392b944'
        ],
        'comments': [],
        '_id': '5b46316e18429a8c9392b94a',
        'title': 'I love Javascript',
        'postString': "I love everything I can do with Javascript, I just wanted to share with you all the project I'm working on!",
        'createdAt': '2018-07-11T16:33:50.237Z',
        'imageURL': 'https://images.pexels.com/photos/119972/pexels-photo-119972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        '__v': 0
      },
      {
        'authorName': [
          '5b46316e18429a8c9392b944'
        ],
        'comments': [],
        '_id': '5b46316e18429a8c9392b949',
        'title': 'WOOOOOOO!!',
        'postString': "I'm so excited and I just can't hide it",
        'createdAt': '2018-07-11T16:33:50.237Z',
        'imageURL': 'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        '__v': 0
      },
      {
        'authorName': [
          '5b46316e18429a8c9392b945'
        ],
        'comments': [],
        '_id': '5b46316e18429a8c9392b94b',
        'title': 'Biking',
        'postString': "I biked my entire way accross North and South America, here's a picture from my trip",
        'createdAt': '2018-07-11T16:33:50.240Z',
        'imageURL': 'https://files.slack.com/files-pri/T2D6FU4JY-FBN67NBEV/image_from_ios.jpg',
        '__v': 0
      },
      {
        'authorName': [
          '5b46316e18429a8c9392b945'
        ],
        'comments': [],
        '_id': '5b46316e18429a8c9392b94e',
        'title': 'Group Project!',
        'postString': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
        'createdAt': '2018-07-11T16:33:50.241Z',
        'imageURL': 'https://images.pexels.com/photos/265110/pexels-photo-265110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        '__v': 0
      },
      {
        'authorName': [
          '5b46316e18429a8c9392b945'
        ],
        'comments': [],
        '_id': '5b46316e18429a8c9392b94f',
        'title': 'Dinner with the boys',
        'postString': 'Lorem ipsum dolor',
        'createdAt': '2018-07-11T16:33:50.242Z',
        'imageURL': 'https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        '__v': 0
      },
      {
        'authorName': [
          '5b46316e18429a8c9392b945'
        ],
        'comments': [],
        '_id': '5b46316e18429a8c9392b94c',
        'title': 'Express.js',
        'postString': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'createdAt': '2018-07-11T16:33:50.241Z',
        'imageURL': 'https://images.pexels.com/photos/8313/food-eating-potatoes-beer-8313.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        '__v': 0
      }
    ]
    for (var i = 0; i < sampleMemories.length; i++) {
      memories.push(<MemorySquare memory={sampleMemories[i]} />)
    }
    return (
      <div className='landingcontainer'>
        <div className='LoginSquare'>
          <Link to='/user/login'>Login!</Link>
        </div>
        <div className='SignupSquare'>
          <Link to='/user/signup'>Sign Up!</Link>
        </div>
        <div className='samplecontainer'>
          {memories}
        </div>
      </div>
    )
  }
}

export default Landing
