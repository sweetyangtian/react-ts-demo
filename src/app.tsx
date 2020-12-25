import React from 'react'
// import MIcon from 'Components/common/m-icon'

interface IProps {
	name: string
	age: number
}

function App(props: IProps) {
	const { name, age } = props
	return (
  <div className='app'>
    <span>{`Hello! I'm ${name}, ${age} years old.`}</span>
    {/* <MIcon type="info"/> */}
  </div>
	)
}

export default App
