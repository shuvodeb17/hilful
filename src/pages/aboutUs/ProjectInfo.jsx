const ProjectInfo = () => {
  return (
    <div className="my-6 pb-6 grid gap-3 grid-cols-2 sm:grid-cols-4">
      <div className="text-center bg-stone-100 border border-stone-200 py-6 px-2 rounded-md">
        <p className="text-2xl font-bold text-zinc-900">150+</p>
        <p className="text-zinc-700">Project Delivered</p>
      </div>
      <div className="text-center bg-stone-100 border border-stone-200 py-6 px-2 rounded-md">
        <p className="text-2xl font-bold text-zinc-900">120+</p>
        <p className="text-zinc-700">Professional</p>
      </div>
      <div className="text-center bg-stone-100 border border-stone-200 py-6 px-2 rounded-md">
        <p className="text-2xl font-bold text-zinc-900">170+</p>
        <p className="text-zinc-700">Happy Client</p>
      </div>
      <div className="text-center bg-stone-100 border border-stone-200 py-6 px-2 rounded-md">
        <p className="text-2xl font-bold text-zinc-900">2y+</p>
        <p className="text-zinc-700">Experience</p>
      </div>
    </div>
  );
};

export default ProjectInfo;
