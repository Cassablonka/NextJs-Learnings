import { editTask } from '@/utils/actions'
import React from 'react'

const EditForm = ({task}: any) => {
const {id, completed, content} = task
  return (
    <form action={editTask} className='form-control max-w-md border-2 p-8 rounded-lg mt-10'>
      <input type="hidden" name='id' value={id}/>
      <input type="text" name="content" defaultValue={content} className='mb-4 p-3 rounded-lg bg-slate-200 text-black'/>
      <label htmlFor="completed" className='mb-8 text-xl flex justify-between'>
        <span>Completed</span>
      <input type="checkbox" name="completed" defaultChecked={completed} placeholder='Completed' id='completed' />
      </label>
      
      <button type='submit' className='btn btn-success p-3'>Save Changes</button>
    </form>
  )
}

export default EditForm
