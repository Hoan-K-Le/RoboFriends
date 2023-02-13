import React from 'react'
// import CardList from './CardList'

const Card = ({ name, email, id }) => {
  // const {name, email} = props // destructoring instead of saying props.name and props.email ---> name, email
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="RoboFriends" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
