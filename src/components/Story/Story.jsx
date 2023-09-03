import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Story.css'
import myImage from '../../images/story-tea.png'

function Story(props) {
  return (
    <>
        <div className="container">
            <div className='storyLeft'>
                <div className='textContainer'>
                    <h1><strong> <br />OUR STORY</strong></h1>
                    <p>
                        <br />
                        Mustache milk tea first got started in 2018 from our home kitchen. 
                        We made and exchanged our boba tea in pouches and offered free delivery 
                        to build our first customers. (Yes! We still remember their name whenever they stop by our shop until today). 
                        Fortunately, we had a lot of feedbacks and we absorbed them all to improve our drinks everyday to meet 
                        the customer demands. We take pride in our drinks and hope you will find a new favorite local boba shop after 
                        you give us a try.
                        <br />Thank you!
                    </p>
                </div>
            </div>
            <div className='storyImage'>
                <img src={myImage} />
            </div>
        </div>
    </>
  )
}

export default Story