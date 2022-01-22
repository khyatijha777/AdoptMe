const Pet  =(props)=>{
  const name = props.name
  const animal = props.animal
  const breed = props.breed
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h3", {}, animal),
    React.createElement("h3", {}, breed)
  ])
}

const App = ()=>{
  return React.createElement(
    "div", 
    {},
    React.createElement(
      "h1", {}, "Adopt Me!"
    ),
    React.createElement(Pet, {name:"Luna", breed: "Africal", animal:"Dog"}),
    React.createElement(Pet, {name:"Chichi", breed: "Indian", animal:"Bird"}),
    React.createElement(Pet, {name:"Sheru", breed: "Homer", animal:"Parrot"}),
  )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))
