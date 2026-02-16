import React from 'react';
import { useState } from 'react';

const ForumTopics = (props) => {
  return (
    <div>
      {props.forumTopics.map(forumTopic => <li key={forumTopic.id}>{forumTopic.threadTitle}, {forumTopic.replies} replies</li>)}
    </div>
  )
}

const forumThreads =
[
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

const App = () => {

  const [topics, setTopics] = useState(forumThreads)
  const [newTopic, setNewTopic] = useState('')
  const [howManyReplies, setHowManyReplies] = useState(0)

  const addTopic = (event) => {
    event.preventDefault()

    if(newTopic.trim() != "") {
      const noteObject = {
        threadTitle: newTopic,
        replies: howManyReplies,
        id: String(topics.length + 1),
      }

      setTopics(topics.concat(noteObject))
      setNewTopic('')
    }
  }

  const handleAddTopic = (event) => {
    setNewTopic(event.target.value)
  }

  const handleHowManyReplies = (event) => {
    setHowManyReplies(event.target.value)
  }

  return (
    <div>
      <ForumTopics forumTopics={topics} />
      
      <br/>
      <br/>
      <form onSubmit={addTopic}>
        Thread title:
        <input 
        value={newTopic} 
        onChange={handleAddTopic}
        />
        <br/>
        How many replies:
        <input 
        value={howManyReplies} 
        onChange={handleHowManyReplies}
        />
        <br/>
        <button type="submit">Add Topic</button>
      </form>   
    </div>
  )
}

export default App