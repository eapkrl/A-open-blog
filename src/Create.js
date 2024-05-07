import { useState } from "react";

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState('false');

  const handleSubmit = (e) => {
      e.preventDefault();
      const blog = {title, body, author};

      setIsPending(true);
      
      //console.log(blog);
      fetch('http://localhost:8000/blogs', {
        method:'POST',
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify(blog)


      }).then(() => {
        console.log('new blog added');
        setIsPending(false);
      })
  }

    return ( 
        <div className="create">
          <h1><u>Add a New Blog</u></h1>
          <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input 
                type="text" 
                required
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
             />
             <label>Blog Title:</label>
             <textarea
                required
                value={body}
                onChange = {(e) => setBody(e.target.value)}
              ></textarea>
              <label>Blog Author:</label>
              <select
                value={author}
                onChange = {(e) => setAuthor(e.target.value)}
              >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
              </select>
              {/* <button>Add Blog</button> */}
              { !isPending && <button>Add Blog</button>}
              { isPending && <button disabled>Adding Blog...</button>}
              <p>{title}</p>
              <p>{body}</p>
          </form>
         
        </div>
     );
}
 
export default Create;






























































/*
const Create = () => {
  return ( 
      <div className="create">
        <h1>Add a New Blog</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusamus hic non ipsum. Fugit iure inventore sapiente voluptatum neque illum.</p>

      </div>
   );
}

export default Create;
*/