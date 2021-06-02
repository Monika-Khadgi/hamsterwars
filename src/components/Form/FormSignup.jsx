import React from 'react'

export const FormSignup = () => {
  return (
    <div className="form-content-right">
      <form className="form">
         <div className="form-inputs">
           <lable htmlFor="username" 
           className="form-label">
             
           </lable> 
           <input 
           id="username"
            types="text"
            name="usersname"
            className="form-input"
            placeholder="Hamster Name"/>
         </div>

         <div className="form-inputs">
           <lable htmlFor="Wins"
            className="form-label">
           </lable> 
           <input 
           id="Wins"
            types="text"
            name="wins"
            className="form-input"
            placeholder="Wins"/>
         </div>

        <div className="form-inputs">
           <lable htmlFor="Defeat"
            className="form-label">
           </lable> 
           <input 
           id="Defeat"
            types="text"
            name="Defeat"
            className="form-input"
            placeholder="Defeat"/>
         </div>

         <div className="form-inputs">
           <lable htmlFor="Age"
            className="form-label">
           </lable> 
           <input 
           id="Age"
            types="text"
            name="ID"
            className="form-input"
            placeholder="Age"/>
         </div>

         <div className="form-inputs">
           <lable htmlFor="Games"
            className="form-label">
           </lable> 
           <input 
           id="Games"
            types="text"
            name="Games"
            className="form-input"
            placeholder="Games"/>
         </div>

         <div className="form-inputs">
           <lable htmlFor="Loves"
            className="form-label">
           </lable> 
           <input 
           id="loves"
            types="text"
            name="loves"
            className="form-input"
            placeholder="Loves"/>
         </div>

         <div className="form-inputs">
           <lable htmlFor="Fav Food"
            className="form-label">
           </lable> 
           <input 
           id="Fav food"
            types="text"
            name="Fav food"
            className="form-input"
            placeholder="Fav Food"/>
         </div>
         <button className="form-input-btn" type="submit">Add</button>
         


      </form> 
    </div>
  )
}
 
