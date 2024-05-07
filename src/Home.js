import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
    //useFetch properties next side

    
    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div>Loading....</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs"  />} 
           {/* {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}  */}
        </div>
     );
}
 
export default Home;

 




























/*19.Handling fetch errors---------------------------------------------------------------------------------------------------------------------------------
import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    
    useEffect( () =>{
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
        .then(res => {
            console.log(res);
             if(!res.ok){
                throw Error('could not fetch the data for that resource');

             }
            return res.json();
        })
        .then(data => {
            //console.log(data);
            setBlogs(data);
            setIsPending(false);
            setError(null);
       })
       .catch(err => {
        setIsPending(false);
        //console.log(err.message);
        setError(err.message);

       })
        }, 1000);
        
       }, []);

    
    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div>Loading....</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs"  />} 
           {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />} // no need here in this code 
           </div>
           );
      }
       
      export default Home;
*/


/*18.conditional Loading Messages using useEffects
import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true)

    
    useEffect( () =>{
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
            setIsPending(false);
       });
        }, 1000);
        
       }, []);

    
    return ( 
        <div className="home">
            { isPending && <div>Loading....</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs"  />} 
           {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}     // no need to add this here....
           </div>
           );
      }
       
      export default Home;
      

*/





/*13
import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
       {title: 'My new website',body:'lorem ipsum...', author:'nabin', id:1},
       {title: 'Welcome Party', body:'lorem ipsum...', author:'mitra', id:2},
       {title: 'Web dev top tips', body:'lorem ipsum...', author:'Himal', id:3}
    ]);



    const [name,setName] =useState('nabin');


    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !==id);
        setBlogs(newBlogs);
    }

    
    useEffect(() =>{
        console.log('use effect ran');
        console.log(blogs);
    }, []);
    

    useEffect(() =>{
        console.log('use effect ran');
        console.log(name);
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
             <BlogList blogs={blogs.filter((blog) => blog.author === 'nabin')} title="Nabin Blogs" />  //no line here
            <button onClick={() => setName('Bhusal')}>Change Name</button>
            <p>{name}</p>
            
        </div>
     );
}
 
export default Home;

*/



/*12-Reasuing components--------------------------------------------------------------------------------------------------------------------

import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
       {title: 'My new website',body:'lorem ipsum...', author:'nabin', id:1},
       {title: 'Welcome Party', body:'lorem ipsum...', author:'mitra', id:2},
       {title: 'Web dev top tips', body:'lorem ipsum...', author:'Himal', id:3}
    ]);

    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'nabin')} title="Nabin Blogs" />
            
        </div>
     );
}
 
export default Home;
*/




/*9----------------using state (useState Hooks)-----------------------------------------------------------------

import {useState} from 'react';

const Home = () => {
    //useState('bhusal');
    const [name, setName] = useState('Ashsih');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('Pokhrel');
        setAge(28);
        
    }

    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            
            <button onClick={handleClick}>Click Me</button>
            
        </div>
     );
}
 
export default Home;
--------------------------------------------------------------------------------------------------------------
*/



/*8----clickEvents-----------------------------------------------------------------------------------------------
const Home = () => {

    const handleClick = (e) => {
        console.log('hello, harry', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello' + name, e.target);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('marie', e)}>Click me again</button>
        </div>
     );
}
 
export default Home;
--------------------------------------------------------------------------------------------------------------------
*/