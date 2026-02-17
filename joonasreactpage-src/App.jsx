import React from 'react';
import { useState } from 'react';

const ForumTopics = (props) => {
  return (
    <div>
    <table>
      <tr>
        <th style={{width: 400}}>Thread Title</th>
        <th style={{width: 75}}>Replies</th>
        <th style={{width: 56}}></th>
      </tr>
        {props.forumTopics.map(forumTopic => <tr><td key={forumTopic.id} style={{width: 400}}>{forumTopic.threadTitle}</td><td style={{width: 75}}>{forumTopic.replies}</td><td style={{width: 56}}><button onClick={() => props.deleteEntry(forumTopic)}>Delete</button></td></tr>)}
    </table>
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
    threadTitle: 'What Can PHP Be Used For?',
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

  var numberOfReplies = parseInt(howManyReplies)
  if(isNaN(numberOfReplies)) numberOfReplies = -1

  if(newTopic.trim() == "") {
    alert("Thread title cannot be blank.")
  }
  else if(numberOfReplies < 0) {
    alert("Number of replies must be a positive numeric value.")
  }
  else {
      const newThread = {
        threadTitle: newTopic,
        replies: numberOfReplies,
        id: String(topics.length + 1),
      }

      setTopics(topics.concat(newThread))
      setNewTopic('')
    }
  }

  const handleAddTopic = (event) => {
    setNewTopic(event.target.value)
  }

  const handleHowManyReplies = (event) => {
    setHowManyReplies(event.target.value)
  }

  const deleteEntry = (entryObject) => {
    if(window.confirm(`Remove thread titled "${entryObject.threadTitle}"?`)) {
      const clickedRow = event.target.closest('tr').rowIndex - 1
      var topicsWithOneRowRemoved = topics
      topicsWithOneRowRemoved.splice(clickedRow, 1)
      setTopics([].concat(topicsWithOneRowRemoved))
    }
  }

  return (
    <div>
      <h1>Joonas' React Page</h1>
      Hello! This is my free and open source webpage in which I'm using React for the UI. Have fun!
      <br/>
      For the source, please check out my GitHub page for this project:
      <br/>
      <a href='https://github.com/JoonasTMS86/joonas-react-page' target='blank'>github.com/JoonasTMS86/joonas-react-page</a>
      <br/>
      <br/>
      <ForumTopics forumTopics={topics} deleteEntry={deleteEntry} />
      
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