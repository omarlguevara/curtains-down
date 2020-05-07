import React, { useState, Fragment } from 'react'
import _ from 'lodash'
import ErrorList from "../components/ErrorList"

const NewTheaterFormComponent = props => {
  const defaultFormData = {
     title: "",
     image: "",
     description: "",
     creator: "",
     platform: "",
     genre: "",
     site: "",
     release_date: ""
   }

   const [errors, setErrors] = useState({})
   const [newTheaterFormData, setNewTheaterFormData] = useState(defaultFormData)

   const clearFormData = () => {
     setNewTheaterFormData(defaultFormData)
     setErrors({})
   }

   const onSubmitHandler = (event) => {
     event.preventDefault()
     if (validForSubmission()) {
       props.fetchPostNewTheater(newTheaterFormData)
       clearFormData()
     }
   }

   const validForSubmission = () => {
     let submitErrors = {}
     const requiredFields = ["title"]
     requiredFields.forEach(field => {
       if (newTheaterFormData[field].trim() === "") {
         submitErrors = {
           ...submitErrors,
           [field]: "is blank"
         }
       }
     });
     setErrors(submitErrors)
     return _.isEmpty(submitErrors)
   }

   const handleChange = (event) => {
     event.preventDefault()
     setNewTheaterFormData({
       ...newTheaterFormData,
       [event.currentTarget.id]: event.currentTarget.value
     })
   }

   return (
     <>
       <div className="formtitle"><h4>Add a new Theater to our review library!</h4></div>
       <div className="formdiv grid-x grid-margin-x">
         <form className="callout cell small-12 medium-10 large-10" id="form-id" onSubmit={onSubmitHandler}>
           <ErrorList errors={errors} />

           <label htmlFor="title">Title</label>
           <input type="text" name="title" id="title" onChange={handleChange} value={newTheaterFormData.title} />

           <label htmlFor="image">Image (url)</label>
           <input type="text" name="image" id="image" onChange={handleChange} value={newTheaterFormData.image} />

           <label htmlFor="description">Description</label>
           <textarea className="vertical" name="description" id="description" onChange={handleChange} value={newTheaterFormData.description} />
             <div className="cell small-6">
               <label htmlFor="genre">Genre</label>
               <input type="text" name="genre" id="genre" onChange={handleChange} value={newTheaterFormData.genre} />
             </div>
             <label htmlFor="site">Website URL</label>
           <input type="text" name="site" id="site" onChange={handleChange} value={newTheaterFormData.site} />

           <input className="button" type="submit" value="Add new Theater" />
         </form>
       </div>
     </>
   )
  }

export default NewTheaterFormComponent
