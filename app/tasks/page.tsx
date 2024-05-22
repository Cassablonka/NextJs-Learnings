import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default function Tasks() {
  return (
    <main className="text-4xl">
      <TaskForm/>
      <TaskList/>
    </main>
  );
}
