import React from 'react';

const Part = (props) => {
  return (
    <div>
      {props.reactTopic.threadTitle} {props.reactTopic.replies}
    </div>
  )
}

const Content = (props) => {

const reactTopics = props.reactTopic.threads

  return (
    <div>
      {reactTopics.map(reactTopic => <Part key={reactTopic.id} reactTopic={reactTopic}/>)}
    </div>
  )
}

const Header = (props) => {
  return (
      <h1>
        {props.name}
      </h1>
  )
}

const ReactTopics = (props) => {
  return (
    <div>
      <Header name={props.reactTopic.name} />
      <Content reactTopic={props.reactTopic} />
    </div>
  )
}

const App = () => {
  const reactTopic = {
    name: 'Joonas\' Own React Page',
    id: 1,
    threads: [
      {
        threadTitle: 'Neat Stuff to Do with React',
        replies: 33,
        id: 1
      },
      {
        threadTitle: 'The Many Things You Can Do with JavaScript',
        replies: 25,
        id: 2
      },
      {
        threadTitle: 'What PHP Can Be Used For',
        replies: 10,
        id: 3
      }
    ]
  }

  return (
    <div>
      <ReactTopics reactTopic={reactTopic} />
    </div>
  )
}

export default App