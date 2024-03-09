import prisma from "@/utils/db"

const prismaHandler = async () => {
  console.log('prisma example')
  // await prisma.task.create({
  //     data: {
  //       content: 'starting db'
  //     }
  // })
  const allTask = await prisma.task.findMany({
    orderBy: {
      createdAT: 'desc'
    },
  });

  return allTask;
}

const Prisma = async () => {
  const tasks = await prismaHandler()
  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No task found ...</h2>;
  }
  return (
    <div>
      <div className="text-3xl font-medium mb-4">Prima Example</div>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            {task.content}
          </h2>
        );
      })}
    </div>
  )
}

export default Prisma