import { deleteTask } from '@/utils/actions'

const DeleteForm = ({id}: any) => {
  return (
    <form action={deleteTask} className='m-2 btn btn-warning'>
        <input type="hidden" name='id' value={id} />
      <button type='submit'>Delete</button>
    </form>
  )
}

export default DeleteForm
