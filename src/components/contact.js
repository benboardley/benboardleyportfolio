import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function App() {
  const [state, handleSubmit] = useForm("mdoregpo");
  if (state.succeeded) {
      return <p>Thank you for contacting me!</p>;
  }
    return(
        <div className="content-center w-5/8 sm:w-1/2 mb-10 bg-gray-600 h-auto rounded-lg box-border  bg-opacity-70 p-10">
            <h1 className="text-2xl font-bold underline mb-5">
                Contact Me
            </h1>
            <p className="">Email: bboardle@purdue.edu</p>
            <p className="">Phone: 574-400-3147</p>
            <p className="">GitHub: benboardley</p>
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label for="name">Full Name</label>
                <input id="name" type="name" name="email" className="text-black"></input>
            </div>
            <div className="flex flex-col">
                <label for="email">Email</label>
                <input id="email" type="email" name="email" className="text-black"></input>
            </div>
          {//  <ValidationError 
           // prefix="Email" 
            //field="email"
            //errors={state.errors}
            ///>
            }
            <div className="flex flex-col">
            <label for="message">Content</label>
            <textarea id ="message" name="message" className="text-black"></textarea>
            </div>
            {// <ValidationError 
            // prefix="Message" 
            // field="message"
            // errors={state.errors}
            // />
            }
            <input className="bg-gray-600 border-2 border-gray-800 w-40 mt-2 rounded-lg"type="submit" disabled={state.submitting} value="Send"></input>
        </form>
        </div>
    );
}
export default App;